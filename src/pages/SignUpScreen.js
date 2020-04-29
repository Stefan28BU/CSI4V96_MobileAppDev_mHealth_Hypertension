import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import { Auth } from 'aws-amplify';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { writeToCache } from './../localCache/LocalCache';
import Colors from '../globals/Colors';

export class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            checked: true,
            submited: false,
            confirmKey: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }


    // UNSAFE_componentWillMount() {
    //     Form.addValidationRule('passwordMatch', (value)=>{
    //         if (value === undefined || value !== this.state.password) {
    //             this.setState({
    //                 checked: false
    //             })
    //             return false;
    //         }
    //         this.setState({
    //             checked: true
    //         })
    //         return true;
    //     });
    // }

    componentWillUnmount() {
        Form.removeValidationRule('passwordMatch');
    }

    async handleSubmit() {
        console.log(this.state.checked);

        if (this.state.checked && this.state.password === this.state.confirmPassword) {
            if (this.state.username === '' || this.state.password === '') {
                Alert.alert("Username and password cannot be empty")
            } else {
                const username = this.state.username;
                const password = this.state.password;
                console.log(username + " " + password);
                try {
                    const signUpResponse = await Auth.signUp({
                        username,
                        password,
                        attributes: {
                            email: username
                        }
                    });
                    console.log('not a error');
                    console.log(signUpResponse);
                    this.setState({ submited: true });
                    // SecureStore.setItemAsync("key", JSON.stringify(signUpResponse));

                    // do some saving?
                } catch (error) {
                    console.log(error);
                    this.setState({ submited: false });
                    Alert.alert(error.message);
                }
            }
        } else {
            Alert.alert(
                'Wrong information!',
                'Please check your email address or password and try again!',
                [
                    {
                        text: 'Retry', onPress: () => {
                            console.log('resending');
                        }
                    }
                ],
                { cancelable: false }
            )
        }
    }

    async handleResendSignUp() {
        Auth.resendSignUp(this.state.username)
            .then(() => console.log('successfully resend'))
            .catch((err) => console.log(err));
        await writeToCache("user", this.state.username)
    }

    navigateToHome() {
        this.props.navigation.navigate('VideoList');
    }

    handleConfirm() {
        // const go = this.props.navigation.navigate('Learn');

        Auth.confirmSignUp(this.state.username, this.state.confirmKey)
            .then(() => {

                this.navigateToHome();
                console.log('successful confirm signed up')
            })
            .catch(err => {

                console.log('error confirm signing up: ', err)
                Alert.alert(
                    'Wrong confirm key!',
                    'Please check your confirm key and try again!',
                    [
                        {
                            text: 'Retry', onPress: () => {
                                console.log('Press button!')
                                this.handleResendSignUp();
                            }
                        }
                    ],
                    { cancelable: false }
                )
            });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.keyboardInput} behavior="padding" enabled>
                {this.state.submited === false ? <Form ref="Signup" onSubmit={this.handleSubmit}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextValidator
                        title="Email: "
                        style={styles.input}
                        name="email"
                        lable="Email"
                        validators={['required', 'isEmail']}
                        errorMessages={['This field is required!', 'Email invalid!']}
                        onError={errors => this.setState({ checked: false })}
                        placeholder="Email"
                        type="text"
                        keyboardTypes="email-address"
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                    />
                    <TextValidator
                        title="Password: "
                        style={styles.input}
                        name="password"
                        lable="Password"
                        validators={['required']}
                        errorMessages={['This field is required!']}
                        placeholder="Password"
                        type="text"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                    />
                    <TextValidator
                        title="Re-enter Password: "
                        style={styles.input}
                        name="repeatPassword"
                        lable="Confirm Password"
                        validators={['required']}
                        errorMessages={['This field is required!']}
                        placeholder="Confirm Password"
                        type="text"
                        value={this.state.confirmPassword}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >
                        <Text style={{
                            fontSize: 18,
                            color: Colors.themeColorPrimary
                        }}>
                            Create Account
                        </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={styles.buttonUp} onPress={() => this.props.navigation.navigate('VideoList')} >
                        <Text style={{
                            fontSize: 18,
                            color: 'black'
                        }}>
                            Play as Guest
                        </Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.buttonT} onPress={() => this.props.navigation.navigate('Login')} >
                        <Text style={{
                            fontSize: 16,
                            color: 'rgba(50,50,50,1)',
                            textDecorationLine: 'underline',
                        }}>
                            Go to Sign In
                     </Text>
                    </TouchableOpacity>
                </Form>

                    :

                    <Form ref="Signup" onSubmit={this.handleSubmit}>
                        <Text style={styles.title}>Confirmation</Text>
                        <TextValidator
                            style={styles.input}
                            validators={['required']}
                            errorMessages={['This field is required!']}
                            placeholder="Confirm key"
                            type="text"
                            keyboardTypes="text"
                            value={this.state.confirmKey}
                            onChangeText={(confirmKey) => this.setState({ confirmKey })}
                        />
                        <TouchableOpacity style={styles.button} onPress={this.handleConfirm} >
                            <Text style={{
                                fontSize: 18,
                                color: Colors.themeColorPrimary
                            }}>
                                Confirm
                        </Text>
                        </TouchableOpacity>
                    </Form>
                }
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    buttonT: {
        marginTop: 16,
        width: 200,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: 'transparent'
    },
    button: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black',
        width: 200,
        height: 50,
        // borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 10,
    },
    buttonUp: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 50,
        // borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { height: 5, width: 0 },
        shadowRadius: 10,
    },
    keyboardInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.themeColorPrimary,
    },
    input: {
        width: 200,
        height: 44,
        borderColor: 'black',
        marginBottom: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    title: {
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    name: {
        textAlign: 'left',
        fontSize: 15,
        marginTop: 25,
    },
});
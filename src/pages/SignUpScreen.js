import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import { Auth } from 'aws-amplify';

export class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            submitted: false,
        };
        this.handleSubmit=this.handleSubmit.bind(this); 
    }
    

    UNSAFE_componentWillMount() {
        Form.addValidationRule('passwordMatch', (value)=>{
            if (value === undefined || value !== this.state.password) {
                this.setState({
                    submitted: false
                })
                return false;
            }
            this.setState({
                submitted: true
            })
            return true;
        });
    }

    componentWillUnmount() {
        Form.removeValidationRule('passwordMatch');
    }

    async handleSubmit() {
        
        if (this.state.submitted) {
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
                console.log(signUpResponse);

            } catch(error) {
                console.log(error);
            }
            Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
        } else {
            Alert.alert(
                'Wrong information!',
                'Please check your email address or password and try again!',
                [
                    {text: 'Retry', onPress: () => console.log('Press button!')}
                ],
                {cancelable: false}
            )
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style = {styles.keyboardInput}  behavior="padding" enabled>
                <Form ref = "Signup" onSubmit = {this.handleSubmit}>
                    <Text style = {styles.title}>Sign Up</Text>
                    <Text style = {styles.name}>Email: </Text>
                    <TextValidator
                        title= "Email: "
                        style={styles.input}
                        name = "email"
                        lable = "Email"
                        validators = {['required', 'isEmail']}
                        errorMessages = {['This field is required!', 'Email invalid!']}
                        onError={errors => this.setState({submitted: false})}
                        placeholder = "Email"
                        type = "text"
                        keyboardTypes = "email-address"
                        value = {this.state.username}
                        onChangeText={(username) => this.setState({ username })} 
                    />
                    <Text style = {styles.name}>Password: </Text>
                    <TextValidator
                        title= "Password: "
                        style={styles.input}    
                        name = "password"
                        lable = "Password"
                        validators = {['required']}
                        errorMessages = {['This field is required!']}
                        placeholder = "Password"
                        type = "text"
                        value = {this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                    />
                    <Text style = {styles.name}>Re-enter Password: </Text>
                    <TextValidator
                        title= "Re-enter Password: "
                        style={styles.input}
                        name = "repeatPassword"
                        lable = "Confirm Password"
                        validators = {['required', 'passwordMatch']}
                        errorMessages = {['This field is required!', 'The password does not match!']}
                        placeholder = "Password"
                        type = "text"
                        value = {this.state.confirmPassword}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        secureTextEntry={true}
                    />
                    <Button style={styles.button} title = "Sign Up" onPress = {this.handleSubmit} />
                </Form>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    keyboardInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderColor: 'black',
      marginBottom: 10,
      justifyContent: 'center',
      borderBottomWidth: 1,
    },
    title: {
        alignContent: 'center', 
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    name: {
        textAlign: 'left',
        fontSize: 15,
        marginTop: 25,
    },
  });
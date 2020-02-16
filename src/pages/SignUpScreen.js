import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

export class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            checked: false,
            submited: false,
            confirmKey: '',
        };
        this.handleSubmit=this.handleSubmit.bind(this); 
    }
    

    UNSAFE_componentWillMount() {
        Form.addValidationRule('passwordMatch', (value)=>{
            if (value === undefined || value !== this.state.password) {
                this.setState({
                    checked: false
                })
                return false;
            }
            this.setState({
                checked: true
            })
            return true;
        });
    }

    componentWillUnmount() {
        Form.removeValidationRule('passwordMatch');
    }

    handleSubmit() {
        if (this.state.checked) {
            //Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
            this.setState(submited = true);
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

    handleConfirm() {
        if (this.state.confirmKey === '12345') {
            Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
        } else {
            Alert.alert(
                'Wrong confirm key!',
                'Please check your confirm key and try again!',
                [
                    {text: 'Retry', onPress: () => console.log('Press button!')}
                ],
                {cancelable: false}
            )
        }
    }

    render() {
        let screen;
        if (this.state.submited === false) {
            screen = 
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
                            onError={errors => this.setState({checked: false})}
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
        } else {
            screen = 
                <KeyboardAvoidingView style = {styles.keyboardInput}  behavior="padding" enabled>
                    <Form ref = "Signup" onSubmit = {this.handleSubmit}>
                        <Text style = {styles.title}>Confirmation</Text>
                        <Text style = {styles.name}>Confirm Key: </Text>
                        <TextValidator
                            title= "Confirm Key: "
                            style={styles.input}
                            name = "Confirm Key"
                            lable = "Confirm Key"
                            validators = {['required']}
                            errorMessages = {['This field is required!']}
                            placeholder = "Confirm key"
                            type = "text"
                            keyboardTypes = "text"
                            value = {this.state.confirmKey}
                            onChangeText={(confirmKey) => this.setState({ confirmKey })} 
                        />
                        <Button style={styles.button} title = "Sign Up" onPress = {this.handleSubmit} />
                    </Form>
                </KeyboardAvoidingView>
        }
        return (
            {screen}
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
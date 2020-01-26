import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            submit: false,
        };
    }
    

    componentWillMount() {
        Form.addValidationRule('passwordMatch', (value)=>{
            if (value !== this.state.password) {
                this.setState({
                    submit: false
                })
                return false;
            }
            this.setState({
                submit: true
            })
            return true;
        });
    }

    componentWillUnmount() {
        Form.removeValidationRule('passwordMatch');
    }

    handleSubmit() {
        if (this.state.submit) {
            Alert.alert('Credentials', `${this.state.username} + ${this.state.password}`);
        } else {
            Alert.alert(
                'Alert Title',
                'Message',
                [
                    {text: 'Invalid username or password!', onPress: () => console.log('Press button!')}
                ],
                {cancelable: false}
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Form ref = "Signup" onSubmit = {this.handleSubmit}>
                    <TextValidator
                        style={styles.input}
                        name = "email"
                        lable = "Email"
                        validators = {['required', 'isEmail']}
                        errorMessages = {['This field is required!', 'Email invalid!']}
                        placeholder = "Email"
                        type = "text"
                        keyboardTypes = "email-address"
                        value = {this.state.username}
                        onChangeText={(username) => this.setState({ username })} 
                    />
                    <TextValidator
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
                    <TextValidator
                        style={styles.input}
                        name = "repeatPassword"
                        lable = "Confirm Password"
                        validators = {['required', 'passwordMatch']}
                        errorMessages = {['This field is required!', 'The password does not match, please re-enter your pasword!']}
                        placeholder = "Password"
                        type = "text"
                        value = {this.state.confirmPassword}
                        onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                        secureTextEntry={true}
                    />
                    <Button title = "Sign Up" onPress = {this.handleSubmit} />
                </Form>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      width: 400,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });
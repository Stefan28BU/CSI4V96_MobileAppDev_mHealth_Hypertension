import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet, Text } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';

export class Signup extends Component {
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
    

    componentWillMount() {
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

    handleSubmit() {
        
        if (this.state.submitted) {
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
            <View style={styles.container}>
                <Text style = {styles.title}>Sign Up</Text>
                <Form ref = "Signup" onSubmit = {this.handleSubmit}>
                    <Text>Email: </Text>
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
                    <Text>Password: </Text>
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
                    <Text>Re-enter Password: </Text>
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
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderColor: 'black',
      marginBottom: 10,
      justifyContent: 'center',
    },
    title: {
        alignContent: 'center', 
        justifyContent: 'center', 
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 15,
        marginTop: 25,
    },
  });
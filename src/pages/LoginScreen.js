import React, { Component } from 'react';
import { Alert, Button, Text, View, StyleSheet, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import { Auth } from 'aws-amplify';
import {writeToCache} from './../localCache/LocalCache';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // ????????
  onLogin() {
    const { username, password } = this.state;
    if (submitted === false) {
      Alert.alert(
        'Wrong information!',
        'Please check your email address or password and try again!',
        [
          { text: 'Retry', onPress: () => console.log('Press button!') }
        ],
        { cancelable: false }
      )
    } else {
      
      Alert.alert('Credentials', `${username} + ${password}`);
    }
  }

  navigateToHome() {
    this.props.navigation.navigate('VideoList');
  }

  async handleSubmit() {
    if (this.state.submitted) {
      Auth.signIn(this.state.username, this.state.password).then((user) => {
        console.log(user);
        // Auth.confirmSignIn(user).then(() => {
        //   this.navigateToHome();
        //   console.log('successful confirm signed up')
        // });
        writeToCache("accessToken", user.signInUserSession.accessToken.jwtToken);
        writeToCache("idToken", user.signInUserSession.idToken.jwtToken);
        writeToCache("refreshToken", user.signInUserSession.refreshToken.token);
        writeToCache("user", user.signInUserSession.idToken.payload.email);
        this.navigateToHome();
      })
      .catch(err => {
        console.log(err);
        Alert.alert(err.message);
      })
      
    } else {
      Alert.alert(
        'Wrong information!',
        'Please check your email address and try again!',
        [
          { text: 'Retry', onPress: () => console.log('Press button!') }
        ],
        { cancelable: false }
      )
    }
  }

  UNSAFE_componentWillMount() {
    this.background = (
      <ImageBackground style={styles.welcomeBackground} resizeMode={'cover'} source={require('../imageAssets/wallpaper.jpg')} >
        <KeyboardAvoidingView style={styles.keyboardInput} behavior="padding" enabled>
          <Form ref="Log In" onSubmit={this.handleSubmit}>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.name}>Email: </Text>
            <TextValidator
              title="Email: "
              style={styles.input}
              name="email"
              lable="Email"
              validators={['required', 'isEmail']}
              errorMessages={['This field is required!', 'Email invalid!']}
              onError={errors => this.setState({ submitted: false })}
              placeholder="Email"
              type="text"
              keyboardTypes="email-address"
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
            />
            <Text style={styles.name}>Password: </Text>
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
            <Button style={styles.button} title="Log In" onPress={this.handleSubmit} />
          </Form>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
  render() {
    return (
      // <View>
      //   {this.background}
      // </View>
      <KeyboardAvoidingView style={styles.keyboardInput} behavior="padding" enabled>
        <Form ref="Log In" onSubmit={this.handleSubmit}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.name}>Email: </Text>
          <TextValidator
            title="Email: "
            style={styles.input}
            name="email"
            lable="Email"
            validators={['required', 'isEmail']}
            errorMessages={['This field is required!', 'Email invalid!']}
            onError={errors => this.setState({ submitted: false })}
            placeholder="Email"
            type="text"
            keyboardTypes="email-address"
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Text style={styles.name}>Password: </Text>
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
          <Button style={styles.button} title="Log In" onPress={this.handleSubmit} />
        </Form>
      </KeyboardAvoidingView>
    );
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
  welcomeBackground: {
    zIndex: -1,
    width: '100%',
    height: '100%'
  },
});
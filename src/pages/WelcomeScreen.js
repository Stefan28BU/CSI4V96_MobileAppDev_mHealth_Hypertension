
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class WelcomeScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Continue As Guest" onPress={() => this.props.navigation.navigate('Home')} />
          <Button
            title="Sign In" onPress={() => this.props.navigation.navigate('Login')}
          />
          <Button title="Sign Up As Researcher" onPress={() => alert('Nah you cannot sign up')} />
        </View>
      );
    }
  }
  
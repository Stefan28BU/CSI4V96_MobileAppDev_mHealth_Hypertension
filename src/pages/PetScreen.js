import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class PetScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(235,235,235)' }}>
        <Text>Pet</Text>
      </View>
    );
  }
}
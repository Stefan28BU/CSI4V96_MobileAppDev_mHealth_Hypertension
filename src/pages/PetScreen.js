import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import Animation from './pet/Animation';

const { width } = Dimensions.get('window');
const gameScreenWidth = (width / 100) * 80;

//style
const styles = StyleSheet.create({
  PetScreen: {
    overflow: 'hidden', 
    height: gameScreenWidth,
    width: gameScreenWidth,
    alignSelf: 'center',
  }
});

export class PetScreen extends Component {
  render() {
    return (
      //<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(235,235,235)' }}>
      <View style={styles.PetScreen}>
        {/* <Animation
          animationName={this.props.currentAction}
        /> */}
        <Text> This page is in progress... </Text>
      </View>
    );
  }
}
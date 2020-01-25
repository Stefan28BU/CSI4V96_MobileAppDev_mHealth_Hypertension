import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export class HomeScreen extends React.Component {
    render() {
        const handlePress = () => false

      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button
         onPress = {handlePress}
         title = "Red button!"
         color = "red"
      />
        </View>
      );
    }
  }
  
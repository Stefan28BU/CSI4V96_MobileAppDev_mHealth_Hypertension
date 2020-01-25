import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomeScreen } from './src/pages/HomeScreen';
import { ExploreScreen } from './src/pages/ExploreScreen';


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,

  },
  {
    initialRouteName: 'Home'
  }
);
const AppContainer = createAppContainer(bottomTabNavigator);

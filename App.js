import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import { ExploreScreen } from './src/pages/ExploreScreen';
import { Login } from './src/pages/LoginScreen';
import { SettingsScreen } from './src/pages/SettingsScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { FeedScreen } from './src/pages/FeedScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { Signup } from './src/pages/Signup';
import Icon from '@expo/vector-icons/Ionicons';
import { WelcomeButton } from './src/customComponents/CustomButtons';
import {VideoPageTest1} from './src/pages/videoPages/VideoPageTest1';

// import AppSwitchNavigator from './src/pages/navigators/AppSwitchNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

export const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed: FeedScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Explore: ExploreScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);


// export const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: WelcomeScreen
//     },
//     // Hypertension: DashboardTabNavigator,
//     // Login: { screen: Login },
//     // 'Sign Up': { screen: Signup },
//   }
// );

export const DashboardStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Video1: VideoPageTest1,
    Hypertension: DashboardTabNavigator,
    Login: { screen: Login },
    'Sign Up': { screen: Signup },
  },
  // {
  //   defaultNavigationOptions: ({ navigation }) => {
  //     return {
  //       headerLeft: () =>
  //         <Icon
  //           style={{ paddingLeft: 10 }}
  //           onPress={() => navigation.openDrawer()}
  //           name="md-menu"
  //           size={30}
  //         />
  //     };
  //   }
  // }
);


// export const AppSwitchNavigator = createSwitchNavigator({
//   Root: { screen: DashboardStackNavigator },

//   Login: { screen: Login },
//   'Sign Up': { screen: Signup }
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);

const AppContainer = createAppContainer(DashboardStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
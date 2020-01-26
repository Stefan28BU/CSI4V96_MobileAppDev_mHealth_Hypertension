import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import { ExploreScreen } from './src/pages/ExploreScreen';
import { Login } from './src/pages/LoginScreen';
import { SettingsScreen } from './src/pages/SettingsScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { FeedScreen } from './src/pages/FeedScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { Signup } from './src/pages/Signup';
import { WelcomeButton } from './src/customComponents/CustomButtons';
import { VideoPageTest1 } from './src/pages/videoPages/VideoPageTest1';
import { Icon, colors } from 'react-native-elements';

// import AppSwitchNavigator from './src/pages/navigators/AppSwitchNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
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

const BackButton = ({ navigation }) => {
  const onPress = () => navigation.goBack();

  return (
    <Icon
      color={'white'}
      containerStyle={styles.backButton}
      name="chevron-left"
      onPress={onPress}
      size={30}
    />
  );
};

export const DashboardStackNavigator = createStackNavigator(
  {
    mHealth: WelcomeScreen,
    Video1: VideoPageTest1,
    Learn: DashboardTabNavigator,
    Login: { screen: Login },
    'Sign Up': { screen: Signup },
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: () => <Text style={styles.headerRight}>Hypertension</Text>,
        headerBackTitle: ' ',
        headerBackImage: () => <BackButton navigation={navigation} />,
        title: 'mHealth',
        headerStyle: {
          backgroundColor: '#9370db',
        },
        headerTintColor: 'white',
      };
    }
  }
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
  },
  headerRight: {
    margin: 10,
    color: 'white',
    fontSize: 14,
  },
});
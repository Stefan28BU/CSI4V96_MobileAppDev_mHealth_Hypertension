import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Platform, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator, CreateNavigatorConfig, NavigationStackRouterConfig, NavigationRoute } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  NavigationStackConfig,
  NavigationStackOptions,
  NavigationStackProp,
  TransitionPresets, createStackNavigator, HeaderBackButton, useCardAnimation, useHeaderHeight, Header
} from 'react-navigation-stack'
import { PlayGamesScreen } from "./src/pages/PlayGamesScreen";
import { Login } from './src/pages/LoginScreen';
import { PetScreen } from './src/pages/PetScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { WatchVideosScreen } from './src/pages/WatchVideosScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { SignUpScreen } from './src/pages/SignUpScreen';
import { WelcomeButton } from './src/customComponents/CustomButtons';
import { BackButton } from './src/customComponents/CustomButtons';
import { VideoScreen_1 } from './src/pages/videoScreens/VideoScreen_1';
import { VideoScreen_2 } from './src/pages/videoScreens/VideoScreen_2';
import { VideoScreen_3 } from './src/pages/videoScreens/VideoScreen_3';
import { VideoScreen_4 } from './src/pages/videoScreens/VideoScreen_4';
import Amplify from 'aws-amplify';
import config from './config';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { fromBottom } from 'react-navigation-transitions';


const Auth = {
  mandatorySignId: true,
  region: config.cognito.REGION,
  userPoolId: config.cognito.USER_POOL_ID,
  userPoolWebClientId: config.cognito.APP_CLIENT_ID
}
Amplify.configure(
  Auth
);

console.log(Auth);

// import AppSwitchNavigator from './src/pages/navigators/AppSwitchNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
    }
  }

  getHeaderHeight = () => {
    this.headerHeight = useHeaderHeight();
  }


  render() {
    return (
      <View style={styles.appContainer}>
        <AppContainer />
      </View>
    );
  }
}

export const DashboardTabNavigator = createBottomTabNavigator(
  {
    Watch: {
      screen: WatchVideosScreen,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={'white'}
            name="play-circle-outline"
            size={30}
          />
        )
      },
    },
    Play: {
      screen: PlayGamesScreen,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={'white'}
            name="stay-current-landscape"
            size={30}
          />
        )
      },
    },
    Pet:
    {
      screen: PetScreen,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={'white'}
            name="child-care"
            size={30}
          />
        )
      },
    },
    'My Profile': {
      screen: ProfileScreen,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            color={'white'}
            name="account-circle"
            size={30}
          />
        )
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // ...TransitionPresets.SlideFromRightIOS, // add this line
        headerTitle: routeName,
      };
    },

    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
        backgroundColor: '#40e0d0',
        // color: 'white'
      }
    }
  }
);

export const DashboardStackNavigator = createStackNavigator(
  {
    mHealth: WelcomeScreen,
    Video1: VideoScreen_1,
    Video2: VideoScreen_2,
    Video3: VideoScreen_3,
    Video4: VideoScreen_4,
    VideoList: DashboardTabNavigator,
    Login: { screen: Login },
    'Sign Up': { screen: SignUpScreen },
  },
  {

    defaultNavigationOptions: ({ navigation }) => {
      return {

        headerBackTitle: ' ',
        headerBackground: () => <View style={styles.headerStyle} />,
        headerRight: () => <Text style={styles.headerRight}>Hypertension</Text>,
        headerBackImage: () => <BackButton navigation={navigation} />,
        headerTintColor: 'white',
        // ...TransitionPresets.ModalPresentationIOS, // add this line
      };
    },
  },

);

const AppContainer = createAppContainer(DashboardStackNavigator);

const styles = StyleSheet.create({

  appContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'transparent'
  },
  headerRight: {
    margin: 10,
    color: 'white',
    fontSize: 14,
  },
  headerStyle: {
    // backgroundColor: '#40e0d0',
    // backgroundColor: 'rgba(0,0,0,0.4)',
    backgroundColor: '#40e0d0',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    // shadowColor: 'black',
    // shadowOpacity: 0.4,
    // shadowOffset: { height: 0, width: 0 },
    // shadowRadius: 10,
    // borderRadius: 1000,
    // height: '116%'
  },
  botTapStyle: {
    // backgroundColor: 'black'
  },
  headerGraidient: {
    height: '100%', width: '100%',
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 5,
    // borderRadius: 15,
  },
  blurHeader: {
    width: 500,
    height: '100%'
  },
  tabIcon: {
    paddingTop: '15px',
  }
});
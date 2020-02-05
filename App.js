import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator, CreateNavigatorConfig, NavigationStackRouterConfig, NavigationRoute } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  NavigationStackConfig,
  NavigationStackOptions,
  NavigationStackProp,
  TransitionPresets, createStackNavigator, HeaderBackButton, useCardAnimation, useHeaderHeight
} from 'react-navigation-stack'
import { ExploreScreen } from './src/pages/ExploreScreen';
import { Login } from './src/pages/LoginScreen';
import { SettingsScreen } from './src/pages/SettingsScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { FeedScreen } from './src/pages/FeedScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { SignUpScreen } from './src/pages/SignUpScreen';
import { WelcomeButton } from './src/customComponents/CustomButtons';
import { BackButton } from './src/customComponents/CustomButtons';
import { VideoScreen_1 } from './src/pages/videoScreens/VideoScreen_1';
import { VideoScreen_2 } from './src/pages/videoScreens/VideoScreen_2';
import { VideoScreen_3 } from './src/pages/videoScreens/VideoScreen_3';
import { VideoScreen_4 } from './src/pages/videoScreens/VideoScreen_4';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { fromBottom } from 'react-navigation-transitions';


// import AppSwitchNavigator from './src/pages/navigators/AppSwitchNavigator';

export default class App extends React.Component {
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
    Feed: FeedScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Explore: ExploreScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTransparent: 'false',
        // ...TransitionPresets.SlideFromRightIOS, // add this line
        headerTitle: routeName,
        headerBackground: () =>
          <View style={styles.headerStyle}>
            <BlurView tint="light" intensity={10} style={styles.headerStyle} />
          </View>,

        // ,
      };
    },

    tabBarOptions: {

      style: {
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
        // backgroundColor: 'transparent',
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
    Learn: DashboardTabNavigator,
    Login: { screen: Login },
    'Sign Up': { screen: SignUpScreen },
  },
  {

    defaultNavigationOptions: ({ navigation }) => {
      return {

        headerBackTitle: ' ',
        headerTransparent: 'true',
        // headerBackground: () => <LinearGradient
        //   colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']} style={styles.centerContainer}>
        // </LinearGradient>,
        // headerBackground: () =>
        //   <View style={styles.headerStyle}>
        //     <BlurView tint="light" intensity={0} style={styles.headerStyle} />
        //   </View>,
        // <BlurView intensity={80} style={styles.blurHeader} />,
        headerRight: () => <Text style={styles.headerRight}>Hypertension</Text>,
        headerBackImage: () => <BackButton navigation={navigation} />,
        headerTintColor: 'white',
        // ...TransitionPresets.ModalPresentationIOS, // add this line
      };
    }
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
    backgroundColor: 'black',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 8,
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
  }
});
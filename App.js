import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator, HeaderBackButton, useCardAnimation, useHeaderHeight } from 'react-navigation-stack'
import { ExploreScreen } from './src/pages/ExploreScreen';
import { Login } from './src/pages/LoginScreen';
import { SettingsScreen } from './src/pages/SettingsScreen';
import { ProfileScreen } from './src/pages/ProfileScreen';
import { FeedScreen } from './src/pages/FeedScreen';
import { WelcomeScreen } from './src/pages/WelcomeScreen';
import { SignUpScreen } from './src/pages/SignUpScreen';
import { WelcomeButton } from './src/customComponents/CustomButtons';
import { VideoScreen_1 } from './src/pages/videoScreens/VideoScreen_1';
import { Icon, colors } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';


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
        headerTitle: routeName,
        // headerTransparent: 'true',
        headerBackground: () => 
        <View style={styles.headerStyle}>
           <LinearGradient style={styles.headerGraidient} colors={['#000000', '#505050']} />
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
    Video1: VideoScreen_1,
    Learn: DashboardTabNavigator,
    Login: { screen: Login },
    'Sign Up': { screen: SignUpScreen },
  },
  {

    defaultNavigationOptions: ({ navigation }) => {
      return {

        headerBackTitle: ' ',
        // headerTransparent: 'true',
        // headerBackground: () => <BlurView tint="light" intensity={50} style={styles.headerStyle} />,
        headerBackground: () =>
          <View style={styles.headerStyle}>
           <LinearGradient style={styles.headerGraidient} colors={['#000000', '#505050']} />
          </View>,
          // <BlurView intensity={80} style={styles.blurHeader} />,
        headerRight: () => <Text style={styles.headerRight}>Hypertension</Text>,
        headerBackImage: () => <BackButton navigation={navigation} />,
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
    backgroundColor: '#40e0d0',
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
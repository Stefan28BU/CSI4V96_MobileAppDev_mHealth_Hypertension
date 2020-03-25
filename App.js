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
import { CameraPage } from './src/camera/camera.page';
import Amplify from 'aws-amplify';
import config from './config';

import { Ionicons } from '@expo/vector-icons';

import { Icon } from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { fromBottom } from 'react-navigation-transitions';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import Spinner from 'react-native-loading-spinner-overlay';


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

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 0,
      isReady: false,
      spinner: false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./src/imageAssets/04.jpg'),
      require('./src/imageAssets/03.jpg'),
      require('./src/imageAssets/02.jpg'),
      require('./src/imageAssets/01.jpg'),
      require('./src/imageAssets/wallpaper.jpg'),
      require('./src/pages/game1/img/apple.jpg'),
      require('./src/pages/game1/img/apricot.jpg'),
      require('./src/pages/game1/img/back.png'),
      require('./src/pages/game1/img/correct.png'),
      require('./src/pages/game1/img/cross-wrong.png'),
      require('./src/pages/game1/img/orange.png'),
      require('./src/pages/game1/img/pear.jpg'),
      require('./src/pages/game1/img/pineapple.png'),
      require('./src/pages/game1/img/popeyes.jpg'),

    ]);

    await Promise.all([...imageAssets]);
  }

  getHeaderHeight = () => {
    this.headerHeight = useHeaderHeight();
  }


  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        >
          <View style={styles.appContainer}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{
                color: 'black',
                fontSize: 20
              }}
            />
          </View>
        </AppLoading>
      );
    }
    return (
      <View style={styles.appContainer}>
        <AppContainer />
      </View>
    );
  }
}

export const DashboardTabNavigator = createBottomTabNavigator(
  {

    'Watch': {
      screen: WatchVideosScreen,

      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.tabbarIcon}>

            <Icon
              color={tintColor}
              name="play-circle-outline"
              size={26}
            />
          </View>
        )
      },
    },
    'Play': {
      screen: PlayGamesScreen,

      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.tabbarIcon}>

            <Ionicons
              color={tintColor}
              name="logo-game-controller-b"
              size={26}
            />
          </View>
        )
      },
    },
    'Camera': {
      screen: CameraPage,

      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.tabbarIcon}>
            <Icon
              color={tintColor}
              name="photo-camera"
              size={26}
            />
          </View>
        )
      },
    },
    'Pet':
    {
      screen: PetScreen,

      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.tabbarIcon}>

            <Icon
              color={tintColor}
              name="child-care"
              size={26}
            />
          </View>
        )
      },
    },
    'My Dashboard': {
      screen: ProfileScreen,

      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <View style={styles.tabbarIcon}>

            <Icon
              color={tintColor}
              name="account-circle"
              size={26}
            />
          </View>
        )
      },
    },
  },

  {

    initialRouteName: 'My Dashboard',

    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        // ...TransitionPresets.SlideFromRightIOS, // add this line
        headerTitle: routeName,
      };
    },

    tabBarOptions: {

      showLabel: true,
      activeTintColor: 'black',
      inactiveTintColor: 'rgb(85,85,85)',


      style: {
        marginTop: 100,
        paddingLeft: 20,
        paddingRight: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: '100%',
        borderTopColor: 'transparent',
        backgroundColor: '#40e0d0',
        borderTopWidth: 1,
        paddingTop: 10,
        height: 60,
        backgroundColor: 'transparent'
      }
    }
  },

);

export const DashboardStackNavigator = createStackNavigator(
  {

    // mHealth: WelcomeScreen,
    VideoList: DashboardTabNavigator,
    

    'Part 1: Introduction': {
      screen: VideoScreen_1,

      navigationOptions: {
        headerBackground: () => <LinearGradient colors={['#4568dc', '#b06ab3']} style={[StyleSheet.absoluteFill]}
        ></LinearGradient>,
      },
    },
    'Part 2: Causes': {
      screen: VideoScreen_2,

      navigationOptions: {
        headerBackground: () => <LinearGradient colors={['#4568dc', '#b06ab3']} style={[StyleSheet.absoluteFill]}
        ></LinearGradient>,
      },
    },
    'Part 3: Symptoms': {
      screen: VideoScreen_3,

      navigationOptions: {
        headerBackground: () => <LinearGradient colors={['#4568dc', '#b06ab3']} style={[StyleSheet.absoluteFill]}
        ></LinearGradient>,
      },
    },
    'Part 4: Treatments': {
      screen: VideoScreen_4,

      navigationOptions: {
        headerBackground: () => <LinearGradient colors={['#4568dc', '#b06ab3']} style={[StyleSheet.absoluteFill]}
        ></LinearGradient>,
      },
    },

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

export const switchNavigator = createSwitchNavigator(
  {
    mHealth: {
      screen: WelcomeScreen,

      navigationOptions: {
        headerBackground: () => <LinearGradient colors={['#4568dc', '#b06ab3']} style={[StyleSheet.absoluteFill]}
        ></LinearGradient>,
      },
    },

    'DashboardStackNavigator': DashboardStackNavigator,
    Login: {
      screen: Login,
    },
    'Sign Up': {
      screen: SignUpScreen,
    },
  },
);

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  tabbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    backgroundColor: '#40e0d0',
    borderRadius: 20,
    minWidth: 50,
    maxWidth: 50,
    aspectRatio: 1,
    top: -20,
    position: "absolute",

    shadowColor: '#00fa9a',
    shadowOpacity: 0.9,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 18,
  },
  appContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
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

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons'
import { colors } from 'react-native-elements';
import LinearGradient from 'expo-linear-gradient';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { BlurView } from 'expo-blur';
// import { BlurView, VibrancyView } from 'react-native-blur';

const welcome = require('../imageAssets/welcomeGif.gif')

export class WelcomeScreen extends Component {
    componentWillMount() {
        this.background = (
            <BlurView tint="light" blurAmount={80} style={styles.blurStyle} blurType={"light"} >
                <ImageBackground style={styles.welcomeVideoStyle} resizeMode={'cover'} source={require('../imageAssets/welcomeGif.gif')} >
                    <View style={styles.centerContainer}>
                        <SignInBtn title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                        <SignUpBtn title="Sign Up As Researcher" onPress={() => this.props.navigation.navigate('Sign Up')} />
                        <PlayBtn title="Play and Learn" onPress={() => this.props.navigation.navigate('Learn')} />
                    </View>
                </ImageBackground>
            </BlurView>
        );
    }

    render() {
        return (
            <View style={styles.welcomeScreenWrapper}>
                {this.background}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    blurStyle: {
        width: '100%',
        height: '100%',
        zIndex: 0
    },
    welcomeVideoStyle: {
        width: '100%',
        height: '100%',
        //  zIndex: -1,
    },
    welcomeScreenWrapper: {
        // marginTop: '25%',
        // backgroundColor: '#242424',
        flex: 1,
        alignItems: 'center',
    },
    rootImageCont: {
        // marginTop: 40,
        marginBottom: 10,
        // aspectRatio: 1,
        height: '40%',
        width: '100%',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },
    rootImage: {
        width: '100%',
        height: '100%',
        // borderRadius: 99999999,
        resizeMode: "cover",
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
    welcomeText: {
        fontSize: 20,
        // color: '#808080',
        color: 'white',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    welcomeCont: {
        maxWidth: '80%',
        alignItems: "center",

        justifyContent: "center",
    },
    graidientStyle: {
        width: '100%',
        height: '100%',
    }
})
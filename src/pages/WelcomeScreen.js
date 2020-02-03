
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons';
import { colors } from 'react-native-elements';
import LinearGradient from 'expo-linear-gradient';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { BlurView } from 'expo-blur';
// import { BlurView, VibrancyView } from 'react-native-blur';


export class WelcomeScreen extends Component {
    UNSAFE_componentWillMount() {
        this.background = (
            <BlurView intensity={0} style={styles.blurStyle} >

                {/* <View style={styles.blurStyle} > */}
                <ImageBackground style={styles.welcomeVideoStyle} resizeMode={'cover'} source={require('../imageAssets/wallpaper.jpg')} >
                    {/* <View style={styles.rootImageCont}>
                        <Image style={styles.rootImage} resizeMode={'cover'} source={require('../imageAssets/awesome.gif')} />
                    </View> */}

                    <View style={styles.blank}/>
                    <View style={styles.centerContainer}>
                        <View style={styles.welcomeCont}>
                            <Text style={styles.welcomeText}>
                                Welcome to mHealth{"\n"}Here, you will learn about{"\n"}Hypertension
                        </Text>
                        </View>
                        <SignInBtn title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                        <SignInBtn title="Sign Up" onPress={() => this.props.navigation.navigate('Sign Up')} />
                        <PlayBtn title="Play and Learn" onPress={() => this.props.navigation.navigate('Learn')} />
                    </View>
                </ImageBackground>
                {/* </View> */}
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
    blank: {
        height: '50%'
    },
    blurStyle: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        // position: 'absolute',
        // backgroundColor: 'black'
    },
    welcomeVideoStyle: {
        width: '100%',
        height: '100%',
        zIndex: -1,
        //  position: 'absolute'
    },
    welcomeScreenWrapper: {
        // marginTop: '25%',
        // backgroundColor: '#242424',
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'black',
        // zIndex: 2,
        width: '100%',
        height: '100%',
        // position: 'absolute',
        // shadowColor: 'black',
        // shadowOpacity: 0.7,
        // shadowOffset: { height: 0, width: 0 },
        // shadowRadius: 5,
    },
    rootImageCont: {
        marginTop: 50,
        marginBottom: 50,
        aspectRatio: 1,
        height: '32%',
        // width: '100%',
        // borderRadius: 100000,
        alignSelf: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },
    rootImage: {
        width: '100%',
        height: '100%',
        borderRadius: 99999999,
        resizeMode: "cover",
    },
    centerContainer: {
        width: '95%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        // borderColor: 'white',
        // borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

        // shadowColor: 'black',
        // shadowOpacity: 0.8,
        // shadowOffset: { height: 0, width: 0 },
        // shadowRadius: 7,
        // top: '-18%',
        // zIndex: 2
    },
    welcomeText: {
        fontSize: 20,
        // color: '#808080',
        color: 'white',
        // marginTop: 15,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    welcomeCont: {
        maxWidth: '90%',
        alignItems: 'center',
        // backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    graidientStyle: {
        width: '100%',
        height: '100%',
    }
})
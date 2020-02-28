
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { MHealthBackBtn, MHealthBtn, PlayBtn, SignInBtn, SignUpBtn, EditProfileBtn, SignOutBtn } from '../customComponents/CustomButtons';
import { colors } from 'react-native-elements';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';



import Modal from "react-native-modal";
import { Icon } from 'react-native-elements';

export class WelcomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    setModalVisible(visible) {
        this.setState({ isModalVisible: visible });
    }

    toSignIn = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('Login');
    }

    toPlay = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('VideoList');
    }

    toSignUp = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('Sign Up');
    }

    toCamera = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
        this.props.navigation.navigate('camera');
    }

    UNSAFE_componentWillMount() {
        this.background = (
            <ImageBackground style={styles.welcomeBackground} resizeMode={'cover'} source={require('../imageAssets/wallpaper.jpg')} >
                <View style={styles.blank} />
            </ImageBackground>
        );
    }

    render() {
        const { open } = this.state

        return (
            <View style={styles.welcomeScreenWrapper}>
                {this.background}
                <View
                    isVisible={this.state.isModalVisible}
                    style={styles.modalStyle}
                    animationIn={"slideInUp"}
                    animationInTiming={400}
                    animationOutTiming={500}
                    hasBackdrop={false}
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,1)']} style={styles.centerContainer}>
                        <View style={styles.welcomeCont}>
                            <Text style={styles.welcomeText}>
                                Here, you will learn about{"\n"}Hypertension
                            </Text>
                        </View>
                        <SignInBtn title="Sign In" onPress={this.toSignIn} />
                        <SignInBtn title="Sign Up" onPress={this.toSignUp} />
                        <PlayBtn title="Play and Learn" onPress={this.toPlay} />
                        {/* <PlayBtn title="Camera" onPress={this.toCamera} /> */}

                    </LinearGradient>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBtn: {
        paddingTop: 50,
        paddingBottom: 50,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '20%'
    },
    modalStyle: {
        // marginTop: '100%',
        minHeight: 400,
        bottom: 0,
        position: "absolute",
        width: '100%',
        alignSelf: 'center'
    },
    blank: {
        height: '50%'
    },
    welcomeBackground: {
        zIndex: -1,
        width: '100%',
        height: '100%'
    },
    welcomeScreenWrapper: {
        // marginTop: '25%',
        // backgroundColor: '#242424',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '100%',
        // backgroundColor: 'rgba(0,0,0,0.7)',
        // borderColor: 'white',
        // borderWidth: 1,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
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
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    welcomeCont: {
        // marginTop: 10,
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

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons'
import { colors } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export class WelcomeScreen extends Component {
    render() {
        return (
            <LinearGradient colors={['#505050', '#000000']}
                style={styles.graidientStyle}>
                <View style={styles.welcomeScreenWrapper}>

                    <View style={styles.rootImageCont}>
                        <Image
                            style={styles.rootImage}
                            source={require('../imageAssets/hyp2.gif')}
                        />
                    </View>
                    <View style={styles.welcomeCont} >
                        <Text style={styles.welcomeText}>
                            Welcome to mHealth!{"\n\n"}Learn about Hypertension, and how you can prevent it.
                    </Text>
                    </View>
                    <View style={styles.centerContainer}>
                        <SignInBtn title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                        <SignUpBtn title="Sign Up As Researcher" onPress={() => this.props.navigation.navigate('Sign Up')} />
                        <PlayBtn title="Play and Learn" onPress={() => this.props.navigation.navigate('Learn')} />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
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
        justifyContent: 'center'

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
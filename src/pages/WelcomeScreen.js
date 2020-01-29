
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons'
import { colors } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

export class WelcomeScreen extends Component {
    render() {
        return (
            // <LinearGradient colors={['#dd5e89', '#f7bb97']}
            // style={styles.graidientStyle}>
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
                    <PlayBtn title="Play and Learn" onPress={() => this.props.navigation.navigate('Learn')} />
                    <SignInBtn title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                    <SignUpBtn title="Sign Up As Researcher" onPress={() => this.props.navigation.navigate('Sign Up')} />
                </View>
            </View>
            // </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    welcomeScreenWrapper: {
        // marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    rootImageCont: {
        marginTop: 35,
        marginBottom: 0,
        aspectRatio: 1,
        height: '35%',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },
    rootImage: {
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        resizeMode: "cover",
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    welcomeText: {
        fontSize: 20,
        color: '#808080',
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
        height: '100%'
    }
})
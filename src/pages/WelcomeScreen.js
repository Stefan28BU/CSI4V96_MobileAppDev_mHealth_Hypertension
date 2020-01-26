
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons'

export class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.welcomeScreenWrapper}>
                <View style={styles.rootImageCont}>
                <Image
                    style={styles.welcomeScreenWrapper}
                    source={require('../imageAssets/hyp1.gif')}
                />
                </View>
                
                <PlayBtn title="Play and Learn" onPress={() => this.props.navigation.navigate('Hypertension')} />
                <SignInBtn title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                <SignUpBtn title="Sign Up As Researcher" onPress={() => this.props.navigation.navigate('Sign Up')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcomeScreenWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rootImageCont: {
        height: 450,
        marginBottom:20
    },
    rootImage: {
        resizeMode: "contain",
    }
})
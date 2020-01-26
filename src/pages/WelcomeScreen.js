
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { WelcomeButton } from '../customComponents/CustomButtons'

export class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.welcomeScreenWrapper}>
                <WelcomeButton title="Continue As Guest" onPress={() => this.props.navigation.navigate('Hypertension')} />
                <WelcomeButton title="Sign In" onPress={() => this.props.navigation.navigate('Login')} />
                <WelcomeButton title="Sign Up As Researcher" onPress={() => this.props.navigation.navigate('Sign Up')} />
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
    welcomeScreenButtonContainer: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    welcomeScreenText: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: 'white',
    }
})
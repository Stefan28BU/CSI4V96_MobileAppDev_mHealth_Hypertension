
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { PlayBtn, SignInBtn, SignUpBtn } from '../customComponents/CustomButtons'
import { colors } from 'react-native-elements';

export class WelcomeScreen extends Component {
    render() {
        return (
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
        );
    }
}

const styles = StyleSheet.create({
    welcomeScreenWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    rootImageCont: {
        marginBottom: 0,
    },
    rootImage: {
        height: 300,
        resizeMode: "contain",
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
    }
})
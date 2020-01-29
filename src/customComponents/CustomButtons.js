import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';

export const SignInBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.signInCont, style]}>
            <Text style={[styles.signInText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const SignUpBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.signUpCont, style]}>
            <Text style={[styles.signUpText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const PlayBtn = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.playCont, style]}>
            <Text style={[styles.playText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export const VideoButton = (props) => {
    const { title = {}, style = {}, imageStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.videoBtnContainer, style]}>
            <Image
                style={[styles.videoCoverImage, imageStyle]}
                source={require('../imageAssets/amg_gt63s.jpg')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    videoBtnContainer: {
        height: 250,
        minWidth: '101%',
        maxWidth: '105%',
        marginBottom: 20,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    videoCoverImage: {
        flex: 1,
        resizeMode: "contain",
    },
    signUpCont: {
        display: 'flex',
        minHeight: '7%',
        minWidth: '85%',
        margin: 8,
        borderRadius: 10000,
        borderColor: '#fba1a1',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        // shadowColor: 'black',
        // shadowOpacity: 0.7,
        // shadowOffset: { height: 8, width: 0 },
        // shadowRadius: 5,
    },

    signUpText: {
        fontSize: 16,
        color: '#fba1a1',
        textTransform: 'uppercase'
    },
    signInCont: {
        display: 'flex',
        minHeight: '7%',
        minWidth: '85%',
        margin: 8,
        borderRadius: 10000,
        borderWidth: 1,
        borderColor: '#fba1a1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fba1a1'
        // shadowColor: 'black',
        // shadowOpacity: 0.7,
        // shadowOffset: { height: 8, width: 0 },
        // shadowRadius: 5,
    },
    signInText: {
        fontSize: 16,
        color: 'black',
        textTransform: 'uppercase'
    },
    playCont: {
        display: 'flex',
        minHeight: '7%',
        minWidth: '85%',
        margin: 8,
        borderRadius: 10000,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48d1cc',
    },

    playText: {
        fontSize: 16,
        color: 'black',
        textTransform: 'uppercase'
    },
});

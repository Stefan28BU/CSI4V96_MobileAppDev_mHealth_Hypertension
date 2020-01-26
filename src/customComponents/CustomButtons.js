import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';


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
        marginTop: 10,
        marginBottom: 10,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',

    },
    videoCoverImage: {
        flex: 1,
        resizeMode: "contain",
    },
    signInCont: {
        display: 'flex',
        height: 50,
        width: 250,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        // shadowColor: 'black',
        // shadowOpacity: 0.7,
        // shadowOffset: { height: 8, width: 0 },
        // shadowRadius: 5,
    },

    signInText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase'
    },
    signUpCont: {
        display: 'flex',
        height: 50,
        width: 250,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOpacity: 0.7,
        // shadowOffset: { height: 8, width: 0 },
        // shadowRadius: 5,
    },
    signUpText: {
        fontSize: 16,
        color: 'black',
        textTransform: 'uppercase'
    },
    playCont: {
        display: 'flex',
        height: 50,
        width: 250,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9370db',
    },

    playText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase'
    },
});

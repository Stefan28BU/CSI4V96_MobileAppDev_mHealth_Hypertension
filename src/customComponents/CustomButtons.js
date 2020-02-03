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
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,        
        borderRadius: 5,
        borderColor: '#40e0d0',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    signUpText: {
        fontSize: 16,
        color: '#40e0d0',
        textTransform: 'uppercase'
    },
    signInCont: {
        display: 'flex',
        minHeight: '7%',
        minWidth: '85%',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,        
        borderRadius: 5,

        // borderTopLeftRadius: 99999999,
        // borderTopRightRadius: 99999999,
        // borderBottomLeftRadius: 2,
        // borderBottomRightRadius: 2,

        // borderWidth: 1,
        // borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#40e0d0'
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
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#40e0d0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
        // backgroundColor: '#40e0d0',
        // backgroundColor: 'rgba(0,0,0,0.75)'
        // borderBottomLeftRadius: 99999999,
        // borderBottomRightRadius: 99999999,
        // borderTopRightRadius: 2,
        // borderTopLeftRadius: 2,
    },

    playText: {
        fontSize: 16,
        color: '#40e0d0',
        textTransform: 'uppercase'
    },
});

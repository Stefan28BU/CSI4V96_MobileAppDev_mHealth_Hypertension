import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';


export const WelcomeButton = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.welcomeBtnContainer, style]}>
            <Text style={[styles.welcomeText, textStyle]}>{props.title}</Text>
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
        margin: 10,
        padding:50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 8, width: 0 },
        shadowRadius: 5,
    },
    videoCoverImage: {
        flex: 1,
        resizeMode: "contain",
    },
    welcomeBtnContainer: {
        display: 'flex',
        height: 50,
        width: 250,
        margin: 12,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 8, width: 0 },
        shadowRadius: 5,
    },

    welcomeText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase'
    },
});

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


export const WelcomeButton = (props) => {
    const { title = {}, style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity title={title} onPress={onPress} style={[styles.welcomeBtnContainer, style]}>
            <Text style={[styles.welcomeText, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    welcomeBtnContainer: {
        display: 'flex',
        height: 50,
        width: 250,
        margin: 12,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 5,
    },

    welcomeText: {
        fontSize: 16,
        color: 'white',
        textTransform: 'uppercase'
    },
});

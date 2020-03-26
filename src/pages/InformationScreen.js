import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

export class InformationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text> This page is in progress... </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    }
});

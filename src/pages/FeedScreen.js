
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { VideoButton } from '../customComponents/CustomButtons';
import { Video, Audio } from 'expo-av'
import VideoPlayer from 'expo-video-player'
export class FeedScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <VideoButton onPress={() => this.props.navigation.navigate('Video1')} />
                    <VideoButton />
                    <VideoButton />
                    <VideoButton />
                    <VideoButton />
                    <VideoButton />
                    <VideoButton />
                    <VideoButton />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
    },
    text: {
        fontSize: 20,
    },
});

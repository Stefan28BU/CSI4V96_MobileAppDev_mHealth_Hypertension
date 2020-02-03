
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
                    <VideoButton onPress={() => this.props.navigation.navigate('Video2')} />
                    <VideoButton onPress={() => this.props.navigation.navigate('Video3')} />
                    <VideoButton onPress={() => this.props.navigation.navigate('Video4')} />                    
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        
    },
    scrollView: {
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});

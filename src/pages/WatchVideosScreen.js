
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { VideoButton } from '../customComponents/CustomButtons';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import FastImage from 'react-native-fast-image';

export class WatchVideosScreen extends Component {
    UNSAFE_componentWillMount() {
        this.videoList = (
            <ScrollView style={styles.scrollView}>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Video1')} source={require('../imageAssets/001.png')} label={"What is Hypertension or High BP?"}>
                    
                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Video2')} source={require('../imageAssets/002.png')} label={"What causes High BP?"}>

                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Video3')} source={require('../imageAssets/003.png')} label={"What are the symptoms of High BP?"}>

                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Video4')} source={require('../imageAssets/004.png')} label={"How to know if you have High BP?"}>

                </VideoButton>
            </ScrollView>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.videoList}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(235,235,235)',

    },
    scrollView: {
        backgroundColor: 'rgb(235,235,235)',
    },
    text: {
        fontSize: 20,
    },
});

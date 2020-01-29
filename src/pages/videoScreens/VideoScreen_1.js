import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Video, Audio } from 'expo-av'
import VideoPlayer from 'expo-video-player'

// import htn_epart2  from '../../videoAssets/htn_epart2.mp4';

// const video1 = require('../../videoAssets/')

export class VideoScreen_1 extends React.Component {
    render() {
        return (
            <View style={styles.videoContainer}>
                {/* <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: { htn_epart2 },
                    }}
                    inFullscreen={true}
                /> */}
                <Video
                    source={{ uri: 'https://mhealthhypertension.s3.amazonaws.com/htn_epart2.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    isLooping
                    style={{ width: '100%', height: '100%' }}
                    useNativeControls={true}
                />
            </View>
        );
    }
}

// Later on in your styles..
var styles = StyleSheet.create({
    videoContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'black'
    }
});
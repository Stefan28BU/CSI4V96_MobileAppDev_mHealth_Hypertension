import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Video, Audio } from 'expo-av'
import VideoPlayer from 'expo-video-player'

import htn_epart2  from '../../videoAssets/htn_epart2.mp4';

// const video1 = require('../../videoAssets/')

export class VideoPageTest1 extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <VideoPlayer
                    videoProps={{
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: { htn_epart2 },
                    }}
                    inFullscreen={true}
                /> */}
                <Video
                    source={ htn_epart2 }
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { VideoButton } from '../customComponents/CustomButtons';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import FastImage from 'react-native-fast-image';
import { Asset } from 'expo-asset';

import { AppLoading } from 'expo';


const img1 = require('../imageAssets/004.jpg');
const img2 = require('../imageAssets/003.jpg')
const img3 = require('../imageAssets/002.jpg')
const img4 = require('../imageAssets/001.jpg')


// function cacheImages(images) {
//     return images.map(image => {
//         if (typeof image === 'string') {
//             return Image.prefetch(image);
//         } else {
//             return Asset.fromModule(image).downloadAsync();
//         }
//     });
// }

// let imageAssets;

export class WatchVideosScreen extends Component {

    state = {
        isReady: false,
    };


    // async _loadAssetsAsync() {
    //     imageAssets = cacheImages([
    //         require('../imageAssets/004.jpg'),
    //         require('../imageAssets/003.jpg'),
    //         require('../imageAssets/002.jpg'),
    //         require('../imageAssets/001.jpg')
    //     ]);


    //     await Promise.all([...imageAssets]);
    // }

    async UNSAFE_componentWillMount() {

        this.videoList = (
            <ScrollView style={styles.scrollView}>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 1: Introduction')} source={img1} label={"What is Hypertension or High BP?"}>

                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 2: Causes')} source={img2} label={"What causes High BP?"}>

                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 3: Symptoms')} source={img3} label={"What are the symptoms of High BP?"}>

                </VideoButton>
                <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 4: Treatments')} source={img4} label={"How to know if you have High BP?"}>

                </VideoButton>
            </ScrollView>
        );
    }

    render() {
        // if (!this.state.isReady) {
        //     return (
        //         <AppLoading
        //             startAsync={this._loadAssetsAsync}
        //             onFinish={() => this.setState({ isReady: true })}
        //             onError={console.warn}
        //         />
        //     );
        // }

        return (
            <SafeAreaView style={styles.container}>
                {/* {this.videoList} */}
                <ScrollView style={styles.scrollView}>
                    <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 1: Introduction')} source={require('../imageAssets/004.jpg')} label={"What is Hypertension or High BP?"}>

                    </VideoButton>
                    <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 2: Causes')} source={require('../imageAssets/003.jpg')} label={"What causes High BP?"}>

                    </VideoButton>
                    <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 3: Symptoms')} source={require('../imageAssets/002.jpg')} label={"What are the symptoms of High BP?"}>

                    </VideoButton>
                    <VideoButton style={styles.img} onPress={() => this.props.navigation.navigate('Part 4: Treatments')} source={require('../imageAssets/001.jpg')} label={"How to know if you have High BP?"}>

                    </VideoButton>
                </ScrollView>
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

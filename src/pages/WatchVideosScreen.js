
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground, View } from 'react-native';
import Constants from 'expo-constants';
import { VideoButton } from '../customComponents/CustomButtons';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import FastImage from 'react-native-fast-image';
import { findCoordinates } from '../utils/findCoordinate';
import { Asset } from 'expo-asset';
import { completePart1, completePart2, completePart3, completePart4, compP1, compP2, compP3, compP4, learningProgress, getProgress } from '../globals/progress'
import { Icon } from 'react-native-elements';

import { AppLoading } from 'expo';

import { NavigationEvents } from 'react-navigation';

const img1 = require('../imageAssets/004.jpg');
const img2 = require('../imageAssets/003.jpg')
const img3 = require('../imageAssets/002.jpg')
const img4 = require('../imageAssets/001.jpg')


export class WatchVideosScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shouldUpdate: false,

            isReady: false,
            lockSecond: true,
            lockThird: true,
            lockLast: true,

        };

        this.focused = this.focused.bind(this)
    }

    async UNSAFE_componentWillMount() {

        const loc = await findCoordinates();
        console.log(loc);

        if (learningProgress >= 25) {
            this.setState({ lockSecond: false })
        }
        if (learningProgress >= 50) {
            this.setState({ lockThird: false })

        }
        if (learningProgress >= 75) {
            this.setState({ lockLast: false })
        }

    }

    componentDidMount() {
        this.setState({ isReady: true })
    }

    checkProgress() {
        require('../globals/progress')
    }


    focused() {
        console.log("focused")
        console.log("Updating")
        require('../globals/progress')
        this.forceUpdate();

        console.log('Updated progress is: ' + learningProgress)
        if (learningProgress >= 25) {
            this.setState({ lockSecond: false })
            // this.state.lockSecond = false;
        }
        if (learningProgress >= 50) {
            this.setState({ lockThird: false })
            // this.state.lockThird = false;

        }
        if (learningProgress >= 75) {
            this.setState({ lockLast: false })
            // this.state.lockLast = false;

        }
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View></View>
                // <AppLoading
                //     startAsync={this.checkProgress}
                //     onFinish={() => this.setState({ isReady: true })}
                //     onError={console.warn}
                // />
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <NavigationEvents
                        // onDidFocus={this.focused}
                        onWillFocus={this.focused}
                    />
                    <VideoButton subTitle={0} disabled={false} style={styles.img} onPress={() => this.props.navigation.navigate('Part 1: Introduction')} source={require('../imageAssets/004.jpg')} label={"Part 1: What is High BP?"}>
                        {learningProgress >= 25 &&
                            <View style={{
                                width: '100%',
                                height: 240,
                                resizeMode: "cover",
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Icon
                                    // color={'#40e0d0'}
                                    color={'black'}
                                    name="check"
                                    size={100}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}>
                                    Part 1 completed
                                </Text>
                            </View>
                        }
                    </VideoButton>
                    <VideoButton subTitle={1} disabled={this.state.lockSecond} style={styles.img} onPress={() => this.props.navigation.navigate('Part 2: Causes')} source={require('../imageAssets/003.jpg')} label={"Part 2: What causes High BP?"}>
                        {learningProgress >= 50 &&
                            <View style={{
                                width: '100%',
                                height: 240,
                                resizeMode: "cover",
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Icon
                                    // color={'#40e0d0'}
                                    color={'black'}
                                    name="check"
                                    size={100}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}>
                                    Part 2 completed
                                </Text>
                            </View>
                        }
                    </VideoButton>
                    <VideoButton subTitle={2} disabled={this.state.lockThird} style={styles.img} onPress={() => this.props.navigation.navigate('Part 3: Symptoms')} source={require('../imageAssets/002.jpg')} label={"Part 3: Symptoms of High BP"}>
                        {learningProgress >= 75 &&
                            <View style={{
                                width: '100%',
                                height: 240,
                                resizeMode: "cover",
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Icon
                                    // color={'#40e0d0'}
                                    color={'black'}
                                    name="check"
                                    size={100}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}>
                                    Part 3 completed
                                </Text>
                            </View>
                        }
                    </VideoButton>
                    <VideoButton subTitle={3} disabled={this.state.lockLast} style={styles.img} onPress={() => this.props.navigation.navigate('Part 4: Treatments')} source={require('../imageAssets/001.jpg')} label={"Part 4: Diagnosis High BP"}>
                        {learningProgress >= 100 &&
                            <View style={{
                                width: '100%',
                                height: 240,
                                resizeMode: "cover",
                                backgroundColor: 'rgba(255,255,255,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Icon
                                    // color={'#40e0d0'}
                                    color={'black'}
                                    name="check"
                                    size={100}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black',
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}>
                                    Part 4 completed
                                </Text>
                            </View>
                        }
                    </VideoButton>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40e0d0',
    },
    scrollView: {
        backgroundColor: '#40e0d0',
    },
    text: {
        fontSize: 20,
    },
});
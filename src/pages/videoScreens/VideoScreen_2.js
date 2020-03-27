import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Picker, Alert } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Video, Audio } from 'expo-av';
import VideoPlayer from 'expo-video-player';

// import htn_epart2  from '../../videoAssets/htn_epart2.mp4';

// const video1 = require('../../videoAssets/')
import { LinearGradient } from 'expo-linear-gradient';
// import { completePart1, completePart2, completePart3, completePart4,  compP1, compP2, compP3, compP4, learningProgress, incrementProgress} from '../../globals/progress'

import progress from '../../globals/progress'


export class VideoScreen_2 extends React.Component {
    state = {
        correctAns: false,

        answer1: 'incorrect',
        answer2: 'incorrect',
        answer3: 'incorrect',
        answer4: 'incorrect',
        answer5: 'incorrect',
        answer6: 'incorrect',
    };


    selectQuizAnswer = () => {

    }

    onSubmitAnswers = () => {
        console.log(this.state.answer1 + ' ' + this.state.answer2 + ' ' + this.state.answer3 + ' ')

        let count = 0;

        if (this.state.answer1 === 'correct') {
            count++;
        }
        if (this.state.answer2 === 'correct') {
            count++;

        }
        if (this.state.answer3 === 'correct') {
            count++;
        }
        if (this.state.answer4 === 'correct') {
            count++;
        }
        if (this.state.answer5 === 'correct') {
            count++;
        }
        if (this.state.answer6 === 'correct') {
            count++;
        }

        Alert.alert("You got " + count + " out of 6 answers correct!")
        if (count === 6 && !progress.compP2) {
            progress.incrementProgress();
            progress.completePart2();
        }
    }

    render() {
        return (
            <View style={styles.videoContainer}>
                <Video
                    source={{ uri: 'https://mhealthhypertension.s3.amazonaws.com/htn_epart2.mp4' }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    isLooping={false}
                    shouldPlay={true}                    
                    style={{
                        width: '100%',
                        height: '30%',
                        top: 0,
                        position: "absolute",
                        left: 0,

                    }} useNativeControls={true}
                />
                <View style={styles.sfQuizCnt}>
                    <ScrollView style={styles.quizCnt}>
                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Eating sugary and fatty food is good for preventing High BP
                            </Text>
                            </LinearGradient>

                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer1}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer1: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />
                                <Picker.Item label="False" value="correct" />
                                <Picker.Item label="True" value="incorrect1" />
                            </Picker>
                        </View>

                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Which of the following foods might cause High BP?
                            </Text>
                            </LinearGradient>

                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer2}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer2: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />
                                <Picker.Item label="Orange" value="incorrect1" />
                                <Picker.Item label="Apple" value="incorrect2" />
                                <Picker.Item label="Lean meat" value="incorrect3" />
                                <Picker.Item label="Cheese cake" value="correct" />
                            </Picker>
                        </View>

                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Eating salty food would not cause High BP as long as we avoid eating fatty and suguary food
                                </Text>
                            </LinearGradient>

                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer3}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer3: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />

                                <Picker.Item label="False" value="correct" />
                                <Picker.Item label="True" value="incorrect1" />
                            </Picker>
                        </View>


                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Fast walking can prevent people from getting High BP
                                </Text>
                            </LinearGradient>
                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer4}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer4: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />
                                <Picker.Item label="False" value="incorrect1" />
                                <Picker.Item label="True" value="correct" />
                            </Picker>
                        </View>

                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Stress is not one of the cause of High BP
                                </Text>
                            </LinearGradient>
                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer5}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer5: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />
                                <Picker.Item label="False" value="correct" />
                                <Picker.Item label="True" value="incorrect1" />
                            </Picker>
                        </View>

                        <View style={styles.quizItemCont}>
                            <LinearGradient
                                start={[0, 0]}
                                colors={['#2193b0', '#845EC2', '#D65DB1', '#FF6F91', '#FF9671']}>
                                <Text style={styles.quizItem}>
                                    Drinking alcoholic beverages is one of the cause of High BP
                            </Text>
                            </LinearGradient>

                            <Picker
                                itemStyle={styles.quizOptions}
                                style={styles.quizOptionsCnt}
                                selectedValue={this.state.answer6}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ answer6: itemValue })
                                }
                            >
                                <Picker.Item label="Choose an answer..." value="incorrect" />
                                <Picker.Item label="False" value="incorrect1" />
                                <Picker.Item label="True" value="correct" />
                            </Picker>
                        </View>
                    </ScrollView>
                    <LinearGradient
                        colors={['#b06ab3', '#4568dc']}>
                        <TouchableOpacity style={styles.confAns} onPress={this.onSubmitAnswers}>
                            <Text style={{ color: "white", fontSize: 20 }}>Confirm Answers</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 10,
    },
    sfQuizCnt: {
        backgroundColor: 'white',
        // backgroundColor: '#40e0d0',

        width: '100%',
        top: '30%',
        height: '70%',

        position: "absolute",
    },
    quizCnt: {
        height: '70%',
        width: '100%',
        // padding: 30,
    },
    quizItemCont: {
        backgroundColor: 'white',

        // marginBottom: 20,

        aspectRatio: 1,
        width: '100%',

        // shadowColor: 'black',
        // shadowOpacity: 0.25,
        // shadowOffset: { height: 10, width: 0 },
        // shadowRadius: 10,

    },
    quizItem: {
        padding: 20,

        fontSize: 20,
        // backgroundColor: '#40e0d0',
        color: 'white'
    },
    quizOptionsCnt: {
        marginTop: 10,
        padding: 0
    },
    quizOptions: {
    },
    confAns: {
        // backgroundColor: '#40e0d0',
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 10,
    }
});
// export default VideoScreen_2;
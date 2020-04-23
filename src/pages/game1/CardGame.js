import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, Animated } from 'react-native';
// import { back, removed, apple, apricot, orange, pear, pinaepple, popeyes, correct } from './imgIndex';
import { Audio } from 'expo-av';
import {checkLogInStatus, writeToCache, readFromCache} from './../../localCache/LocalCache';
import * as SecureStore from 'expo-secure-store';

import {AppCredit, AppProgress} from '../../globals/appManager'
import {NavigationEvents} from "react-navigation";
import CardFlip from 'react-native-card-flip';

const back = require('./img/back.png');
const removed = require('./img/cross-wrong.png');
const apple = require('./img/apple.jpg');
const apricot = require('./img/apricot.jpg');
const orange = require('./img/orange.png');
const pear = require('./img/pear.jpg');
const pinaepple = require('./img/pineapple.png');
const popeyes = require('./img/popeyes.jpg');
const correct = require('./img/correct.png');

const alcohol = require('./img/alcohol.jpg');
const workout = require('./img/Workout.jpg');
const lie = require('./img/lie.jpg');
const late = require('./img/late.jpg');
const run = require('./img/run.jpg');
const smoke = require('./img/smoke.jpg');


let initArray1 = [{ id: 0, img: apple, selected: false, type: 'healthy', removed: false, name: apple },
{ id: 1, img: apricot, selected: false, type: 'healthy', removed: false, name: apricot },
{ id: 2, img: orange, selected: false, type: 'healthy', removed: false, name: orange },
{ id: 3, img: pear, selected: false, type: 'healthy', removed: false, name: pear },
{ id: 4, img: pinaepple, selected: false, type: 'healthy', removed: false, name: pinaepple },
{ id: 5, img: popeyes, selected: false, type: 'unhealthy', removed: false, name: popeyes },
{ id: 6, img: apple, selected: false, type: 'healthy', removed: false, name: apple },
{ id: 7, img: apricot, selected: false, type: 'healthy', removed: false, name: apricot },
{ id: 8, img: orange, selected: false, type: 'healthy', removed: false, name: orange },
{ id: 9, img: pear, selected: false, type: 'healthy', removed: false, name: pear },
{ id: 10, img: pinaepple, selected: false, type: 'healthy', removed: false, name: pinaepple },
{ id: 11, img: popeyes, selected: false, type: 'unhealthy', removed: false, name: popeyes }];


let initArray2 = [{ id: 0, img: alcohol, selected: false, type: 'unhealthy', removed: false, name: alcohol },
    { id: 1, img: workout, selected: false, type: 'healthy', removed: false, name: workout },
    { id: 2, img: lie, selected: false, type: 'unhealthy', removed: false, name: lie },
    { id: 3, img: late, selected: false, type: 'unhealthy', removed: false, name: late },
    { id: 4, img: run, selected: false, type: 'healthy', removed: false, name: run },
    { id: 5, img: smoke, selected: false, type: 'unhealthy', removed: false, name: smoke },
    { id: 6, img: alcohol, selected: false, type: 'unhealthy', removed: false, name: alcohol },
    { id: 7, img: workout, selected: false, type: 'healthy', removed: false, name: workout },
    { id: 8, img: lie, selected: false, type: 'unhealthy', removed: false, name: lie },
    { id: 9, img: late, selected: false, type: 'unhealthy', removed: false, name: late },
    { id: 10, img: run, selected: false, type: 'healthy', removed: false, name: run },
    { id: 11, img: smoke, selected: false, type: 'unhealthy', removed: false, name: smoke }];

export class CardGame extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            score: 0,
            Images: initArray1,
            selected: -1,
            level: 1,
            fail: false
        });
        this.sortOrder = this.sortOrder.bind(this);
    }

    /**
     * Sort the order of array every time entering to this page
     */
    async sortOrder() {
        // console.log(JSON.stringify(initArray1));
        var i, j, temp;
        var arr = this.state.level===1?initArray1:initArray2;
        for (let k = 0; k < arr.length; k++) {
            arr[k][`selected`] = false;
            // arr[k][`removed`] = false;
            if (arr[k][`removed`] === true) {
                arr[k][`img`] = arr[k][`name`];
                arr[k][`removed`] = false;
            }
        }
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        // let array = initArray1.sort(()=>Math.random() - 0.5);
        this.setState({
            score: 0,
            selected: -1,
            Images: arr,
        });
        // console.log(JSON.stringify(this.state.Images));
    }


    /**
     * Select card
     * @param {int} cardID the id of selected card 
     */
    handleClick(cardID) {
        this.flipCard();
        // Select first card
        if (this.state.selected === -1 && !this.state.Images[cardID][`removed`]) {
            this.state.Images[cardID][`selected`] = true;
            this.setState({
                selected: cardID,
                Images: this.state.Images,
            })
            // console.log("Update first pick: " + JSON.stringify(this.state.Images));
            // console.log("clicked " + JSON.stringify(this.state.Images[cardID]));
        }
        // Select second card
        else if (this.state.selected !== -1 && this.state.Images[cardID].selected !== true && !this.state.Images[cardID][`removed`] && this.state.selected !== cardID) {
            console.log(this.state.Images[this.state.selected][`img`] + " ??? " + this.state.Images[cardID][`img`]);
            this.state.Images[cardID][`selected`] = true;
            if (this.state.Images[this.state.selected][`img`] === this.state.Images[cardID][`img`]) {
                // Check for healthy
                if (this.state.Images[cardID][`type`] === 'unhealthy') {
                    this.state.score -= 5;
                    this.setState({
                        fail: true
                    })
                } else {
                    this.state.score += 2;
                }
                // Update state
                this.setState({
                    Images: this.state.Images,
                    selected: -1,
                    score: this.state.score,
                })
            }
            else {
                var prev = this.state.selected;
                this.setState({
                    selected: cardID,
                });
                setTimeout(
                    () => {
                        this.state.Images[prev][`selected`] = false;
                        this.setState({
                            Images: this.state.Images
                        });
                    }
                    , 1000)
                console.log("not same!!!");
                console.log(JSON.stringify(this.state.Images[this.state.selected]) + " !== " + JSON.stringify(this.state.Images[cardID]));
            }
        }
    }

    // displaySecond(id) {
    //     this.state.Images[id][`selected`] = false;
    //     this.setState({
    //         Images: this.state.Images
    //     });
    // }

    /**
     * Remove the card has been selected
     */
    async removeCard() {
        // console.log("remove: " + this.state.selected);
        console.log("\nUser: " + await readFromCache("user"));
        console.log("\naccessToken: " + await readFromCache("accessToken"));
        console.log("\nidToken: " + await readFromCache("idToken"));
        console.log("\nrefreshToken: " + await readFromCache("refreshToken"));
        // If the food is truly unhealthy
        if (this.state.selected !== -1) {
            this.state.Images[this.state.selected][`removed`] = true;
            if (this.state.Images[this.state.selected][`type`] === 'unhealthy') {
                this.state.Images[this.state.selected][`img`] = correct;
                this.state.score += 2;
                this.setState({
                    score: this.state.score,
                    Images: this.state.Images,
                    selected: -1,
                })
            } else {
                this.state.Images[this.state.selected][`img`] = removed;
                this.state.score -= 5;
                this.setState({
                    score: this.state.score,
                    selected: -1,
                    Images: this.state.Images,
                    fail: true
                })
            }
        }
    }

    async componentDidUpdate() {
        for (let i = 0; i < this.state.Images.length; i++) {
            if (this.state.Images[i][`selected`] === false) {
                return
            }
        }
        if (this.state.fail === true) {
            Alert.alert(
                'Game Over!',
                'You lose! Learn more knowledge about hypertension from video first!' ,
                [
                    {
                        text: 'continue', onPress:
                            () => {
                                console.log('fail');
                            }
                    }
                ],
                { cancelable: false }
            );
        }
        else {
            const gold = this.state.score * 2;
            await writeToCache("level", "2");
            AppCredit.addCredit(gold);
            Alert.alert(
                'Level Up!',
                'You win this game! You have earned ' + gold +  ' gold from this game' ,
                [
                    {
                        text: 'continue', onPress:
                            () => {
                                console.log('resending');
                            }
                    }
                ],
                { cancelable: false }
            );
        }
    }

    flipCard() {
        if (this.value >= 90) {
            Animated.timing(this.animatedValue, {
                toValue: 0,
                duration: 800
            }).start();
        } else {
            Animated.timing(this.animatedValue, {
                toValue: 180,
                duration: 800
            }).start();
        }
    }

    async UNSAFE_componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg']
        });

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        });

        let level = await readFromCache("level");
        console.log(this.state.Images);

        this.setState({
            score: 0,
            selected: -1,
        });
        if (level !== null) {
            if (level === "2") {
                this.setState({
                    level: 2
                })
            } else {
                this.setState({
                    level: 1
                })
            }

        }

        if (this.state.level === 2) {
            this.setState({
                Images: initArray2,
            })
        } else {
            this.setState({
                Images: initArray1,
            })
        }
        let l = this.state.Images;
        this.sortOrder();
        // for (let i = 0; i < this.state.Images.length; i++) {
        //     l[i][`selected`] = false;
        //     if (l[i][`removed`] === true) {
        //         l[i][`img`] = l[i][`name`];
        //         l[i][`removed`] = false;
        //     }
        // }
        this.setState({
            Images: l
        })
        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
                require('./msc/bgm.mp3'),
                {
                    shouldPlay: false,
                    isLooping: true
                }
            );
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }



    render() {
        const frontAnimatedStyle = {
            transform: [
                { rotateX: this.frontInterpolate }
            ]
        };

        const backAnimatedStyle = {
            transform: [
                { rotateX: this.backInterpolate }
            ]
        };

        return (
            <View style={styles.bodys} >
                <NavigationEvents onWillFocus={()=>this.UNSAFE_componentWillMount()}></NavigationEvents>
                <Text style={styles.title}>Score: {this.state.score}</Text>
                <View style={styles.container}>
                    {/*<Animated.View style={[frontAnimatedStyle, {width: 400, height: 800, backfaceVisibility: 'hidden'}]}>*/}
                    {/*    <TouchableOpacity style={{*/}
                    {/*            width: '24%',*/}
                    {/*            height: '24%',*/}
                    {/*            resizeMode: 'stretch',*/}
                    {/*            display: 'flex',*/}
                    {/*            alignItems: "center",*/}
                    {/*            justifyContent: "center",*/}
                    {/*            textAlign: "center",*/}

                    {/*        }} onPress={()=>this.flipCard()}>*/}
                    {/*            <Image style={styles.box} source={back} />*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</Animated.View>*/}
                    {/*<Animated.View style={[backAnimatedStyle, {width: 400, height: 800, backfaceVisibility: 'hidden'}]}>*/}
                    {/*    <TouchableOpacity style={{*/}
                    {/*        width: '24%',*/}
                    {/*        height: '24%',*/}
                    {/*        resizeMode: 'stretch',*/}
                    {/*        display: 'flex',*/}
                    {/*        alignItems: "center",*/}
                    {/*        justifyContent: "center",*/}
                    {/*        textAlign: "center",*/}
                    {/*    }} onPress={()=>this.flipCard()}>*/}
                    {/*        <Image style={styles.box} source={apple} />*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</Animated.View>*/}
                    {this.state.Images.map((item, key) =>
                        <TouchableOpacity style={{
                            width: '24%',
                            height: '24%',
                            resizeMode: 'stretch',
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            backfaceVisibility: "hidden"
                        }} key={key} onPress={this.handleClick.bind(this, key)}>
                            <Image style={styles.box} source={item.selected === true?item.img:back} />
                        </TouchableOpacity>
                    )}
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.gameBtn} onPress={this.sortOrder}>
                            <Text style={{
                                fontSize: 16,
                                color: 'white'
                            }}>
                                Reset Game
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gameBtn} onPress={this.removeCard.bind(this)}>
                            <Text style={{
                                fontSize: 16,
                                color: 'white'
                            }}>
                                Remove Flipped Card
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    minHeight: 140,
                    width: '100%'
                }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gameBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: '100%',
        color: 'white',
        backgroundColor: 'rgb(50,50,50)',
        marginBottom: 14,
        padding: 12,
        borderRadius: 10,

        shadowColor: '#00fa9a',
        shadowOpacity: 0.2,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 20,
    },
    bodys: {
        // flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'green'
    },

    title: {
        marginTop: 40,
        fontSize: 30,
        textAlign: 'center',
        position: 'relative',
        color: 'white'
    },

    container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        // flex: 1,
        height: '65%',
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 30,
        marginBottom: 30,

    },

    box: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%'

    },
    buttons: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    button: {
        // flex: 1,
        position: 'relative',
        marginTop: 5,
    }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';
// import { back, removed, apple, apricot, orange, pear, pinaepple, popeyes, correct } from './imgIndex';
import { Audio } from 'expo-av';


const back = require('./img/back.png');
const removed = require('./img/cross-wrong.png');
const apple = require('./img/apple.jpg');
const apricot = require('./img/apricot.jpg');
const orange = require('./img/orange.png');
const pear = require('./img/pear.jpg');
const pinaepple = require('./img/pineapple.png');
const popeyes = require('./img/popeyes.jpg');
const correct = require('./img/correct.png');



let initArray = [{ id: 0, img: apple, selected: false, type: 'healthy', removed: false, name: apple },
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


export class CardGame extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            score: 0,
            Images: initArray,
            selected: -1,
        });
        this.sortOrder = this.sortOrder.bind(this);
    }

    /**
     * Sort the order of array every time entering to this page
     */
    sortOrder() {
        console.log(JSON.stringify(initArray));
        var i, j, temp;
        var arr = initArray;
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
        // let array = initArray.sort(()=>Math.random() - 0.5);
        this.setState({
            score: 0,
            selected: -1,
            Images: arr,
        });
        console.log(JSON.stringify(this.state.Images));
    }


    /**
     * Select card
     * @param {int} cardID the id of selected card 
     */
    handleClick(cardID) {
        // Select first card
        if (this.state.selected === -1 && !this.state.Images[cardID][`removed`]) {
            this.state.Images[cardID][`selected`] = true;
            this.setState({
                selected: cardID,
                Images: this.state.Images,
            })
            // console.log("Update first pick: " + JSON.stringify(this.state.Images));
            console.log("clicked " + JSON.stringify(this.state.Images[cardID]));
        } 
        // Select second card
        else if (this.state.selected !== -1 && this.state.Images[cardID].selected !== true && !this.state.Images[cardID][`removed`] && this.state.selected !== cardID) {
            console.log(this.state.Images[this.state.selected][`img`] + " ??? " + this.state.Images[cardID][`img`]);
            this.state.Images[cardID][`selected`] = true;
            if (this.state.Images[this.state.selected][`img`] === this.state.Images[cardID][`img`]) {
                // Check for healthy
                if (this.state.Images[cardID][`type`] === 'unhealthy') {
                    this.state.score -= 5;
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
    removeCard() {
        console.log("remove: " + this.state.selected);
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
                })
            }
        }
    }

    componentDidUpdate() {
        for (let i = 0; i < this.state.Images.length; i++) {
            if (this.state.Images[i][`selected`] === false) {
                return
            }
        }
        Alert.alert(
            'Congratualation!',
            'You win this game! You have unlock the next stage!',
            [
                {text: 'continue', onPress: () => {
                    console.log('resending');
                }}
            ],
            {cancelable: false}
        )
    }

    async UNSAFE_componentWillMount() {
        try {
            const { sound: soundObject, status } = await Audio.Sound.createAsync(
              require('./msc/bgm.mp3'),
              { shouldPlay: true,
                isLooping: true
              }
            );
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
        }
    }

    render() {
        
        return (
            <View style={styles.bodys} >
                <Text style={styles.title}>Score: {this.state.score}</Text>
                <View style={styles.container}>
                    {this.state.Images.map((item, key) =>
                        <TouchableOpacity key={key} onPress={this.handleClick.bind(this, key)}>
                            <Image style={styles.box} source={item.selected ? item.img : back} />
                        </TouchableOpacity>
                    )}
                    <View style={styles.buttons}>
                        <Button title="reset" onPress={this.sortOrder}></Button>
                        <Button title="remove" onPress={this.removeCard.bind(this)}></Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodys: {
        flex: 1,
        flexDirection: 'column',
        // backgroundColor: 'green'
    },

    title: {
        marginTop: 40,
        fontSize: 30,
        textAlign: 'center',
        position: 'relative'
    },

    container: {
        // flex: 1,
        height: 500,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        // backgroundColor: 'gray',
        marginTop: 30,
        justifyContent: 'center',
        marginBottom: 30,
        // borderWidth: 3,
        // borderColor: 'black',
    },

    box: {
        width: 90,
        height: 120,
        margin: 5,
    },
    buttons: {
        marginTop: 10,
        position: 'relative',
        flexDirection: 'column',
    },

    button: {
        // flex: 1,
        position: 'relative',
        marginTop: 5,
    }
});
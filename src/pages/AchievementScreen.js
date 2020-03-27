import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, TouchableOpacity, Alert, Animated } from 'react-native';
import { learningProgress, totalCredits, addCredit, achieve1, achieve2, achieve3, completeAch1, completeAch2, completeAch3 } from '../globals/progress'
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import { withTheme } from 'react-native-elements';

let gold = 0;

export class AchievementScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            achAnim: new Animated.Value(0),
            achievementList: [],
            totalGold: 0,
        }

        this.focused = this.focused.bind(this);
    }


    _startAchAnim = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.achAnim, {
                    toValue: 1,
                    duration: 1000,
                }),
                Animated.timing(this.state.achAnim, {
                    toValue: 0,
                    duration: 1000
                })
            ]),
        ).start()
    };

    UNSAFE_componentWillMount() {
        this._startAchAnim();
    }

    focused() {

        this.forceUpdate()

        if (learningProgress >= 25) {
            const credit = 50;
            this.state.achievementList.push(
                {
                    title: 'Live and learn',
                    credit: credit
                }
            );

            if (!achieve1) {
                addCredit(credit);
                completeAch1();

                gold += credit
            }
        }

        if (learningProgress >= 75) {
            const credit = 25;
            this.state.achievementList.push(
                {
                    title: 'No longer a rookie',
                    credit: credit
                }
            );

            if (!achieve2) {
                addCredit(credit);
                completeAch2();

                gold += credit
            }

        }

        if (learningProgress >= 100) {
            const credit = 100;
            this.state.achievementList.push(
                {
                    title: 'Say no to Hypertension!',
                    credit: credit
                }
            );


            if (!achieve3) {
                addCredit(credit);
                completeAch3();

                gold += credit
            }
        }

        this.setState({totalGold: gold})

        console.log(this.state.achievementList.length)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onWillFocus={this.focused}
                />
                <View style={{
                    height: '36%',
                    width: '100%',
                    backgroundColor: 'rgb(70,70,70)',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        margin: 20
                    }}>
                        Gold earned from achievements
                    </Text>


                    <Animated.View style={{
                        height: '50%',
                        aspectRatio: 1,
                        backgroundColor: '#40e0d0',
                        borderRadius: 999,
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',

                        shadowColor: '#00fa9a',
                        shadowOpacity: this.state.achAnim,
                        shadowOffset: { height: 0, width: 0 },
                        shadowRadius: 18,
                    }}>
                        <Text style={{
                            fontSize: 36,
                            color: 'white'
                        }}>
                            {this.state.totalGold}
                        </Text>
                    </Animated.View>
                </View>
                <ScrollView style={{
                    width: '100%', height: '100%', backgroundColor: 'rgb(70,70,70)',
                }}>
                    <View style={styles.scroll}>
                        {this.state.achievementList.map((item, key) =>
                            <TouchableOpacity style={styles.achCnt} key={key} onPress={() => Alert.alert('You have earned ' + item.credit + ' credits from this achievement')}>
                                <Text style={styles.achItem}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    scroll: {
        marginTop: 40,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'white',
    },
    achCnt: {
        display: "flex",
        padding: 20,
        justifyContent: 'center',

        width: '80%',
        backgroundColor: '#40e0d0',
        marginBottom: 20,
        borderRadius: 10,

        shadowColor: '#00fa9a',
        shadowOpacity: 0.9,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 18,
    },
    achItem: {
        color: 'black',
        fontSize: 16,
    }
});


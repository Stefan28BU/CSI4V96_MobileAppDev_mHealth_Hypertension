import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button, FlatList, SafeAreaView, ScrollView, Animated, ImageBackground, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

import { LinearGradient } from 'expo-linear-gradient';

import { MHealthBackBtn, MHealthBtn, PlayBtn, SignInBtn, SignUpBtn, EditProfileBtn } from '../customComponents/CustomButtons';


import { AppCredit, AppProgress } from '../globals/appManager';

import { NavigationEvents } from 'react-navigation';

import { Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import { deleteItem } from '../localCache/LocalCache';

export class DailyCheckinScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.checkItem}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Log Your Meal')}  style={styles.checkinTouch}>
                        <MaterialCommunityIcons
                            color={'#1e90ff'}
                            name="food-fork-drink"
                            size={50}
                        />
                        <Text style={styles.checkTxt}>
                            Log My Meal
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkItem}>
                    <TouchableOpacity  style={styles.checkinTouch}>
                        <FontAwesome
                            color={'#ff6347'}
                            name="tachometer"
                            size={50}
                        />
                        <Text style={styles.checkTxt}>
                            Log My Blood Pressure
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkItem}>
                    <TouchableOpacity  style={styles.checkinTouch}>
                        <MaterialCommunityIcons
                            color={'#ffe4c4'}
                            name="medical-bag"
                            size={50}
                        />
                        <Text style={styles.checkTxt}>
                            Log My Medicine
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkItem}>
                    <TouchableOpacity  style={styles.checkinTouch}>
                        <MaterialCommunityIcons
                            color={'#8a2be2'}
                            name="run"
                            size={50}
                        />
                        <Text style={styles.checkTxt}>
                            Log My Exercise Routine
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(70,70,70)',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    checkItem: {
   
        width: '100%',
        // height: '10%',
        borderRadius: 20,
        backgroundColor: '#40e0d0',

        shadowColor: '#00fa9a',
        shadowOpacity: 0.3,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 18,
        marginBottom: 20,
    },
    checkTxt: {
        marginTop: 4,
        color: 'white',
        fontSize: 20,
    },
    checkinTouch: {
        width: '100%',
        padding: 20,
        borderRadius: 20,
        // backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
});

import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button, FlatList, SafeAreaView, ScrollView, Animated, ImageBackground, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { Auth } from 'aws-amplify';

import { LinearGradient } from 'expo-linear-gradient';

import { MHealthBackBtn, MHealthBtn, PlayBtn, SignInBtn, SignUpBtn, EditProfileBtn } from '../customComponents/CustomButtons';


import {AppCredit, AppProgress} from '../globals/appManager';

import { NavigationEvents } from 'react-navigation';

import { Entypo, MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import { deleteItem } from '../localCache/LocalCache';

export class DailyCheckinScreen extends Component {
    constructor(props) {
        super(props)

        this.state ={

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> This checkin page is in progress... </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(70,70,70)',
    }
});

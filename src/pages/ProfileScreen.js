import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';


import { EditProfileBtn } from '../customComponents/CustomButtons';


export class ProfileScreen extends Component {

  render() {

    const profileFieldList = [
      {
        key: 'Total Hours Spent:',
        value: '2'
      },
      {
        key: 'Achievements',
        value: ''
      },
      {
        key: 'Age:',
        value: '22'
      },
      {
        key: 'Gender:',
        value: 'Male'
      },
    ]

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(235,235,235)' }}>
        <View style={styles.headerWrapper}>
          <Avatar size="large" rounded title="JD" />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.location}>Waco, TX</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <FlatList
            contentContainerStyle={styles.listStyle}
            data={profileFieldList}
            renderItem={({ item }) =>
              <View style={styles.profileFields}>
                <Text style={styles.profileFieldText}>{item.key} {item.value}</Text>
              </View>
            }
          />
          <View style={styles.btnCont}>
            <EditProfileBtn title="Edit Profile" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnCont: {
    alignItems: 'center', 
    justifyContent: 'center',
    // backgroundColor: 'black',
    flex: 1,
    width: '100%',
    // marginTop: 0,
    // marginTop: 100,
    marginBottom: 50
  },
  listStyle: {
    shadowColor: 'black',
    shadowOpacity: 0.23,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    borderTopWidth: 1,
    borderColor: 'rgb(235,235,235)'
  },

  profileFields: {
    padding: 20,
    borderBottomWidth: 1,
    minWidth: '100%',
    backgroundColor: 'white',
    borderColor: 'rgb(235,235,235)'
  },
  profileFieldText: {
    fontSize: 16,
  },
  bodyWrapper: {
    height: '64%',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
  },
  userName: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    color: 'white',
  },
  location: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    color: 'white',
  },
  headerWrapper: {
    height: '36%',
    width: '100%',
    backgroundColor: '#40e0d0',
    alignItems: 'center',
    // padding: 20,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    // borderBottomLeftRadius: 9999,
    // borderBottomRightRadius: 9999,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 15,

  },
  avatarContStyle: {
    height: 100,
    aspectRatio: 1,
    backgroundColor: 'black'
  },
  avatarStyle: {
    height: 100,
    aspectRatio: 1,
    // color: 'black',
    // backgroundColor: 'black',
    borderRadius: 999,
  },
});
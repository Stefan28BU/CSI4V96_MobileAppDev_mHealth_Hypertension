import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';


import { MHealthBackBtn, MHealthBtn, PlayBtn, SignInBtn, SignUpBtn, EditProfileBtn } from '../customComponents/CustomButtons';


const SignOutBtn = (props) => {
  const { title = {}, style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity title={title} onPress={onPress} style={[styles.signOutCont, style]}>
      <Text style={[styles.signOutText, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <View style={styles.headerWrapper}>
          <Avatar size="large" rounded title="JD" />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.location}>Waco, TX</Text>
        </View>
        <View style={styles.viewCont}>
          <View style={styles.profileFields}>
            <Text style={styles.profileFieldText}>Learning Progress: 0% </Text>
          </View>
          <View style={styles.profileFields}>
            <Text style={styles.profileFieldText}>Hours Spent: 2 </Text>
          </View>
          <View style={styles.profileFields}>
            <Text style={styles.profileFieldText}>Achievements</Text>
          </View>
          <View style={styles.profileFields}>
            <Text style={styles.profileFieldText}>Gaming Statistics</Text>
          </View>
          <View style={styles.profileFields}>
            <Text style={styles.profileFieldText}>My Information</Text>
          </View>
          <SignOutBtn title="Sign Out" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewCont: {
    // backgroundColor: 'black',
    width: '100%',
    height: '65%',
    bottom: 0,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: 'rgb(235,235,235)',
  },
  btnCont: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40e0d0',
    height: '15%',
    width: '100%',
    bottom: 0,
    position: "absolute"
    // marginTop: 0,
    // marginTop: 100,
    // marginBottom: 50

  },
  listCont: {
    height: '65%',

  },
  listStyle: {
    borderTopWidth: 1,
    borderColor: 'rgb(235,235,235)',
  },

  profileFields: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    minWidth: '100%',
    backgroundColor: 'white',
    borderColor: 'rgb(235,235,235)',
    alignItems: "center"
  },
  profileFieldText: {
    fontSize: 16,
  },
  bodyWrapper: {
    // flex: 2,
    backgroundColor: 'black',
    height: '50%',
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
    height: '35%',
    // flex: 1,
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
  signOutCont: {
    display: 'flex',
    minHeight: '13%',
    minWidth: '100%',
    padding: 18,
    // marginLeft: 15,
    // marginRight: 15,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40e0d0',
    borderWidth: 2,
    // borderRadius: 5,
    borderColor: 'transparent',

    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 6,
    // marginBottom: 0,
  },

  signOutText: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase'
  },
});
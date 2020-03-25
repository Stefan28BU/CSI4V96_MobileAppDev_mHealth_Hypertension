import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button, FlatList, SafeAreaView, ScrollView, Animated, ImageBackground, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { Auth } from 'aws-amplify';


import { MHealthBackBtn, MHealthBtn, PlayBtn, SignInBtn, SignUpBtn, EditProfileBtn } from '../customComponents/CustomButtons';

import { completePart1, completePart2, completePart3, completePart4, compP1, compP2, compP3, compP4, learningProgress, getProgress } from '../globals/progress'
import { NavigationEvents } from 'react-navigation';

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
    this.signOut = this.signOut.bind(this);
    this.focused = this.focused.bind(this)

    this.state = {
      progressShaAnim: new Animated.Value(0),
      progressSizeAnim: new Animated.Value(40),
      completeAnim: new Animated.Value(0),
    }
  }

  _startProgressAnim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.progressShaAnim, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(this.state.progressShaAnim, {
          toValue: 0,
          duration: 1000
        })
      ]),
    ).start()
  };

  _startProgressAnim2 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.progressSizeAnim, {
          toValue: 48,
          duration: 1000,
        }),
        Animated.timing(this.state.progressSizeAnim, {
          toValue: 40,
          duration: 1000
        })
      ]),
    ).start()
  };

  _startCompleteAnim = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.completeAnim, {
          toValue: 0.4,
          duration: 1000,
        }),
        Animated.timing(this.state.completeAnim, {
          toValue: 0,
          duration: 1000
        })
      ]),
    ).start()
  };

  navigateToHome() {
    this.props.navigation.navigate('mHealth');
  }

  signOut() {
    console.log('trying to sign out');
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
    this.navigateToHome();
  }

  focused() {
    this.forceUpdate();
  }

  UNSAFE_componentWillMount() {
    this._startProgressAnim();
    this._startCompleteAnim();
    this._startProgressAnim2();
  }

  progressStatus() {
    if (learningProgress === 100) {
      Alert.alert("Congratulations! You have learned about Hypertension!")
    }
    if (learningProgress === 75) {
      Alert.alert("You have completed the thrid part, only one to go!")
    }
    if (learningProgress === 50) {
      Alert.alert("You have completed the second part, you are half way there!")
    }
    if (learningProgress === 25) {
      Alert.alert("You have completed the first part, please continue learning!")
    }
    if (learningProgress === 0) {
      Alert.alert("Select the beginning tab at the bottom to learn about Hypertension!")
    }
  }

  render() {



    return (
      <View style={{
        flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(70,70,70)',

      }}>
        <NavigationEvents onWillFocus={this.focused} />
        <View onPress={this.progressStatus} style={styles.headerWrapper}>
          <Animated.View style={{
            position: 'relative',
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            textAlign: 'center',
            height: '80%',
            aspectRatio: 1,
            // borderRadius: 20,
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderColor: 'rgba(0,0,0,0.5)',


            shadowColor: 'black',
            shadowOpacity: 0.5,
            shadowOffset: { height:10, width: 0 },
            shadowRadius: 18,

          }}
          >

            <TouchableOpacity style={{
          
              aspectRatio: 1,
              height: '100%',
              display: "flex",
              alignItems: "center",
              justifyContent: 'center',
              textAlign: 'center',
              position: 'absolute',
              top: 0,
              left: 0,

            }} onPress={this.progressStatus} >

              <Animated.View style={{
                // borderTopLeftRadius: 20,

                // backgroundColor: 'white',
                aspectRatio: 1,
                height: '48%',
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                left: 0,

              }}>
                <ImageBackground source={require('../imageAssets/04.jpg')} style={{
                  width: '100%', height: '100%', resizeMode: "cover",

                }} >
                  {learningProgress < 25 &&
                    <Animated.View style={{
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      width: '100%',
                      height: '100%'
                    }}>
                    </Animated.View>
                  }
                  {learningProgress >= 25 &&
                    <Animated.View style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#40e0d0',
                      opacity: this.state.completeAnim,

                    }}>
                    </Animated.View>
                  }
                </ImageBackground>
              </Animated.View>

              <Animated.View style={{
                // borderTopRightRadius: 20,

                backgroundColor: 'green',
                aspectRatio: 1,
                height: '48%',
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                left: '52%',

              }}>

                <ImageBackground source={require('../imageAssets/03.jpg')} style={{
                  width: '100%', height: '100%', resizeMode: "cover"

                }} >

                  {learningProgress < 50 &&
                    <Animated.View style={{
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      width: '100%',
                      height: '100%'
                    }}>
                    </Animated.View>
                  }
                  {learningProgress >= 50 &&
                    <Animated.View style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#40e0d0',
                      opacity: this.state.completeAnim,
                    }}>
                    </Animated.View>
                  }
                </ImageBackground>
              </Animated.View>

              <Animated.View style={{
                // borderBottomLeftRadius: 20,

                backgroundColor: 'black',
                aspectRatio: 1,
                height: '48%',
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: '52%',
                left: 0,

              }}>
                <ImageBackground source={require('../imageAssets/02.jpg')} style={{
                  width: '100%', height: '100%', resizeMode: "cover"

                }} >
                  {learningProgress < 75 &&
                    <Animated.View style={{
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      width: '100%',
                      height: '100%'
                    }}>
                    </Animated.View>
                  }
                  {learningProgress >= 75 &&
                    <Animated.View style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#40e0d0',
                      opacity: this.state.completeAnim,
                    }}>
                    </Animated.View>
                  }
                </ImageBackground>

              </Animated.View>


              <Animated.View style={{
                // borderBottomRightRadius: 20,

                backgroundColor: 'pink',
                aspectRatio: 1,
                height: '48%',
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                textAlign: 'center',
                position: 'absolute',
                top: '52%',
                left: '52%',

              }}>

                <ImageBackground source={require('../imageAssets/01.jpg')} style={{
                  width: '100%', height: '100%', resizeMode: "cover"

                }} >

                  {learningProgress < 100 &&
                    <Animated.View style={{
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      width: '100%',
                      height: '100%'
                    }}>
                    </Animated.View>
                  }
                  {learningProgress >= 100 &&
                    <Animated.View style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#40e0d0',
                      opacity: this.state.completeAnim,
                    }}>
                    </Animated.View>
                  }
                </ImageBackground>
              </Animated.View>


              <Animated.View style={{
                backgroundColor: 'rgba(70,70,70,0.8)',
                aspectRatio: 1,
                borderRadius: 999,
                height: this.state.progressSizeAnim,
                display: "flex",
                alignItems: "center",
                justifyContent: 'center',
                textAlign: 'center',

                shadowColor: '#00fa9a',
                shadowOpacity: this.state.progressShaAnim,
                shadowOffset: { height: 0, width: 0 },
                shadowRadius: 18,
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 13,
                }}>
                  {learningProgress}%
              </Text>

              </Animated.View>
            </TouchableOpacity>

          </Animated.View>

        </View>
        <View style={styles.viewCont}>

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
          <SignOutBtn title="Sign Out" onPress={this.signOut} />
          <View style={{
            height: 110,
            width: '100%'
          }} />
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
    // backgroundColor: '#40e0d0',
    backgroundColor: 'rgb(70,70,70)',
    borderWidth: 2,
    // borderRadius: 5,
    borderColor: 'transparent',

    // shadowColor: 'black',
    // shadowOpacity: 0.4,
    // shadowOffset: { height: 0, width: 0 },
    // shadowRadius: 6,
    // marginBottom: 0,
  },

  signOutText: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase'
  },
});
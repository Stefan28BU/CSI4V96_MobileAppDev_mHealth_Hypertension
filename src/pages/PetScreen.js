import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import Animation from './pet/Animation';
import Pet from './pet/Pet'
import { Asset } from 'expo-asset';
import { Video } from 'expo-av';
import { NavigationEvents } from 'react-navigation';

export const MyPet = new Pet('Bob');

export class PetScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fullnessStatus: 0,
      cleanlinessStatus: 0,
      fitnessStatus: 0,
    }

    this.focused = this.focused.bind(this);
  }

  UNSAFE_componentWillMount() {

  }

  focused() {
    this.forceUpdate();

    this.setState({
      fullnessStatus: MyPet.fullness,
      cleanlinessStatus: MyPet.cleanliness,
      fitnessStatus: MyPet.fitness,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationEvents onWillFocus={this.focused} />
        <Animation
          animationName={MyPet.updatePetStatus()}
        >
        </Animation>
        <View style={styles.petDash}>
          <View style={styles.petStatusBarA}>
            <View style={{
              width: this.state.fullnessStatus.toString().concat('%'),
              padding: 6,
              borderTopLeftRadius: 999,
              borderBottomLeftRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.7)',
            }}>
              <Text style={styles.petBarText}>
                Fullness: {MyPet.fullness}
              </Text>
            </View>
          </View>
          <View style={styles.petStatusBarB}>
            <View style={{
              width: this.state.cleanlinessStatus.toString().concat('%'),
              padding: 6,
              borderTopLeftRadius: 999,
              borderBottomLeftRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.7)',
            }}>
              <Text style={styles.petBarText}>
                Cleanliness: {MyPet.cleanliness}
              </Text>
            </View>
          </View>
          <View style={styles.petStatusBarC}>
            <View style={{
              width: this.state.fitnessStatus.toString().concat('%'),
              padding: 6,
              borderTopLeftRadius: 999,
              borderBottomLeftRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.7)',
            }}>
              <Text style={styles.petBarText}>
                Fitness: {MyPet.fitness}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


//style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(70,70,70)',
  },
  petDash: {
    width: '100%',
    paddingTop: 20,
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  petStatusBarA: {
    width: '80%',
    borderRadius: 999,
    backgroundColor: '#ff1493',
    margin: 6,

    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { height: 6, width: 0 },
    shadowRadius: 16,
  },
  petStatusBarB: {
    width: '80%',
    borderRadius: 999,
    backgroundColor: '#00ff00',
    margin: 6,

    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { height: 6, width: 0 },
    shadowRadius: 16,
  },
  petStatusBarC: {
    width: '80%',
    borderRadius: 999,
    backgroundColor: '#00bfff',
    margin: 6,

    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { height: 6, width: 0 },
    shadowRadius: 16,
  },
  petBarText: {
    color: 'black',
    fontSize: 14,
  }
});

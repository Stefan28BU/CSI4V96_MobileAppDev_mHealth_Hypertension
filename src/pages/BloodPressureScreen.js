import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import DialogInput from 'react-native-dialog-input';
import { writeToCache, readFromCache } from './../localCache/LocalCache';
import { NavigationEvents } from 'react-navigation';
import Colors from '../globals/Colors';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export class BloodPressure extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            date: [],
            pressure: [123, 114, 100, 103, 102],
            today: false,
            enter: false,
            value: 0,
        });
    }

    async UNSAFE_componentWillMount() {
        let bloodPressure = await readFromCache("bloodPressure");
        console.log(bloodPressure);
        if (bloodPressure !== null) {
            let x = bloodPressure;
            x = x.substring(1);
            x = x.substring(0, x.length - 1);
            const m = x.split(",");
            let arr = [];
            for (let i = 0; i < m.length; i++) {
                arr.push(parseInt(m[i]));
            }
            console.log(arr);
            this.setState({
                pressure: arr
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 12, alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'rgb(70,70,70)' }}>
                <NavigationEvents />
                <ScrollView horizontal={true} contentContainerStyle={{
                    height: 0,
                   
                }} style={{
                    borderRadius: 16,
                    backgroundColor: "rgb(30,30,30)",
                }}>
                    <LineChart
                        data={{

                            datasets: [
                                {
                                    data: this.state.pressure
                                },
                                {
                                    data: [200, 33, 123, 22, 90]
                                }
                            ]
                        }}
                        width={120 + 50 * data.length} // from react-native
                        height={300}
                        yAxisInterval={100} // optional, defaults to 1
                        verticalLabelRotation={30}

                        chartConfig={{
                            backgroundColor: "rgb(30,30,30)",

                            backgroundGradientFrom: "rgb(30,30,30)",
                            backgroundGradientTo: "rgb(30,30,30)",
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: Colors.themeColorPrimary
                            },
                        }}
                        bezier
                        style={{

                        }}
                    />
                </ScrollView>
                <View style={styles.description}>
                    <Text style={{
                        color: 'rgb(220,220,220)',
                        textAlign: "center", fontSize: 25
                    }}>
                        Today's Blood Pressure
                        </Text>
                    <Text style={{
                        color: 'rgb(220,220,220)',
                        marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20
                    }}>
                        You haven't entered your blood pressure today
                        </Text>
                    <Text style={{
                        color: 'rgb(220,220,220)',
                        marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20
                    }}>
                        (Start entering your blood pressure by press "Enter" button below.)Î
                        </Text>
                    <DialogInput isDialogVisible={this.state.enter}
                        title={"Enter your Blood Pressure"}
                        message={"Please enter your blood Pressure"}
                        hintInput={"eg. 120(mmHg)"}
                        submitInput={async (inputText) => {
                            let arr = [];
                            if (this.state.pressure !== null) {
                                arr = this.state.pressure;
                            }
                            arr.push(inputText);
                            this.setState({ value: inputText, enter: false, pressure: arr });
                            console.log(arr.toString());
                            await writeToCache("bloodPressure", "[" + arr.toString() + "]");
                            // await writeToCache("name", inputText);
                        }}
                        closeDialog={() => { this.setState({ enter: false }) }}>
                    </DialogInput>

                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.setState({ enter: true })}>
                    <Text style={{ height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 20, color: 'black' }}>Enter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        marginTop: 20,
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: 0,

        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // height: 30,
        padding: 26,
        // height: 60,
        backgroundColor: Colors.themeColorPrimary
    }
});
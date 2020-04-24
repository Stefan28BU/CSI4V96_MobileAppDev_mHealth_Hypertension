import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import DialogInput from 'react-native-dialog-input';
import { writeToCache, readFromCache } from './../localCache/LocalCache';
import { NavigationEvents } from 'react-navigation';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export class BloodPressure extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            date: [],
            pressure: [120, 121, 117, 112, 125],
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
            x = x.substring(0, x.length-1);
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
        return(
            <View style={{flex: 1}}>
                <NavigationEvents/>
                <ScrollView horizontal={true} style={{
                    width: "94%",
                    borderRadius: 16,
                    position: "absolute",
                    top: 15,
                    left: "3%",
                    right: "3%",
                }}>
                    <LineChart
                        data={{
                            // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            datasets: [
                                {
                                    data: this.state.pressure
                                    // ===null?this.state.pressure:
                                    // [
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    //     Math.random() * 100,
                                    // ]
                                }
                            ]
                        }}
                        width={120+50*data.length} // from react-native
                        height={300}
                        // yAxisSuffix="mmHg"
                        // yAxisLabel = "mmHg"
                        yAxisInterval={100} // optional, defaults to 1
                        verticalLabelRotation= {30}
                        // xLabelsOffset = {0.5}

                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            },
                        }}
                        bezier
                        style={{

                        }}
                    />
                </ScrollView>
                <View style={styles.description}>
                    <Text style={{textAlign: "center", fontSize: 25}}>Today's Blood Pressure</Text>
                    {/*{this.state.value === 0?*/}
                        <View style={{bottom: 0, top: 50, position: "absolute"}}>
                            <Text style={{marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20}}>You haven't entered your blood pressure today.</Text>
                            <Text style={{marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20}}>(Start entering your blood pressure by press "Enter" button below.)</Text>
                            <DialogInput isDialogVisible={this.state.enter}
                                         title={"Enter your Blood Pressure"}
                                         message={"Please enter your blood Pressure"}
                                         hintInput ={"eg. 120(mmHg)"}
                                         submitInput={ async (inputText) => {
                                             let arr = [];
                                             if (this.state.pressure !== null) {
                                                 arr = this.state.pressure;
                                             }
                                             arr.push(inputText);
                                             this.setState({value: inputText, enter: false, pressure: arr});
                                             console.log(arr.toString());
                                             await writeToCache("bloodPressure", "["+arr.toString()+"]");
                                             // await writeToCache("name", inputText);
                                         }}
                                         closeDialog={ () => {this.setState({enter: false})}}>
                            </DialogInput>
                            <TouchableOpacity style={styles.button} onPress={()=>this.setState({enter: true})}>
                                <Text style={{height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 18}}>Enter</Text>
                            </TouchableOpacity>
                        </View>
                    {/*:<Text style={{marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20}}>Blood Pressure: {this.state.value} mmHg.</Text>}*/}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        position: "absolute",
        top: 330,
        bottom: 10,
        left: "3%",
        width: "94%",
        backgroundColor: "rgba(26,145,226,0.61)",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    button: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60,
        backgroundColor: "rgb(98,236,0)"
    }
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import DialogInput from 'react-native-dialog-input';
import { writeToCache, readFromCache } from './../localCache/LocalCache';
import { NavigationEvents } from 'react-navigation';


export class MedicineLog extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            date: [],
            medicine: ['medicine'],
            today: false,
            enter: false,
            value: 0,
        });
    }

    async UNSAFE_componentWillMount() {
        let medicine = await readFromCache("medicine");
        console.log(medicine);
        if (medicine !== null) {
            let x = medicine;
            x = x.substring(1);
            x = x.substring(0, x.length - 1);
            const m = x.split(",");
            let arr = [];
            for (let i = 0; i < m.length; i++) {
                arr.push(parseInt(m[i]));
            }
            console.log(arr);
            this.setState({
                medicine: arr
            })
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationEvents />
                <ScrollView horizontal={false} style={{
                    width: "94%",
                    borderRadius: 1,
                    position: "absolute",
                    top: 15,
                    left: "3%",
                    right: "3%",
                }}>
                    {
                        this.state.medicine.map(result => (
                            <Text>
                                {result.toString()}{'\n'}
                            </Text>
                        ))
                    }
                    {/* <Text>
                        {this.state.medicine}{'\n'}
                    </Text> */}
                </ScrollView>

                <View style={styles.description}>
                    <Text style={{ textAlign: "center", fontSize: 25 }}>Today's Medicine</Text>
                    <View style={{ bottom: 0, top: 50, position: "absolute" }}>
                        <Text style={{ marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20 }}>You haven't entered your medicine today.</Text>
                        <Text style={{ marginTop: 20, paddingLeft: 15, paddingRight: 15, fontSize: 20 }}>(Start entering your medicine by press "Enter" button below.)</Text>
                        <DialogInput isDialogVisible={this.state.enter}
                            title={"Enter today's Medicine"}
                            message={"What medicine you had today?"}
                            hintInput={""}
                            submitInput={async (inputText) => {
                                let arr = [];
                                if (this.state.medicine !== null) {
                                    arr = this.state.medicine;
                                }
                                arr.push(inputText);
                                this.setState({ value: inputText, enter: false, medicine: arr });
                                console.log(arr.toString());
                                await writeToCache("medicine", "[" + arr.toString() + "]");
                                // await writeToCache("name", inputText);
                            }}
                            closeDialog={() => { this.setState({ enter: false }) }}>
                        </DialogInput>
                        <TouchableOpacity style={styles.button} onPress={() => this.setState({ enter: true })}>
                            <Text style={{ height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 18 }}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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

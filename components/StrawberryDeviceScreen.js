import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    FlatList
} from "react-native";
import SensorItem from "./SensorItem";
import SwitchItem from "./SwitchItem";
export default class StrawberryDeviceScreen extends React.Component {
    static navigationOptions = {
        title: "Strawberry Incubator"
    };
    constructor() {
        super();
        this.state = {
            switch1Value: false,
            switch2Value: false,
            switch3Value: false
        }
    }
    handleToggleSwitch1 = () => {
        this.setState((state) => {
            return { switch1Value: !state.switch1Value }
        });
    }
    handleToggleSwitch2 = () => {
        this.setState((state) => {
            return { switch2Value: !state.switch2Value }
        });
    }
    handleToggleSwitch3 = () => {
        this.setState((state) => {
            return { switch3Value: !state.switch3Value }
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.screen}>
                <View style={styles.sensorContainer}>
                    <SensorItem title="Temperature" value="72" />
                    <SensorItem title="Humidity" value="80%" />
                    <SensorItem title="Soil Moisture" value="853" />
                </View>
                <View style={styles.switchContainer}>
                    <SwitchItem title="Water Pump" onPress={this.handleToggleSwitch1.bind(this)} switchValue={this.state.switch1Value} />
                    <SwitchItem title="Lights" onPress={this.handleToggleSwitch2.bind(this)} switchValue={this.state.switch2Value} />
                    <SwitchItem title="Fan" onPress={this.handleToggleSwitch3.bind(this)} switchValue={this.state.switch3Value} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: 70,
    },
    sensorContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    switchContainer: {
        flexDirection: 'column',
        alignItems: "center",
        padding: 50
    }
});

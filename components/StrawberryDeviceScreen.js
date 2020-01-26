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

export default class StrawberryDeviceScreen extends React.Component {
    static navigationOptions = {
        title: "Strawberry Incubator"
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.sensorContainer}>
                <Text>Strawberry Shit!</Text>
                <Text>More Strawberry Shit!</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    screen: {
        padding: 70,
    },
    sensorContainer: {
        justifyContent: "space-between",
        flex: 1,
        flexDirection: 'row',
        padding: 50,
    }
});

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";

const SwitchItem = props => {
    return (
        <View style={styles.switchItem} >
            <Text>{props.title}: </Text>
            <Switch
                value={props.switchValue}
                onValueChange={props.onPress.bind(this)} />
        </View >
    )
}

const styles = StyleSheet.create({
    switchItem: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 50
    }
})

export default SwitchItem;
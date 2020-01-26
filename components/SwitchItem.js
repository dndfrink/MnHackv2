import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";

const SwitchItem = props => {
    return (
        <View style={styles.switchItem} >
            <Text style={styles.textStyle}>{props.title}: </Text>
            <Switch
                style={styles.switch}
                value={props.switchValue}
                onValueChange={props.onPress.bind(this)} />
        </View >
    )
}

const styles = StyleSheet.create({
    switchItem: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 50,
    },
    textStyle: {
        textAlign: "center",
        color: "blue",
        marginTop: 0,
        fontSize: 25,
    },
    switch: {
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
        marginLeft: 15
    }
})

export default SwitchItem;
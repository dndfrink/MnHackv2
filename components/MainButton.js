import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ShadowPropTypesIOS } from "react-native";

const MainButton = props => {
    return (
        <TouchableOpacity style={styles.item} onPress={props.onPress}>
            <Text style={styles.tt}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 5,
        borderTopColor: "blue",
        borderLeftColor: "blue",
        borderRightColor: "blue",
        borderWidth: 1,
        borderBottomColor: "blue",
        borderRadius: 10,
        alignItems: "center",
        width: 300
    },
    tt: {
        fontSize: 15,
        color: "blue"
    }
})
export default MainButton;
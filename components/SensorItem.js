import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SensorItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
            <Text>{props.value}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#ccc",
        alignContent: "center",
        borderColor: "blue",
        flexDirection: "column",
        borderWidth: 1,
        height: 50
    }
});
export default SensorItem;
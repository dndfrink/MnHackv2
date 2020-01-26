import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SensorItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "blue",
        borderWidth: 1
    }
});
export default SensorItem;
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

export default class DataScreen extends React.Component {
  static navigationOptions = {
    title: "Devices"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Strawberry Incubator"
        onPress={() => navigate("StrawberryDeviceScreen")}
      />
    );
  }
}

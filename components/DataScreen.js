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
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class DataScreen extends React.Component {
  static navigationOptions = {
    title: "Paired Devices"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Our Strawberry Incubator"
        onPress={() => navigate("StrawberryDeviceScreen")}
      />
    );
  }
}

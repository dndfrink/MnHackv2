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
import DeviceButton from "./DeviceButton";
export default class DataScreen extends React.Component {
  static navigationOptions = {
    title: "Paired Devices"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10
        }}
      >
        <ScrollView>
          <DeviceButton title="Our Strawberry Incubator" onPress={() => navigate("StrawberryDeviceScreen")} />
          <DeviceButton title="Our Pepper Incubator" />
          <DeviceButton title="Our Bean Incubator" />
        </ScrollView>
      </View>
    );
  }
}

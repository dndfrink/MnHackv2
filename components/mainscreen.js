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

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button title="Reference" onPress={() => navigate("ReferenceScreen")} />
    );
  }
}

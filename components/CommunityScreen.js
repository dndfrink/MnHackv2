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

export default class CommunityScreen extends React.Component {
  static navigationOptions = {
    title: "Community"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Profile", { name: "Jane" })}
      />
    );
  }
}

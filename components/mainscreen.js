import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
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
      <SafeAreaView style={styles.screen}>
        <Button title="Data" onPress={() => navigate("DataScreen")} />
        <Button title="Community" onPress={() => navigate("CommunityScreen")} />
        <Button
          title="Reference Search"
          onPress={() => navigate("RefSearch")}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  buttonItem: {
    padding: 10,
    marginVertical: 30
  }
});

import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Image
} from "react-native";
import MainButton from "./MainButton"
export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={{ fontSize: 40, fontWeight: "bold", paddingTop: 100 }}>Plantbot</Text>
        <Image style={styles.imageStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugdpuFfgiJZjU13ZPPPgnh03_CNwhwPUEamiXLBGHWvTYx97N&s' }} />
        <MainButton title="Data" onPress={() => navigate("DataScreen")} />
        <MainButton title="Community" onPress={() => navigate("CommunityScreen")} />
        <MainButton title="Reference Search" onPress={() => navigate("RefSearch")} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    padding: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonItem: {
    padding: 10,
    marginVertical: 30
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginVertical: 30
  },
});

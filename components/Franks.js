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
import SensorItem from "./SensorItem";
import SwitchItem from "./SwitchItem";

export default class FranksScreen extends React.Component {
  static navigationOptions = {
    title: "Frank's Beans"
  };
  constructor() {
    super();
    this.state = {
      switch1Value: false,
      switch2Value: true,
      switch3Value: false
    };
  }
  handleToggleSwitch1 = () => {
    this.setState(state => {
      return { switch1Value: state.switch1Value };
    });
  };
  handleToggleSwitch2 = () => {
    this.setState(state => {
      return { switch2Value: state.switch2Value };
    });
  };
  handleToggleSwitch3 = () => {
    this.setState(state => {
      return { switch3Value: state.switch3Value };
    });
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.sensorContainer}>
          <SensorItem title="Temperature" value="72" />
          <SensorItem title="Humidity" value="80%" />
          <SensorItem title="Soil Moisture" value="wet" />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.t}>Water Pump: On</Text>
          <Text style={styles.t}>Lights: On</Text>
          <Text style={styles.t}>Fan: Off</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 70
  },
  sensorContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  switchContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 50,
    marginVertical: 40
  },
  t: {
    fontSize: 20,
    color: "blue",
    marginVertical: 20
  }
});

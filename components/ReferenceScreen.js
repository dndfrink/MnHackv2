import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  Image
} from "react-native";

export default class ReferenceScreen extends React.Component {
  static navigationOptions = {
    title: "Strawberry Plant"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={styles.target}>Description</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Strawberries are a nutritious and tasty way to get assorted
            vitamins, antioxidants, and fiber into your diet. They can help
            maintain good cholesterol and blood pressure levels, as well as
            protecting against the development of cancer.
          </Text>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://berryworld.imgix.net/consumerAssets/Strawberry-transparent1.png?auto=compress%2Cformat&fit=clip&w=800&w=800&auto=format&auto=compress"
            }}
          />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.target}>Growing Instructions</Text>
          <View style={styles.ss}>
            <Text style={styles.growingInstructions}>
              Strawberries grow best indoors at around room temperature. When
              grown outside, they need direct sunlight, so make sure that the
              artificial lights in the device are on for most of the day.
            </Text>
          </View>
          <View style={styles.targets}>
            <Text style={styles.target}>Target Conditions</Text>
            <View style={styles.targetss}>
              <Text style={styles.condition}>Temperature: 60-80°F</Text>
              <Text style={styles.condition}>Humidity: 65-75%</Text>
              <Text style={styles.condition}>Soil Moisture: moist to wet</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  targets: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRightColor: "transparent",
    borderLeftColor: "transparent"
  },
  targetss: {
    marginTop: 10,
    marginBottom: 10
  },
  ss: {
    paddingBottom: 10
  },
  descriptionText: {
    maxWidth: "50%",
    textAlign: "left",
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 10
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginVertical: 30
  },
  instructionContainer: {
    flexDirection: "column",
    borderWidth: 1,
    borderBottomColor: "gray",
    borderTopColor: "gray",
    borderRightColor: "transparent",
    borderLeftColor: "transparent"
  },
  growingInstructions: {
    textAlign: "center",
    justifyContent: "space-around",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10
  },
  target: {
    marginTop: 20,
    fontSize: 15,
    textAlign: "center",

    fontWeight: "bold"
  },
  condition: {
    marginVertical: 10,
    marginLeft: 30,
    textAlign: "left",
    fontSize: 15
  }
});

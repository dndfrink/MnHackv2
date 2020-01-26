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
  ShadowPropTypesIOS,
  TouchableOpacity
} from "react-native";

export default class RefSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event = {}) {
    const value = event.target && event.target.value;

    this.setState(value);
  }

  static navigationOptions = {
    title: "Plant Search"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder="Plant Search"
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            title="CANCEL"
            color="red"
            onPress={() => navigate("ReferenceScreen")}
          />
        </View>
        <ScrollView style={styles.inputScroll}>
          <TouchableOpacity onPress={() => navigate("ReferenceScreen")}>
            <View style={styles.listItem}>
              <Text>Strawberry</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text>Runner Beans</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text>Broccoli</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text>Peas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text>Coriander</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text>Peppers</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    marginTop: 5
  },
  inputContainer: {
    flex: 1,
    alignItems: "center"
  },
  inputScroll: {
    paddingTop: 10
  },
  inputTxt: {
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    marginTop: 5
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    width: 300
  }
});

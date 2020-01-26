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
  ShadowPropTypesIOS
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
  }
});

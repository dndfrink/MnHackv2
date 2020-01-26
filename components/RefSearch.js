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
            placeholderTextColor="black"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button title="SEARCH" color="blue" />
            <Button
              title="CANCEL"
              color="red"
              onPress={() => navigate("ReferenceScreen")}
            />
          </View>
        </View>
        <View style={styles.txt}>
          <Text style={styles.t}>Community Favorites</Text>
        </View>
        <ScrollView style={styles.inputScroll}>
          <TouchableOpacity onPress={() => navigate("ReferenceScreen")}>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Strawberry</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Runner Beans</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Broccoli</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Peas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Coriander</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <Text style={styles.tt}>Peppers</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
};

cconst styles = StyleSheet.create({
  t: {
    fontSize: 20
  },
  tt: {
    fontSize: 15
  },
  txt: {
    marginTop: 10
  },
  input: {
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginTop: 20
  },
  inputContainer: {
    flex: 1,
    alignItems: "center"
  },
  inputScroll: {
    paddingTop: 10
  },
  inputTxt: {
    width: 270,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    marginTop: 5
  },
  listItem: {
    padding: 10,
    marginTop: 5,
    borderTopColor: "grey",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderWidth: 1,
    borderBottomColor: "grey",
    alignItems: "center",
    width: 300
  }
});
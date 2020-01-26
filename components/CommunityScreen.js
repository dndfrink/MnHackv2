import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class CommunityScreen extends React.Component {
  static navigationOptions = {
    title: "Community"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            placeholder="Community Search"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button title="Add" color="blue" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <View style={styles.txt}>
            <Text style={styles.t}>Nearby Gardens</Text>
          </View>
          <ScrollView style={styles.inputScroll}>
            <TouchableOpacity onPress={() => navigate("FranksScreen")}>
              <View style={styles.listItem}>
                <Text style={styles.tt}>Frank's Personal Beans</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.tt}>3rd Street Garden</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.tt}>His Broccoli</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.tt}>Her Peas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.tt}>The Johnson's Coriander</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.listItem}>
                <Text style={styles.tt}>Granpa's Peppers</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

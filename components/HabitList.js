import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Habit from "./Habit";

var { height, width } = Dimensions.get("window");

export default class HabitList extends Component {
  state = {
    //   token: null,
    //   data: null
  };

  static navigationOptions = { header: null };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Habit />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

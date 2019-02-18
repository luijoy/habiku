import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import HabitList from "./HabitList";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HabitList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

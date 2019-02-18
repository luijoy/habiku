import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Start"
          color="#D9497D"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

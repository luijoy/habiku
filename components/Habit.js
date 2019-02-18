import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const users = [
  {
    name: "workout",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
  }
];

export default class Habit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title="Workout" style={styles.habit}>
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  habit: {
    padding: 200
  }
});

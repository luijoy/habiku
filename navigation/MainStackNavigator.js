import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Text } from "react-native";

import MainTabNavigator from "./MainTabNavigator";

export default createStackNavigator({
  MainTabNavigator: MainTabNavigator
});

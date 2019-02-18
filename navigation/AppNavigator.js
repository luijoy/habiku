import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "../screens/WelcomeScreen";
import DrawerNavigator from "./DrawerNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Welcome: { screen: WelcomeScreen },
    Home: { screen: DrawerNavigator }
  })
);

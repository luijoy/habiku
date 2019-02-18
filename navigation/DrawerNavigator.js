import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";

import Home from "../components/Home";
import MainStackNavigator from "./MainStackNavigator";

export default createDrawerNavigator(
  {
    Home: { screen: MainStackNavigator }
  },
  {
    tabBarOptions: {
      labelStyle: { fontSize: 20 }
    }
  }
);

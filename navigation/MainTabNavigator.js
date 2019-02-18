import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Platform } from "react-native";
import { Icon } from "expo";

import Home from "../components/Home";
import Inventory from "../components/Inventory";
import Shop from "../components/Shop";
import TabBarIcon from "../components/TabBarIcon";

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Habiku",
        headerStyle: {
          backgroundColor: "#5e2bff"
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
          <Icon.Ionicons
            name="md-menu"
            size={32}
            color="white"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: "Habiku",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-egg" : "md-egg"}
    />
  )
};

const InventoryStack = createStackNavigator({
  InventoryScreen: {
    screen: Inventory,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Inventory",
        headerStyle: {
          backgroundColor: "#5e2bff"
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
          <Icon.Ionicons
            name="md-menu"
            size={32}
            color="white"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
});

InventoryStack.navigationOptions = {
  tabBarLabel: "Inventory",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-briefcase" : "md-briefcase"}
    />
  )
};

const ShopStack = createStackNavigator({
  ShopScreen: {
    screen: Shop,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Shop",
        headerStyle: {
          backgroundColor: "#5e2bff"
        },
        headerTitleStyle: {
          color: "white"
        },
        headerLeft: (
          <Icon.Ionicons
            name="md-menu"
            size={32}
            color="white"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
});

ShopStack.navigationOptions = {
  tabBarLabel: "Shop",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-gift" : "md-gift"}
    />
  )
};

export default createBottomTabNavigator(
  {
    Inventory: InventoryStack,
    Habiku: HomeStack,
    Shop: ShopStack
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    },
    tabBarOptions: {
      activeTintColor: "#5e2bff",
      inactiveTintColor: "#585858"
    }
  }
);

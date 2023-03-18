// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator,  } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import HomePage from "../pages/HomePage";
import ShowTimePage from "../pages/ShowTimesPage";
import Promotion from "../pages/Promotion";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen options={{headerShown: false}} name="Home" component={TabNavigator} />  
    {/* <Drawer.Screen name="Promotion" component={ProMo} />
    <Drawer.Screen name="ShowTimes" component={ShowTimePage} /> */}
  </Drawer.Navigator>
  );
}

export default DrawerNavigator;

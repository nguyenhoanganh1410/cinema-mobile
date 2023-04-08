// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/HomePage";
import ShowTimePage from "../pages/ShowTimesPage";
import Promotion from "../pages/Promotion";
import ProfilePage from "../pages/ProfilePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import DetailsFilm from "../pages/DetailsFilm";
import PickFilmScreen from "../pages/PickFilmScreen";
import TopBarNavigation from "./TopBarNavigation";
import PickSeatComponent from "../components/seat/PickSeatComponent";
import PickProduct from "../components/product/PickProduct";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="FilmDetail"
        component={TopBarNavigation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PickFilm"
        component={PickFilmScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PickSeatScreen"
        component={PickSeatComponent}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PickProducts"
        component={PickProduct}
      />
    </Stack.Navigator>
  );
};

const ShowStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Showtimes"
        component={ShowTimePage}
      />
    </Stack.Navigator>
  );
};

const PromotionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Promotion"
        component={Promotion}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfilePage}
      />
    </Stack.Navigator>
  );
};
const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export {
  LoginStackNavigator,
  ProfileStackNavigator,
  PromotionStackNavigator,
  ShowStackNavigator,
  HomeStackNavigator,
};

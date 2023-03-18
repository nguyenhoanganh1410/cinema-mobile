import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Carousel from "../components/home/Carousel";
import HomeFilm from "../components/home/HomeFilm";

const HomePage = () => <SafeAreaView style={styles.container}>
  <View style={{flex:1}}>
   <Carousel />

  </View>
  <View style={{flex:2}}>
  <HomeFilm />

  </View>
 
  
</SafeAreaView>;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomePage;

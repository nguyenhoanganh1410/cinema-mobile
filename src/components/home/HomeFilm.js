import React, { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView,ScrollView, Dimensions, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import CarouselCards from "./CarouselCards";

const HomeFilm = () => {
  
    const [index, setIndex] = React.useState(0);

    return (
      <View style={styles.container}>
       
       <CarouselCards />
         <TouchableOpacity style={styles.buttonGPlusStyle} activeOpacity={0.5}>
          
          <AntDesign name="clockcircleo" size={16} />
          <Text style={styles.buttonTextStyle}>Booking</Text>
        </TouchableOpacity>
      </View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:"black",
    paddingTop:24,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  custom : {
    marginLeft:12,
    marginRight:12,
    marginBottom:12,
    borderRadius:4,
    backgroundColor:"#423F3E",
    paddingBottom:4,
    paddingTop:4,
    
  },
  customItem : {
    borderRadius:4,
    height:45,
    
  },
  button : {
    backgroundColor:"#6ECB63",
    width:"60%",
    borderRadius:6,
    fontWeight:700,
    marginBottom:24
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: '#79D70F',
    height: 40,
    borderRadius: 5,
    width:"60%",
    marginBottom:24
  },

  buttonTextStyle: {
    color: '#fff',
    fontWeight:"600",
    fontSize:16,
    marginLeft:10
  },

});

export default HomeFilm;

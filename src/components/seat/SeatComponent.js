import React, { useState } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";

const SeatComponent = ({ item, handlePress, bgColor, color }) => {
  return (
    <TouchableOpacity
      key={Math.random()}
      onPress={() => handlePress(item)}
      style={[
        styles.conBlock,
        {
          backgroundColor: bgColor,
          borderWidth: 1,
          borderColor: color,
          marginRight: 20,
        },
      ]}
    ></TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  conBlock: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 4,
    marginRight: 4,
  },
});

export default SeatComponent;

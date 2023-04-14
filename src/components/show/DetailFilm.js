import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

const DetailFilm = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  scrollView: {
    height: 30,
  },
});

export default DetailFilm;

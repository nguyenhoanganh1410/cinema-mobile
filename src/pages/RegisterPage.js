import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import Button from "@ant-design/react-native/lib/button";

import Contex from "../store/Context";
import { SetUserLogin } from "../store/Actions";
import { Formik } from "formik";
const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";
export default function SignUp({ navigation }) {
  const { state, depatch } = useContext(Contex);
  const { userLogin } = state;

  const handleLogin = () => {
    //navigation.navigate("Home");
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>   
      <View style={styles.blockTop}></View>
        <View style={styles.downView}>
          <View style={styles.input}>
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  
                  marginBottom: 10,
                  textAlign: "center",
                  fontWeight:"700",
                  //color:"#6ECB63"
                }}
              >
                Cinema Hub
              </Text>
            </View>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <View style={styles.viewInput}>
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Name"
                      style={{ paddingLeft: 10, color: "#333" }}
                    />
                  </View>

                  <View style={styles.viewInput}>
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Email"
                      style={{ paddingLeft: 10, color: "#333" }}
                    />
                  </View>

                  <View style={styles.viewInput}>
                    <TextInput
                      style={{ paddingLeft: 10, color: "#333" }}
                      placeholder="password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      secure={true}
                    />
                  </View>
                  <View style={styles.viewInput}>
                    <TextInput
                      style={{ paddingLeft: 10, color: "#333" }}
                      placeholder="password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                      <Text style={{ color: "white", fontSize:18 }}>Register</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>

            <View style={styles.recoverPassword}>
              <Text style={{ color: "black" }}>Do you have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#519259", marginLeft: 10 }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ color: "#333", marginLeft: 10 }}>
              Share your opinion about the design?
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  blockTop: {
    flex:1,
  },
  downView: {
    flex:3,
    //backgroundColor:'red',
    alignItems: "center",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    paddingBottom:16,
    width:"100%",
    height:"100%"
  },

  input: {
    width: "80%",
    justifyContent: "center",
  },
  viewInput: {
    height: 50,
    marginBottom: 20,
   // backgroundColor: "black",
    //borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 5,
   // color: "white",
  },

  btn: {
    height: 50,
    marginBottom: 10,
    backgroundColor: "#519259",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  recoverPassword: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  downMore: {
    flex: 1,
  },
  btnRegister: {
    paddingTop: 12,
    paddingBottom: 12,
    //borderColor: "white",
  },
});

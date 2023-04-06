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
import Contex from "../store/Context";
import { SetUserLogin } from "../store/Actions";
import { Formik } from "formik";
import userApi from "../api/userApi";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";

export default function Login({ navigation }) {
  const { state, depatch } = useContext(Contex);
  const { userLogin } = state;

  const handleLogin = async (values) => {
    const {email, password} = values
    if(!email || !password){
      alert("Chưa nhập tài khoản hoặc mật khẩu!")
      return;
    }
    await userApi.login(email, password).then((user) =>{
      navigation.navigate("Home")
      depatch(SetUserLogin(user.data))
      AsyncStorage.setItem('user',JSON.stringify(user.data));  
    }).catch((erro) => alert("Tài khoản hoặc mật khẩu sai!!"))
   
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.topView}>
        <Image source={{uri: imageUrl}} />
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/logos/images/8/8c/BHD_Cinema.png/revision/latest?cb=20210914235144&path-prefix=vi"
            }}
            resizeMode="center"
            //style={styles.image}
          />
        </View>

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
              initialValues={{ email: "0943220476", password: "dang123" }}
              onSubmit={(values) => handleLogin(values)}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
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
                      
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                      <Text style={{ color: "white", fontSize:18 }}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>

            <View style={styles.recoverPassword}>
              <Text style={{ color: "black" }}>Do you have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: "#519259", marginLeft: 10 }}>
                  Register
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
    
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
   // backgroundColor:"red"
  },
  downView: {
    flex: 1.5,

    alignItems: "center",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    paddingBottom:16
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

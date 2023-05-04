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
import SimpleLottie from "../components/loading/CatSleeping";
const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";
import {SignUpUser} from "../service/userService"
import { useNavigation } from "@react-navigation/native";
export default function SignUp() {
  const { state, depatch } = useContext(Contex);
  const navigation = useNavigation();

  const handleLoginFormSubmit = (values) => {
    var phoneno = /^\d{10}$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const {name, email, password, confirmPassword, phone} = values
    if(name.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0 || phone.length === 0) {
      alert("Yêu cầu nhập đủ thông tin.")
      return
    } else if(!phone.match(phoneno)){
      alert("Số điện thoại không đúng định dạng.")
      return
    }  else if(!email.match(validRegex)){
      alert("Email không đúng định dạng.")
      return
    } else if(password !== confirmPassword){
      alert("Mật khẩu phải giổng nhau.")
      return
    }

    const data = {
      ...values, firstName: values.name, lastName: ""
    }

    SignUpUser(data).then((data) => {
      navigation.navigate("SignUpSuccessPage")
    }).catch(error => {
      console.log(error.message);
      alert("Email hoặc Số ĐT đã tồn tại.")
    })
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>   
      <View style={styles.blockTop}>
      <SimpleLottie />
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
              initialValues={{ email: "", name:"", phone:"", password: "", confirmPassword:"" }}
              onSubmit={handleLoginFormSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <>
                  <View style={styles.viewInput}>
                    <TextInput
                      onChangeText={handleChange("name")}
                      onBlur={handleBlur("name")}
                      value={values.name}
                      placeholder="Name"
                      style={{ paddingLeft: 10, color: "#333" }}
                    />
                  </View>

                  <View style={styles.viewInput}>
                    <TextInput
                      onChangeText={handleChange("phone")}
                      onBlur={handleBlur("phone")}
                      value={values.phone}
                      placeholder="Số điện thoại"
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
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="newPassword"
                      secureTextEntry
                      enablesReturnKeyAutomatically
                    />
                  </View>
                  <View style={styles.viewInput}>
                    <TextInput
                      style={{ paddingLeft: 10, color: "#333" }}
                      placeholder="Confirm password"
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      secure={true}
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="newPassword"
                      secureTextEntry
                      enablesReturnKeyAutomatically
                    />
                    
                  </View>
                  <View>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                      <Text style={{ color: "white", fontSize:18 }}>Đăng ký</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>

            <View style={styles.recoverPassword}>
              <Text style={{ color: "black" }}>Bạn đã có tài khoản?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#519259", marginLeft: 10 }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>

         
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
    flex:4,
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

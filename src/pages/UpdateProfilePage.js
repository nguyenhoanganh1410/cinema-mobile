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
import SimpleLottie from "../components/loading/CatSleeping";
import { getCustomerById, updateInfoCustomer } from "../service/userService";

const imageUrl = "https://images.unsplash.com/photo-1526045612212-70caf35c14df";

export default function UpdateProfilePage({ navigation: { goBack } }) {
  const { state, depatch } = useContext(Contex);
  const { userLogin } = state;
  const navigation = useNavigation();
  const handleUpdate = (values) => {
    const { name } = values;
    if (name.length === 0) {
      alert("Không được để trống.");
      return;
    }
    console.log(name);
    updateInfoCustomer(userLogin?.customer?.id, { firstName: name })
      .then((data) => {
        console.log(data);
        getCustomerById(userLogin?.customer?.id).then((data) => {
          const dataFormat = {customer: data}
          console.log(dataFormat);
          depatch(SetUserLogin(dataFormat));
          AsyncStorage.setItem("user", JSON.stringify(dataFormat));
        })
        .catch(erro => {
          console.log(erro);
        })
        goBack();
      })
      .catch((erro) => {
        console.log(erro);
        alert("Lỗi hệ thống.");
      });
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            }}
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
                  fontWeight: "700",
                  //color:"#6ECB63"
                }}
              >
                Cinema Hub
              </Text>
            </View>
            <Formik
              initialValues={{
                name:
                  userLogin?.customer?.firstName +
                  " " +
                  userLogin?.customer?.lastName,
                email: userLogin?.customer?.email,
                phone: userLogin?.customer?.phone,
              }}
              onSubmit={(values) => handleUpdate(values)}
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

                  <View
                    style={[styles.viewInput, { backgroundColor: "#F0ECE3" }]}
                  >
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      placeholder="Email"
                      style={{ paddingLeft: 10, color: "#333" }}
                      underlineColorAndroid="transparent"
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>

                  <View
                    style={[styles.viewInput, { backgroundColor: "#F0ECE3" }]}
                  >
                    <TextInput
                      style={{ paddingLeft: 10, color: "#333" }}
                      placeholder="Phone"
                      value={values.phone}
                      onChangeText={handleChange("phone")}
                      underlineColorAndroid="transparent"
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                  <View>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                      <Text style={{ color: "white", fontSize: 16 }}>
                        Cập Nhật
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>

            <TouchableOpacity
              style={styles.recoverPassword}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={{ color: "black" }}>Đổi mật khẩu ?</Text>
            </TouchableOpacity>
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
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"red"
  },
  downView: {
    flex: 2.5,

    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 16,
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
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
  },
});

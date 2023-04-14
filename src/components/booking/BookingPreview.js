import React, { useState } from "react";
import { Button, FlatList, Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { GHE_DOI, GHE_THUONG, VND } from "../../constant";
import CountDownTime from "../../utils/CountDownTime";
import RadioGroup from "react-native-radio-buttons-group";
const BookingPreview = () => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "",
      value: "option1",
    },
  ]);
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.time}>
        <CountDownTime />
      </View>
      <ScrollView style={{ flex: 1, paddingVertical: 16 }}>
        <View style={styles.blockPreview}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqab4LF9LOfIQBwkuQqJbqRcIyrYYdaXa_sg&usqp=CAU",
            }}
          />
          <View style={styles.blockContent}>
            <Text style={[styles.text, { fontWeight: "700" }]}>
              Chuyen nha toi ...............
            </Text>
            <Text style={styles.text}>2D Phụ Đề</Text>
            <Text style={styles.text}>Galaxy Nguyễn Du - Rạp 03</Text>
            <Text style={styles.text}>14:45 - Chủ nhật, 09/04/2023</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 28,
            marginLeft: 24,
            marginBottom: 8,
          }}
        >
          Thông tin giao dịch
        </Text>
        <View style={styles.blockFirst}>
          <View style={styles.detailTicket}>
            <Text style={{ fontSize: 12 }}>5x Ve 2D D7, D8, D9</Text>
            <Text style={{ fontWeight: "700" }}>250,000</Text>
          </View>

          <View style={styles.detailTicket}>
            <Text style={{ fontSize: 12 }}>5x Ve 2D D7, D8, D9</Text>
            <Text style={{ fontWeight: "700" }}>250,000</Text>
          </View>

          <View style={[styles.detailTicket, { marginTop: 12 }]}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Tổng cộng</Text>
            <Text style={{ fontWeight: "700", fontSize: 18, color: "orange" }}>
              250,000
            </Text>
          </View>

          <View style={styles.detailProduct}></View>
        </View>

        <Text
          style={{
            fontSize: 12,
            marginTop: 28,
            marginLeft: 24,
            marginBottom: 8,
          }}
        >
          Thông tin thanh toán
        </Text>
        <View style={styles.blockFirst}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwrglBv91MquAW1N9BF5DgcNvLR3FXQ3Sqg&usqp=CAU",
                }}
              />
              <Text style={{ fontWeight: "500", marginLeft: 6 }}>
                Ví ZaloPay
              </Text>
            </View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
            />
          </View>

          <View style={styles.detailProduct}></View>
        </View>
      </ScrollView>

      <View style={styles.bottomSecond}>
        <View style={styles.left}>
          <Text style={{ marginTop: 6, color: "#DBD0C0" }}>
            Tổng:{" "}
            <Text style={{ color: "orange", fontSize: 18, fontWeight: "600" }}>
              {VND.format(1800000)}
            </Text>
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: 600 }}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 40,
    borderRadius: 4,
    height: 40,
  },
  blockFirst: {
    backgroundColor: "white",

    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  detailTicket: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  blockPreview: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingVertical: 10,
    flexDirection: "row",
    height: 100,
    paddingHorizontal: 10,
    marginHorizontal: 24,
    paddingVertical: 10,
  },
  tinyLogo: {
    width: 70,
    height: "100%",
    borderRadius: 6,
    marginRight: 10,
  },
  blockContent: {},
  text: { marginBottom: 4 },
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#DDDDDD",
  },
  time: {
    backgroundColor: "orange",
    width: "100%",
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSecond: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  left: {},
  right: {},
  button: {
    backgroundColor: "orange",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default BookingPreview;

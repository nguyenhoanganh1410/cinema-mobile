import React, { useState } from "react";
import { Button, FlatList, Image, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { GHE_DOI, GHE_THUONG, VND } from "../../constant";
import CountDownTime from "../../utils/CountDownTime";
import RadioGroup from "react-native-radio-buttons-group";
import { MdKeyboardArrowRight } from "react-icons/md";
import useBookingPreviewHook from "./useBookingPreviewHook";
const BookingPreview = () => {
  const { film, handleShowTextSeat, moneyPromotion, totalPrice, seats, products } = useBookingPreviewHook();
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

  const RenderProducts = () => {
    const data = products.map((val) => {
      return (
        <View style={styles.detailTicket} key={Math.random().toString()}>
          <Text style={{ fontSize: 12 }}>{val?.qty + 'x ' + val?.productName }</Text>
          <Text style={{ fontWeight: "600", fontSize: 12 }}>{VND.format(val?.qty * val?.price)}</Text>
        </View>
      );
    });

    return data
  };
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
              {film?.nameMovie?.length > 35
                ? film?.nameMovie?.substring(0, 32) + "..."
                : film?.nameMovie}
            </Text>
            <Text style={styles.text}>2D Phụ Đề</Text>
            <Text style={styles.text}>Galaxy Nguyễn Du - Rạp 03</Text>
            <Text style={styles.text}>14:45 - Chủ nhật, 09/04/2023</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 8,
          }}
        >
          Thông tin giao dịch
        </Text>
        <View style={styles.blockFirst}>
          <View style={styles.detailTicket}>
            <Text style={{ fontSize: 12 }}>{handleShowTextSeat().text}</Text>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              {VND.format(handleShowTextSeat().price)}
            </Text>
          </View>

        <>
        <RenderProducts /></>

          <View style={[styles.detailTicket, { marginTop: 12 }]}>
            <Text style={{ fontWeight: "600", fontSize: 14 }}>Tổng cộng</Text>
            <Text style={{ fontWeight: "700", fontSize: 16, color: "orange" }}>
              {VND.format(totalPrice)}
            </Text>
          </View>
          <View style={styles.detailProduct}></View>
        </View>
        <View style={[styles.blockFirst, { marginTop: 28 }]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={styles.image}
                source={{
                  uri: "https://en.pimg.jp/071/572/428/1/71572428.jpg",
                }}
              />
              <Text style={{ fontWeight: "500", marginLeft: 6 }}>
                Khuyến mãi
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.proBlock}>
                <Text style={styles.proText}>KM01</Text>
              </View>
              <View style={styles.proBlock}>
                <Text style={styles.proText}>KM01</Text>
              </View>

              <Image
                style={styles.imageIcon}
                source={{
                  uri: "https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png?f=webp&w=256",
                }}
              />
            </View>
          </View>

          <View style={styles.detailProduct}></View>
        </View>

        <Text
          style={{
            fontSize: 12,
            marginTop: 28,
            marginLeft: 10,
            marginBottom: 8,
          }}
        >
          Thông tin thanh toán
        </Text>
        <View style={styles.blockFirst}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
        <View style={styles.blockText}>
          <Text style={{ fontSize: 12 }}>
            (*) Bằng việc click vào Mua Ngay, bạn xác nhận đã đọc và đồng ý các
            điều khoản giao dịch trực tuyến của Cinema Hub{" "}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomSecond}>
        <View style={styles.left}>
          <Text style={{ marginTop: 6, color: "#DBD0C0" }}>
            Tổng:{" "}
            <Text style={{ color: "orange", fontSize: 18, fontWeight: "600" }}>
              {VND.format(totalPrice - moneyPromotion)}
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
  imageIcon: {
    width: 20,
    borderRadius: 4,
    height: 20,
  },
  blockFirst: {
    backgroundColor: "white",

    paddingVertical: 10,
    paddingHorizontal: 10,
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
    marginHorizontal: 10,
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
  blockText: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
    marginTop: 60,
  },
  proBlock: {
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#569DAA",
    paddingVertical: 4,
    marginRight: 4,
  },
  proText: {
    fontSize: 12,
    color: "#569DAA",
  },
});

export default BookingPreview;

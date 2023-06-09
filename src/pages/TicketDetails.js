import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { VND } from "../constant";

const TicketDetails = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item?.id);
  const seatString = item?.OrderDetails?.map((val) => {
    if (val?.type === 1) {
      return val?.CinemaHallSeat?.seatColumn + val?.CinemaHallSeat?.seatRow;
    }
    return "";
  });
  const priceProduct = item?.OrderDetails?.filter((val) => {
    return val?.type === 2;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ marginRight: 12 }}>
            <Image
              style={{
                width: 95,
                height: 130,
                borderRadius: 6,
                marginTop: 8,
              }}
              source={{
                uri: item?.ShowMovie?.Show?.Movie?.image
                  ? item?.ShowMovie?.Show?.Movie?.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdMVXZJrkibncovfmQIUqjWgXn27YxQPuzQ&usqp=CAU",
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: 12,
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <View>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>
                {item?.ShowMovie?.Show?.Movie?.nameMovie}
              </Text>
              <Text
                style={{ fontSize: 12, fontWeight: "400", marginVertical: 6 }}
              >
                {item?.ShowMovie?.Show?.Cinema?.name} -{" "}
                {item?.ShowMovie?.Show?.CinemaHall?.name}
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "400", marginBottom: 6 }}
              >
                {item?.ShowMovie?.Show?.Cinema?.address}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "400" }}>
                {item?.ShowMovie?.ShowTime?.showTime} -{" "}
                {item?.ShowMovie?.showDate}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "400", marginTop: 6 }}>
                Ghế: {seatString.toString()}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 24 }}>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Mã vé:</Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>#{item?.id}</Text>
          </View>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Giá vé:</Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {VND.format(+(item?.totalPrice + item?.totalDiscount))}
            </Text>
          </View>
          {/* <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              Dịch vụ: 2x bắp, 1x nước
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>0đ</Text>
          </View> */}
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Khuyến mãi:</Text>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              -{VND.format(item?.totalDiscount)}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Thanh toán:</Text>
            <Text style={{ fontSize: 14, fontWeight: "700", color: "#62CDFF" }}>
              {item?.paymentMethod === 0 ? "Tại quầy" : "ZaloPay"}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Tổng:</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "orange" }}>
              {VND.format(+item?.totalPrice)}
            </Text>
          </View>
          <Text style={{ fontSize: 12, fontWeight: "400", marginVertical: 12 }}>
            Hãy đưa mã vé hoặc màn hình vé để nhận vé tại quầy giao dịch Cinema
            Hub!
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "400" }}>
            (*) Vé đã đặt không được hoàn trả, xin cảm ơn!
          </Text>
         <View style={{marginTop:20, marginBottom: 20}}>
          <QRCode
              value={item?.id.toString()}
            />
         </View>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderRadius: 6,
              marginTop: 8,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWuZbgMgmmfhmVyclbSLcWZWW6c95US7_zg&usqp=CAU",
            }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", marginTop: 8 }}>
            Cinema Hub ra mắt siêu combo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default TicketDetails;

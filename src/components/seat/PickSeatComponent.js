import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { VND } from "../../constant";
import SeatComponent from "./SeatComponent";
import usePickSeatHook from "./usePickSeatHook";

const arrColumn = ["B", "C", "D", "E", "F", "G", "H", "I", "K"];

const arrRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PickSeatComponent = () => {
  const {
    film,
    show,
    seats,
    handleContinue,
    seatPicked,
    totalPrice,
    handlePress,
  } = usePickSeatHook();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>
          {film?.nameMovie}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, color: "#333", marginTop: 6 }}>
            {film?.language}
          </Text>
          <View
            style={{
              backgroundColor: "orange",
              borderRadius: 4,
              width: 45,
              paddingVertical: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <Text style={{ color: "white" }}>
              {film?.classify.substring(0, 4)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            marginBottom: 24,
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{ width: "80%", backgroundColor: "orange", height: 2 }}
          ></View>
          <Text style={{ fontSize: 10, marginTop: 4, textAlign: "center" }}>
            Màn hình{" "}
          </Text>
        </View>
        <View style={styles.seatsMap}>
          <View style={{ marginRight: 24 }}>
            {arrColumn.map((val) => {
              return (
                <TouchableOpacity
                  style={{ marginBottom: 18 }}
                  key={Math.random()}
                >
                  <Text>{val}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View>
            <View>
              {arrColumn.map((val) => {
                const newArr = seats.filter((seat) => {
                  if (seat.seatColumn === val) {
                    return seat;
                  }
                });

                const dataRow = newArr.map((item) => {
                  const index = seatPicked.findIndex((element) => {
                    if (element.id === item?.id) {
                      return true;
                    }
                    return false;
                  });
                  if (index != -1) {
                    return (
                      <SeatComponent
                        item={item}
                        handlePress={handlePress}
                        bgColor="orange"
                        color=""
                      />
                    );
                  }
                  if (!item?.status) {
                    return (
                      <SeatComponent
                        item={item}
                        handlePress={handlePress}
                        bgColor="gray"
                        color="black"
                      />
                    );
                  } else if (item?.statusSeat) {
                    return (
                      <SeatComponent
                        item={item}
                        handlePress={handlePress}
                        bgColor="red"
                        color="black"
                      />
                    );
                  } else if (item?.Product?.typeSeat === 3) {
                    return (
                      <SeatComponent
                        item={item}
                        handlePress={handlePress}
                        bgColor="white"
                        color="black"
                      />
                    );
                  } else {
                    return (
                      <SeatComponent
                        item={item}
                        handlePress={handlePress}
                        bgColor="white"
                        color="#96CD39"
                      />
                    );
                  }
                });

                return (
                  <View
                    key={Math.random()}
                    style={{ flexDirection: "row", marginBottom: 19 }}
                  >
                    {dataRow}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomFirst}>
          <View style={styles.block}>
            <View
              style={[
                styles.conBlock,
                {
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "#96CD39",
                },
              ]}
            ></View>
            <Text style={{ fontSize: 12 }}>Ghế đơn</Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.conBlock,
                {
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "black",
                },
              ]}
            ></View>
            <Text style={{ fontSize: 12 }}>Ghế đôi</Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.conBlock, { backgroundColor: "gray" }]}></View>
            <Text style={{ fontSize: 12 }}>Ghế đã bán</Text>
          </View>
          <View style={styles.block}>
            <View
              style={[styles.conBlock, { backgroundColor: "orange" }]}
            ></View>
            <Text style={{ fontSize: 12 }}>Ghế đang chọn</Text>
          </View>
          <View style={styles.block}>
            <View style={[styles.conBlock, { backgroundColor: "red" }]}></View>
            <Text style={{ fontSize: 12 }}>Ghế bảo trì</Text>
          </View>
        </View>
        <View style={styles.bottomSecond}>
          <View style={styles.left}>
            <View
              style={{ flexDirection: "row", width: 250, flexWrap: "wrap" }}
            >
              <Text style={{ fontSize: 12 }}>{seatPicked.length}x ghế: </Text>
              {seatPicked.length > 0 ? (
                seatPicked.map((val) => {
                  return (
                    <Text style={{ fontSize: 12 }} key={Math.random()}>
                      {val?.seatColumn + "-" + val?.seatRow + ", "}
                    </Text>
                  );
                })
              ) : (
                <Text style={{ fontSize: 12 }}>Chưa chọn ghế.</Text>
              )}
            </View>

            <Text style={{ marginTop: 6, color: "#DBD0C0" }}>
              Tổng:{" "}
              <Text
                style={{ color: "orange", fontSize: 18, fontWeight: "600" }}
              >
                {VND.format(totalPrice)}
              </Text>
            </Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity onPress={handleContinue} style={styles.button}>
              <Text style={{ color: "white", fontWeight: 600 }}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  top: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  center: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    paddingHorizontal: 12,
    paddingVertical: 48,
  },
  bottom: { paddingVertical: 0 },
  bottomFirst: {
    backgroundColor: "#F0F3F3",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingBottom: 12,
    borderTopColor: "#C4DCE0",
    borderTopWidth: 1,
    borderBottomColor: "#C4DCE0",
    borderBottomWidth: 1,
  },
  bottomSecond: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  left: {},
  right: {},
  button: {
    backgroundColor: "orange",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  conBlock: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 4,
    marginRight: 4,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 12,
    marginRight: 0,
  },
  seatsMap: {
    display: "flex",
    flexDirection: "row",

    flex: 1,
  },
});

export default PickSeatComponent;

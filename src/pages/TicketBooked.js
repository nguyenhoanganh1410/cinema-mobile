import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import Carousel from "../components/home/Carousel";
import HomeFilm from "../components/home/HomeFilm";
import TicketComponent from "../components/tickets/TicketComponent";
import useTicketBookedHook from "./useTicketBookedHook";
import { useContext } from "react";
import Contex from "../store/Context";

const TicketBooked = () => {
  const { listTicket } = useTicketBookedHook();
  const { state, depatch } = useContext(Contex);
  const { booking, userLogin } = state;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Lưu ý: Chỉ hiển thị 20 giao dịch gần nhất
        </Text>
        {listTicket.map((val) => {
          return <TicketComponent key={val?.id} item={val} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  scrollView: {},
});

export default TicketBooked;

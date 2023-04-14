import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { getCinemaById } from "../../service/CinemaService";
import { getProductAndPrice } from "../../service/ProductService";
import { getShow } from "../../service/ShowService";
import Contex from "../../store/Context";
import { caculatorDay, dateFormatQuery, dateVN } from "../../utils/Date";

const usePickProductHook = () => {
  const { state, depatch } = useContext(Contex);

  const { booking } = state;
  const { seats } = booking;

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [pickProducts, setPickProducts] = useState([]);

  const [quality, setQuality] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getProductAndPrice()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        alert("Lỗi hệ thống khi lấy sản phẩm");
      });
  }, []);

  useEffect(() => {
    const sumWithInitial = seats.reduce((total, item) => {
      // console.log(value);
      return item?.price + total;
    }, 0);

    const sumProducts = pickProducts.reduce((total, item) => {
      // console.log(value);
      return item?.price * item?.qty + total;
    }, 0);
    //console.log(sumWithInitial);
    setTotalPrice(sumWithInitial + sumProducts);
  }, [pickProducts]);

  const handleContinue = () => {
    navigation.navigate("BookingPreview");
  };
  return {
    seats,
    products,
    pickProducts,
    setPickProducts,
    quality,
    setQuality,
    totalPrice,
    handleContinue,
  };
};

export default usePickProductHook;

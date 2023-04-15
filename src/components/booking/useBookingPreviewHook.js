import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Contex from "../../store/Context";
import { SetBooking } from "../../store/Actions";
import { useContext, useEffect } from "react";

const useBookingPreviewHook = () => {
  const { state, depatch } = useContext(Contex);
  const { booking } = state;
  const { seats, film, products, show } = booking;

  console.log(booking);

  const navigation = useNavigation();

  const [quality, setQuality] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [moneyPromotion, setMoneyPromotion] = useState(0)

  useEffect(() => {
    const sumWithInitial = seats.reduce((total, item) => {
      return item?.price + total;
    }, 0);

    const sumProducts = products.reduce((total, item) => {
      return item?.price * item?.qty + total;
    }, 0);

    setTotalPrice(sumWithInitial + sumProducts);
  }, [products]);

  const handleContinue = () => {
    depatch(SetBooking({ ...booking, products: pickProducts }));
    navigation.navigate("BookingPreview");
  };

  const handleShowTextSeat = () =>{
    const string = seats.map(val =>{
        return val?.seatColumn + val?.seatRow
    })
    const price = seats.reduce((acc, val) => {
        return acc + val?.price
    }, 0)
    return {
        text:  seats.length + 'x vé ' + string.toString(),
        price
    }
  }

  return {
    seats,
    film,
    products,
    show,
    quality,
    setQuality,
    totalPrice,
    handleContinue,
    handleShowTextSeat,
    moneyPromotion
  };
};

export default useBookingPreviewHook;

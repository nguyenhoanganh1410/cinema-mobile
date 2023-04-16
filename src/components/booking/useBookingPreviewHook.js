import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Contex from "../../store/Context";
import { SetBooking } from "../../store/Actions";
import { useContext, useEffect } from "react";
import { checkPromotionCinema } from "../../service/PromotionService";
import { getAllHalls } from "../../service/HallSeatService";
import { createOrderMethod } from "../../service/OrderService";
import { checkStatus, createPayZalo } from "../../service/ZaloService";
import { Link } from "native-base";
import { Linking } from "react-native";

const useBookingPreviewHook = () => {
  const { state, depatch } = useContext(Contex);
  const { booking, userLogin } = state;
  const { seats, film, products, show } = booking;

  const navigation = useNavigation();

  const [quality, setQuality] = useState(0);

  const [totalPriceTmp, setTotalPriceTmp] = useState(0);

  const [moneyPromotion, setMoneyPromotion] = useState(0)

  const [promotion, setPromotion] = useState([])

  const [cinemaHall, setCinemaHall] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  useEffect(() => {
    const sumWithInitial = seats.reduce((total, item) => {
      return item?.price + total;
    }, 0);

    const sumProducts = products.reduce((total, item) => {
      return item?.price * item?.qty + total;
    }, 0);

    setTotalPriceTmp(sumWithInitial + sumProducts);
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

  useEffect(()=>{
    const products = seats.map((seat) => {
      return {
        id: seat?.Product?.id,
      };
    });
    const groupByProductId = products.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || [];
      acc[item.id].push(item);
      return acc;
    }, {});
    const productPayLoad = Object.keys(groupByProductId).map((key) => {
      return {
        id: key,
        qty: groupByProductId[key].length,
      };
    });

    const dataPayload = {
      date: booking.show.showDate,
      phone: userLogin?.customer?.phone,
      totalMoney: totalPriceTmp,
      products: productPayLoad,
    };

    checkPromotionCinema(dataPayload)
    .then(res => {
      const data = res.filter(val =>{
        return val?.warning !== true
      })
      setPromotion(data)
      })
      .catch(err => {
        alert('Lỗi lấy khuyễn mãi')
      })
  
  }, [totalPriceTmp])

  useEffect(()=>{
    const discount = promotion.reduce((acc, val) => {
      return acc + val?.discount
  }, 0)
  setMoneyPromotion(discount)
  }, [promotion])

  useEffect(()=>{
    getAllHalls().then((data)=>{
      const dataCinemaHall = data.filter(val =>{
        return val?.id === show?.Show?.idCinemaHall
      })
      setCinemaHall(dataCinemaHall[0])
    }).catch(() =>{

    })
  
  }, [])

  const handlePayment = () =>{
    setIsOpen(true)
  }

  const handleCreateOrder = async () =>{
    const dataSeatPayLoad = seats?.map((seat) => {
      return {
        idSeat: seat?.id,
        idProduct: seat?.Product?.id,
        price: seat?.price,
        qty: 1,
      };
    });
    const dataProductPayLoad = products?.map((product) => {
      return {
        id: product?.id,
        qty: product?.quatity,
        price: product?.price,
      };
    });

    const promotionClear = promotion?.filter((product) => {
      if (product?.promotionCode) {
        return product;
      }
    });

    const dataPromotionPayLoad = promotionClear?.map((pro) => {
      return {
        promotionLine_id: pro?.promotionLine_id,
        discount: pro?.discount || 0,
      };
    });

    let price = totalPriceTmp - moneyPromotion;
    
    const dataPayload = {
      idShowMovie: show?.id,
      idCustomer: userLogin?.customer?.id,
      idStaff: 5,
      totalPrice: price,
      seats: [...dataSeatPayLoad],
      product_sp: [...dataProductPayLoad],
      promotionApplicalbe: [...dataPromotionPayLoad],
    };

    createPayZalo(price).then((data)=>{
      Linking.openURL(data?.result?.order_url)
      const callBank = setInterval(() =>{
        checkStatus(data?.result?.appTransId, data?.result?.appTime).then((data) => {
          console.log(data?.status);
            // if(data?.status === 1){
            //   createOrderMethod(dataPayload).then(data =>{
            //     alert("Thanh toán thành công, click OK để về Home")
            //     clearInterval(callBank)
            //     navigation.navigate("HomePage")
            //   }).catch(() =>{
          
            //   })
            // }else if(data?.status === 2){
            //  // alert("Thanh toán thất bại")
            //  clearInterval(callBank)
            // }else{
            //   //alert("Đang chờ thanh toán")
            //   clearInterval(callBank)
            // }
            if(data?.status === 2){
              createOrderMethod(dataPayload).then(data =>{
                alert("Thanh toán thành công, click OK để về Home")
                clearInterval(callBank)
                navigation.navigate("HomePage")
              }).catch(() =>{
          
              })
            }
        })
      }, 5000);
    })

    
  }

  return {
    seats,
    film,
    products,
    show,
    quality,
    setQuality,
    totalPrice: totalPriceTmp,
    handleContinue,
    handleShowTextSeat,
    moneyPromotion,
    promotion,
    cinemaHall,
    handlePayment,
    isOpen,
    setIsOpen,
    onClose,
    handleCreateOrder
  };
};

export default useBookingPreviewHook;

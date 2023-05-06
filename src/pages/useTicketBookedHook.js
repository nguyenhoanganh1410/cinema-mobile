import React, { useContext, useEffect, useState } from "react";
import { getOrderByIdCustomer } from "../service/OrderService";
import Contex from "../store/Context";

const useTicketBookedHook = (url) => {
  const [listTicket, setListTicket] = useState([]);
  const { state, depatch } = useContext(Contex);
  const { booking, userLogin } = state;

  useEffect(() => {
    getOrderByIdCustomer(userLogin?.customer?.id)
      .then((data) => {
        setListTicket(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userLogin]);

  return {listTicket};
};

export default useTicketBookedHook;

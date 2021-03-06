import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order({ orderType }) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li className="order-list">
      {orderType}: {orders} <RestaurantButton eventHandler={orderOne} />
    </li>
  );
}

export default Order;

import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { item } = props;

  return (
    <li className="list-item">{item.strCategory}: {item.quantity}</li>
  );
};

export default Cart;

import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { item } = props;
  console.log(item)
  return (
    <li className="list-item">{item.strCategory}: {item.quantity}</li>
  );
};

export default Cart;

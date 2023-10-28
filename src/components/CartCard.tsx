import React from "react";
import { CartItem } from "../../type";

const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  return <div>{cartItem.desc}</div>;
};

export default CartCard;

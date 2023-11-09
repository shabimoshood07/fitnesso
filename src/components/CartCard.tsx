import React from "react";
import { CartItem } from "../../type";
import Image from "next/image";
import { useGlobalContext } from "@/lib/context";
const CartCard = ({ cartItem }: { cartItem: CartItem }) => {
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useGlobalContext();

  return (
    <div className="mb-[20px]">
      <div className="flex  justify-start">
        <div className="h-[100px] w-[100px] rounded-lg overflow-hidden relative">
          <Image
            src={cartItem.image}
            width={500}
            height={500}
            alt={cartItem.desc}
            className="object-cover"
          />
        </div>
        <div className="mx-[16px]">
          <h2 className=" font-parMark text-[#ec8675] text-[16px] leading-[1.6em] tracking-[1px] mb-[5px] ">
            $ {cartItem.price} USD
          </h2>
          <h1 className="mb-[5px] text-[20px] font-[500] leading-[1.2em] capitalize ">
            {cartItem.desc}
          </h1>
          <input
            type="number"
            className="py-[8px] px-[15px] h-[45px] w-full  text-[16px] leading-[20px] bg-[rgba(32,52,146,0.1)] outline-none rounded-[10px] "
            value={cartItem.quantity}
            onChange={(e) => {
              Number(e.target.value) > cartItem.quantity
                ? increaseQuantity(cartItem.id)
                : decreaseQuantity(cartItem.id);
            }}
          />
        </div>
      </div>
      <button
        className="text-[11px] tracking-[1px] leading[1.1em] text-[#afafaf] "
        onClick={() => removeItemFromCart(cartItem.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;

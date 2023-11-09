import { useGlobalContext } from "@/lib/context";
import CartCard from "./CartCard";
import { CartItem } from "../../type";
import Link from "next/link";

const CartList = () => {
  const { cart, setCart, setShowCart, showCart, subtotal } = useGlobalContext();
  return (
    <div>
      <div className="p-[20px] ">
        {cart.map((item: CartItem) => (
          <CartCard cartItem={item} key={item.id} />
        ))}
      </div>
      <div className="border-t ">
        <div className="p-[20px]  flex justify-between items-center ">
          <p>Subtotal</p>
          <h1 className="font-[700]">${subtotal} USD</h1>
        </div>
        <div className="p-[20px]">
          <Link href="/checkout">
            <button className="section-btn !bg-[#081158] !text-white !w-full bg-[url('https://assets.website-files.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
              checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartList;

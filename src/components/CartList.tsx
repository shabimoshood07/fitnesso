import { useGlobalContext } from "@/lib/context";
import CartCard from "./CartCard";
import { CartItem } from "../../type";

const CartList = () => {
  const { cart, setCart, setShowCart, showCart, subtotal } = useGlobalContext();
  return (
    <div className="p-[20px] ">
      {cart.map((item: CartItem) => (
        <CartCard cartItem={item} key={item.id} />
      ))}
      <div className="flex justify-between items-center">
        <p>Subtotal</p>
        <h1>${subtotal}</h1>
      </div>
    </div>
  );
};

export default CartList;

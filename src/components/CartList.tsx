import { useGlobalContext } from "@/lib/context";
import CartCard from "./CartCard";
import { CartItem } from "../../type";

const CartList = () => {
  const { cart, setCart, setShowCart, showCart } = useGlobalContext();
  return (
    <div>
      {cart.map((item: CartItem) => (
        <CartCard cartItem={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartList;

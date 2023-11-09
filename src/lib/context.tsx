"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface ContextProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
  subtotal: number;
  setSubtotal: Dispatch<SetStateAction<number>>;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
}
type Cart = {
  id: number;
  image: string;
  price: string;
  desc: string;
  quantity: number;
};

const AppContext = createContext<ContextProps>({
  showCart: false,
  setShowCart: () => {},
  cart: [],
  setCart: () => [],
  subtotal: 0,
  setSubtotal: () => {},
  increaseQuantity: (id: number) => {},
  decreaseQuantity: (id: number) => {},
  removeItemFromCart: (id: number) => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    getSubtotal();
  }, [cart]);

  const getSubtotal = () => {
    let total = 0;
    cart.map((item) => (total += item.quantity * Number(item.price)));
    setSubtotal(Number(total.toFixed(2)));
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            if (item.quantity === 1) {
              return null; // Remove the item from the array
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        })
        .filter(Boolean) as Cart[];
    });
  };

  const removeItemFromCart = (id: number) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <AppContext.Provider
      value={{
        showCart,
        setShowCart,
        cart,
        setCart,
        subtotal,
        setSubtotal,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[]>>;
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
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);
  return (
    <AppContext.Provider value={{ showCart, setShowCart, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

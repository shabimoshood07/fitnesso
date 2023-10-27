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
}

type Cart = {
  id: number;
  image: string;
  price: string;
  time: string;
  desc: string;
  type: string;
};

const AppContext = createContext<ContextProps>({
  showCart: false,
  setShowCart: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState<Cart[]>([]);
  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

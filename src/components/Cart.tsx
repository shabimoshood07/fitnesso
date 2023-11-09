"use client";
import { useGlobalContext } from "@/lib/context";
import CartList from "./CartList";

const Cart = () => {
  const { cart, setCart, setShowCart, showCart } = useGlobalContext();
  return (
    <div
      className={`${
        showCart
          ? "h-screen  min-[480px]:h-[max-content] min-[480px]:max-h-[90vh] overflow-y-scroll"
          : "!h-0 !min-h-0  duration-700 opacity-0  -translate-y-[20px]"
      } duration-500 overflow-hidden fixed cart  top-0 left-0 z-10 h-screen w-screen flex  bg-[#fff]   shadow-xl `}
    >
      <div
        className={`${
          showCart
            ? "translate-y-0 opacity-100 transition-transform w-full relative  duration-500 z-auto"
            : "-translate-y-[20px] duration-300 ease-in opacity-0 -z-10 lg:z-0"
        } flex flex-col `}
      >
        {/* Cart Header */}
        <div className="cart-header flex justify-between items-center px-[24px] py-[16px] border-b sticky top-0 w-full bg-white z-[1]">
          <h1 className="text-[20px] leading-[1.1em] font-[600]  ">
            Your Cart
          </h1>
          <button
            className="font-extrabold"
            onClick={() => setShowCart(!showCart)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-5 font-extrabold"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Cart List */}

        {cart.length === 0 ? (
          <div className="cart-list px-[20px] py-[100px] flex-1 flex justify-center flex-col items-center">
            <h1 className=" mb-[15px] font-[600] ">Nothing here!</h1>
            <p className="leading-[1.6rem] text-[14px] text-center">
              Browse around my shop to add fitness programs or nutrition plans
            </p>
          </div>
        ) : (
          <CartList />
        )}

        {/* Cart footer */}
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Cart;

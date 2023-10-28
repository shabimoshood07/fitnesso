"use client";
import { productsData } from "@/lib/data";
import Image from "next/image";
import { useGlobalContext } from "@/lib/context";
type Product = {
  id: number;
  image: string;
  price: string;
  time: string;
  desc: string;
  type: string;
  prevPrice?: string;
};

const Product = ({ params }: { params: { type: string } }) => {
  const { cart, setCart, setShowCart, showCart } = useGlobalContext();
  const type = params.type;
  const product: Product | undefined = productsData.find(
    (product) => product.type === type
  );

  const addToCart = (product: Product) => {
    const { id, image, price, desc } = product;
    const findProduct = cart.find((product) => product.id === id);

    console.log("findProduct", findProduct);
    console.log("cart", cart);
    console.log("product", product);

    if (findProduct) {
      return setCart((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCart((prev) => [...prev, { id, image, price, desc, quantity: 1 }]);
    }
  };

  return (
    <section className="bg-[#d2e4e0] py-[75px] md:py-[100px] lg:py-[150px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg')] bg-no-repeat  bg-[bottom_right]">
      <div className="w-[95%] mx-auto max-w-[1450px] grid md:grid-cols-2 gap-x-[25px] gap-y-[25px] lg:gap-x-[50px] lg:gap-y-[50px] items-center ">
        {JSON.stringify(cart)}
        <div className="max-w-[600px]">
          <h2 className=" mb-[30px] text-[14px] font-[500] leading-[1.6em] tracking-[1px]  ">
            {product?.time}
          </h2>
          <h1 className="text-[35px] leading-[1.1em] font-[500] mb-[30px] capitalize  ">
            {product?.desc}
          </h1>
          <p className="mb-[30px] max-w-[500px] text-[18px] font-[400] leading-[1.8em] md:text-[20px]  ">
            Ideal for beginner fitness people with busy schedules. In this 3 day
            split you will learn to make the most out of your time in the gym
            with an efficient total-body workouts. All workouts are designed to
            be flexible for working out at home.
          </p>
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[15px] ">
            <input
              type="number"
              className="py-[8px] px-[15px] h-[60px] w-full  text-[16px] leading-[20px] bg-[rgba(32,52,146,0.1)] outline-none rounded-[10px] "
            />
            <button className="section-btn !w-full !bg-[10px] !pl-[20px] hover:!bg-[25px]  hover:!pl-[40px]  !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] col-span-2 ">
              buy now
            </button>
            <button
              className="section-btn !w-full !bg-[10px] !pl-[20px] hover:!bg-[25px]  hover:!pl-[40px] !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')]  col-span-2"
              onClick={product ? () => addToCart(product) : undefined}
            >
              add to cart
            </button>
          </div>
        </div>
        <div className="relative w-full h-[300px] min-[767px]:h-[400px] md:h-[700px]  rounded-[10px] overflow-hidden">
          {product?.image && (
            <Image
              src={product.image}
              width={500}
              height={500}
              alt="img"
              className="absolute top-0 left-0 object-cover object-[50%_0%] h-full w-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;

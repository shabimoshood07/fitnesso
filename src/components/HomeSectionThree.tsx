"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { productsData } from "@/lib/data";

const variants = {
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.4,
    },
  }),
  hidden: { opacity: 0, y: 50 },
};

const HomeSectionThree = () => {
  return (
    <section className="bg-[#081158] py-[75px] md:py-[100px] lg:py-[150px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808c24d802d6d97489018c_Lines%201.svg')] bg-no-repeat bg-[length:50%] bg-[100%_0px]">
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-[30px] max-w-[840px] text-white text-[45px] md:text-[70px] lg:text-[90px] leading-[1.1em] font-[500]  ">
            Free home workouts and fitness plans
          </h1>
          <p className="mb-[30px] max-w-[600px] text-[20px] leading-[1.8em] font-[400] text-white ">
            I’ve created these premium fitness classes for everyone starting
            from beginner to advanced level with an in depth FAQ.
          </p>
          <Link href={"/shop"}>
            <button className="section-btn bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808e10957e0a07c82e4bcd_Vector%204%20(1).svg')]">
              View all
            </button>
          </Link>
        </motion.div>

        <motion.div className="mt-[50px] md:mt-[100px] grid grid-cols-1 gap-x-[25px] gap-y-[25px] md:gap-y-[50px] md:gap-x-[50px] md:grid-cols-3 items-stretch justify-stretch">
          {productsData.map((product) => {
            return (
              <Link href={`/product/${product.type}`} key={product.id}>
                <motion.div
                  className="rounded-md overflow-hidden hover cursor-pointer flex justify-stretch flex-col items-stretch duration-500"
                  custom={product.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-full h-[250px] md:h-[400px]  bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  ></div>

                  <div className="p-[20px] bg-white  flex flex-col justify-between flex-1">
                    <div className="lg:flex justify-between flex-row-reverse items-start">
                      <div className="flex justify-start items-center lg:flex-col lg:justify-start">
                        <h3 className="text-[#ec8675] font-[400] font-parMark text-[14px] md:text-[16px]  leading-[1.1em] tracking-[1px] uppercase mb-[15px] lg:mb-0">
                          {product.price}
                        </h3>
                        <h3 className="text-[#afafaf] font-[400] font-parMark text-[12px]  leading-[1.1em] tracking-[1px] uppercase mb-[15px] ml-[15px]  line-through">
                          {product.prevPrice}
                        </h3>
                      </div>
                      <h3 className=" uppercase font-[500] text-[14px] leading-[1.6em] tracking-[1px] mb-[15px]  flex-1">
                        {product.time}
                      </h3>
                    </div>
                    <h3 className=" capitalize mb-[15px] text-[16px] md:text-[20px] lg:text-[25px] leading-[1.1em] font-[500] ">
                      {product.desc}
                    </h3>
                    <button className=" pl-[13px] text-[14px] bg-transparent w-fit !text-[#081158] bg-no-repeat bg-left  bg-[auto,15px]  hover:pl-[20px] duration-500 hover:bg-[10px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808e10957e0a07c82e4bcd_Vector%204%20(1).svg')]">
                      View
                    </button>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSectionThree;

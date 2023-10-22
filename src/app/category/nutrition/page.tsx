"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FreeMealForm from "@/components/FreeMealForm";
import SectionNav from "@/components/SectionNav";

const data = [
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318f6e893cd930956b324_logan-weaver-RBbwGEKBbD8-unsplash.jpg",
    price: "$ 29.99 USD",
    prevPrice: "",
    time: "30 DAYS",
    desc: "Shedded Meal Plan",
  },
  {
    image:
      "https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e83149f3165d632eb81e21b_logan-weaver-brI7nj3kju8-unsplash-p-800.jpeg",
    price: "$ 89.99 USD",
    prevPrice: "$ 129.99 USD",
    time: "7 DAYS A WEEK",
    desc: "High Intensity Training ",
  },
];

const Nutrition = () => {
  const variants = {
    visible: (index: number) => ({
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

  return (
    <>
      <section className=" py-[75px] md:py-[100px] lg:py-[150px] bg-[#f5f5f5] overflow-hidden">
        <div className="w-[95%] mx-auto max-w-[1450px] relative">
          <div className="w-full mx-auto h-[350px] md:h-[600px] relative rounded-[10px] overflow-hidden">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc330c4ef42626fe067e_derick-mckinney-__QqvTI5Edc-unsplash.jpg"
              height={500}
              width={500}
              alt="image"
            />
            <h1 className="text-[35px] leading-[1.1em] text-white text-center md:text-[55px] lg:text-[72px] font-[500]  absolute my-auto top-0 bottom-0 left-0 right-0 h-fit w-it z-[1]">
              Nutrition
            </h1>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-[350px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg')] bg-[right_bottom] -z-[0] bg-no-repeat"></div>
          <div className="flex justify-center items-center absolute m-auto top-0 bottom-0 left-0 right-0 bg-[#081158] h-[125px] md:h-[150px] lg:h-[200px] w-[150vw] -ml-[29%]   rotate-2 "></div>
        </div>
        <div className="w-[95%] mx-auto max-w-[1450px] ">
          <SectionNav category="nutrition" />
          <div className="mt-[50px] md:mt-[100px] grid grid-cols-1 gap-x-[25px] gap-y-[25px] md:gap-y-[50px] md:gap-x-[50px] md:grid-cols-3 items-stretch justify-stretch">
            {data.map((dat, index) => {
              return (
                <motion.div
                  className="rounded-md overflow-hidden hover cursor-pointer flex justify-stretch flex-col items-stretch duration-500"
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={variants}
                  viewport={{ once: true }}
                >
                  <div
                    className="w-full h-[250px] md:h-[400px]  bg-center bg-no-repeat bg-cover"
                    style={{
                      backgroundImage: `url(${dat.image})`,
                    }}
                  ></div>

                  <div className="p-[20px] bg-white  flex flex-col justify-between flex-1">
                    <div className="lg:flex justify-between flex-row-reverse items-start">
                      <div className="flex justify-start items-center lg:flex-col lg:justify-start">
                        <h3 className="text-[#ec8675] font-[400] font-parMark text-[14px] md:text-[16px]  leading-[1.1em] tracking-[1px] uppercase mb-[15px] lg:mb-0">
                          {dat.price}
                        </h3>
                        <h3 className="text-[#afafaf] font-[400] font-parMark text-[12px]  leading-[1.1em] tracking-[1px] uppercase mb-[15px] ml-[15px]  line-through">
                          {dat.prevPrice}
                        </h3>
                      </div>
                      <h3 className=" uppercase font-[500] text-[14px] leading-[1.6em] tracking-[1px] mb-[15px]  flex-1">
                        {dat.time}
                      </h3>
                    </div>
                    <h3 className=" capitalize mb-[15px] text-[16px] md:text-[20px] lg:text-[25px] leading-[1.1em] font-[500] ">
                      {dat.desc}
                    </h3>
                    <button
                      className=" pl-[13px] text-[14px] bg-transparent w-fit !text-[#081158] bg-no-repeat bg-left  bg-[auto,15px]  hover:pl-[20px] duration-500 hover:bg-[10px] "
                      style={{
                        backgroundImage:
                          "url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808e10957e0a07c82e4bcd_Vector%204%20(1).svg')",
                      }}
                    >
                      View
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <FreeMealForm />
    </>
  );
};

export default Nutrition;

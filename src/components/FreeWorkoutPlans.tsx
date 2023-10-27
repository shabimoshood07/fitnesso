"use client"
import { motion } from "framer-motion";
import Link from "next/link";
type DataType = {
  id: number;
  image: string;
  free: string;
  time: string;
  desc: string;
  link: string;
};

const FreeWorkoutPlans = ({ data }: { data: DataType[] }) => {
  const variants = {
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: index * 0.3,
        type: "spring",
        bounce: 0.4,
      },
    }),
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="mt-[50px] md:mt-[100px] grid grid-cols-1 gap-x-[25px] gap-y-[25px] md:gap-y-[50px] md:gap-x-[50px] md:grid-cols-3 items-stretch justify-stretch">
      {data.map((dat) => {
        return (
          <Link href={dat.link} key={dat.image}>
            <motion.div
              className="rounded-md overflow-hidden hover duration-500  cursor-pointer flex justify-stretch flex-col items-stretch"
              custom={dat.id}
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
                <h3 className="text-[#ec8675] font-[400] font-parMark text-[14px] md:text-[16px]  leading-[1.1em] tracking-[1px] uppercase mb-[15px] ">
                  {dat.free}
                </h3>
                <h3 className=" uppercase font-[500] text-[14px] leading-[1.6em] tracking-[1px] mb-[15px]  ">
                  {dat.time}
                </h3>
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
                  Train now
                </button>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default FreeWorkoutPlans;

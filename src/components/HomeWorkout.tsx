"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const data = [
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg",
    free: "free",
    time: "40 minutes",
    desc: "The Perfect Outdoor Workout",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8330149a30c574961cfcf3_logan-weaver-WJUrYr5KqSw-unsplash.jpg",
    free: "free",
    time: "1 hour",
    desc: "Back Day",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35a7eca1d6f394deb8_guillaume-bolduc-cfmBbDcCAQo-unsplash.jpg",
    free: "free",
    time: "40 minutes",
    desc: "The Ultimate Abs Tabata",
  },
];

const HomeWorkout = () => {
  const scrollCon = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollCon,
    offset: ["start end", "end end"],
  });

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
      {data.map((dat, index) => {
        return (
          <motion.div
            className="rounded-md overflow-hidden hover duration-500  cursor-pointer flex justify-stretch flex-col items-stretch"
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
        );
      })}
    </motion.div>
  );
};

export default HomeWorkout;

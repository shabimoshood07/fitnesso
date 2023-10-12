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

const HomeSectionTwo = () => {
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
    <section className="bg-[#eef0f4] py-[75px] md:py-[100px] lg:py-[150px]">
      <div className="w-[97%] mx-auto max-w-[1450px] ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h1 className="mb-[30px] max-w-[840px] text-[45px] md:text-[70px] lg:text-[90px] leading-[1.1em] font-[500]  ">
            Free home workouts and fitness plans
          </h1>
          <p className="mb-[30px] max-w-[600px] text-[20px] leading-[1.8em] font-[400] ">
            With free online classes people who don’t have the time or money to
            afford a personal coach can make change their lives forever.
          </p>
          <button
            className=" pl-[13px] text-[14px] leading-[1.6em] tracking-[2px] font-[500] py-[20px] px-[20px] min-w-[200px] rounded-[6px] bg-[#081158] w-fit text-white bg-no-repeat bg-[20px]  bg-[auto,15px] 
             hover:pl-[20px] duration-500 hover:bg-[30px] hover:-translate-y-1 uppercase"
            style={{
              backgroundImage:
                "url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')",
            }}
          >
            View all
          </button>
        </motion.div>

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
      </div>
    </section>
  );
};

export default HomeSectionTwo;

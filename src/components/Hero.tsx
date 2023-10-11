"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroData = [
  {
    heading: "sandra lyons",
    subheading: "HI I'M SANDRA LYONS",
    boldText: "  Your go to online fitness trainer and nutritionist.",
    paragraph:
      "After getting a bachelors in nutrition and fitness training I started working with people all around and changing their lives forever.",
    btnText: "online coaching",
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png",
    data: "online",
  },
  {
    heading: "GET MOVING",
    subheading: "MAKE A CHANGE TODAY",
    boldText: "Premium online fitness classes & nutrition.",
    btnText: "premium classes",
    paragraph:
      "I’ve created these premium fitness classes for everyone starting from beginner to advanced level with an in depth FAQ to answer all doubts.",
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png",
    data: "premium",
  },
  {
    heading: "FREE CLASSES",
    subheading: "MAKE A CHANGE TODAY",
    boldText: "Transforming lifes with fitness & nutrition.",
    paragraph:
      "With free online classes people who don’t have the time or money to afford a personal coach can make change their lives forever.",
    btnText: "free classes",
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png",
    data: "free",
  },
];

const HeroCard = ({
  details,
  currentIndex,
}: {
  details: {
    heading: string;
    subheading: string;
    boldText: string;
    paragraph: string;
    btnText: string;
    image: string;
    data: string;
    forward: () => void;
    backward: () => void;
  };
  currentIndex: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`py-[75px] md:py-[100px] xl:py-[150px]  mx-auto grid gap-x-[50px]  gap-y-[25px] md:grid-cols-2 left-0 right-0 w-[98%] max-w-[1450px]  overflow-hidden absolute z-10`}
    >
      <div>
        <motion.h1
          className={`font-parMark text-[30px] md:text-[40px] xl:text-[64px] text-center tracking-[1px] leading-[1.1em] text-[#8ea5a0] uppercase`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {details.heading}
        </motion.h1>
        <motion.div
          data-name={details.data}
          className={`rounded-xl relative  h-[300px] min-[479px]:h-[400px] mx-auto w-full bg-no-repeat bg-cover bg-top  md:h-[700px]`}
          initial={{ scale: 1.1, rotate: -10, opacity: 0 }}
          animate={{
            rotate: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.9,
            },
          }}
          exit={{
            scale: 1.1,
            rotate: -10,
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <button
            className="border border-[#081158] w-[50px] h-[50px] ml-[15px]   min-[496px]:w-[100px] min-[496px]:h-[100px] top-[225px] min-[496px]:top-auto  min-[496px]:bottom-[50px] md:left-0 md:ml-[15px] bg-[rgba(8,17,88,0.2)] rounded-full flex justify-center items-center absolute lg:ml-[50px]  hover:pr-[10px] duration-300 "
            onClick={details.backward}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808bec89fbd70aac11fa45_AArrow.svg"
              width={25}
              height={25}
              alt="arrow"
            />
          </button>
          <button
            className="border border-[#081158] w-[50px] h-[50px] mr-[15px]   min-[496px]:w-[100px] min-[496px]:h-[100px] top-[225px] min-[496px]:top-auto  min-[496px]:bottom-[50px] right-0 md:mr-[15px] bg-[rgba(8,17,88,0.2)] rounded-full flex justify-center items-center absolute lg:mr-[50px] hover:pl-[10px] duration-300"
            onClick={details.forward}
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808bec9d755160edc98dae_AArrow%20(1).svg"
              width={25}
              height={25}
              alt="arrow"
            />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="max-w-[600px] flex flex-col justify-center  mx-auto h-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
          },
        }}
        exit={{
          opacity: 0,
          y: -100,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <h3 className="text-[14px] text-left w-full font-[500]  leading-[1.6em] tracking-[1px] mb-[30px] ">
          {details.subheading}
        </h3>
        <h1 className="mb-[30px] text-[35px] leading-[1.1em] font-[500] font-[sans-serif]  md:text-[55px] lg:text-[72px] ">
          {details.boldText}
        </h1>
        <p className="mb-[30px] max-w-[500px] text-[18px] lg:text-[20px] text-justify leading-[1.8em] font-[400]">
          {details.paragraph}
        </p>
        <button className="btn !w-fit !py-[20px]">{details.btnText}</button>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const forward = () => {
    if (currentIndex === 2) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };
  const backward = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(2);
    }
    return setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="bg-[#eef0f4] ">
      <div className=" max-w-[1450px] mx-auto relative z-[0] min-h-[1000px] lg:min-h-[1100px] overflow-hidden">
        {/* <div className=""> */}
        <AnimatePresence>
          {heroData.map((hero, index) => {
            if (currentIndex === index)
              return (
                <HeroCard
                  key={index}
                  details={{ ...hero, forward, backward }}
                  currentIndex={currentIndex === index}
                />
              );
          })}
        </AnimatePresence>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;

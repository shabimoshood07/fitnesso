"use client";
import { motion, motionValue, useScroll } from "framer-motion";
import { useRef } from "react";

const HomeSectionFour = () => {
  const conatiner = useRef(null);
  const { scrollYProgress } = useScroll({
    target: conatiner,
    offset: ["start end", "end end"],
  });
  const y = motionValue(conatiner);
  console.log("motion value", y);

  return (
    <motion.section ref={conatiner} style={{ scale: scrollYProgress }}>
      <div className="relative z-0 h-[500px] flex justify-center items-center  w-full bg-no-repeat bg-center bg-cover bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac45d802d6068e8987b8_logan-weaver-WJUrYr5KqSw-unsplash%202.png')]">
        <div className=" absolute -z-10 top-0 left-0 h-[100%] w-full bg-cover bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac6d9d7551056aca3cbf_Lines.svg')] bg-no-repeat  bg-[50%_0px] md:bg-[146%_-29px] "></div>

        <h1 className="font-[400] text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em] text-center tracking-[1px] text-[#ec8675] md:text-white font-parMark ">
          SWEAT. GAIN. DO.
        </h1>
      </div>
    </motion.section>
  );
};

export default HomeSectionFour;

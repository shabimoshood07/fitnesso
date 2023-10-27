"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const HomeSectionFour = () => {
  const [scale, setScale] = useState("100%");
  const conatiner = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: conatiner,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let sum = 100 + Number(latest.toFixed(2)) * 30;
    setScale(`${sum}%`);
  });

  return (
    <motion.section
      className="overflow-hidden relative min-h-[70vh]"
      ref={conatiner}
    >
      <img
        src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac45d802d6068e8987b8_logan-weaver-WJUrYr5KqSw-unsplash%202.png"
        alt=""
        className="absolute top-0 right-0 left-0 bottom-0 h-full w-full object-cover -z-10"
        style={{ scale: scale }}
      />
      <div className=" absolute -z-10 top-0 left-0 h-[60%] w-full bg-cover bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80ac6d9d7551056aca3cbf_Lines.svg')] bg-no-repeat  bg-[50%_0px] md:bg-[0%_-100px] object-cover "></div>

      <motion.h1
        className="absolute top-0 bottom-0 my-auto z-[9] left-0 w-full h-fit font-[400] text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em] text-center tracking-[1px] text-[#ec8675] md:text-white font-parMark "
        initial={{ y: 30 }}
        whileInView={{ y: 0, transition: { duration: .6 } }}
        style={{ opacity: scrollYProgress }}
      >
        SWEAT. GAIN. DO.
      </motion.h1>
    </motion.section>
  );
};

export default HomeSectionFour;

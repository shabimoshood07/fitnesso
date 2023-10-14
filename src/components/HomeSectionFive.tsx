"use client";
import {
  motion,
  motionValue,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";

const HomeSectionFive = () => {
  const conatiner = useRef(null);
  const isInView = useInView(conatiner, { once: false });

  const { scrollYProgress, scrollY } = useScroll({
    target: conatiner,
    offset: ["start end", "end end"],
  });


  return (
    <section className="relative pt-[100px] pb-[75px] md:pt-[200px] md:pb-[100px] lg:pt-[250px] lg:pb-[150px]">
      <div className="absolute -z-10 bottom-0 right-0 w-[95vw] md:w-[50vw] md:h-[60%] md:top-[100px] lg:top-[150px] h-[40%] bg-[#081158] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg')] bg-[bottom_right] bg-no-repeat" />
      <motion.div
        className="w-[95%] max-w-[1450px] mx-auto grid md:grid-cols-2 gap-x-[50px] gap-y-[50px] md:gap-x-[100px] md:gap-y-[100px] "
        ref={conatiner}
      >
        <div>
          <h2 className=" mb-[30px] text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em] font-[500] max-w-[600px] ">
            Who can benefit from a fully custom online fitness plan and
            nutrition?
          </h2>
          <p className=" mb-[30px] max-w-[500px] font-[400] text-[18px] leading-[1.8em] md:text-[20px]  ">
            Literally everyone. I’m currently helping people from 12 to 60+
            years old. Everyone is getting an adjusted program and a meal plan.
          </p>
          <button
            className=" pl-[13px] text-[14px] leading-[1.6em] tracking-[2px] font-[500] py-[20px] px-[20px] min-w-[200px] rounded-[6px] bg-[#081158] w-fit text-white bg-no-repeat bg-[20px]  bg-[auto,15px] 
        hover:pl-[20px] duration-500 hover:bg-[30px] hover:-translate-y-1 uppercase"
            style={{
              backgroundImage:
                "url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')",
            }}
          >
            Book a call
          </button>
        </div>

        <motion.div
          className="bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35d802d60b338a8553_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg')] bg-cover bg-no-repeat bg-center w-full md:max-w-[500px] h-[400px] md:h-auto rounded-lg mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? scrollYProgress : 0,
            transition: "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSectionFive;

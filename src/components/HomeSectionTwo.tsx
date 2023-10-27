"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import FreeWorkoutPlans from "./FreeWorkoutPlans";
import { freeWorkoutPlansData } from "@/lib/data";

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
          <Link href={"/free-workout"}>
            <button
              className=" pl-[13px] text-[14px] leading-[1.6em] tracking-[2px] font-[500] py-[20px] px-[20px] min-w-[200px] rounded-[6px] bg-[#081158] w-fit text-white bg-no-repeat bg-[20px]  bg-[auto,15px] 
            hover:pl-[20px] duration-500 hover:bg-[30px] hover:-translate-y-1 uppercase bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')]"
            >
              View all
            </button>
          </Link>
        </motion.div>

        <FreeWorkoutPlans data={freeWorkoutPlansData} />
      </div>
    </section>
  );
};

export default HomeSectionTwo;

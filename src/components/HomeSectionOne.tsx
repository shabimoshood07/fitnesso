"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

import { useRef } from "react";
const data = [
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png",
    heading: "Learn to live a healthy life with fitness",
    paragraph:
      "Changing your lifestyle with a fast paced life may seem hard or impossible, but with small steps each week you can achieve your dream physique and live a healthier life.",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318ac54f5dfdf7b9fe428_logan-weaver-24LpwagvuDY-unsplash.jpg",
    heading: "Understand how to do excercises properly",
    paragraph:
      "Just going to the gym and lifting weights won't make you healthy, after all it may even cause some harm to your body. We teach proper exercise techniques",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318b4e893cdf8c256b249_logan-weaver-Oyw8t2UTUWQ-unsplash.jpg",
    heading: "Track your progress weekly",
    paragraph:
      "We're tracking your goal weight with body fat measures, weight and general feeling. You may have the same body weight but feel 10x better.",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35d802d60b338a8553_guillaume-bolduc-jWvUCKFIXbI-unsplash.jpg",
    heading: "Follow a specific plan made just for you",
    paragraph:
      "Everyone is different, and we know it. That's why all of our clients get a programme specific just for their lifestyle and body tipe. This give the best possible results.",
  },
];

const HomeSectionOne = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrool2 } = useScroll({
    target: scrollRef2,
    offset: ["start end", "end end"],
  });

  return (
    <section className=" py-[95px] md:py-[100px] lg:py-[150px] bg-transparent">
      <motion.div
        className=" max-w-[1150px] mx-auto grid grid-cols-1 gap-x-[50px] gap-y-[50px] w-[97%] "
        ref={scrollRef2}
      >
        <motion.div
          style={{ opacity: scrollYProgress }}
          className="flex flex-col justify-center items-center pb-10"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          ref={scrollRef}
          transition={{ duration: 1 }}
        >
          <motion.h1 className="mb-[30px] max-w-[800px] mx-auto text-center text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em] font-[500]  ">
            The journey to a healthier body starts right now
          </motion.h1>
          <Link href={'/about'}>
            <button className="btn  !min-w-[200px] !py-[20px] !w-fit">
              online coaching
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-x-[50px] gap-y-[50px] min-[768px]:grid-cols-2"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity: scrool2 }}
        >
          {data.map((dat, index) => {
            return (
              <motion.div
                className="flex flex-col justify-center items-center max-w-[400px] mx-auto "
                key={index}
              >
                <div
                  className={`h-[200px] min-[469px]:h-[300px] w-[200px] min-[469px]:w-[300px] my-[30px] mx-auto rounded-xl bg-no-repeat bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(${dat.image})`,
                    boxShadow: "rgba(8, 88, 20, 0.2) 0px 0px 50px",
                  }}
                />

                <h2 className="max-w-[250px] md:max-w-[350px] mx-auto text-[20px] md:text-[30px]  text-center mb-[30px] font-[500] leading-[1.1em]  ">
                  {dat.heading}
                </h2>
                <p className=" mx-auto text-[16px] leading-[1.8em] text-center font-[400]">
                  {dat.paragraph}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSectionOne;

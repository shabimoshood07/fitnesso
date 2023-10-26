"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
const data = [
  {
    image:
      "https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e848436ae1ad84d9cff791e_logan-weaver-nU1myxFkiMk-unsplash.jpg",
    heading: "Training",
    title: "  The 10 best exercises to do in your park",
  },
  {
    image:
      "https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e848470f368a46ca30df605_joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg",
    heading: "weight loss",
    title: "Healthy breakfast ideas",
  },
  {
    image:
      "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg",
    heading: "Training",
    title: "My life changing experience",
  },
];

const HomeSectionSeven = () => {
  const scrollCon = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollCon,
    offset: ["start end", "end end"],
  });
  return (
    <section className=" py-[75px] md:py-[100px] lg:py-[150px]  ">
      <div className=" w-[95%] max-w-[1450px] mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
          style={{ opacity: scrollYProgress }}
          viewport={{ once: false }}
          ref={scrollCon}
        >
          <h1 className=" mb-[30px] font-[500] text-center text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em]  ">
            Read our tips and tricks
          </h1>
          <p className=" mb-[30px] font-[400] text-[20px] leading-[1.8em] text-center max-w-[800px] mx-auto">
            We post a lot of free content around health fitness and general
            wellbeing. Make sure to check all of our posts down below.
          </p>
          <button className="section-btn !block !bg-[10px] !pl-[20px] hover:!bg-[25px]  hover:!pl-[40px] !mx-auto !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
            view all posts
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, transition: { duration: 1.5 } }}
          style={{ opacity: scrollYProgress }}
          className=" mt-[50px]  md:mt-[100px] grid md:grid-cols-3 gap-x-[25px] gap-y-[25px] lg:gap-x-[50px] lg:gap-y-[50px]"
        >
          {data.map((dat, index) => {
            return (
              <div
                className="relative w-full h-[350px] md:h-[450px] lg:h-[600px] rounded-[10px] overflow-hidden hover duration-500"
                key={index}
              >
                <Image
                  src={dat.image}
                  width={500}
                  height={500}
                  alt="img"
                  className="absolute top-0 left-0 object-cover h-full w-full z-[-1]"
                />

                <div className="absolute bottom-0 left-0 right-0 mb-[20px] md:mb-[30px] w-[95%] md:w-[80%] mx-auto">
                  <h3 className="py-[2px] font-[500]  px-[5px] mb-[10px] text-[12px] leading-[1.6em] tracking-[.5px] uppercase bg-[#cfddee] w-fit ">
                    {dat.heading}
                  </h3>

                  <div className="bg-white   rounded-[10px]  p-[15px] ">
                    <div className="mb-[15px] text-[14px]  flex justify-start items-center ">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={
                            "https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e8317969a30c531f61c7a2c_1585649558084-image14.jpg"
                          }
                          height={500}
                          width={500}
                          alt="image"
                          className="absolute h-full w-full left-0 top-0  object-cover"
                        />
                      </div>
                      <h4 className="text-[12px] leading-[1.4em] ">
                        CURTIS VANDERVORT
                      </h4>
                    </div>
                    <h3 className="text-[16px] md:text-[20px] lg:text-[25px]  leading-[1.1em] tracking-[0.5px] mb-[15px] font-[500] ">
                      {dat.title}
                    </h3>
                    <button
                      className=" pl-[13px] text-[14px] bg-transparent w-fit !text-[#081158] bg-no-repeat bg-left  bg-[auto,15px]  hover:pl-[20px] duration-500 hover:bg-[10px] "
                      style={{
                        backgroundImage:
                          "url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808e10957e0a07c82e4bcd_Vector%204%20(1).svg')",
                      }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSectionSeven;

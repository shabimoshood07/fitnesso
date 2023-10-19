"use client";
import Image from "next/image";
import {
  motion,
  motionValue,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef } from "react";
const aronList = [
  {
    number: "01",
    text: "Over 10 years of experience",
  },
  {
    number: "02",
    text: "Coached 2,000+ people",
  },
  {
    number: "03",
    text: "Bachelors in nutrition",
  },
];

const About = () => {
  const conatiner = useRef(null);

  const isInView = useInView(conatiner, { once: false });

  const { scrollYProgress, scrollY } = useScroll({
    target: conatiner,
    offset: ["start end", "end end"],
  });

  return (
    <div>
      <section className=" py-[75px] md:py-[100px] lg:py-[100px] bg-[#d2e4e0]  bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg')]  bg-no-repeat bg-[100%_100%] bg-[length:1000px] ">
        <div className="w-[95%] mx-auto max-w-[1450px] grid md:grid-cols-2 gap-x-[25px]  gap-y-[25px] lg:gap-x-[50px]  lg:gap-y-[50px]">
          <div>
            <motion.h3
              className="text-[14px] text-left w-full font-[500]  leading-[1.6em] tracking-[1px] mb-[30px] "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              HI I'M SANDRA LYONS
            </motion.h3>

            <h1 className="mb-[30px] text-[36px] leading-[1.1em] font-[500] md:text-[55px] lg:text-[72px]  ">
              Who can benefit from a fully custom online fitness plan &
              nutrition?
            </h1>
            <p className="mb-[30px] max-w-[500px] font-[500px] text-[18px] leading-[1.8em]  md:text-[20px] ">
              Literally everyone. I’m currently helping people from 12 to 60+
              years old. Everyone is getting an adjusted program and a meal
              plan.
            </p>
            <button className="section-btn !bg-[#081158] !text-white !pl-[40px] hover:!pl-[50px] hover:!-translate-y-1 bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')]">
              Book a call
            </button>
          </div>
          <div className="w-full h-[300px] min-[469px]:h-[400px] md:h-auto rounded-md overflow-hidden relative">
            <Image
              height={500}
              width={500}
              alt="image"
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f3642594a78b769c981_logan-weaver-p3xsJQiu2YA-unsplash.jpg"
              className="absolute top-0 left-0 w-full h-full object-cover z-[2] bg-bottom object-[50%_0%]"
            />
          </div>
        </div>
      </section>

      <section className=" py-[75px] md:py-[100px] lg:py-[100px]">
        <div className="w-[98%] mx-auto max-w-[1450px] grid gap-x-[50px]  gap-y-[50px] md:gap-x-[100px]  md:gap-y-[50px]">
          <div>
            <h2 className=" mb-[30px] max-w-[800px] mx-auto text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em] text-center font-[500] ">
              How does online fitness coaching work?
            </h2>
            <p className=" max-w-[800px] text-center mx-auto text-[20px] leading-[1.8em] font-[400] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="w-full h-[300px] md:h-[450px] lg:h-[700px] rounded-md overflow-hidden relative">
            <Image
              height={600}
              width={600}
              alt="image"
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8330149a30c574961cfcf3_logan-weaver-WJUrYr5KqSw-unsplash.jpg"
              className="absolute top-0 left-0 w-full h-full object-cover z-[2] "
            />
          </div>
        </div>
      </section>

      <section className="py-[100px] md:pt-[200px] md:pb-[50px] lg:pt-[150px] relative ">
        <div className="w-[95%] mx-auto max-w-[1450px] grid md:grid-cols-2 gap-x-[50px]  gap-y-[50px] md:gap-x-[100px]  md:gap-y-[50px]">
          <div>
            <h1 className="mb-[30px] max-w-[600px] font-[500] text-[30px] leading-[1.1em] md:text-[40px] lg:text-[64px]  ">
              I am Aaron
            </h1>
            <p className="mb-[30px] max-w-[500px] text-[18px] leading-[1.8em] font-[400] md:text-[20px]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="mb-[30px] pl-[25px] pt-[15px]  ">
              {aronList.map((list, index) => (
                <li className="flex justify-start items-center mb-[15px]">
                  <span className="mr-[15px] w-[35px] text-[16px] leading-[1.1em] tracking-[1px] text-[#83a5a0] md:text-[20px] lg:text-[25px] font-[400] font-parMark ">
                    {list.number}
                  </span>
                  <p className="font-[500] text-[16px] leading-[1.8em]">
                    {list.text}
                  </p>
                </li>
              ))}
            </ul>
            <button className="section-btn !bg-[#081158] !text-white !pl-[40px] hover:!pl-[50px] hover:!-translate-y-1 bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')]">
              Schedule a call
            </button>
          </div>

          <div ref={conatiner}>
            <div className="absolute -z-10 bottom-0 right-0 w-[95vw] md:w-[50vw] md:h-[70%] md:top-[50px] lg:top-[50px] h-[40%] bg-[#081158] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg')] bg-[bottom_right] bg-no-repeat" />
            <motion.div
              className="relative bg-cover overflow-hidden w-full lg:w-[80%] justify-self-center h-[400px] md:h-[500px] rounded-lg mx-auto"
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? scrollYProgress : 0,
                transition:
                  "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
              }}
            >
              <Image
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"
                height={500}
                width={500}
                alt="image"
                className="absolute top-0 left-0 w-full h-full bg-center object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[75px] md:pt-[200px] md:pb-[100px] lg:py-[150px] relative ">
        <div className="w-[95%] mx-auto max-w-[1450px] grid md:grid md:grid-cols-2  flex-row-reverse gap-x-[50px]  gap-y-[50px] md:gap-x-[100px]  md:gap-y-[50px]">
          <div className="">
            <h1 className="mb-[30px] max-w-[600px] font-[500] text-[30px] leading-[1.1em] md:text-[40px] lg:text-[64px]  ">
              I am Aaron
            </h1>
            <p className="mb-[30px] max-w-[500px] text-[18px] leading-[1.8em] font-[400] md:text-[20px]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul className="mb-[30px] pl-[25px] pt-[15px]  ">
              {aronList.map((list, index) => (
                <li className="flex justify-start items-center mb-[15px]">
                  <span className="mr-[15px] w-[35px] text-[16px] leading-[1.1em] tracking-[1px] text-[#83a5a0] md:text-[20px] lg:text-[25px] font-[400] font-parMark ">
                    {list.number}
                  </span>
                  <p className="font-[500] text-[16px] leading-[1.8em]">
                    {list.text}
                  </p>
                </li>
              ))}
            </ul>
            <button className="section-btn !bg-[#081158] !text-white !pl-[40px] hover:!pl-[50px] hover:!-translate-y-1 bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')]">
              Explore our shop
            </button>
          </div>
          <div className=" w-full md:w-[80%] mx-auto md:h-[500px] ">
            <motion.div
              className="relative bg-cover overflow-hidden w-full   justify-self-center h-full  rounded-lg mx-auto"
              style={{
                // transform: isInView ? "none" : "translateY(100px)",
                // opacity: isInView ? scrollYProgress : 0,
                transition:
                  "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
              }}
            >
              <Image
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8331bf54f5df307aa05c19_logan-weaver-DVWa-aq3_m4-unsplash.jpg"
                height={500}
                width={500}
                alt="image"
                className="absolute top-0 left-0 w-full h-full bg-center object-cover"
              />
            </motion.div>
            <div className="absolute -z-10 bottom-0 left-0 md:right-0 md:left-[unset] w-[95vw] md:w-[50vw] md:h-[70%] md:top-[50px] lg:top-[50px] h-[40%] bg-[#081158] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg')] bg-[bottom_right] bg-no-repeat" />
          </div>
        </div>
      </section>

      <section className="py-[75px] md:py-[100px] bg-no-repeat bg-center bg-cover bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318706203833a1bd11fad_logan-weaver-pD5kSwtNgMc-unsplash.jpg')]">
        <div className=" p-[30px] md:py-[100px] md:px-[50px] lg:px[100px] bg-[#cfddee] w-[95%] max-w-[1450px] mx-auto rounded-[10px] ">
          <h1 className=" mb-[30px] font-[500] text-center text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em]  ">
            Get our free meal plan
          </h1>
          <p className=" mb-[30px] font-[400] text-[20px] leading-[1.8em] text-center max-w-[800px] mx-auto">
            Signup to our newsletter to get a free 30 day meal plan. You will
            receive all guidance on what to eat, how to cook and how much to
            eat.
          </p>

          <form
            action=""
            className="grid gap-x-[16px] gap-y-[16px]  md:grid-cols-2 lg:grid-cols-3"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] "
            />
            <button className="section-btn !w-full md:col-span-2 lg:col-span-1 !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
              Signup
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;

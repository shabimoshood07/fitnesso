"use client";
// import "./styles.css";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useMotionValueEvent,
} from "framer-motion";
import { wrap } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const topImage = [
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc330c4ef42626fe067e_derick-mckinney-__QqvTI5Edc-unsplash.jpg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc335836db3cdebdf20a_geert-pieters-3RnkZpDqsEI-unsplash.jpg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc35a7eca1d6f394deb8_guillaume-bolduc-cfmBbDcCAQo-unsplash.jpg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg",
];

const bottomImage = [
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc330c4ef42626fe067e_derick-mckinney-__QqvTI5Edc-unsplash.jpg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a16c957e0a7d522ec0dc_logan-weaver-DVWa-aq3_m4-unsplash%201%20(2).png",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc39dad44dc6402ce3e5_morgan-petroski-rx6wXNsXUOE-unsplash.jpg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3929502f63a5ba28e2_hipcravo-DC5akQJyH4I-unsplash.jpg",
];

const HomeSectionEight = () => {
  useEffect(() => {}, []);
  const container = useRef(null);
  const baseContainer = useRef(null);
  const baseX = useMotionValue(0);
  const baseXtop = useMotionValue(0);

  const { scrollY, scrollYProgress } = useScroll({
    target: container,
    // offset: ["start end", "end end"],
    offset: ["start center", "end end"],
  });

  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const baseVelocity = 10;
  const bottomx = useTransform(baseX, (v) => `${wrap(-20, 25, v)}%`);
  const xt = useTransform(baseXtop, (v) => `${wrap(-30, 30, v)}%`);
  const xb = useTransform(baseX, (v) => `${wrap(-30, 30, v)}%`);
  const topx = useTransform(baseXtop, (v) => `${wrap(20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let moveBy = directionFactor.current * baseVelocity * (20 / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
    baseXtop.set(-baseX.get() - moveBy);
  });

  return (
    <section
      className=" py-[75px] md:py-[100px] lg:py-[150px]  bg-[#eef0f4] relative overflow-hidden"
      ref={container}
    >
      <div className="w-[95%] mx-auto max-w-[1450px] overflow-hidden">
        <div className="">
          <div className=" h-fit parallax">
            <motion.div
              className="mb-[100px] w-[150vw] flex scroller   items-center scroller"
              style={{ x: xt }}
            >
              {topImage.map((image, index) => (
                <span
                  className=" relative h-[150px] w-[150px]  rounded-[10px] overflow-hidden md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] mr:[50px]  md:mr-[100px] "
                  key={index}
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="scroll"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </span>
              ))}
            </motion.div>
          </div>

          <div className=" h-fit ">
            <motion.div className=" w-[150vw]  flex" style={{ x: xb }}>
              {bottomImage.map((image, index) => (
                <span
                  className=" relative h-[150px] w-[150px] mr-[50px] md:mr-[100px]  rounded-[10px] overflow-hidden md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]"
                  key={index}
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="scroll"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 h-[150px] lg:h-[200px] right-0 left-[0%] mx-auto w-[105vw] bg-[#ec8675]  z-[2] my-auto rotate-2 flex justify-center items-center flex-wrap">
          <Link
            href="#"
            className="font-[500] my-[9px] px-[10px] w-[50%] md:w-fit md:mx-[20px] flex-grow-0 flex-shrink-0 flex items-center justify-end text-[20px] lg:text-[30px] text-white tracking-[.5px] leading-[1.6em] "
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa5871a996615e6cebc_003-twitter-logo-button.svg"
              width={40}
              height={40}
              alt="twitter"
              className="mr-[10px] md:mr-[15px]"
            />{" "}
            <span>@fitnesso</span>
          </Link>
          <Link
            href="#"
            className="font-[500] my-[9px] px-[10px] w-[50%] md:w-fit md:mx-[20px] flex-grow-0 flex-shrink-0 flex items-center justify-start text-[20px] lg:text-[30px] text-white tracking-[.5px] leading-[1.6em] "
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83002e40b6b8486e320705_instagram.svg"
              width={40}
              height={40}
              alt="twitter"
              className="mr-[10px] md:mr-[15px]"
            />{" "}
            <span>@fitnesso</span>
          </Link>
          <Link
            href="#"
            className="font-[500] my-[9px] px-[10px] w-[50%] md:w-fit md:mx-[20px] flex-grow-0 flex-shrink-0 flex items-center justify-end text-[20px] lg:text-[30px] text-white tracking-[.5px] leading-[1.6em] "
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e82ffa4097a9061280e5e5a_004-linkedin-logo-button.svg"
              width={40}
              height={40}
              alt="linkedin"
              className="mr-[10px] md:mr-[15px]"
            />{" "}
            <span>Fitnesso</span>
          </Link>
          <Link
            href="#"
            className="font-[500] my-[9px] px-[10px] w-[50%] md:w-fit md:mx-[20px] flex-grow-0 flex-shrink-0 flex items-center justify-start text-[20px] lg:text-[30px] text-white tracking-[.5px] leading-[1.6em] "
          >
            <Image
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e830050cf9bc2c348479b60_youtube.svg"
              width={40}
              height={40}
              alt="youtube"
              className="mr-[10px] md:mr-[15px]"
            />{" "}
            <span>/Fitnesso</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionEight;

import Image from "next/image";
import { parmanentMarker } from "./layout";

export default function Home() {
  return (
    <div className=" py-[75px] md:py-[100px] xl:py-[150px] w-[95%] mx-auto grid gap-x-[50px]  gap-y-[25px] md:grid-cols-2  items-start max-w-[1450px] ">
      <div>
        <h1
          className={`${parmanentMarker.className} text-[30px] md:text-[40px] xl:text-[64px] text-center tracking-[1px] leading-[1.1em] text-[#8ea5a0] uppercase`}
        >
          sandra lyons
        </h1>
        <div className="bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png')] h-[300px] min-[479px]:h-[400px] mx-auto w-full bg-no-repeat bg-cover bg-top  md:h-[700px]"></div>
      </div>

      <div className="max-w-[600px] flex flex-col justify-center  mx-auto h-full">
        <h3 className="text-[14px] text-left w-full font-[500]  leading-[1.6em] tracking-[1px] mb-[30px] ">
          HI I'M SANDRA LYONS
        </h3>
        <h1 className="mb-[30px] text-[35px] leading-[1.1em] font-[500] font-[sans-serif]  md:text-[55px] lg:text-[72px] ">
          Your go to online fitness trainer and nutritionist.
        </h1>
        <p className="mb-[30px] max-w-[500px] text-[18px] lg:text-[20px] text-justify leading-[1.8em] font-[400]">
          After getting a bachelors in nutrition and fitness training I started
          working with people all around and changing their lives forever.
        </p>
        <button className="btn !w-fit ">online coaching</button>
      </div>
    </div>
  );
}

{
  /* <div>
          <Image
            src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png"
            width={500}
            height={900}
            alt="hero"
            className="rounded-xl"
          />
        </div> */
}

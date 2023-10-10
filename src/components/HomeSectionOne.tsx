import Image from "next/image";
import React from "react";

const HomeSectionOne = () => {
  return (
    <section className="py-[75px] border-2 border-yellow-400 bg-transparent">
      <div className="max-w-[1450px] mx-auto grid grid-cols-1 gap-x-[50px] gap-y-[50px] w-[97%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-[30px] max-w-[800px] mx-auto text-center text-[30px] leading-[1.1em] font-[500]  ">
            The journey to a healthier body starts right now
          </h1>
          <button className="btn  !min-w-[200px] !py-[20px] !w-fit">
            online coaching
          </button>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center max-w-[400px] mx-auto">
            {/* <div className="p-8 rounded-[50%] flex justify-center items-center"> */}
              <Image
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80a6e90c4ef4bcb4fd3071_Rectangle%20439.png"
                width={300}
                height={300}
                alt="me"
                className="rounded-xl !h-[80%] w-[90%] pic-shadow mb-[20px]"
              />
            {/* </div> */}
            <h2 className="max-w-[350px] mx-auto text-[20px] text-center mb-[30px] font-[500] leading-[1.1em]  ">
              Learn to live a healthy life with fitness
            </h2>
            <p className=" mx-auto text-[16px] leading-[1.8em] text-center font-[400]">
              Changing your lifestyle with a fast paced life may seem hard or
              impossible, but with small steps each week you can achieve your
              dream physique and live a healthier life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionOne;

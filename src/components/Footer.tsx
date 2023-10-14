import Image from "next/image";
import Link from "next/link";
import React from "react";

const exploreLinks = [
  "Premium Courses",
  "Free Courses",
  "Blog",
  " About",
  " Contact",
  "Style Guide",
];
const Licencing = [
  "  Copyright Flow Ninja",
  "Powered By Webflow",
  "Licencing",
  "Support",
];

const paymentIcons = [
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e83042440b6b870483219ff_pp-logo-200px.png",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8304eb6ceb87f7281f6fdc_Stripe_Logo%2C_revised_2016.svg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e830558ee6a95eb87d66778_Visa_Inc._logo.svg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8305e9097a90332d0e6f79_mc_symbol.svg",
  "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8306f7b74fcd548421db27_download.svg",
];
const Footer = () => {
  return (
    <section className=" py-[50px] md:py-[100px]  bg-[#081158]">
      <div className="w-[95%] mx-auto max-w-[1450px] ">
        <div className="mb-[50px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] gap-y-[25px]  md:gap-x-[100px] md:gap-y-[50px]">
          <Image
            src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808d31a7eca1775993ae82_Black.svg"
            width={100}
            height={100}
            alt="logo"
            className="md:col-span-2 lg:col-span-1"
          />

          <div className=" flex justify-start flex-col gap-5">
            <div>
              <h2 className="mb-[15px] text-[14px] leading-[1.6em] tracking-[1px] uppercase text-white font-[500] ">
                Contact
              </h2>
              <h3 className=" mb-[5px] text-[20px] capitalize leading-[1.6em] tracking-[0.5px] text-white md:text-[30px]  ">
                contact@fitnesso.com
              </h3>
            </div>
            <div>
              <h2 className="mb-[15px] text-[14px] leading-[1.6em] tracking-[1px] uppercase text-white font-[500] ">
                Licencing
              </h2>
              {Licencing.map((link) => (
                <h3 className=" mb-[5px] text-[15px] capitalize leading-[1.6em] tracking-[0.5px] text-white md:text-[20px]  ">
                  {link}
                </h3>
              ))}
            </div>
          </div>
          <div className=" flex justify-start flex-col ">
            <h2 className="mb-[15px] text-[14px] leading-[1.6em] tracking-[1px] uppercase text-white font-[500] ">
              Explore
            </h2>
            {exploreLinks.map((link) => (
              <h3 className=" mb-[5px] text-[15px] capitalize leading-[1.6em] tracking-[0.5px] text-white md:text-[20px]  ">
                {link}
              </h3>
            ))}
          </div>
        </div>
        <div className=" flex justify-start items-stretch flex-wrap gap-x-[50px] gap-y-[50px] md:gap-y-[50px] md:gap-x-[100px]">
          {paymentIcons.map((icon, index) => (
            <Link href="#" key={index}>
              <button className="w-[45px] h-[40px]  p-[5px] mr-[15px] bg-white rounded-[5px]">
                <Image
                  src={icon}
                  width={45}
                  height={40}
                  alt="icon"
                  className="object-cover"
                />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

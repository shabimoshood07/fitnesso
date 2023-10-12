import Hero from "@/components/Hero";
import HomeSectionFive from "@/components/HomeSectionFive";
import HomeSectionFour from "@/components/HomeSectionFour";
import HomeSectionOne from "@/components/HomeSectionOne";
import HomeSectionThree from "@/components/HomeSectionThree";
import HomeSectionTwo from "@/components/HomeSectionTwo";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <div className="bg-[#081158] relative z-[5] py-4">
        <div className=" w-[100%] h-[10vh] absolute bg-[#081158] -rotate-2 -top-[35px]  z-[-1]" />
        <div className=" w-[95%] max-w-[1450px] mx-auto py-[25px] md:py-[60px] grid grid-cols-1 min-[479px]:grid-cols-3 gap-x-[25px] gap-y-[50px] ">
          <div>
            <h1 className="text-[20px] leading-[1.1em] text-[#ffffff] font-[500] text-center mb-[10px] md:text-[30px]  ">
              1900+
            </h1>
            <h2 className="text-[14px] leading-[1.6em] text-[#ffffff] font-[500] text-center uppercase tracking-[1px] md:text-[14px] ">
              happy clients
            </h2>
          </div>
          <div>
            <h1 className="text-[20px] leading-[1.1em] text-[#ffffff] font-[500] text-center mb-[10px] md:text-[30px]  ">
              5 yrs
            </h1>
            <h2 className="text-[14px] leading-[1.6em] text-[#ffffff] font-[500] text-center uppercase tracking-[1px] md:text-[14px] ">
              of experience
            </h2>
          </div>
          <div>
            <h1 className="text-[20px] leading-[1.1em] text-[#ffffff] font-[500] text-center mb-[10px] md:text-[30px]  ">
              156K
            </h1>
            <h2 className="text-[14px] leading-[1.6em] text-[#ffffff] font-[500] text-center uppercase tracking-[1px] md:text-[14px] ">
              following me
            </h2>
          </div>
        </div>
        <div className=" w-[100%] h-[10vh] absolute bg-[#081158] -rotate-2 -bottom-[35px]  md:-bottom-[32px] -z-10 " />
      </div>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </div>
  );
};

export default Home;

import FreeMealForm from "@/components/FreeMealForm";
import FreeWorkoutPlans from "@/components/FreeWorkoutPlans";
import HomeWorkout from "@/components/HomeWorkout";
import Image from "next/image";
import { freeWorkoutPlansData } from "@/lib/data";
const FreeWorkoutPage = () => {
  return (
    <>
      <section className=" py-[75px] md:py-[100px] lg:py-[150px] bg-[#f5f5f5] overflow-hidden">
        <div className="w-[95%] mx-auto max-w-[1450px] relative">
          <div className="w-full mx-auto h-[350px] md:h-[600px] relative rounded-[10px]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc36d802d646728a8558_guillaume-bolduc-hdBaq9W0hRY-unsplash.jpg"
              height={500}
              width={500}
              alt="image"
            />
            <h1 className="text-[35px] leading-[1.1em] text-center md:text-[55px] lg:text-[72px] font-[500]  absolute my-auto top-0 bottom-0 left-0 right-0 h-fit z-[1]">
              Free home workouts
            </h1>
          </div>
          <div className="flex justify-center items-center absolute m-auto top-0 bottom-0 left-0 right-0 bg-[#cfddee] h-[125px] md:h-[150px] lg:h-[200px] w-[150vw] -ml-[29%]   rotate-2 "></div>
        </div>
        <div className="w-[95%] mx-auto max-w-[1450px] relative">
          {/* <HomeWorkout /> */}
          <FreeWorkoutPlans data={freeWorkoutPlansData}/>
        </div>
      </section>
      <FreeMealForm />
    </>
  );
};

export default FreeWorkoutPage;

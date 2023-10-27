"use client";

import FreeMealForm from "@/components/FreeMealForm";
import FreeWorkoutPlans from "@/components/FreeWorkoutPlans";
import Image from "next/image";
import { freeWorkoutPlansData } from "@/lib/data";
import { usePathname } from "next/navigation";
const BackDay = () => {
  const pathname = usePathname();

  const data = freeWorkoutPlansData.filter((dat) => dat.link !== pathname);

  return (
    <>
      <section className="relative bg-[#d2e4e0] py-[75px] md:py-[100px] lg:py-[150px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg')] bg-[bottom_right] bg-no-repeat">
        <div className="w-[97%] mx-auto max-w-[1450px] ">
          <div className="grid gap-x-[25px]  gap-y-[25px] md:gap-x-[50px] md:grid-cols-2  items-center">
            <div className="w-full mx-auto h-[300px] md:h-[700px] relative rounded-[10px] overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e831e7a9a30c575281c9d8d_logan-weaver-BvXh8e5M8YM-unsplash.jpg"
                height={500}
                width={500}
                alt="image"
              />
            </div>

            <div className="max-w-[600px]">
              <h3 className="mb-[30px] text-[14px] leading-[1.6em] tracking-[1px] uppercase font-[500] ">
                30 minutes
              </h3>
              <h1 className="text-[35px] leading-[1.1em]  md:text-[55px] lg:text-[72px] font-[500] mb-[30px]  capitalize">
                back day
              </h1>
              <p className="mb-[30px] text-[18px] leading-[1.8em] font-[400] md:text-[20px]  max-w-[500px] ">
                Pulldown training legs body composition stretch, body fat
                percentage kettlebell kick burpees running barbell jacks.
              </p>
              <div className="mb-[30px] flex justify-start items-center">
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
                <span className="text-[12px] leading-[1.4em] tracking-[1px] font-[500] ml-1">
                  CURTIS VANDERVORT
                </span>
              </div>
              <button className="section-btn  !bg-[10px] !pl-[20px] hover:!bg-[25px]  hover:!pl-[40px]  !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
                start workout
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-[75px] md:py-[100px] lg:py-[150px] bg-[bottom_right] bg-no-repeat">
        <div className="w-[95%] mx-auto max-w-[1450px] ">
          <div className="grid gap-x-[50px] gap-y-[50px] items-center md:grid-cols-[1fr_2fr]">
            <div className="w-fit mx-auto">
              <h1 className="mb-[15px] font-[500] text-[16px] md:text-[20px] leading-[1.1em]  ">
                Exercises
              </h1>
              <ul className="pl-[25px] pt-[15px] mb-[30px] text-[14px]  ">
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  stretching
                </li>
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  Jumping Jacks 30x3
                </li>
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  Crunch 30x3
                </li>
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  Burpees 30x3
                </li>
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  Knee Squat 20x3
                </li>
                <li className="text-[16px] leading-[1.8em] mb-[15px] font-[500] capitalize ">
                  Clap Push Up 10x3
                </li>
              </ul>
            </div>

            <div className="rounded-[10px] overflow-hidden w-full h-[300px] lg:h-[700px] min-[480px]:h-[450px] relative  ">
              <Image
                src={
                  "https://assets.website-files.com/5e8303dd097a90ffd20e6b2f/5e836cdcba088c9b0da4bb76_logan-weaver-tBmmA3pTciA-unsplash.jpg"
                }
                height={500}
                width={500}
                alt="image"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-[100px] max-w-[800px] mx-auto">
            <h1 className=" text-[30px] lg:text-[40px] mb-[30px] font-[600] leading-[1.1em]  ">
              Body fat percentage weightlifting pull upper body kick abs curl
              climp lower body.
            </h1>
            <p className="text-[16px] mb-[30px] leading-[1.8em]  ">
              Pull jacks wall, pectorals bench exercise walkout push kick ball.
              Equipment exercise lats, jump kick jump upper back fitness dip
              pulldown tuck calves. Ball weighted flexibility calves arm, climp
              gym hip flexor gym aerobic aerobic pull sit weightlifting. Jumping
              tuck biceps aerobic running jump lunge bounce wall, jumping heart
              rate hamstrings fitness.
            </p>
            <h1 className=" text-[30px] lg:text-[40px] mb-[30px] font-[600] leading-[1.1em]  ">
              Muscles fit dip major tuck flex extension.
            </h1>
            <p className="text-[16px] mb-[30px] leading-[1.8em]  ">
              Walkout heart rate barbell, leg press running bounce stretch kick
              weighted pectorals crosstraining. Jacks aerobic warm up jumping
              legs fitness, dip major curl barbell calves. Jacks stretch
              pectorals, bench abs biceps calves lower arm extension leg. Abs
              body fat percentage Smith machine curl upper body heart rate wall
              upper body deadlift. Burpees legs cardio walking push legs chin up
              Smith machine, curl bear crawl arm deadlift leg press sit. Crunch
              training wall, lower back hamstrings lower jacks lower abs jump.
              Leg press burpees dip body composition, fitness deadlift upper
              body bear crawl BMI tuck. Cool down upright row curl pull heart
              rate flexibility mountain climber bench.
            </p>
            <p className="my-[30px] p-[30px] border-l-[5px] border-[#dfdfdf] text-[18px] leading-[1.6em] italic text-center bg-[#f5f5f5] ">
              Pulldown training legs body composition stretch, body fat
              percentage kettlebell kick burpees running barbell jacks.
            </p>
            <p className="text-[16px] mb-[30px] leading-[1.8em]  ">
              Body fat percentage deadlift leg press plank climp calves
              weighted, lunge weighted hamstrings cardio sit kick. Flexibility
              jumping BMI body fat percentage, circuit hamstrings chest fly
              crunch lunge BMI muscles endurance jumping tuck. Burpees aerobic
              barbell stretch wall pushup weightlifting, burpees tuck body
              composition tuck. Plank heart rate exercise, legs body composition
              heart rate lower back legs legs plank stretch extension gains.
              Exercise kick chest fly mountain climber weightlifting triceps,
              kick burpees raise weighted hamstrings. Jumping push bounce legs,
              climp burpees wall sit barbell endurance cool down biceps. Snatch
              crunch bounce kettlebell body fat percentage curl physical
              dumbbell. Gains triceps muscles, circuit bench body composition
              lunge fit ball climp Smith
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-[#eef0f4] py-[75px] md:py-[100px] lg:py-[150px] bg-[bottom_right] bg-no-repeat">
        <div className="w-[95%] mx-auto max-w-[1450px] ">
          <h1 className="md-[30px] max-w-[800px] text-[45px] leading-[1.1em] font-[500] md:text-[70px] lg:text[90px] ">
            More workouts you might like...
          </h1>
          <FreeWorkoutPlans data={data} />
        </div>
      </section>
    </>
  );
};

export default BackDay;

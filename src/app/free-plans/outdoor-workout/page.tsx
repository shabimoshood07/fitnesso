import Image from "next/image";
import React from "react";

const OutdoorWorkout = () => {
  return (
    <>
      <section className="relative bg-[#d2e4e0] py-[75px] md:py-[100px] lg:py-[150px] bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832f6a790e744037d5a35a_Green%20Lines.svg')] bg-[bottom_right] bg-no-repeat">
        <div className="w-[97%] mx-auto max-w-[1450px] ">
          <div className="grid gap-x-[25px]  gap-y-[25px] md:grid-cols-2  items-center">
            <div className="w-full mx-auto h-[300px] md:h-[700px] relative rounded-[10px] overflow-hidden">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc3543a59d1e21194573_angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg"
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
                the perfect outdoor workout
              </h1>
              <p className="mb-[30px] text-[18px] leading-[1.8em] font-[400] md:text-[20px]  max-w-[500px] ">
                Muscles fit dip major tuck flex extension. Walkout heart rate
                barbell, leg press running bounce stretch kick weighted
                pectorals crosstraining.
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
                <span className="text-[12px] leading-[1.4em] tracking-[1px]">
                  CURTIS VANDERVORT
                </span>
              </div>
              <button className="section-btn  !bg-[10px] !pl-[20px] hover:!bg-[25px]  hover:!pl-[40px]  !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
                view all posts
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-[75px] md:py-[100px] lg:py-[150px] bg-[bottom_right] bg-no-repeat">
        <div className="w-[97%] mx-auto max-w-[1450px] ">
          <div className="grid gap-x-[50px] gap-y-[50px] items-center">
            <div className="border-4  w-fit mx-auto">
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
            <div>
              <div className="rounded-[10px] overflow-hidden w-full h-[300px] min-[480px]:h-[450px] relative ">
                <Image
                  src={
                    "https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e80cc335836db3cdebdf20a_geert-pieters-3RnkZpDqsEI-unsplash.jpg"
                  }
                  height={500}
                  width={500}
                  alt="image"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OutdoorWorkout;

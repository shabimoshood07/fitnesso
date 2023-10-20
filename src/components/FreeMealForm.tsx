const FreeMealForm = () => {
  return (
    <section className="py-[75px] md:py-[100px] bg-no-repeat bg-center bg-cover bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e8318706203833a1bd11fad_logan-weaver-pD5kSwtNgMc-unsplash.jpg')]">
      <div className=" p-[30px] md:py-[100px] md:px-[50px] lg:px[100px] bg-[#cfddee] w-[95%] max-w-[1450px] mx-auto rounded-[10px] ">
        <h1 className=" mb-[30px] font-[500] text-center text-[30px] md:text-[40px] lg:text-[64px] leading-[1.1em]  ">
          Get our free meal plan
        </h1>
        <p className=" mb-[30px] font-[400] text-[20px] leading-[1.8em] text-center max-w-[800px] mx-auto">
          Signup to our newsletter to get a free 30 day meal plan. You will
          receive all guidance on what to eat, how to cook and how much to eat.
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
  );
};

export default FreeMealForm;

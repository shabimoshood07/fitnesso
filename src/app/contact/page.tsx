const Contact = () => {
  return (
    <section className=" py-[75px] md:py-[100px] lg:py-[150px] bg-[#f5f5f5] overflow-hidden bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e832c916203834f1ed18f1c_Group%20117.svg')] bg-no-repeat bg-[bottom_right] ">
      <div className=" w-[95%] max-w-[1450px] mx-auto md:grid grid-cols-2 gap-x-[25px] gap-y-[25px] ">
        <div>
          <h2 className="  mb-[30px] text-[14px] leading-[1.6em] tracking-[1px]  uppercase font-[500]  ">
            Contact
          </h2>
          <h1 className="mb-[30px]  text-[35px] tracking-[1px] heading-[1.1em]  md:text-[55px] lg:text-[72px]  font-[500]">
            Get in touch to schedule your discovery call.
          </h1>
          <p className="mb-[30px] max-w-[500px] text-[18px] leading-[1.8em] font-[400] md:text-[20px]  ">
            Just fill out this short form on the right to get started in your
            life changing journey. If you prefer you can contact us below
            directly.
          </p>
          <label
            htmlFor="email"
            className="mb-[15px] uppercase text-[14px] leading-[1.6em] font-[500] tracking-[1px]  "
          >
            Email
          </label>
          <h3 className="font-[500] text-[20px] leading-[1.8em] tracking-[.5px] md:text-[30px]  mb-[30px]">
            contact@fitnesso.com
          </h3>
          <label
            htmlFor="email"
            className="mb-[15px] uppercase text-[14px] leading-[1.6em] font-[500] tracking-[1px]  "
          >
            Phone
          </label>
          <h3 className="font-[500] text-[20px] leading-[1.8em] tracking-[.5px] md:text-[30px]  ">
            +381 73 49 032
          </h3>
        </div>
        <form action="" className="p-[30px] bg-[#cfddee]">
          <div className="grid gap-y-[25px] gap-x-[25px] w-full ">
            <input
              type="text"
              placeholder="Full Name"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] w-full col-span-2 lg:col-span-1"
            />
            <input
              type="text"
              placeholder="Current weight"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] w-full col-span-2 lg:col-span-1"
            />
            <input
              type="text"
              placeholder="Goal weight"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] w-full col-span-2  lg:col-span-1"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] w-full col-span-2 lg:col-span-1 "
            />
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              placeholder="Describe your goal"
              className="py-[8px] px-[15px] h-[60px] text-[16px] leading-[1.6em] bg-[rgba(32,52,146,0.1)] text-[#081158] placeholder:text-[#081158] rounded-[10px] w-full col-span-2 min-h-[300px]"
            ></textarea>
            <button className="section-btn !w-full md:col-span-2 !bg-[#081158] !text-white bg-[url('https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808dcb9d75512a65c99484_Vector%204.svg')] ">
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import Link from "next/link";
import React from "react";

const SectionNav = ({ category }: { category: string }) => {
  return (
    <div className="mt-[100px] pb-[15px] border-b-2 md:flex justify-between items-center">
      <h1 className="text-[14px] leading-[1.6em] font-[500] uppercase mb-[14px] md:mb-0">
        Categories
      </h1>
      <div className="flex items-center gap-4">
        <Link href="/shop">
          <button
            className={`hover:-translate-y-1 duration-200 py-[12px] px-[15px] md:px-[20px] font-[500] text-[14px] leading-[1.6em] uppercase tracking-[2px] ${
              category === "all" ? "bg-[#8ea5a0] text-white" : ""
            } rounded-[6px] `}
          >
            All
          </button>
        </Link>
        <Link href="/category/nutrition">
          <button
            className={`hover:-translate-y-1 duration-200 py-[12px] px-[15px] md:px-[20px] font-[500] text-[14px] leading-[1.6em] uppercase tracking-[2px]  rounded-[6px] ${
              category === "nutrition" ? "bg-[#8ea5a0] text-white" : ""
            }`}
          >
            Nutrition
          </button>
        </Link>
        <Link href="/category/training">
          <button
            className={`hover:-translate-y-1 duration-200 py-[12px] px-[15px] md:px-[20px] font-[500] text-[14px] leading-[1.6em] uppercase tracking-[2px]  rounded-[6px] ${
              category === "training" ? "bg-[#8ea5a0] text-white" : ""
            } `}
          >
            Training
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionNav;

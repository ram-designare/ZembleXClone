import React from "react";

export const Brands = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row gap-4 my-4 md:px-[16px]">
        <div className="flex flex-col md:w-1/3">
          <div className="flex flex-col bg-[#ffffff0f] rounded-lg p-[24px] md:pb-20">
            <p className="text-base lg:text-[24px]">
              Bring your imagination to Life
            </p>
            <p className="text-base lg:text-[18px] font-light text-[#ffffff99]">
              Among the brands I&apos;ve used, there&apos;s a spectrum of quality, and
              reliability. Some brands stand out for their innovative designs.
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 px-4 py-2 border border-gray-800 rounded-lg w-full mt-4">
            <p className="text-base lg:text-[18px]">Buy Now</p>
            <img className="w-3" src="/images/right-arrow.svg"></img>
          </div>
        </div>
        <div className="md:w-2/3 h-auto bg-[#ffffff0f] rounded-lg"></div>
      </div>
    </div>
  );
};

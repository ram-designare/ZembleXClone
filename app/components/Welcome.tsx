import React from "react";

export const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:py-[108px] md:px-[16px]">
      <p className="md:w-1/2 text-[32px] xl:text-[48px] leading-[1.2em]">
        Inspiring Dynamic Passion Leads to Excellence
      </p>
      <div className="flex flex-col md:w-1/2">
        <p className="text-base lg:text-[18px] font-light text-[#ffffff99] py-[8px] md:py-0">
          Welcome to our world! Before embarking on your exploration of our
          offerings, allow us to unveil the story behind our brand. Our About
          page serves as a gateway to understanding our journey, values, and the
          relentless passion propelling us forward.Get To Know Us Better
        </p>
        <div className="flex items-center justify-between gap-3 px-4 py-2 border border-[#ffffff4d] rounded-xl md:rounded-lg w-full md:mt-4">
          <p className="text-base lg:text-[18px]">More About Us</p>
          <img className="w-3" src="/images/right-arrow.svg"></img>
        </div>
      </div>
    </div>
  );
};

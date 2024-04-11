import React from "react";

export const Header = () => {
  const stats = [
    { stat: "320+", text: "Happy Customers" },
    { stat: "100k+", text: "Instagram Followers" },
    { stat: "1.5M", text: "Behance Views" },
  ];
  return (
    <div className="flex flex-col-reverse md:flex-row items-center pt-[32px] md:px-[16px] pb-[16px]">
      <div className="flex flex-col pt-[16px] md:px-[8px] pb-[8px] gap-[24px] w-full md:w-1/2">
        <p className="text-[32px] xl:text-[48px] leading-[1.2em]">
          Make your Website Standout Using Futuristic Templates
        </p>
        <p className="text-base lg:text-[18px] font-light text-[#ffffff99]">
          Step into a world of cutting edge design and limitless possibilities.
          Elevate your experience with our futuristic templates, crafting a
          tomorrow that starts now.
        </p>
        <div className="flex gap-6">
          <div className="flex items-center justify-between gap-3 px-[24px] py-2 border border-[#ffffff4d] rounded-lg w-[170px] lg:w-[200px]">
            <p className="text-base lg:text-[18px]">Buy Now</p>
            <img className="w-3" src="/images/right-arrow.svg"></img>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-6" src="/images/explore-more-icon.svg"></img>
            <p className="text-[14px] lg:text-[18px]">Explore More</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          {stats.map((each: any, index: any) => (
            <div className="flex flex-col items-center" key={`${each.name}+${index}`}>
              <p className="text-base lg:text-[24px]">{each.stat}</p>
              <p className="text-[12px] text-center lg:text-[14px] font-extralight">{each.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2">
        <video loop playsInline autoPlay muted src="/videos/header-video.mp4" />
      </div>
    </div>
  );
};

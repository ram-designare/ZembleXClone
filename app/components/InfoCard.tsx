import React, { FC } from "react";

interface InfoCardProps {
  icon: any;
  title: string;
  subtitle: string;
  descOne: string;
  descTwo: string;
  image: any;
}

export const InfoCard: FC<InfoCardProps> = ({
  icon,
  title,
  subtitle,
  descOne,
  descTwo,
  image,
}) => {
  return (
    <div className="px-6 py-8 bg-[#ffffff0f] rounded-[20px]">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col md:w-1/3 gap-2">
          <div className="px-2 py-2 border rounded-xl w-fit border-[#ffffff4d]">
            <img className="w-10" src={icon}></img>
          </div>
          <p className="text-base lg:text-[24px]">{title}</p>
          <p className="text-base lg:text-[18px] font-light text-[#ffffff99]">{subtitle}</p>
        </div>
        <img
          className="lg:w-2/3 max-h-[400px] md:h-[250px] object-cover rounded-[50px] py-[8px] md:p-[8px]"
          src={image}
        ></img>
      </div>
      <div className="flex flex-col lg:flex-row justify-between p-[8px] md:pt-10">
        <p className="text-[14px] lg:text-[18px]">{descOne}</p>
        <p className="text-base lg:text-[18px] font-light text-[#ffffff99]">{descTwo}</p>
      </div>
    </div>
  );
};

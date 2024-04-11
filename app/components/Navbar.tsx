"use client";

import React, { FC, useState } from "react";

interface NavbarProps {
  setOpenMenu?:any;
}

export const Navbar:FC<NavbarProps> = ({setOpenMenu}) => {
  const navLinks = [
    { icon: "/images/shop-icon.svg" },
    { icon: "/images/message-icon.svg" },
    { icon: "/images/share-icon.svg" },
    { icon: "/images/profile-icon.svg" },
  ];


  return (
    <div className="flex justify-between py-[8px] md:px-[16px]">
      <div className="hidden lg:flex gap-2 w-[250px] py-3 px-3 rounded-lg items-center bg-[#ffffff0f] cursor-pointer">
        <img className="w-5" src="/images/search-icon.svg"></img>
        <input placeholder="Search here..." className="bg-transparent outline-none" />
      </div>
      <div className="flex px-3 py-3 bg-[#ffffff0f] rounded-lg lg:hidden" onClick={() => setOpenMenu(true)}>
        <img className="w-5" src="/images/hamburger.svg"></img>
      </div>

      <div className="flex gap-2 lg:gap-8 items-center">
        {navLinks.map((each: any, index: any) => (
          <div key={`${each.icon}`} className="px-3 py-3 bg-[#ffffff0f] rounded-lg">
            <img className="w-5 " src={each.icon}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

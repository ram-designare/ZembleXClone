import React, { FC } from "react";

interface MenuProps {
  setOpenMenu?: any;
}

export const MenuMobile: FC<MenuProps> = ({ setOpenMenu }) => {
  const menuItems = [
    { name: "Home", icon: "/images/home-icon.svg" },
    { name: "About", icon: "/images/about-icon.svg" },
    { name: "Portfolio", icon: "/images/portfolio-icon.svg" },
    { name: "Services", icon: "/images/services-icon.svg" },
    { name: "Shop", icon: "/images/shop-icon.svg" },
    { name: "Blog", icon: "/images/blog-icon.svg" },
    { name: "Contact", icon: "/images/contact-icon.svg" },
  ];

  const socialMediaLinks = [
    { image: "/images/instagram-icon.svg" },
    { image: "/images/twitter-icon.svg" },
    { image: "/images/tiktok-icon.svg" },
    { image: "/images/behance-icon.svg" },
    { image: "/images/dribble-icon.svg" },
  ];

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black">
      <div className="flex flex-col container mx-auto lg:px-0 px-4">
        <div className="flex items-center justify-between">
          <div className="flex h-full px-3 py-3 bg-[#ffffff0f] rounded-lg" onClick={() => {setOpenMenu(false)}}>
            <img className="w-5 " src="/images/cross-mark.svg"></img>
          </div>
          <div className="flex items-start gap-2 py-3">
            <img
              className="w-10 h-10 object-cover rounded-lg"
              src="/images/user-image.jpg"
            ></img>
            <img className="w-5" src="/images/battery-icon.svg"></img>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 py-3">
          <img className="w-10" src="/images/logo.svg"></img>
          <p className="text-[28px] font-semibold">ZembleX</p>
        </div>
        <div className="flex gap-4 justify-center py-3 px-3 border rounded-lg border-gray-800">
          {socialMediaLinks.map((each: any, index: any) => (
            <img key={`${each.image}`} className="w-5" src={each.image}></img>
          ))}
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-800" />
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col mt-10">
            <p className="text-xs pb-2">Menu</p>
            <div className="flex flex-col gap-4">
              {menuItems.map((each: any, index: any) => (
                <div key={`${each.name}`} className="flex gap-2 items-center">
                  <img src={each.icon} className="w-4"></img>
                  <p>{each.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <hr className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

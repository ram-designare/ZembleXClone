import React from "react";

export const Menu = () => {
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
    <div className="hidden lg:flex flex-none flex-col flex-grow flex-shrink-0 basis-0 items-start justify-start sticky left-0 top-0 px-4 h-screen w-[250px] border-r-[1px] border-gray-800">
      <div className="flex items-center gap-4 py-3">
        <img className="w-10" src="/images/logo.svg"></img>
        <p className="text-[28px] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent font-semibold">ZembleX</p>
      </div>
      <hr className="h-[1px] bg-gray-800 dark:bg-gray-800 w-full" />
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-col mt-10">
          <p className="text-xs pb-2">Menu</p>
          <div className="flex flex-col gap-4">
            {menuItems.map((each: any, index: any) => (
              <div className="flex gap-2 items-center" key={`${each.name}+${index}`}>
                <img src={each.icon} className="w-4"></img>
                <p>{each.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 justify-center py-3 px-3 border rounded-lg border-gray-800">
            {socialMediaLinks.map((each: any, index: any) => (
              <img key={`${index}`} className="w-5" src={each.image}></img>
            ))}
          </div>
          <hr className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-800" />

          <div className="flex items-start gap-2 py-3">
            <img
              className="w-10 h-10 object-cover rounded-lg"
              src="/images/user-image.jpg"
            ></img>
            <div className="flex flex-col">
              <p className="text-base">Caleb Martinez</p>
              <p className="text-xs">Available</p>
            </div>
            <img className="w-5" src="/images/battery-icon.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

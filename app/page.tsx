"use client";

import Image from "next/image";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { InfoCard } from "./components/InfoCard";
import { Brands } from "./components/Brands";
import { useState } from "react";
import { MenuMobile } from "./components/MenuMobile";

export default function Home() {
  const infoCardDetails = [
    {
      icon: "/images/latest-designs-icon.svg",
      title: "Latest Designs",
      subtitle: "Cutting edge Design Solutions",
      descOne: "Unleash Your Potential And Explore Different Oppurtunities",
      descTwo:
        "our solutions are crafted to empower growth and foster success. Discover the possibilities with us.",
      image: "/images/latest-designs-image.jpg",
    },
    {
      icon: "/images/crazy-achievements-icon.svg",
      title: "Crazy Achievements",
      subtitle: "Award Class Showcase",
      descOne: "Where Excellence Gets Noticed",
      descTwo:
        "Featuring 30+ prestigious accolades, symbolizing our dedication to excellence",
      image: "/images/crazy-achievements-image.jpg",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex">
      <div className="">
        <Menu />
      </div>
      <div className="container mx-auto relative max-w-[1080px] px-4 lg:px-0 flex-1">
        <Navbar setOpenMenu={setOpenMenu} />
        <Header />
        <Welcome />
        <div className="flex flex-col gap-4 mt-12 md:px-[16px]">
          {infoCardDetails.map((each: any, index: any) => (
            <InfoCard
              key={`${each.title}`}
              icon={each.icon}
              title={each.title}
              subtitle={each.subtitle}
              descOne={each.descOne}
              descTwo={each.descTwo}
              image={each.image}
            />
          ))}
        </div>
        <Brands />
        {openMenu && <MenuMobile setOpenMenu={setOpenMenu} />}
      </div>
    </div>
  );
}

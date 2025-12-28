"use client";

import { useRef } from "react";
import Image from "next/image";

interface ThemeItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const themesData: ThemeItem[] = [
  {
    id: 1,
    title: "Solo Travel",
    description: "Travel solo and enjoy your peaceful journey",
    image: "/images/themes/solo-travel.png",
  },
  {
    id: 2,
    title: "Romantic Travel",
    description: "Travel with your partner to the most beautiful places",
    image: "/images/themes/romantic-travel.png",
  },
  {
    id: 3,
    title: "Family Travel",
    description: "Travel with your loved ones & enjoy your journey",
    image: "/images/themes/family-travel.png",
  },
  {
    id: 4,
    title: "Destination Wedding",
    description: "Travel with your loved ones & celebrate your wedding",
    image: "/images/themes/destination-wedding.png",
  },
];

export function ExploreThemes() {
  return (
    <section className="w-full bg-white py-[40px] md:py-[80px] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[#16242a] text-[28px] md:text-[42px] font-semibold leading-[40px] md:leading-normal tracking-[-0.56px] md:tracking-[-0.84px] mb-[8px] md:mb-[12px]">
            Explore Our Themes
          </h2>
          <p className="text-[#16242a] text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[32px] tracking-[-0.32px] md:tracking-[-0.36px]">
            Choose from various themes that are hand curated
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center gap-[10px]">
          {themesData.map((theme) => (
            <div
              key={theme.id}
              className="flex-shrink-0 w-[258px] flex flex-col gap-[12px]"
            >
              {/* Image */}
              <div className="relative w-[258px] h-[312px] rounded-[10px] overflow-hidden group cursor-pointer">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={100}
                  sizes="258px"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-0">
                <h3 className="text-[#16242a] text-[20px] font-semibold leading-[34px] tracking-[-0.4px]">
                  {theme.title}
                </h3>
                <p className="text-[#16242a] text-[16px] font-medium leading-[26px] tracking-[-0.32px]">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

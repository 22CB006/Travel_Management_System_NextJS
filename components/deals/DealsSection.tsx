"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { DealCard } from "./DealCard";

const categories = [
  "Deals",
  "Hotels",
  "Packages",
  "Cruise",
  "Cabs",
  "Activities",
  "Community Trips",
  "Trekking",
];

const dealsData = [
  {
    type: "hotel" as const,
    title: "Lemon Tree Hotel",
    location: "New Delhi",
    price: 5999,
    originalPrice: 12999,
    imageUrl: "/images/deals/hotel-lemon-tree.png",
    tags: ["Hotel"],
  },
  {
    type: "package" as const,
    title: "Shimla, Kullu & Manali",
    location: "Manali",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "/images/deals/package-shimla-manali.png",
    tags: ["Package", "6N/7D"],
    features: {
      flights: 2,
      hotels: 11,
      activities: 5,
      transfers: 4,
    },
    badges: ["visa", "insurance"] as const,
  },
  {
    type: "cruise" as const,
    title: "Cordelia Cruise",
    location: "Chennai - Chennai",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "/images/deals/cruise-cordelia.png",
    tags: ["Cruise", "6N/7D"],
    date: "16 October 2023",
    badges: ["visa"] as const,
  },
  {
    type: "cruise" as const,
    title: "Royal Caribbean Cruise",
    location: "Barcelona, Spain - Tampa, Florida",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "http://localhost:3845/assets/4227560266b28cdb08330ef24b434cf30c979a14.png",
    tags: ["Cruise", "6N/7D"],
    date: "16 October 2023",
    badges: ["visa"] as const,
  },
  {
    type: "trekking" as const,
    title: "Spiti Valley Trek",
    location: "Himachal Pradesh",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "http://localhost:3845/assets/a9e756141a308eb9f6f011cd32e8275328dcffcf.png",
    tags: ["Trekking", "6N/7D"],
    date: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023 +2 more",
    badges: ["insurance"] as const,
  },
  {
    type: "community" as const,
    title: "Zanskar Valley Trip",
    location: "Leh",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "http://localhost:3845/assets/3f6313564fd24cbc3b33dfba7eb3291cfe334e84.png",
    tags: ["Community Trip", "6N/7D"],
    date: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023 +2 more",
    badges: ["insurance"] as const,
  },
  {
    type: "luxury" as const,
    title: "Marriot International Hotel",
    location: "New Delhi",
    price: 10999,
    originalPrice: 12999,
    imageUrl: "http://localhost:3845/assets/165752599f7ec9d3b6e278d0024ae76ede6db6bd.png",
    tags: ["Luxury Hotel"],
  },
];

export function DealsSection() {
  const [activeCategory, setActiveCategory] = useState("Deals");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-[#16242a] text-[42px] font-semibold tracking-tight text-center mb-12">
          Exclusive Deals & Offers
        </h2>

        {/* Container */}
        <div className="bg-white rounded-[20px] p-5 relative">
          {/* Category Tabs */}
          <div className="flex gap-0 mb-4 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-4 rounded-[10px] font-semibold text-[20px] tracking-tight
                  whitespace-nowrap transition-colors
                  ${
                    activeCategory === category
                      ? "bg-[#ffefdf] text-[#ff6a00]"
                      : "text-[#16242a] hover:bg-gray-50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards Container */}
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-2.5 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {dealsData.map((deal, index) => (
                <DealCard key={index} {...deal} />
              ))}
              
              {/* Explore More Card */}
              <div className="relative w-[410px] h-[450px] rounded-[20px] overflow-hidden flex-shrink-0">
                <Image
                  src="http://localhost:3845/assets/2d4c9922a164c963c1119287efbea275a823655f.png"
                  alt="Explore More"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 backdrop-blur-[15px] bg-white/20" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6a00] text-white px-10 py-4 rounded-[10px] text-[16px] font-semibold tracking-tight hover:bg-[#ff5500] transition-colors">
                  Explore More
                </button>
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={scrollRight}
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#ff6b00] rounded-[25px] flex items-center justify-center hover:bg-[#ff5500] transition-colors shadow-lg rotate-45 group"
              aria-label="Scroll right"
            >
              <svg
                className="w-7 h-7 -rotate-45 group-hover:translate-x-0.5 transition-transform"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M8 14h12M14 8l6 6-6 6"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
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
    image: "/images/deals/hotel-lemon-tree.png",
    title: "Lemon Tree Hotel",
    location: "New Delhi",
    price: 5999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
  },
  {
    type: "package" as const,
    image: "/images/deals/package-shimla-manali.png",
    title: "Shimla, Kullu & Manali",
    location: "Manali",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    tags: ["6N/7D"],
    packageDetails: {
      flights: 2,
      hotels: 11,
      activities: 5,
      transfers: 4,
    },
    hasInsurance: true,
  },
  {
    type: "cruise" as const,
    image: "/images/deals/cruise-cordelia.png",
    title: "Cordelia Cruise",
    location: "Chennai - Chennai",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    tags: ["6N/7D"],
    date: "16 October 2023",
    hasVisa: true,
  },
  {
    type: "cruise" as const,
    image: "/images/deals/cruise-cordelia.png",
    title: "Royal Caribbean Cruise",
    location: "Barcelona, Spain - Tampa, Florida",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    tags: ["6N/7D"],
    date: "16 October 2023",
    hasVisa: true,
  },
  {
    type: "trekking" as const,
    image: "/images/deals/package-shimla-manali.png",
    title: "Spiti Valley Trek",
    location: "Himachal Pradesh",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    tags: ["6N/7D"],
    date: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023  +2 more",
    hasInsurance: true,
  },
  {
    type: "community" as const,
    image: "/images/deals/package-shimla-manali.png",
    title: "Zanskar Valley Trip",
    location: "Leh",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    tags: ["6N/7D"],
    date: "12 Oct 2023, 22 Nov 2023, 01 Dec 2023  +2 more",
    hasInsurance: true,
  },
  {
    type: "luxury" as const,
    image: "/images/deals/hotel-lemon-tree.png",
    title: "Marriot International Hotel",
    location: "New Delhi",
    price: 10999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
  },
  {
    type: "hotel" as const,
    image: "/images/deals/hotel-lemon-tree.png",
    title: "Lemon Tree Hotel",
    location: "New Delhi",
    price: 5999,
    originalPrice: 12999,
    timeLeft: "11h : 32m : 45s",
    isExploreMore: true,
  },
];

export function DealsSection() {
  const [activeCategory, setActiveCategory] = useState("Deals");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Card width (410px) + gap (10px)
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-[40px] md:py-[80px] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-[#16242a] text-[28px] md:text-[42px] font-semibold leading-[40px] md:leading-[64px] tracking-[-0.56px] md:tracking-[-0.84px] text-center mb-[24px] md:mb-[40px]">
          Exclusive Deals & Offers
        </h2>

        {/* Deals Container */}
        <div className="bg-[#f8f9fb] rounded-[20px] p-[12px] md:p-[20px] relative">
          {/* Category Tabs */}
          <div className="overflow-x-auto scrollbar-hide mb-[12px] md:mb-[16px] -mx-[12px] px-[12px] md:mx-0 md:px-0">
            <div className="flex items-center gap-[8px] md:justify-between">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-[16px] md:px-[20px] py-[12px] md:py-[16px] rounded-[10px] transition-colors shrink-0 ${
                    activeCategory === category
                      ? "bg-[#ffefdf] text-[#ff6a00]"
                      : "bg-transparent text-[#16242a] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span className="text-[16px] md:text-[20px] font-semibold tracking-[-0.64px] md:tracking-[-0.8px] whitespace-nowrap">
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Deals List - Horizontal Scroll */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide"
            >
              <div className="flex gap-[10px] pb-[10px]">
                {dealsData.map((deal, index) => (
                  <DealCard key={index} {...deal} />
                ))}
              </div>
            </div>

            {/* Right Arrow Button - Desktop Only */}
            <button
              onClick={handleScroll}
              className="hidden lg:flex absolute right-[-35px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#ff6b00] rounded-full items-center justify-center hover:bg-[#e55f00] transition-all hover:scale-110 active:scale-95"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
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

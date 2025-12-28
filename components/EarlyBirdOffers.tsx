"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface OfferCard {
  id: number;
  title: string;
  location: string;
  duration: string;
  image: string;
  price: number;
  originalPrice: number;
  flights: number;
  hotels: number;
  activities: number;
  transfers: number;
  isSummerSale?: boolean;
}

const offersData: OfferCard[] = [
  {
    id: 1,
    title: "Shimla, Kullu, Manali in Winters",
    location: "Himachal Pradesh",
    duration: "6N /7D",
    image: "/images/early-bird/shimla-manali.png",
    price: 5999,
    originalPrice: 12999,
    flights: 2,
    hotels: 11,
    activities: 5,
    transfers: 4,
  },
  {
    id: 2,
    title: "The Desert Odessy",
    location: "Rajasthan",
    duration: "6N /7D",
    image: "/images/early-bird/desert-odessy.png",
    price: 5999,
    originalPrice: 12999,
    flights: 2,
    hotels: 11,
    activities: 5,
    transfers: 4,
    isSummerSale: true,
  },
  {
    id: 3,
    title: "The Landscape Adventure",
    location: "Meghalaya",
    duration: "6N /7D",
    image: "/images/early-bird/landscape-adventure.png",
    price: 5999,
    originalPrice: 12999,
    flights: 2,
    hotels: 11,
    activities: 5,
    transfers: 4,
  },
];

export function EarlyBirdOffers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 378; // Card width
        const gap = 20; // Gap between cards
        const scrollAmount = cardWidth + gap;
        
        // Check if we've reached the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          // Reset to start
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll to next card
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 378;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
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
        <div className="text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-[#16242a] text-[28px] md:text-[42px] font-semibold leading-[40px] md:leading-normal tracking-[-0.56px] md:tracking-[-0.84px] mb-[8px] md:mb-[12px]">
           Explore Our Early Bird Offers
          </h2>
          <p className="text-[#16242a] text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[32px] tracking-[-0.32px] md:tracking-[-0.36px]">
           Grab our early bird offer deals and enjoy your vacation with multiple benefits
          </p>
        </div>

        {/* Cards Container with Right Arrow */}
        <div className="relative">
          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex gap-[20px]" style={{ width: "max-content" }}>
              {offersData.map((offer) => (
                <div
                  key={offer.id}
                  className="flex-shrink-0 w-[378px] rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative w-full h-[450px]">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={100}
                      sizes="378px"
                    />
                    
                    {/* Dark gradient overlay from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Early Bird Badge */}
                    <div className="absolute top-[20px] right-[20px] bg-[#ff6a00] text-white px-[14px] py-[8px] rounded-[25px] flex items-center gap-[6px] shadow-lg">
                      <Image src="/icons/early-bird.svg" alt="" width={16} height={16} />
                      <span className="text-[13px] font-semibold">Early Bird Offer</span>
                    </div>

                    {/* Summer Sale Ribbon - Curved Corner */}
                    {offer.isSummerSale && (
                      <div className="absolute top-0 left-0 w-[120px] h-[120px] overflow-hidden z-10" style={{ borderTopLeftRadius: '20px' }}>
                        {/* Diagonal ribbon with gradient - light to dark along the ribbon */}
                        <div 
                          className="absolute w-[170px] h-[40px] shadow-lg flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(to bottom right, #FFD9BD 0%, #B3E5F1 100%)',
                            top: '25px',
                            left: '-42px',
                            transform: 'rotate(-45deg)',
                          }}
                        >
                          <span className="text-[#16242a] text-[12px] font-bold tracking-wide uppercase">
                            Summer Sale
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Duration Badge */}
                    <div className="absolute top-[180px] left-[20px] bg-[#3d3d3d]/90 backdrop-blur-sm text-white px-[14px] py-[8px] rounded-[8px]">
                      <span className="text-[14px] font-semibold">{offer.duration}</span>
                    </div>

                    {/* Content Overlay on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-[20px] text-white">
                      {/* Title and Location */}
                      <h3 className="text-white text-[22px] font-semibold leading-[30px] tracking-[-0.44px] mb-[4px]">
                        {offer.title}
                      </h3>
                      <p className="text-white/90 text-[14px] font-medium leading-[20px] tracking-[-0.28px] mb-[20px]">
                        {offer.location}
                      </p>

                      {/* Icons Row */}
                      <div className="flex items-center justify-between mb-[20px]">
                        <div className="flex flex-col items-center gap-[6px]">
                          <Image src="/icons/flights-orange.svg" alt="Flights" width={22} height={22} />
                          <span className="text-white text-[11px] font-medium">{offer.flights} Flights</span>
                        </div>
                        <div className="flex flex-col items-center gap-[6px]">
                          <Image src="/icons/hotels-orange.svg" alt="Hotels" width={22} height={22} />
                          <span className="text-white text-[11px] font-medium">{offer.hotels} Hotels</span>
                        </div>
                        <div className="flex flex-col items-center gap-[6px]">
                          <Image src="/icons/activities-orange.svg" alt="Activities" width={22} height={22} />
                          <span className="text-white text-[11px] font-medium">{offer.activities} Activities</span>
                        </div>
                        <div className="flex flex-col items-center gap-[6px]">
                          <Image src="/icons/transfers-orange.svg" alt="Transfers" width={22} height={22} />
                          <span className="text-white text-[11px] font-medium">{offer.transfers} Transfers</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-[6px] flex-wrap">
                        <div className="flex items-baseline gap-[2px]">
                          <Image src="/icons/rupee-orange.svg" alt="₹" width={20} height={20} />
                          <span className="text-white text-[36px] font-bold leading-none">
                            {offer.price.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-white/70 text-[16px] font-medium line-through">
                          {offer.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-white/90 text-[14px] font-medium">Per Person</span>
                      </div>
                      <p className="text-white/70 text-[12px] font-medium mt-[4px]">Includes taxes</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollNext}
            className="hidden lg:flex absolute right-[-35px] top-[50%] translate-y-[-50%] w-[50px] h-[50px] bg-[#ff6a00] items-center justify-center transition-all hover:bg-[#e55f00] hover:scale-110 active:scale-95 z-10 rounded-full"
            aria-label="Scroll to next offer"
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
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-[40px]">
          <button className="bg-[#ff6a00] text-white px-[40px] py-[14px] rounded-[8px] text-[16px] font-semibold hover:bg-[#e55f00] transition-all hover:scale-105 active:scale-95">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

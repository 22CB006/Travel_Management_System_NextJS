"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface OfferItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  buttonText: string;
}

const offersData: OfferItem[] = [
  {
    id: 1,
    title: "FLAT 30-50% OFF",
    subtitle: "FLAT",
    image: "/images/offers/flat-discount.png",
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "FLAT 30% OFF",
    subtitle: "Women's Day Special",
    image: "/images/offers/womens-day.png",
    buttonText: "Explore Now",
  },
  {
    id: 3,
    title: "Refer & Earn Rewards",
    subtitle: "Show off your adventure and unlock surprise rewards.",
    image: "/images/offers/refer-earn.png",
    buttonText: "Explore Now",
  },
  {
    id: 4,
    title: "Tag & Earn Rewards",
    subtitle: "Show off your adventure and unlock surprise rewards.",
    image: "/images/offers/tag-earn.png",
    buttonText: "Explore Now",
  },
  {
    id: 5,
    title: "Birthday Bonus",
    subtitle: "Show off your adventure and unlock surprise rewards.",
    image: "/images/offers/birthday-bonus.png",
    buttonText: "Explore Now",
  },
  {
    id: 6,
    title: "Reward Points For Every Booking",
    subtitle: "Show off your adventure and unlock surprise rewards.",
    image: "/images/offers/reward-points.png",
    buttonText: "Explore Now",
  },
  {
    id: 7,
    title: "Earn Points For Every Successful Login",
    subtitle: "Show off your adventure and unlock surprise rewards.",
    image: "/images/offers/login-points.png",
    buttonText: "Explore Now",
  },
  {
    id: 8,
    title: "Explore More Exciting Rewards",
    subtitle: "",
    image: "/images/offers/more-rewards.png",
    buttonText: "Explore Now",
  },
];

export function OffersRewards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Wait 2 seconds before starting to scroll
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(initialDelay);
  }, []);

  // Fast continuous auto-scroll using CSS animation approach
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !hasStarted) return;

    let scrollInterval: NodeJS.Timeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isPaused) {
          scrollContainer.scrollLeft += 4; // Faster scroll speed

          // Reset to beginning when reaching halfway (seamless loop)
          const maxScroll = scrollContainer.scrollWidth / 2;
          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 16); // ~60fps
    };

    if (!isPaused) {
      startScrolling();
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isPaused, hasStarted]);

  return (
    <section className="w-full bg-white py-[40px] md:py-[80px] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex gap-[20px]">
              {/* Render items twice for seamless infinite loop */}
              {[...offersData, ...offersData].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="relative flex-shrink-0 w-[1200px] h-[372px] rounded-[20px] overflow-hidden group transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      quality={100}
                      priority={item.id <= 2}
                      sizes="1200px"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[22.984%] via-black/70 via-[56.878%] to-black/95 transition-all duration-500 group-hover:via-black/60 group-hover:to-black/85" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 px-[49px] pb-[49px] flex flex-col gap-[10px]">
                    <div className="text-white">
                      {item.subtitle && item.id === 1 ? (
                        <div className="flex flex-col">
                          <p className="text-[28px] font-semibold leading-normal tracking-[-0.56px]">
                            {item.subtitle}
                          </p>
                          <p className="text-[42px] font-semibold leading-normal tracking-[-0.84px]">
                            {item.title}
                          </p>
                        </div>
                      ) : item.subtitle && item.id === 2 ? (
                        <div className="flex flex-col">
                          <p className="text-[28px] font-medium leading-normal tracking-[-0.56px]">
                            {item.subtitle}
                          </p>
                          <p className="text-[42px] font-semibold leading-normal tracking-[-0.84px]">
                            {item.title}
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <h3 className="text-[42px] font-semibold leading-normal tracking-[-0.84px] mb-[4px]">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-[18px] font-medium leading-[32px]">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Button */}
                    <button className="bg-[#ff6a00] text-white px-[24px] py-[16px] rounded-[10px] text-[14px] font-medium tracking-[-0.28px] capitalize transition-all duration-300 hover:bg-[#e55f00] hover:scale-110 hover:shadow-lg active:scale-95 w-fit">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

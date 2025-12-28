"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    title: "Solo/Group Female Travelers",
    subtitle: "Your safety and peace of mind are our utmost priorities",
    image: "/images/banners/female-travelers.png",
    buttonText: "Explore Now",
  },
  {
    id: 2,
    title: "Destination Wedding",
    subtitle: "Cherish Your Love Amidst Breathtaking Backdrops At Dream Wedding Destinations",
    image: "/images/banners/destination-wedding.png",
    buttonText: "Explore Now",
  },
  {
    id: 3,
    title: "Trekking",
    subtitle: "Conquer majestic peaks, traverse breathtaking trails, and connect with nature",
    image: "/images/banners/trekking.png",
    buttonText: "Explore Now",
  },
  {
    id: 4,
    title: "Community Trip",
    subtitle: "Embark on Adventurous Trails and Immerse Yourself in Unforgettable Experiences",
    image: "/images/banners/community-trip.png",
    buttonText: "Explore Now",
  },
  {
    id: 5,
    title: "Luxury Hotels",
    subtitle: "Enjoy your luxurious stay at popular hotels",
    image: "/images/banners/luxury-hotels.png",
    buttonText: "Explore Now",
  },
  {
    id: 6,
    title: "Group Booking",
    subtitle: "Unlock Unbeatable Group Booking Deals with Exclusive Discounts",
    image: "/images/banners/group-booking.png",
    buttonText: "Explore Now",
  },
];

export function ExperienceExtraordinary() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll to current index
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const containerWidth = scrollContainer.offsetWidth;
    const targetScroll = currentIndex * (containerWidth + 20); // width + gap

    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, [currentIndex]);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused || isScrolling) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, isScrolling]);

  // Handle manual scroll with debounce
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const containerWidth = scrollContainer.offsetWidth;
        const newIndex = Math.round(scrollContainer.scrollLeft / (containerWidth + 20));
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < bannerData.length) {
          setCurrentIndex(newIndex);
        }
        setIsScrolling(false);
      }, 150);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-[40px] md:py-[80px] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-[24px] md:mb-[40px]">
          <h2 className="text-[#16242a] text-[28px] md:text-[42px] font-semibold leading-[40px] md:leading-[64px] tracking-[-0.56px] md:tracking-[-0.84px] mb-[8px] md:mb-[12px]">
            Experience the Extraordinary
          </h2>
          <p className="text-[#29383e] text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[32px]">
            Immerse yourself in extraordinary journeys tailored to your style
          </p>
        </div>

        {/* Banner Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex gap-[20px]">
              {bannerData.map((item) => (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 w-full h-[372px] rounded-[20px] overflow-hidden snap-start"
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
                      sizes="(max-width: 768px) 100vw, 1400px"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[22.984%] via-black/70 via-[56.878%] to-black/95" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 px-[20px] md:px-[49px] pb-[60px] md:pb-[49px] flex flex-col gap-[10px]">
                    <div className="text-white">
                      <h3 className="text-[32px] md:text-[42px] font-semibold leading-normal tracking-[-0.64px] md:tracking-[-0.84px] mb-[4px]">
                        {item.title}
                      </h3>
                      <p className="text-[14px] md:text-[18px] font-medium leading-[24px] md:leading-[32px]">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Button */}
                    <button className="bg-[#ff6a00] hover:bg-[#e55f00] text-white px-[24px] py-[16px] rounded-[10px] text-[14px] font-medium tracking-[-0.28px] capitalize transition-all hover:scale-105 active:scale-95 w-fit">
                      {item.buttonText}
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-[6px] md:gap-[10px]">
                    {bannerData.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => goToSlide(dotIndex)}
                        className={`h-[6px] md:h-[10px] rounded-full transition-all ${
                          dotIndex === currentIndex
                            ? "bg-[#ff6a00] w-[20px] md:w-[30px]"
                            : "bg-white/50 w-[6px] md:w-[10px]"
                        }`}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
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

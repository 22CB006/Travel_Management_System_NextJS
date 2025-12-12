"use client";

import { useEffect, useState } from "react";

const words = ["DISCOVER", "EXPLORE", "TRAVEL"];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initial delay of 2 seconds before first animation
    const initialDelay = setTimeout(() => {
      setIsAnimating(true);
      setCurrentIndex(1); // Move to EXPLORE after initial delay
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    // Change word every 2 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative w-full text-center px-4 md:px-8">
      {/* Tagline - Mobile: smaller, above heading */}
      <p className="text-white text-[18px] leading-normal font-semibold tracking-[-0.06em] mb-3 capitalize md:text-lg md:mb-6 lg:text-2xl lg:mb-8">
        One adventure at a time
      </p>

      {/* Main Heading with Scrolling Animation */}
      {/* Mobile: Animated vertical scrolling */}
      <div className="md:hidden">
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {words.map((word, index) => {
              // Calculate position relative to current index
              const position =
                (index - currentIndex + words.length) % words.length;

              let translateClass = "";
              let opacityClass = "";

              if (position === 0) {
                // Current word - centered
                translateClass = "translate-y-0";
                opacityClass = "opacity-100";
              } else if (position === words.length - 1) {
                // Previous word - moving up and fading out
                translateClass = "-translate-y-full";
                opacityClass = "opacity-0";
              } else {
                // Next words - waiting below
                translateClass = "translate-y-full";
                opacityClass = "opacity-0";
              }

              return (
                <h1
                  key={word}
                  className={`
                    absolute text-white font-bold leading-tight tracking-[-0.06em]
                    text-[56px] xs:text-[64px]
                    transition-all duration-700 ease-in-out
                    ${translateClass} ${opacityClass}
                  `}
                  style={{
                    maxWidth: "90vw",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {word}
                </h1>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout: Single line with animation */}
      <div className="hidden md:block">
        <div className="relative h-[140px] md:h-[180px] lg:h-[220px] xl:h-[280px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {words.map((word, index) => {
              // Calculate position relative to current index
              const position = (index - currentIndex + words.length) % words.length;
              
              let translateClass = "";
              let opacityClass = "";
              
              if (position === 0) {
                // Current word - centered
                translateClass = "translate-y-0";
                opacityClass = "opacity-100";
              } else if (position === words.length - 1) {
                // Previous word - moving up and fading out
                translateClass = "-translate-y-full";
                opacityClass = "opacity-0";
              } else {
                // Next words - waiting below
                translateClass = "translate-y-full";
                opacityClass = "opacity-0";
              }
              
              return (
                <h1
                  key={word}
                  className={`
                    absolute text-white font-bold leading-none tracking-tighter whitespace-nowrap
                    text-6xl md:text-7xl lg:text-8xl xl:text-[140px]
                    transition-all duration-700 ease-in-out
                    ${translateClass} ${opacityClass}
                  `}
                  style={{
                    letterSpacing: "-0.06em",
                  }}
                >
                  {word}
                </h1>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Search Icon - Fixed position, only visible on mobile */}
      <button className="md:hidden fixed bottom-[120px] right-[20px] w-[80px] h-[80px] rounded-full bg-[#ff6a00] flex items-center justify-center shadow-2xl hover:bg-[#e55f00] transition-all hover:scale-105 active:scale-95 z-50">
        <img
          src="/icons/search-mobile.svg"
          alt="Search"
          className="w-[40px] h-[40px]"
        />
      </button>

      {/* Desktop Search Button - Only visible on desktop */}
      <div className="hidden md:flex justify-center mt-8">
        <button className="backdrop-blur-[3px] bg-[rgba(41,56,62,0.6)] text-white text-[18px] font-semibold rounded-full px-[48px] py-[20px] hover:bg-[rgba(41,56,62,0.8)] transition-all hover:scale-105 active:scale-95 shadow-lg">
          Search Here
        </button>
      </div>
    </div>
  );
}

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
    <div className="relative w-full text-center px-4">
      {/* Tagline */}
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight mb-4 sm:mb-6 md:mb-8 capitalize">
        One adventure at a time
      </p>

      {/* Main Heading with Scrolling Animation */}
      <div className="relative h-[100px] sm:h-[140px] md:h-[180px] lg:h-[220px] xl:h-[280px] overflow-hidden">
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
                  text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px]
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
  );
}

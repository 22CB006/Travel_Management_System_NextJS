"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#16242a] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-[#16242a] transition-all ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-[#16242a] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg mt-2 mx-4 rounded-lg p-4 space-y-3">
          <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-2">
            Destination
            <ChevronDownIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-2">
            Explore Extraordinary
            <ChevronDownIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-2">
            Offers
            <ChevronDownIcon className="w-5 h-5" />
          </button>
          <button className="w-full text-left text-[#16242a] text-base font-semibold py-2">
            Support
          </button>
          <button className="w-full text-left text-[#16242a] text-base font-semibold py-2">
            Review & Ratings
          </button>
          <button className="w-full text-left text-[#16242a] text-base font-semibold py-2">
            About Us
          </button>
          <button className="w-full text-left text-[#16242a] text-base font-semibold py-2">
            Blogs
          </button>
        </div>
      )}
    </div>
  );
}

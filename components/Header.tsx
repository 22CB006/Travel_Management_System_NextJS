"use client";

import Image from "next/image";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-20 py-3 sm:py-4">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-0.5">
          <Image 
            src="/logo.svg" 
            alt="Horizon Logo" 
            width={24} 
            height={24}
            className="w-6 h-6"
          />
          <span className="text-[#16242a] text-2xl font-semibold" style={{ letterSpacing: "-1.44px" }}>
            Horizon
          </span>
        </div>

        {/* Navigation - Hidden on mobile, visible on tablet+ */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          <button className="flex items-center text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity">
            Destination
            <ChevronDownIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity whitespace-nowrap">
            Explore Extraordinary
            <ChevronDownIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity">
            Offers
            <ChevronDownIcon className="w-6 h-6" />
          </button>
          <button className="text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity">
            Support
          </button>
          <button className="text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity whitespace-nowrap">
            Review & Ratings
          </button>
          <button className="text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity">
            About Us
          </button>
          <button className="text-[#16242a] text-sm xl:text-base font-semibold hover:opacity-70 transition-opacity">
            Blogs
          </button>
        </nav>

        {/* Mobile Menu & Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <MobileMenu />
          <button className="px-3 sm:px-6 py-2 bg-[#16242a] text-white text-xs sm:text-base font-semibold rounded-lg hover:bg-[#29383e] transition-colors">
            Signup
          </button>
          <button className="hidden sm:block px-6 py-2 bg-[#6b7c85] text-white text-base font-semibold rounded-lg hover:bg-[#5a6a72] transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

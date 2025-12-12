"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <Image
          src="/icons/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#16242a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="px-6 pb-6 space-y-4">
              {/* Auth Buttons */}
              <div className="space-y-3 pb-4 border-b border-gray-200">
                <button className="w-full bg-[#29383e] text-white text-[14px] font-semibold rounded-[8px] px-[24px] py-[16px] h-[48px] flex items-center justify-center hover:bg-[#1e2c32] transition-colors">
                  Sign Up
                </button>
                <button className="w-full bg-[rgba(41,56,62,0.1)] text-[#16242a] text-[14px] font-semibold rounded-[8px] px-[24px] py-[16px] h-[48px] flex items-center justify-center hover:bg-[rgba(41,56,62,0.2)] transition-colors">
                  Login
                </button>
              </div>

              {/* Navigation Links */}
              <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-3">
                Destination
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-3">
                Explore Extraordinary
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-between w-full text-[#16242a] text-base font-semibold py-3">
                Offers
                <ChevronDownIcon className="w-5 h-5" />
              </button>
              <button className="w-full text-left text-[#16242a] text-base font-semibold py-3">
                Support
              </button>
              <button className="w-full text-left text-[#16242a] text-base font-semibold py-3">
                Review & Ratings
              </button>
              <button className="w-full text-left text-[#16242a] text-base font-semibold py-3">
                About Us
              </button>
              <button className="w-full text-left text-[#16242a] text-base font-semibold py-3">
                Blogs
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

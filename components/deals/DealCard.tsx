"use client";

import Image from "next/image";

interface DealCardProps {
  type: "hotel" | "package" | "cruise" | "trekking" | "community" | "luxury";
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  timeLeft?: string;
  tags?: string[];
  date?: string;
  features?: {
    flights?: number;
    hotels?: number;
    activities?: number;
    transfers?: number;
  };
  badges?: readonly ("visa" | "insurance")[];
}

export function DealCard({
  type,
  title,
  location,
  price,
  originalPrice,
  imageUrl,
  timeLeft = "11h : 32m : 45s",
  tags = [],
  date,
  features,
  badges = [],
}: DealCardProps) {
  return (
    <div className="relative w-[410px] h-[450px] rounded-[20px] overflow-hidden flex-shrink-0 group cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-110 duration-500"
          unoptimized
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black/90 group-hover:via-black/70 group-hover:to-black/80 transition-all duration-300" />

      {/* Timer Badge */}
      <div className="absolute top-[14px] right-[14px] bg-[#ff6a00] rounded-[16px] px-5 py-2.5 flex items-center gap-1">
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5"/>
          <path d="M10 6v4l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-white text-[16px] font-medium whitespace-nowrap">
          Ends in {timeLeft}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-[18px] flex flex-col gap-3.5">
        {/* Tags */}
        <div className="flex gap-2.5 flex-wrap items-center">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-[10px]"
            >
              <span className="text-white text-[16px] font-medium">{tag}</span>
            </div>
          ))}
          
          {/* Badges */}
          {badges.includes("visa") && (
            <div className="bg-black/50 backdrop-blur-sm px-2.5 py-2 rounded-[10px]">
              <div className="w-5 h-5 relative">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
            </div>
          )}
          {badges.includes("insurance") && (
            <div className="bg-black/50 backdrop-blur-sm px-2.5 py-2 rounded-[10px]">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="white">
                <path d="M9 0L2 3v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V3L9 0z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-white text-[22px] font-semibold tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-[#e6e2c3] text-[16px] leading-8">{location}</p>
        </div>

        {/* Features (for packages) */}
        {features && (
          <div className="flex gap-2">
            {features.flights && (
              <div className="bg-black/33 rounded-[10px] px-1.5 py-2.5 flex flex-col items-center gap-1 w-[85px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9l6-6 6 6M9 3v12" stroke="#ff6a00" strokeWidth="2"/>
                </svg>
                <span className="text-white text-xs text-center">{features.flights} Flights</span>
              </div>
            )}
            {features.hotels && (
              <div className="bg-black/33 rounded-[10px] px-1.5 py-2.5 flex flex-col items-center gap-1 w-[85px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="6" width="12" height="9" stroke="white" strokeWidth="1.5"/>
                </svg>
                <span className="text-white text-xs text-center">{features.hotels} Hotels</span>
              </div>
            )}
            {features.activities && (
              <div className="bg-black/33 rounded-[10px] px-1.5 py-2.5 flex flex-col items-center gap-1 w-[85px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3l3 6-3 6-3-6z" stroke="white" strokeWidth="1.5"/>
                </svg>
                <span className="text-white text-xs text-center">{features.activities} Activities</span>
              </div>
            )}
            {features.transfers && (
              <div className="bg-black/33 rounded-[10px] px-1.5 py-2.5 flex flex-col items-center gap-1 w-[85px]">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="6" width="12" height="6" rx="2" fill="#ff6a00"/>
                </svg>
                <span className="text-white text-xs text-center">{features.transfers} Transfers</span>
              </div>
            )}
          </div>
        )}

        {/* Date (for cruises/trekking) */}
        {date && (
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="white">
              <rect x="3" y="4" width="14" height="13" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M3 8h14M7 2v3M13 2v3" stroke="white" strokeWidth="1.5"/>
            </svg>
            <span className="text-white text-[16px] font-medium">{date}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex flex-col">
          <div className="flex items-start">
            <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
              <text x="10" y="26" fill="#f56600" fontSize="24" fontWeight="bold">₹</text>
            </svg>
            <div className="flex items-end gap-1.5">
              <span className="text-white text-[32px] font-semibold tracking-tight leading-none">
                {price.toLocaleString()}
              </span>
              <span className="text-[#e6e2c3] text-[16px] line-through leading-none mb-1">
                {originalPrice.toLocaleString()}
              </span>
              <span className="text-[#e6e2c3] text-[16px] leading-8">Per Person</span>
            </div>
          </div>
          <p className="text-[#e6e2c3] text-[16px] text-center px-2.5">
            Includes taxes
          </p>
        </div>
      </div>
    </div>
  );
}

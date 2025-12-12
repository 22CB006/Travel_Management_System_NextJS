"use client";

import Image from "next/image";

interface DealCardProps {
  type: "hotel" | "package" | "cruise" | "trekking" | "community" | "luxury";
  image: string;
  title: string;
  location: string;
  price: number;
  originalPrice: number;
  timeLeft: string;
  tags?: string[];
  date?: string;
  packageDetails?: {
    flights?: number;
    hotels?: number;
    activities?: number;
    transfers?: number;
  };
  hasVisa?: boolean;
  hasInsurance?: boolean;
  isExploreMore?: boolean;
}

export function DealCard({
  type,
  image,
  title,
  location,
  price,
  originalPrice,
  timeLeft,
  tags = [],
  date,
  packageDetails,
  hasVisa,
  hasInsurance,
  isExploreMore,
}: DealCardProps) {
  const getTypeLabel = () => {
    switch (type) {
      case "hotel":
        return "Hotel";
      case "package":
        return "Package";
      case "cruise":
        return "Cruise";
      case "trekking":
        return "Trekking";
      case "community":
        return "Community Trip";
      case "luxury":
        return "Luxury Hotel";
      default:
        return type;
    }
  };

  return (
    <div className="relative h-[450px] w-[calc(100vw-48px)] md:h-[450px] md:w-[410px] shrink-0 rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/79 to-black/90 transition-opacity duration-300 group-hover:opacity-90" 
             style={{ backgroundPosition: '0% 27.556%, 0% 70.085%, 0% 100%' }} />
      </div>

      {/* Explore More Overlay */}
      {isExploreMore && (
        <>
          <div className="absolute inset-0 backdrop-blur-[15px] bg-white/19 rounded-[20px] transition-all duration-300 group-hover:backdrop-blur-[20px] group-hover:bg-white/25" />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ff6a00] px-[40px] py-[16px] rounded-[10px] hover:bg-[#e55f00] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span className="text-white font-semibold text-[16px] tracking-[-0.32px] capitalize">
              Explore More
            </span>
          </button>
        </>
      )}

      {/* Timer Badge */}
      <div className="absolute top-[14px] right-[14px] bg-[#ff6a00] px-[20px] py-[10px] rounded-[16px] flex items-center gap-[4px] transition-all duration-300 group-hover:bg-[#e55f00] group-hover:scale-105">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:rotate-12">
          <path d="M10 5V10L13 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2"/>
        </svg>
        <span className="text-white text-[16px] font-medium whitespace-nowrap">
          Ends in {timeLeft}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-[18px] left-[18px] right-[18px] flex flex-col gap-[14px] transition-all duration-300 group-hover:bottom-[22px]">
        {/* Tags */}
        <div className="flex gap-[10px] items-start flex-wrap">
          <div className="bg-black/50 px-[16px] py-[8px] rounded-[10px]">
            <span className="text-white text-[16px] font-medium">{getTypeLabel()}</span>
          </div>
          {tags.map((tag, index) => (
            <div key={index} className="bg-black/50 px-[16px] py-[8px] rounded-[10px]">
              <span className="text-white text-[16px] font-medium">{tag}</span>
            </div>
          ))}
          {(hasVisa || hasInsurance) && (
            <div className="relative group/tooltip">
              <div className="bg-black/50 px-[10px] py-[8px] rounded-[10px] flex items-center gap-[6px]">
                {hasVisa && (
                  <Image
                    src="/icons/visa.svg"
                    alt="Visa"
                    width={18}
                    height={18}
                  />
                )}
                {hasInsurance && (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L3.5 4.5V8.5C3.5 12 9 16 9 16C9 16 14.5 12 14.5 8.5V4.5L9 2Z" fill="white"/>
                    <path d="M7 9L8.5 10.5L11.5 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
                <div className="relative bg-white px-[16px] py-[10px] rounded-[10px] shadow-lg">
                  <span className="text-[#16242a] text-[14px] font-medium whitespace-nowrap">
                    {hasVisa && hasInsurance ? "Includes Visa & Insurance" : hasVisa ? "Includes Visa" : "Includes Insurance"}
                  </span>
                  {/* Triangle pointer */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2">
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                      <path d="M6 6L0 0H12L6 6Z" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <h3 className="text-white text-[22px] font-semibold tracking-[-0.44px] leading-normal">
            {title}
          </h3>
          <p className="text-[#e6e2c3] text-[16px] font-medium leading-[32px]">
            {location}
          </p>
        </div>

        {/* Package Details */}
        {packageDetails && (
          <div className="flex gap-[8px]">
            {packageDetails.flights && (
              <div className="bg-black/33 px-[5px] py-[10px] rounded-[10px] w-[85px] flex flex-col items-center gap-[4px]">
                <Image
                  src="/icons/flight.svg"
                  alt="Flight"
                  width={20}
                  height={20}
                />
                <span className="text-white text-[12px] font-medium">{packageDetails.flights} Flights</span>
              </div>
            )}
            {packageDetails.hotels && (
              <div className="bg-black/33 px-[6px] py-[10px] rounded-[10px] w-[85px] flex flex-col items-center gap-[4px]">
                <Image
                  src="/icons/hotel.svg"
                  alt="Hotel"
                  width={20}
                  height={20}
                />
                <span className="text-white text-[12px] font-medium">{packageDetails.hotels} Hotels</span>
              </div>
            )}
            {packageDetails.activities && (
              <div className="bg-black/33 px-[6px] py-[10px] rounded-[10px] w-[85px] flex flex-col items-center gap-[4px]">
                <Image
                  src="/icons/activity.svg"
                  alt="Activity"
                  width={20}
                  height={20}
                />
                <span className="text-white text-[12px] font-medium">{packageDetails.activities} Activities</span>
              </div>
            )}
            {packageDetails.transfers && (
              <div className="bg-black/33 px-[6px] py-[10px] rounded-[10px] w-[85px] flex flex-col items-center gap-[4px]">
                <Image
                  src="/icons/transfer.svg"
                  alt="Transfer"
                  width={20}
                  height={20}
                />
                <span className="text-white text-[12px] font-medium">{packageDetails.transfers} Transfers</span>
              </div>
            )}
          </div>
        )}

        {/* Date */}
        {date && (
          <div className="flex items-center gap-[4px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="4" width="14" height="13" rx="2" stroke="white" strokeWidth="2"/>
              <path d="M3 8H17" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="text-white text-[16px] font-medium">{date}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex flex-col">
          <div className="flex items-start gap-[4px]">
            <Image
              src="/icons/rupee.svg"
              alt="Rupee"
              width={32}
              height={32}
              className="mt-1"
            />
            <div className="flex items-end gap-[6px] flex-wrap">
              <span className="text-white text-[32px] font-semibold tracking-[-0.64px] leading-normal">
                {price.toLocaleString()}
              </span>
              <span className="text-[#e6e2c3] text-[16px] font-medium line-through leading-normal h-[26px]">
                {originalPrice.toLocaleString()}
              </span>
              <span className="text-[#e6e2c3] text-[16px] font-medium leading-[32px]">
                Per Person
              </span>
            </div>
          </div>
          <div className="px-[10px]">
            <span className="text-[#e6e2c3] text-[16px] font-medium">
              Includes taxes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

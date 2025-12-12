"use client";

import Image from "next/image";

export type TabType = "packages" | "hotels" | "cabs" | "activities" | "trains" | "buses" | "flights" | "cruise";

const tabs = [
  { id: "packages" as TabType, label: "Packages", icon: "packages" },
  { id: "hotels" as TabType, label: "Hotels", icon: "hotels" },
  { id: "cabs" as TabType, label: "Cabs", icon: "cabs" },
  { id: "activities" as TabType, label: "Activities", icon: "activities" },
  { id: "trains" as TabType, label: "Trains", icon: "trains" },
  { id: "buses" as TabType, label: "Buses", icon: "buses" },
  { id: "flights" as TabType, label: "Flights", icon: "flights" },
  { id: "cruise" as TabType, label: "Cruise", icon: "cruise" },
];

interface TravelTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TravelTabs({ activeTab, onTabChange }: TravelTabsProps) {
  return (
    <div className="flex gap-[5px] md:gap-[5px] gap-[2px] overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center justify-center gap-[4px] md:gap-[4px] gap-0 rounded-t-[10px] 
              font-semibold md:text-[16px] text-[14px] whitespace-nowrap transition-all
              ${isActive ? 'md:w-[152px] min-w-[112px]' : 'md:w-[152px] min-w-[105px]'}
              md:pt-[10px] md:pb-[15px] md:px-[30px]
              pt-[10px] pb-[15px] px-[20px]
              ${
                isActive
                  ? "bg-[#cedde7] text-[#29383e] backdrop-blur-[5px]"
                  : "bg-[rgba(1,1,1,0.56)] text-white hover:bg-black/70"
              }
            `}
            style={{
              letterSpacing: "-0.32px",
            }}
          >
            <Image
              src={`/icons/${tab.icon}.svg`}
              alt={tab.label}
              width={22}
              height={22}
              className="md:w-[22px] md:h-[22px] w-5 h-5"
            />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

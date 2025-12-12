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
    <div className="flex gap-[5px] overflow-x-auto scrollbar-hide pb-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center justify-center gap-[4px] rounded-t-[10px] 
              font-semibold text-[16px] whitespace-nowrap transition-all
              min-w-[152px] h-[52px]
              ${
                isActive
                  ? "bg-[#cedde7] text-[#29383e] backdrop-blur-sm"
                  : "bg-black/60 text-white hover:bg-black/70"
              }
            `}
            style={{
              paddingTop: "10px",
              paddingRight: "30px",
              paddingBottom: "15px",
              paddingLeft: "30px",
            }}
          >
            <Image
              src={`/icons/${tab.icon}.svg`}
              alt={tab.label}
              width={22}
              height={22}
              className="w-[22px] h-[22px]"
            />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { TravelTabs, type TabType } from "./TravelTabs";
import { SearchForm } from "./SearchForm";

export function SearchSection() {
  const [activeTab, setActiveTab] = useState<TabType>("packages");

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        {/* Trip type options for Flights tab - appears ABOVE tabs */}
        {activeTab === "flights" && (
          <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 hidden md:inline-flex gap-[15px] items-start mb-[8px]">
            <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
              <div className="md:w-5 md:h-5 w-4 h-4 md:border-2 border-[1.5px] border-white md:rounded rounded-[2px] flex-shrink-0" />
              <span className="text-white md:text-[18px] text-[12px] font-medium whitespace-nowrap">One Way</span>
            </div>
            <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
              <div className="md:w-5 md:h-5 w-4 h-4 md:border-2 border-[1.5px] border-white md:rounded rounded-[2px] flex-shrink-0" />
              <span className="text-white md:text-[18px] text-[12px] font-medium whitespace-nowrap">Round Trip</span>
            </div>
            <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
              <div className="md:w-5 md:h-5 w-4 h-4 md:border-2 border-[1.5px] border-white md:rounded rounded-[2px] flex-shrink-0" />
              <span className="text-white md:text-[18px] text-[12px] font-medium whitespace-nowrap">Multi City</span>
            </div>
          </div>
        )}
        
        <TravelTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchForm activeTab={activeTab} />
      </div>
    </div>
  );
}

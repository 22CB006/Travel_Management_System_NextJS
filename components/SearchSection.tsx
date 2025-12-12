"use client";

import { useState } from "react";
import { TravelTabs, type TabType } from "./TravelTabs";
import { SearchForm } from "./SearchForm";

export function SearchSection() {
  const [activeTab, setActiveTab] = useState<TabType>("packages");

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-2">
        <TravelTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <SearchForm activeTab={activeTab} />
      </div>
    </div>
  );
}

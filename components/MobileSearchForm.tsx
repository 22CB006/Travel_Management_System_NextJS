"use client";

import { useState } from "react";
import Image from "next/image";
import type { TabType } from "./TravelTabs";

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

export function MobileSearchForm() {
  const [activeTab, setActiveTab] = useState<TabType>("packages");
  const [addFlight, setAddFlight] = useState(false);

  return (
    <div className="w-full px-5">
      {/* Horizontal Scrollable Tabs */}
      <div className="flex gap-[2px] overflow-x-auto scrollbar-hide pb-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center justify-center gap-1 rounded-t-[10px] 
                font-semibold text-[14px] whitespace-nowrap transition-all
                min-w-[112px] h-[48px] px-[30px] py-[10px]
                ${
                  isActive
                    ? "bg-[#cedde7] text-[#29383e] backdrop-blur-[5px]"
                    : "bg-black/56 text-white hover:bg-black/70"
                }
              `}
            >
              <Image
                src={`/icons/${tab.icon}.svg`}
                alt={tab.label}
                width={20}
                height={20}
                className={`w-5 h-5 ${isActive ? "brightness-0" : ""}`}
              />
              <span className="tracking-[-0.28px]">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Search Form */}
      <div className="bg-[#cedde7] rounded-[10px] p-[10px] space-y-[10px]">
        {/* Leaving From */}
        <div className="bg-white rounded-[4px] px-3 py-[14px] space-y-1">
          <label className="text-[12px] text-neutral-400 font-medium">
            Leaving From
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#1e1e1e] font-medium">
              Select leaving Location
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Destination */}
        <div className="bg-white rounded-[4px] px-3 py-[14px] space-y-1">
          <label className="text-[12px] text-neutral-400 font-medium">
            Destination
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#1e1e1e] font-medium">
              Select Destination
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Theme */}
        <div className="bg-white rounded-[4px] px-3 py-[14px] space-y-1">
          <label className="text-[12px] text-neutral-400 font-medium">
            Theme
          </label>
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[#1e1e1e] font-medium">
              Solo Travel
            </span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-600"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Date Range */}
        <div className="flex gap-[10px]">
          {/* From Date */}
          <div className="flex-1 bg-white rounded-[4px] px-3 py-[14px] space-y-1">
            <label className="text-[12px] text-neutral-400 font-medium">
              From
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#1e1e1e] font-medium">
                DD-MM
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-600"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* To Date */}
          <div className="flex-1 bg-white rounded-[4px] px-3 py-[14px] space-y-1">
            <label className="text-[12px] text-neutral-400 font-medium">
              To
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#1e1e1e] font-medium">
                DD-MM
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-600"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 2v4M8 2v4M3 10h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Travelers */}
        <div className="bg-white rounded-[4px] px-3 py-[14px] space-y-1">
          <label className="text-[12px] text-[#626262] font-medium">
            Travelers
          </label>
          <div className="flex items-center">
            <span className="text-[14px] text-[#1e1e1e] font-medium">
              2 Traveler, 1 Room
            </span>
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full bg-[#29383e] text-white font-semibold text-[14px] rounded-[8px] h-[50px] flex items-center justify-center hover:bg-[#1e2a2f] transition-colors">
          Search
        </button>
      </div>

      {/* Add a Flight Checkbox */}
      <div className="mt-2 flex items-center justify-center">
        <button
          onClick={() => setAddFlight(!addFlight)}
          className="flex items-center gap-2 bg-black/60 text-white px-[10px] py-[10px] rounded-[6px] hover:bg-black/70 transition-colors"
        >
          <div
            className={`w-4 h-4 border-[1.5px] border-white rounded-[2px] flex items-center justify-center ${
              addFlight ? "bg-white" : ""
            }`}
          >
            {addFlight && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-[#29383e]"
              >
                <path
                  d="M2 6l3 3 5-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <span className="text-[12px] font-medium">Add a flight</span>
        </button>
      </div>
    </div>
  );
}

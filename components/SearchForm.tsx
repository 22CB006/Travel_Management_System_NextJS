"use client";

import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import type { TabType } from "./TravelTabs";

interface SearchFormProps {
  activeTab: TabType;
}

export function SearchForm({ activeTab }: SearchFormProps) {
  return (
    <div className="space-y-2">
      {/* Main Search Form */}
      <div className="bg-[#cedde7] backdrop-blur-sm rounded-[10px] p-[10px]">
        <div className="flex flex-wrap gap-[10px] items-start">
          {renderFormFields(activeTab)}
        </div>
      </div>

      {/* Additional Options */}
      {renderAdditionalOptions(activeTab)}
    </div>
  );
}

function renderFormFields(activeTab: TabType) {
  switch (activeTab) {
    case "packages":
      return <PackagesForm />;
    case "hotels":
      return <HotelsForm />;
    case "cabs":
      return <CabsForm />;
    case "activities":
      return <ActivitiesForm />;
    case "trains":
      return <TrainsForm />;
    case "buses":
      return <BusesForm />;
    case "flights":
      return <FlightsForm />;
    case "cruise":
      return <CruiseForm />;
    default:
      return <PackagesForm />;
  }
}

function renderAdditionalOptions(activeTab: TabType) {
  switch (activeTab) {
    case "packages":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-4 py-2 inline-flex items-center gap-3 cursor-pointer hover:bg-black/70 transition-colors">
          <div className="w-5 h-5 border-2 border-white rounded flex-shrink-0" />
          <span className="text-white text-base sm:text-lg font-medium">Add a flight</span>
        </div>
      );
    case "hotels":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 flex gap-[15px] items-start">
          <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
            <div className="w-5 h-5 border-2 border-white rounded flex-shrink-0" />
            <span className="text-white text-[18px] font-medium">Add a flight</span>
          </div>
          <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
            <div className="w-5 h-5 border-2 border-white rounded flex-shrink-0" />
            <span className="text-white text-[18px] font-medium">Add a cab</span>
          </div>
        </div>
      );
    case "cabs":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 flex gap-[15px] items-start flex-wrap">
          <CheckboxOption label="Intercity Travel" />
          <CheckboxOption label="Hourly Rentals" />
          <CheckboxOption label="Outstation Trip" />
          <CheckboxOption label="Airport Transport" />
        </div>
      );
    case "flights":
      return (
        <>
          <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 flex gap-[15px] items-start flex-wrap">
            <CheckboxOption label="One Way" />
            <CheckboxOption label="Round Trip" />
            <CheckboxOption label="Multi City" />
          </div>
          <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 flex gap-[15px] items-start flex-wrap">
            <CheckboxOption label="Regular Fares" multiline />
            <CheckboxOption label="Armed Forces Fares" multiline />
            <CheckboxOption label="Student Fares" multiline />
            <CheckboxOption label="Senior Citizen Fares" multiline />
            <CheckboxOption label="Doctor & Nurses Fares" multiline />
          </div>
        </>
      );
    default:
      return null;
  }
}

function CheckboxOption({ label, multiline }: { label: string; multiline?: boolean }) {
  const words = label.split(" ");
  return (
    <div className="flex gap-[10px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors">
      <div className="w-5 h-5 border-2 border-white rounded flex-shrink-0" />
      {multiline && words.length > 1 ? (
        <div className="text-white text-[18px] font-medium leading-normal">
          <p className="mb-0">{words.slice(0, -1).join(" ")}</p>
          <p>{words[words.length - 1]}</p>
        </div>
      ) : (
        <span className="text-white text-[18px] font-medium whitespace-nowrap">{label}</span>
      )}
    </div>
  );
}

// Form Components for each tab
function PackagesForm() {
  return (
    <>
      <FormField label="Leaving From" placeholder="Select leaving Location" width="w-[224px]" />
      <FormField label="Destination" placeholder="Select Destination" width="w-[211px]" />
      <FormField label="Theme" placeholder="Solo Travel" width="w-[202px]" />
      <DateField label="From" width="w-[130px]" />
      <DateField label="To" width="w-[130px]" />
      <FormField label="Travelers" placeholder="2 Traveler, 1 Room" width="w-[160px]" noIcon />
      <SearchButton />
    </>
  );
}

function HotelsForm() {
  return (
    <>
      <FormField label="Search Your Desired Hotels" placeholder="" width="w-[477px]" large />
      <DateField label="Check-In" width="w-[150px]" />
      <DateField label="Check-Out" width="w-[150px]" />
      <FormField label="Travellers" placeholder="2 Travellers, 1 Room" width="w-[300px]" />
      <SearchButton />
    </>
  );
}

function CabsForm() {
  return (
    <>
      <FormField label="Pickup" placeholder="Select Pickup" width="w-[200px]" />
      <FormField label="Drop-Off" placeholder="Same as Pickup" width="w-[200px]" />
      <DateField label="Pickup Date" width="w-[120px]" small />
      <DateField label="Drop-Off Date" width="w-[120px]" small />
      <TimeField label="Pickup Time" width="w-[130px]" />
      <TimeField label="Drop-Off Time" width="w-[130px]" />
      <FormField label="Travelers" placeholder="1 Traveler" width="w-[147px]" noIcon />
      <SearchButton />
    </>
  );
}

function ActivitiesForm() {
  return (
    <>
      <FormField label="Search your desired activity" placeholder="" width="w-[860px]" large />
      <FormField label="Travellers" placeholder="2 Travellers" width="w-[240px]" />
      <SearchButton />
    </>
  );
}

function TrainsForm() {
  return (
    <>
      <SwapFields />
      <DateField label="Departure" width="w-[215px]" />
      <FormField label="Class" placeholder="Sleeper" width="w-[215px]" />
      <FormField label="Travelers" placeholder="1 Traveler" width="w-[147px]" noIcon />
      <SearchButton />
    </>
  );
}

function BusesForm() {
  return (
    <>
      <SwapFields />
      <DateField label="Departure" width="w-[220px]" />
      <FormField label="Travellers" placeholder="2 Travellers" width="w-[210px]" />
      <SearchButton />
    </>
  );
}

function FlightsForm() {
  return (
    <>
      <SwapFields />
      <FormField label="Depart" placeholder="24-06" width="w-[160px]" noIcon />
      <FormField label="Travelers" placeholder="1 Traveler" width="w-[160px]" noIcon />
      <FormField label="Class Type" placeholder="Economy" width="w-[150px]" />
      <SearchButton />
    </>
  );
}

function CruiseForm() {
  return (
    <>
      <FormField label="Leaving From" placeholder="Select leaving Location" width="w-[291px]" />
      <FormField label="Destination" placeholder="Select Destination" width="w-[291px]" />
      <FormField label="Month" placeholder="Select Travel Month" width="w-[250px]" />
      <FormField label="Travelers" placeholder="2 Traveler, 1 Cabin" width="w-[250px]" noIcon />
      <SearchButton />
    </>
  );
}

// Reusable Components
function FormField({ 
  label, 
  placeholder, 
  width, 
  noIcon, 
  large 
}: { 
  label: string; 
  placeholder: string; 
  width: string; 
  noIcon?: boolean;
  large?: boolean;
}) {
  return (
    <div className={`bg-white rounded-[4px] ${width} flex flex-col gap-[4px] overflow-clip shrink-0 ${large ? 'px-[20px] py-[23px]' : 'px-[12px] py-[14px]'}`}>
      <p className={`text-neutral-400 ${large ? 'text-[18px]' : 'text-[14px]'} leading-normal shrink-0`}>
        {label}
      </p>
      {placeholder && (
        <div className="flex gap-[13px] items-center w-full shrink-0">
          <p className={`text-[#1e1e1e] ${large ? 'text-[18px]' : 'text-[16px]'} leading-normal shrink-0 whitespace-nowrap`}>
            {placeholder}
          </p>
          {!noIcon && <ChevronDownIcon className="w-[18px] h-[18px] shrink-0" />}
        </div>
      )}
    </div>
  );
}

function DateField({ label, width, small }: { label: string; width: string; small?: boolean }) {
  return (
    <div className={`bg-white rounded-[4px] ${width} flex flex-col gap-[4px] overflow-clip shrink-0 px-[12px] py-[14px]`}>
      <p className="text-neutral-400 text-[14px] leading-normal shrink-0">{label}</p>
      <div className={`flex ${small ? 'gap-[20px]' : 'gap-[35px]'} items-center w-full shrink-0`}>
        <p className="text-[#1e1e1e] text-[16px] leading-normal shrink-0 whitespace-nowrap">DD-MM</p>
        <CalendarIcon className={`${small ? 'w-[18px] h-[18px]' : 'w-[20px] h-[20px]'} shrink-0`} />
      </div>
    </div>
  );
}

function TimeField({ label, width }: { label: string; width: string }) {
  return (
    <div className={`bg-white rounded-[4px] ${width} flex flex-col gap-[4px] overflow-clip shrink-0 px-[12px] py-[14px]`}>
      <p className="text-neutral-400 text-[14px] leading-normal shrink-0">{label}</p>
      <div className="flex gap-[10px] items-center shrink-0">
        <p className="text-[#1e1e1e] text-[16px] leading-normal shrink-0 whitespace-nowrap">HH : MM</p>
        <div className="flex items-start shrink-0">
          <p className="text-[#1e1e1e] text-[16px] leading-normal shrink-0 whitespace-nowrap">AM</p>
          <ChevronDownIcon className="w-[18px] h-[18px] shrink-0" />
        </div>
      </div>
    </div>
  );
}

function SwapFields() {
  return (
    <div className="flex items-center justify-center shrink-0">
      <FormField label="Leaving From" placeholder="Select leaving Location" width="w-[235px]" />
      <div className="relative w-[32px] h-[32px] shrink-0 mx-[-16px] z-10">
        <div className="absolute inset-0 bg-white rounded-full" />
        <div className="absolute inset-[6px] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.6667 10H3.33333M3.33333 10L8.33333 5M3.33333 10L8.33333 15" stroke="#29383e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <FormField label="Destination" placeholder="Select Destination" width="w-[235px]" />
    </div>
  );
}

function SearchButton() {
  return (
    <div className="bg-[#29383e] rounded-[8px] w-[143px] h-[68px] flex flex-col items-center justify-center px-[10px] py-[26px] shrink-0 cursor-pointer hover:bg-[#1e2c32] transition-colors">
      <p className="text-white text-[16px] font-semibold leading-normal shrink-0 whitespace-nowrap">
        Search
      </p>
    </div>
  );
}

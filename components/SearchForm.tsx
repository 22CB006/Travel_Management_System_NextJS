"use client";

import Image from "next/image";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { Dropdown } from "./Dropdown";
import { Checkbox } from "./Checkbox";
import type { TabType } from "./TravelTabs";

interface SearchFormProps {
  activeTab: TabType;
}

export function SearchForm({ activeTab }: SearchFormProps) {
  const isSingleRow = activeTab === "hotels" || activeTab === "cabs" || activeTab === "activities" || activeTab === "trains" || activeTab === "buses" || activeTab === "flights" || activeTab === "cruise";
  
  return (
    <div className="space-y-[8px] relative">
      {/* Main Search Form */}
      <div className="bg-[#cedde7] backdrop-blur-sm rounded-[10px] p-[10px] md:inline-flex md:w-auto w-full relative z-20">
        <div className={`flex flex-col gap-[10px] items-center ${isSingleRow ? 'md:flex-row md:flex-nowrap md:items-center' : 'md:flex-row md:flex-wrap md:items-start'}`}>
          {renderFormFields(activeTab)}
        </div>
      </div>

      {/* Additional Options */}
      <div className="relative z-10">
        {renderAdditionalOptions(activeTab)}
      </div>
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
        <div className="bg-[rgba(1,1,1,0.6)] backdrop-blur-sm rounded-[10px] px-[10px] py-0 inline-flex md:inline-flex w-auto relative">
          <Checkbox label="Add a flight" />
        </div>
      );
    case "hotels":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 inline-flex gap-[15px] items-start relative">
          <Checkbox label="Add a flight" />
          <Checkbox label="Add a cab" />
        </div>
      );
    case "cabs":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 inline-flex gap-[15px] items-start relative">
          <Checkbox label="Intercity Travel" />
          <Checkbox label="Hourly Rentals" />
          <Checkbox label="Outstation Trip" />
          <Checkbox label="Airport Transport" />
        </div>
      );
    case "flights":
      return (
        <div className="bg-black/60 backdrop-blur-sm rounded-[10px] px-[10px] py-0 inline-flex gap-[15px] items-start relative">
          <Checkbox label="Regular Fares" multiline />
          <Checkbox label="Armed Forces Fares" multiline />
          <Checkbox label="Student Fares" multiline />
          <Checkbox label="Senior Citizen Fares" multiline />
          <Checkbox label="Doctor & Nurses Fares" multiline />
        </div>
      );
    default:
      return null;
  }
}

// Form Components for each tab
function PackagesForm() {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];
  const themes = ["Solo Travel", "Family Trip", "Honeymoon", "Adventure", "Beach", "Mountain", "Cultural", "Wildlife"];
  const travelers = ["1 Traveler, 1 Room", "2 Traveler, 1 Room", "3 Traveler, 1 Room", "4 Traveler, 2 Rooms"];

  return (
    <>
      <Dropdown label="Leaving From" placeholder="Select leaving Location" options={cities} width="w-full md:w-[224px]" />
      <Dropdown label="Destination" placeholder="Select Destination" options={cities} width="w-full md:w-[211px]" />
      <Dropdown label="Theme" placeholder="Solo Travel" options={themes} width="w-full md:w-[202px]" />
      {/* Date pickers side by side on mobile */}
      <div className="flex gap-[10px] w-full md:contents">
        <DatePicker label="From" width="flex-1 md:w-[130px]" />
        <DatePicker label="To" width="flex-1 md:w-[130px]" />
      </div>
      <Dropdown label="Travelers" placeholder="2 Traveler, 1 Room" options={travelers} width="w-full md:w-[160px]" noIcon />
      <SearchButton />
    </>
  );
}

function HotelsForm() {
  const travelers = ["1 Traveller, 1 Room", "2 Travellers, 1 Room", "3 Travellers, 1 Room", "4 Travellers, 2 Rooms"];

  return (
    <>
      <div className="bg-white rounded-[4px] w-full md:w-[477px] flex flex-col justify-center overflow-clip shrink-0 px-[20px] md:h-[68px] h-auto py-[14px] md:py-0">
        <p className="text-neutral-400 md:text-[18px] text-[12px] leading-normal shrink-0">
          Search Your Desired Hotels
        </p>
      </div>
      <DatePicker label="Check-In" width="w-full md:w-[150px]" />
      <DatePicker label="Check-Out" width="w-full md:w-[150px]" />
      <Dropdown label="Travellers" placeholder="2 Travellers, 1 Room" options={travelers} width="w-full md:w-[300px]" />
      <SearchButton />
    </>
  );
}

function CabsForm() {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];
  const travelers = ["1 Traveler", "2 Travelers", "3 Travelers", "4 Travelers", "5+ Travelers"];

  return (
    <>
      <Dropdown label="Pickup" placeholder="Select Pickup" options={cities} width="w-full md:w-[200px]" noIcon />
      <Dropdown label="Drop-Off" placeholder="Same as Pickup" options={cities} width="w-full md:w-[200px]" noIcon />
      <DatePicker label="Pickup Date" width="w-full md:w-[120px]" compact />
      <DatePicker label="Drop-Off Date" width="w-full md:w-[120px]" compact />
      <TimePicker label="Pickup Time" width="w-full md:w-[130px]" />
      <TimePicker label="Drop-Off Time" width="w-full md:w-[130px]" />
      <Dropdown label="Travelers" placeholder="1 Traveler" options={travelers} width="w-full md:w-[147px]" noIcon />
      <SearchButton />
    </>
  );
}

function ActivitiesForm() {
  const travelers = ["1 Traveller", "2 Travellers", "3 Travellers", "4 Travellers", "5+ Travellers"];

  return (
    <>
      <div className="bg-white rounded-[4px] w-full md:w-[860px] flex flex-col justify-center overflow-clip shrink-0 px-[20px] md:h-[68px] h-auto py-[14px] md:py-0">
        <p className="text-neutral-400 md:text-[18px] text-[12px] leading-normal shrink-0">
          Search your desired activity
        </p>
      </div>
      <Dropdown label="Travellers" placeholder="2 Travellers" options={travelers} width="w-full md:w-[240px]" />
      <SearchButton />
    </>
  );
}

function TrainsForm() {
  const classes = ["Sleeper", "AC 3 Tier", "AC 2 Tier", "AC 1 Tier", "First Class"];
  const travelers = ["1 Traveler", "2 Travelers", "3 Travelers", "4 Travelers", "5+ Travelers"];

  return (
    <>
      <SwapFields />
      <DatePicker label="Departure" width="w-full md:w-[215px]" />
      <Dropdown label="Class" placeholder="Sleeper" options={classes} width="w-full md:w-[215px]" />
      <Dropdown label="Travelers" placeholder="1 Traveler" options={travelers} width="w-full md:w-[147px]" noIcon />
      <SearchButton />
    </>
  );
}

function BusesForm() {
  const travelers = ["1 Traveller", "2 Travellers", "3 Travellers", "4 Travellers", "5+ Travellers"];

  return (
    <>
      <SwapFields />
      <DatePicker label="Departure" width="w-full md:w-[220px]" />
      <Dropdown label="Travellers" placeholder="2 Travellers" options={travelers} width="w-full md:w-[210px]" />
      <SearchButton />
    </>
  );
}

function FlightsForm() {
  const travelers = ["1 Traveler", "2 Travelers", "3 Travelers", "4 Travelers", "5+ Travelers"];
  const classes = ["Economy", "Premium Economy", "Business", "First Class"];

  return (
    <>
      <SwapFields wide />
      <DatePicker label="Depart" width="w-full md:w-[160px]" />
      <Dropdown label="Travelers" placeholder="1 Traveler" options={travelers} width="w-full md:w-[160px]" noIcon />
      <Dropdown label="Class Type" placeholder="Economy" options={classes} width="w-full md:w-[150px]" />
      <SearchButton />
    </>
  );
}

function CruiseForm() {
  const cities = ["Mumbai", "Goa", "Kochi", "Chennai", "Visakhapatnam", "Port Blair"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const travelers = ["1 Traveler, 1 Cabin", "2 Traveler, 1 Cabin", "3 Traveler, 1 Cabin", "4 Traveler, 2 Cabins"];

  return (
    <>
      <Dropdown label="Leaving From" placeholder="Select leaving Location" options={cities} width="w-full md:w-[291px]" />
      <Dropdown label="Destination" placeholder="Select Destination" options={cities} width="w-full md:w-[291px]" />
      <Dropdown label="Month" placeholder="Select Travel Month" options={months} width="w-full md:w-[250px]" />
      <Dropdown label="Travelers" placeholder="2 Traveler, 1 Cabin" options={travelers} width="w-full md:w-[250px]" noIcon />
      <SearchButton />
    </>
  );
}





function SwapFields({ wide }: { wide?: boolean }) {
  const fieldWidth = wide ? "w-full md:w-[290px]" : "w-full md:w-[235px]";
  const labelFrom = wide ? "Leaving From" : "Leaving From";
  const labelTo = wide ? "Going To" : "Destination";
  const cities = ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad"];
  
  return (
    <div className="flex flex-col md:flex-row items-center shrink-0 gap-[10px] w-full md:w-auto md:gap-[8px] relative">
      <Dropdown label={labelFrom} placeholder="Select leaving Location" options={cities} width={fieldWidth} />
      {/* Swap icon in the gap */}
      <div className="relative w-[32px] h-[32px] shrink-0 z-10 hidden md:block">
        {/* Round background */}
        <Image
          src="/icons/roundbg.svg"
          alt="Background"
          width={32}
          height={32}
          className="w-full h-full"
        />
        {/* Swap icon on top */}
        <Image
          src="/icons/swap-icon.svg"
          alt="Swap"
          width={20}
          height={20}
          className="absolute inset-0 m-auto w-[20px] h-[20px]"
        />
      </div>
      <Dropdown label={labelTo} placeholder="Select Destination" options={cities} width={fieldWidth} />
    </div>
  );
}

function SearchButton() {
  return (
    <div className="bg-[#29383e] rounded-[8px] w-full md:w-[143px] md:h-[68px] h-[50px] flex flex-col items-center justify-center px-[10px] py-[26px] shrink-0 cursor-pointer hover:bg-[#1e2c32] transition-colors">
      <p className="text-white md:text-[16px] text-[14px] font-semibold leading-normal shrink-0 whitespace-nowrap">
        Search
      </p>
    </div>
  );
}

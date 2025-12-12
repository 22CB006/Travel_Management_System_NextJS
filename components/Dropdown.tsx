"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

interface DropdownProps {
  label: string;
  placeholder: string;
  options: string[];
  width: string;
  value?: string;
  onChange?: (value: string) => void;
  noIcon?: boolean;
}

export function Dropdown({ 
  label, 
  placeholder, 
  options, 
  width, 
  value, 
  onChange,
  noIcon 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`${width} relative ${isOpen ? 'z-[200]' : 'z-auto'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-[4px] w-full flex flex-col gap-[4px] overflow-clip shrink-0 px-[12px] py-[14px] text-left hover:bg-[#f5f5f5] transition-colors cursor-pointer border border-transparent hover:border-[#cedde7]"
      >
        <p className="text-neutral-400 md:text-[14px] text-[12px] leading-normal shrink-0">
          {label}
        </p>
        <div className="flex gap-[13px] items-center justify-between w-full shrink-0">
          <p className="text-[#1e1e1e] md:text-[16px] text-[14px] leading-normal shrink-0 whitespace-nowrap">
            {selectedValue || placeholder}
          </p>
          {!noIcon && <ChevronDownIcon className="w-[18px] h-[18px] shrink-0" />}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[4px] shadow-lg border border-[#cedde7] z-[200] max-h-[200px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full px-[12px] py-[10px] text-left hover:bg-[#f5f5f5] transition-colors text-[#1e1e1e] md:text-[16px] text-[14px]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

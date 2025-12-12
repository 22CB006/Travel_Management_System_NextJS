"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";

interface TimePickerProps {
  label: string;
  width: string;
  value?: { hour: number; minute: number; period: "AM" | "PM" };
  onChange?: (time: { hour: number; minute: number; period: "AM" | "PM" }) => void;
}

export function TimePicker({ label, width, value, onChange }: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(
    value || { hour: 12, minute: 0, period: "AM" as "AM" | "PM" }
  );
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
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

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  const handleTimeChange = (type: "hour" | "minute" | "period", value: number | string) => {
    const newTime = { ...selectedTime };
    if (type === "hour") {
      newTime.hour = value as number;
    } else if (type === "minute") {
      newTime.minute = value as number;
    } else {
      newTime.period = value as "AM" | "PM";
    }
    setSelectedTime(newTime);
    onChange?.(newTime);
  };

  const formatTime = () => {
    const hour = selectedTime.hour.toString().padStart(2, "0");
    const minute = selectedTime.minute.toString().padStart(2, "0");
    return `${hour} : ${minute}`;
  };

  return (
    <div className={width}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-[4px] w-full flex flex-col gap-[4px] overflow-clip shrink-0 px-[12px] py-[14px] text-left hover:bg-[#f5f5f5] transition-colors cursor-pointer border border-transparent hover:border-[#cedde7]"
      >
        <p className="text-neutral-400 md:text-[14px] text-[12px] leading-normal shrink-0">{label}</p>
        <div className="flex gap-[10px] items-center shrink-0">
          <p className="text-[#1e1e1e] md:text-[16px] text-[14px] leading-normal shrink-0 whitespace-nowrap">
            {formatTime()}
          </p>
          <div className="flex items-start shrink-0">
            <p className="text-[#1e1e1e] md:text-[16px] text-[14px] leading-normal shrink-0 whitespace-nowrap">
              {selectedTime.period}
            </p>
            <ChevronDownIcon className="w-[18px] h-[18px] shrink-0" />
          </div>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={pickerRef}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 9999,
            }}
          >
            <div className="bg-white rounded-lg shadow-2xl p-4 w-[280px]">
              <div className="flex gap-4 items-center justify-center">
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <p className="text-[12px] font-medium text-neutral-400 mb-2">Hour</p>
                  <div className="h-[200px] overflow-y-auto scrollbar-thin">
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <button
                        key={hour}
                        onClick={() => handleTimeChange("hour", hour)}
                        className={`w-[60px] h-[40px] rounded-md font-medium text-[14px] transition-colors ${
                          selectedTime.hour === hour
                            ? "bg-[#29383e] text-white"
                            : "hover:bg-[#cedde7] text-[#29383e]"
                        }`}
                      >
                        {hour.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <p className="text-[12px] font-medium text-neutral-400 mb-2">Minute</p>
                  <div className="h-[200px] overflow-y-auto scrollbar-thin">
                    {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                      <button
                        key={minute}
                        onClick={() => handleTimeChange("minute", minute)}
                        className={`w-[60px] h-[40px] rounded-md font-medium text-[14px] transition-colors ${
                          selectedTime.minute === minute
                            ? "bg-[#29383e] text-white"
                            : "hover:bg-[#cedde7] text-[#29383e]"
                        }`}
                      >
                        {minute.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* AM/PM */}
                <div className="flex flex-col items-center">
                  <p className="text-[12px] font-medium text-neutral-400 mb-2">Period</p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleTimeChange("period", "AM")}
                      className={`w-[60px] h-[40px] rounded-md font-medium text-[14px] transition-colors ${
                        selectedTime.period === "AM"
                          ? "bg-[#29383e] text-white"
                          : "hover:bg-[#cedde7] text-[#29383e]"
                      }`}
                    >
                      AM
                    </button>
                    <button
                      onClick={() => handleTimeChange("period", "PM")}
                      className={`w-[60px] h-[40px] rounded-md font-medium text-[14px] transition-colors ${
                        selectedTime.period === "PM"
                          ? "bg-[#29383e] text-white"
                          : "hover:bg-[#cedde7] text-[#29383e]"
                      }`}
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

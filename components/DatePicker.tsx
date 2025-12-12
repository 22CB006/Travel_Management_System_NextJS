"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Calendar } from "./Calendar";
import { CalendarIcon } from "./icons/CalendarIcon";

interface DatePickerProps {
  label: string;
  width: string;
  small?: boolean;
  value?: Date;
  onChange?: (date: Date) => void;
  compact?: boolean;
}

export function DatePicker({ label, width, small, value, onChange, compact = false }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
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
      const calendarWidth = 320;
      const viewportWidth = window.innerWidth;
      
      // Calculate left position to keep calendar within viewport
      let leftPos = rect.left + window.scrollX;
      
      // If calendar would overflow right edge, align it to the right edge with padding
      if (leftPos + calendarWidth > viewportWidth) {
        leftPos = Math.max(16, viewportWidth - calendarWidth - 16);
      }
      
      // Ensure calendar doesn't overflow left edge
      leftPos = Math.max(16, leftPos);
      
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: leftPos,
      });
    }
  }, [isOpen]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onChange?.(date);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "DD-MM";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${day}-${month}`;
  };

  return (
    <div className={width}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white rounded-[4px] w-full flex flex-col gap-[4px] overflow-clip shrink-0 px-[12px] py-[14px] text-left hover:bg-[#f5f5f5] transition-colors cursor-pointer border border-transparent hover:border-[#cedde7]`}
      >
        <p className="text-neutral-400 md:text-[14px] text-[12px] leading-normal shrink-0">{label}</p>
        <div className={`flex items-center w-full shrink-0 ${compact ? 'gap-[20px]' : 'gap-[35px]'}`}>
          <p className="text-[#1e1e1e] md:text-[16px] text-[14px] leading-normal shrink-0 whitespace-nowrap">
            {formatDate(selectedDate)}
          </p>
          <CalendarIcon className={`shrink-0 ml-auto ${compact ? 'w-[18px] h-[18px]' : 'w-[20px] h-[20px]'}`} />
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={calendarRef}
            style={{
              position: "absolute",
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 9999,
            }}
          >
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onClose={() => setIsOpen(false)}
            />
          </div>,
          document.body
        )}
    </div>
  );
}

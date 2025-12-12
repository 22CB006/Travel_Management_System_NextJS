"use client";

import { useState } from "react";

interface CheckboxProps {
  label: string;
  multiline?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ label, multiline, checked: initialChecked, onChange }: CheckboxProps) {
  const [checked, setChecked] = useState(initialChecked || false);
  const words = label.split(" ");

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div 
      onClick={handleToggle}
      className="flex gap-[10px] md:gap-[10px] gap-[8px] items-center p-[10px] cursor-pointer hover:bg-black/70 transition-colors"
    >
      <div 
        className={`md:w-5 md:h-5 w-4 h-4 md:border-2 border-[1.5px] border-white md:rounded rounded-[2px] flex-shrink-0 flex items-center justify-center transition-colors ${
          checked ? 'bg-white' : 'bg-transparent'
        }`}
      >
        {checked && (
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            className="md:w-3 md:h-3 w-2.5 h-2.5"
          >
            <path 
              d="M10 3L4.5 8.5L2 6" 
              stroke="#29383e" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {multiline && words.length > 1 ? (
        <div className="text-white md:text-[18px] text-[12px] font-medium leading-normal">
          <p className="mb-0">{words.slice(0, -1).join(" ")}</p>
          <p>{words[words.length - 1]}</p>
        </div>
      ) : (
        <span className="text-white md:text-[18px] text-[12px] font-medium whitespace-nowrap">{label}</span>
      )}
    </div>
  );
}

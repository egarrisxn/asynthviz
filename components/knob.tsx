"use client";

import React, { useState } from "react";

interface KnobProps {
  label: string;
  onChange: (value: number) => void;
}

export const Knob: React.FC<KnobProps> = ({ label, onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseFloat(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={handleChange}
        className="h-12 w-12 appearance-none rounded-full bg-gray-200 outline-none"
        style={{
          WebkitAppearance: "none",
          transform: `rotate(${value * 270 - 135}deg)`,
        }}
      />
      <span className="mt-2 text-xs">{label}</span>
    </div>
  );
};

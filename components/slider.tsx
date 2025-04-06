import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

interface SliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  steps?: number;
  showSegments?: boolean;
}

export function Slider({ label, value, onChange, steps = 8, showSegments = true }: SliderProps) {
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div className="relative w-full">
        {showSegments && (
          <div className="absolute -top-4 flex w-full justify-between px-1">
            {Array.from({ length: steps }).map((_, i) => (
              <span key={i} className="text-[10px] text-gray-500">
                {i + 1}
              </span>
            ))}
          </div>
        )}
        <div className="relative w-full">
          <div className="absolute top-0 flex w-full">
            {Array.from({ length: steps }).map((_, i) => (
              <div key={i} className="h-2 flex-1 border-l border-gray-300 first:border-l-0" />
            ))}
          </div>
          <SliderPrimitive.Root
            className="relative flex w-full touch-none items-center select-none"
            value={[value]}
            onValueChange={([newValue]) => onChange(newValue)}
            max={1}
            step={1 / (steps - 1)}
            aria-label={label}
            style={{ pointerEvents: "none" }}
          >
            <SliderPrimitive.Track
              className="relative h-1 w-full grow bg-gray-200"
              style={{ pointerEvents: "none" }}
            >
              <SliderPrimitive.Range
                className="absolute h-full bg-gray-900"
                style={{ pointerEvents: "none" }}
              />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              className="block h-4 w-1 cursor-grab bg-black focus:outline-none active:cursor-grabbing"
              style={{ pointerEvents: "auto" }}
            />
          </SliderPrimitive.Root>
        </div>
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
}

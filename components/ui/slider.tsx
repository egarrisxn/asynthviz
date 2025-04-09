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
              <div key={i} />
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
              className="rounded-base bg-secondary-background border-border relative w-full grow overflow-hidden border-2 data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3"
              style={{ pointerEvents: "none" }}
            >
              <SliderPrimitive.Range
                className="bg-main absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                style={{ pointerEvents: "none" }}
              />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              className="border-border focus-visible:ring-ring block size-4 cursor-grab rounded-full border-2 bg-pink-400 ring-offset-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:cursor-grabbing"
              style={{ pointerEvents: "auto" }}
            />
          </SliderPrimitive.Root>
        </div>
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
}

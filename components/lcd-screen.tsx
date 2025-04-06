"use client";

import React, { useEffect, useState } from "react";

interface LCDScreenProps {
  message: string;
}

export const LCDScreen: React.FC<LCDScreenProps> = ({ message }) => {
  const [displayMessage, setDisplayMessage] = useState(message);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (message.length > 16) {
      let index = 0;
      const scroll = () => {
        setDisplayMessage(message.slice(index, index + 16).padEnd(16));
        index = (index + 1) % message.length;
        timeout = setTimeout(scroll, 300);
      };
      scroll();
    } else {
      setDisplayMessage(message.padEnd(16));
    }
    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div className="flex h-16 w-full items-center justify-center rounded-md bg-green-200 p-2 font-mono text-green-800">
      <div className="flex size-full items-center justify-center rounded-sm bg-green-900 p-2">
        <span className="text-2xl tracking-wider text-green-400">{displayMessage}</span>
      </div>
    </div>
  );
};

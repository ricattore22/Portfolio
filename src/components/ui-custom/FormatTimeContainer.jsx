"use client";

import { formatTime } from "@/lib/formatter";
import { useEffect, useState } from "react";

export default function FormatTimeContainer() {
  const [currentTime, setCurrentTime] = new useState();

  useEffect(() => {
    setCurrentTime(formatTime());

    const timer = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime]);

  return <>{currentTime}</>;
}

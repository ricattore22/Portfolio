"use client";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <span
      className={cn(
        "font-display font-bold drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </span>
  );
}

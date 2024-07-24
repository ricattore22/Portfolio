"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

export default function BgParticles() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(
      theme === "system" ? "#00b4d8" : theme === "dark" ? "#0096c7" : "#014f86"
    );
  }, [theme]);

  return (
    <div className="bg-particles">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

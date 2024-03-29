"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (currentTheme == "dark" ? (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")} // sets theme to light when clicked
          />
        ) : (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")} // sets theme to dark when clicked
          />
        ))}
    </div>
  );
}

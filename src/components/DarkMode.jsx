"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);
  return (
    <div className="text-[25px] cursor-pointer hover:text-orange-700">
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme('light')} />
        ) : (
          <MdDarkMode onClick={() => setTheme('dark')} />
        ))}
    </div>
  );
}

export default DarkMode;

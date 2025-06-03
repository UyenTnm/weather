"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-yellow-500 dark:text-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <span className="text-yellow-500 text-xl">🌙</span>
      ) : (
        <span className="text-blue-400 text-xl">🌞</span>
      )}
    </button>
  );
};

export default ToggleTheme;

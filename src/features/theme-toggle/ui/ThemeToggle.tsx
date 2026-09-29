"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button onClick={toggle} aria-label="Mavzuni almashtirish">
      <Moon className="size-12 dark:hidden" />
      <Sun className="hidden size-12 dark:block" />
    </button>
  );
}

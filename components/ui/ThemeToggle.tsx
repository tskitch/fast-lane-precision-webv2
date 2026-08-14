"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "flp-theme";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLight(document.documentElement.getAttribute("data-theme") === "light");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  function toggle() {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      onClick={toggle}
    >
      <Sun size={13} aria-hidden="true" />
      <span className="theme-toggle-track"><span className="theme-toggle-thumb" /></span>
      <Moon size={13} aria-hidden="true" />
    </button>
  );
}

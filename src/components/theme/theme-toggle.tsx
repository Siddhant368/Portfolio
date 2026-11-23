"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

interface ThemeToggleProps {
  className?: string;
  tooltipPosition?: "right" | "bottom" | "top";
}

const emptySubscribe = () => () => {};

export function ThemeToggle({
  className = "",
  tooltipPosition = "right",
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = theme === "dark";

  const tooltipClasses = {
    right:
      "left-full ml-3.5 top-1/2 -translate-y-1/2 translate-x-1 group-hover:translate-x-0",
    bottom:
      "top-full mt-2 left-1/2 -translate-x-1/2 translate-y-1 group-hover:translate-y-0",
    top:
      "bottom-full mb-2 left-1/2 -translate-x-1/2 -translate-y-1 group-hover:translate-y-0",
  };

  if (!mounted) {
    return (
      <div
        className={`w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 cursor-pointer ${
        isDark
          ? "text-amber-400 hover:text-amber-300 bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/[0.08]"
          : "text-purple-600 hover:text-purple-700 bg-zinc-100/90 hover:bg-zinc-200/90 border border-zinc-300/80 shadow-sm"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
      )}

      {/* Tooltip */}
      <span
        className={`pointer-events-none absolute px-3 py-1.5 rounded-xl bg-zinc-900/95 dark:bg-zinc-900/95 text-white text-xs font-semibold border border-white/[0.1] shadow-2xl backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 ${tooltipClasses[tooltipPosition]}`}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

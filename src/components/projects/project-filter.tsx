"use client";

import { motion } from "framer-motion";
import { ProjectFilterType } from "@/types";

interface ProjectFilterProps {
  currentFilter: ProjectFilterType;
  onFilterChange: (filter: ProjectFilterType) => void;
  counts: Record<ProjectFilterType, number>;
}

export function ProjectFilter({
  currentFilter,
  onFilterChange,
  counts,
}: ProjectFilterProps) {
  const filters: ProjectFilterType[] = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      <div className="p-1 rounded-2xl bg-white/90 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-xl flex flex-wrap items-center justify-center gap-1.5 shadow-md dark:shadow-xl">
        {filters.map((filter) => {
          const isActive = currentFilter === filter;
          const count = counts[filter] || 0;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 select-none cursor-pointer ${
                isActive
                  ? "text-white shadow-md shadow-purple-500/20"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <span>{filter}</span>

              {/* Counter badge */}
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

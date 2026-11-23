import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "accent" | "neutral";
  className?: string;
  withDot?: boolean;
}

export function Badge({
  children,
  variant = "success",
  className = "",
  withDot = true,
}: BadgeProps) {
  const variantStyles = {
    success:
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    accent:
      "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    neutral:
      "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700/60 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_rgba(255,255,255,0.05)]",
  };

  const dotStyles = {
    success: "bg-emerald-500 dark:bg-emerald-400",
    accent: "bg-purple-600 dark:bg-purple-400",
    neutral: "bg-zinc-500 dark:bg-zinc-400",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 dark:hover:border-white/20 ${variantStyles[variant]} ${className}`}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyles[variant]}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${dotStyles[variant]}`}
          />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

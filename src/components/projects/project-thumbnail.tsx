"use client";

import {
  Bot,
  Building2,
  CreditCard,
  GraduationCap,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectThumbnailProps {
  project: ProjectItem;
}

export function ProjectThumbnail({ project }: ProjectThumbnailProps) {
  const getThumbnailConfig = (iconType: ProjectItem["iconType"]) => {
    switch (iconType) {
      case "education":
        return {
          icon: <GraduationCap className="w-8 h-8 text-purple-300" />,
          accentIcon: <Bot className="w-4 h-4 text-emerald-400" />,
          accentText: "AI Assisted",
          gradient: "from-purple-900/60 via-indigo-900/40 to-zinc-950",
          domain: "rtu-studyverse.app",
        };
      case "restaurant":
        return {
          icon: <UtensilsCrossed className="w-8 h-8 text-blue-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-amber-400" />,
          accentText: "SaaS Workflow",
          gradient: "from-blue-900/60 via-purple-900/40 to-zinc-950",
          domain: "foodhub-saas.com",
        };
      case "pg":
        return {
          icon: <Building2 className="w-8 h-8 text-cyan-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-cyan-400" />,
          accentText: "Smart Management",
          gradient: "from-cyan-900/50 via-indigo-900/40 to-zinc-950",
          domain: "pgmitra-portal.io",
        };
      case "fintech":
        return {
          icon: <CreditCard className="w-8 h-8 text-purple-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-purple-400" />,
          accentText: "Score & PDF Reports",
          gradient: "from-indigo-900/60 via-purple-900/40 to-zinc-950",
          domain: "loanbuddha.finance",
        };
    }
  };

  const config = getThumbnailConfig(project.iconType);

  return (
    <div className="relative w-full h-48 sm:h-52 rounded-xl bg-zinc-950 overflow-hidden border border-white/[0.06] flex flex-col justify-between p-4 group-hover:border-purple-500/40 transition-colors duration-300">
      {/* Background Gradient & Pattern */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-80 group-hover:scale-105 transition-transform duration-500 ease-out`}
      />

      {/* Decorative Grid Mesh */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Browser Chrome Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
        </div>

        <div className="px-3 py-1 rounded-full bg-zinc-900/80 border border-white/[0.08] backdrop-blur-md text-[10px] font-mono text-zinc-400">
          {config.domain}
        </div>
      </div>

      {/* Center Hero Icon & Abstract UI Card */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.1] backdrop-blur-xl shadow-2xl group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300">
          {config.icon}
        </div>
      </div>

      {/* Bottom Bar Details */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
        <span className="text-zinc-400 flex items-center gap-1.5">
          {config.accentIcon}
          <span>{config.accentText}</span>
        </span>
        <span className="text-zinc-500 uppercase tracking-widest text-[10px]">
          {project.category}
        </span>
      </div>
    </div>
  );
}

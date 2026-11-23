
"use client";

import {
  Bot,
  Building2,
  CreditCard,
  GraduationCap,
  Sparkles,
  UtensilsCrossed,
  Code2,
  Globe,
  Image,
  BookOpen,
  Briefcase,
  Video,
  LayoutDashboard,
} from "lucide-react";

import { ProjectItem } from "@/types";

interface ProjectThumbnailProps {
  project: ProjectItem;
}

export function ProjectThumbnail({
  project,
}: ProjectThumbnailProps) {
  const getThumbnailConfig = (iconType: ProjectItem["iconType"]) => {
    switch (iconType) {
      case "education":
        return {
          icon: <GraduationCap className="w-8 h-8 text-purple-300" />,
          accentIcon: <Bot className="w-4 h-4 text-emerald-400" />,
          accentText: "Education Platform",
          gradient: "from-purple-900/60 via-indigo-900/40 to-zinc-950",
          domain: "rtu-studyverse.app",
        };

      case "restaurant":
        return {
          icon: <UtensilsCrossed className="w-8 h-8 text-blue-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-amber-400" />,
          accentText: "Food Platform",
          gradient: "from-blue-900/60 via-purple-900/40 to-zinc-950",
          domain: "foodhub-saas.com",
        };

      case "pg":
      case "building":
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
          accentText: "FinTech Platform",
          gradient: "from-indigo-900/60 via-purple-900/40 to-zinc-950",
          domain: "loanbuddha.finance",
        };

      case "ai":
        return {
          icon: <Bot className="w-8 h-8 text-emerald-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-emerald-400" />,
          accentText: "AI Automation",
          gradient: "from-emerald-900/60 via-teal-900/40 to-zinc-950",
          domain: "agentforge.ai",
        };

      case "video":
        return {
          icon: <Video className="w-8 h-8 text-red-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-red-400" />,
          accentText: "Streaming Platform",
          gradient: "from-red-900/60 via-rose-900/40 to-zinc-950",
          domain: "netflix-clone.app",
        };

      case "food":
        return {
          icon: <UtensilsCrossed className="w-8 h-8 text-orange-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-orange-400" />,
          accentText: "Food Application",
          gradient: "from-orange-900/60 via-amber-900/40 to-zinc-950",
          domain: "fooddash.app",
        };

      case "image":
        return {
          icon: <Image className="w-8 h-8 text-pink-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-pink-400" />,
          accentText: "Image Gallery",
          gradient: "from-pink-900/60 via-purple-900/40 to-zinc-950",
          domain: "image-gallery.app",
        };

      case "notes":
        return {
          icon: <BookOpen className="w-8 h-8 text-blue-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-blue-400" />,
          accentText: "Knowledge Platform",
          gradient: "from-blue-900/60 via-cyan-900/40 to-zinc-950",
          domain: "devnotes.app",
        };

      case "service":
        return {
          icon: <Briefcase className="w-8 h-8 text-amber-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-amber-400" />,
          accentText: "Service Platform",
          gradient: "from-amber-900/60 via-orange-900/40 to-zinc-950",
          domain: "smart-service.app",
        };

      case "portfolio":
        return {
          icon: <LayoutDashboard className="w-8 h-8 text-violet-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-violet-400" />,
          accentText: "Personal Portfolio",
          gradient: "from-violet-900/60 via-purple-900/40 to-zinc-950",
          domain: "portfolio.dev",
        };

      case "code":
      default:
        return {
          icon: <Code2 className="w-8 h-8 text-green-300" />,
          accentIcon: <Sparkles className="w-4 h-4 text-green-400" />,
          accentText: "Development Project",
          gradient: "from-green-900/60 via-teal-900/40 to-zinc-950",
          domain: "github.com",
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
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
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

      {/* Center Hero Icon */}
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

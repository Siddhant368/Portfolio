"use client";

import { motion } from "framer-motion";
import { Code2, GitBranch, ShieldCheck, Sparkles, Zap } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none">
      {/* Glow aura behind the code card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Code Window Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl bg-zinc-950/85 border border-white/[0.1] backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/70 border-b border-white/[0.06]">
          {/* macOS traffic light window dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Active File Tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-950/60 border border-white/[0.05] text-xs font-mono text-zinc-300">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>developer.config.ts</span>
          </div>

          {/* Git Branch & Status indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <GitBranch className="w-3 h-3 text-blue-400" />
            <span className="hidden sm:inline">main</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto select-none">
          <div className="table w-full">
            {/* Line 1 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none w-6">
                1
              </span>
              <span className="table-cell">
                <span className="text-purple-400 font-semibold">export const</span>{" "}
                <span className="text-blue-300">developer</span> = {"{"}
              </span>
            </div>

            {/* Line 2 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                2
              </span>
              <span className="table-cell pl-4">
                <span className="text-zinc-400">name:</span>{" "}
                <span className="text-emerald-300">&quot;Siddhant Singh Rajput&quot;</span>,
              </span>
            </div>

            {/* Line 3 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                3
              </span>
              <span className="table-cell pl-4">
                <span className="text-zinc-400">role:</span>{" "}
                <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
              </span>
            </div>

            {/* Line 4 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                4
              </span>
              <span className="table-cell pl-4">
                <span className="text-zinc-400">coreStack:</span> [
              </span>
            </div>

            {/* Line 5 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                5
              </span>
              <span className="table-cell pl-8">
                <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                <span className="text-cyan-300">&quot;TypeScript&quot;</span>,{" "}
                <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
                <span className="text-cyan-300">&quot;Tailwind&quot;</span>
              </span>
            </div>

            {/* Line 6 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                6
              </span>
              <span className="table-cell pl-4">],</span>
            </div>

            {/* Line 7 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                7
              </span>
              <span className="table-cell pl-4">
                <span className="text-zinc-400">focus:</span>{" "}
                <span className="text-amber-300">
                  &quot;Modern, Scalable &amp; User-Friendly Apps&quot;
                </span>
                ,
              </span>
            </div>

            {/* Line 8 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                8
              </span>
              <span className="table-cell pl-4">
                <span className="text-zinc-400">availableForHire:</span>{" "}
                <span className="text-purple-400 font-semibold">true</span>
              </span>
            </div>

            {/* Line 9 */}
            <div className="table-row">
              <span className="table-cell pr-4 text-zinc-600 text-right select-none">
                9
              </span>
              <span className="table-cell">{"};"}</span>
            </div>
          </div>
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-t border-white/[0.04] text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ready for Deployment</span>
          </div>
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>TypeScript React</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Glassmorphic Badges */}

      {/* Badge 1: Top-Right Floating Pill */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-500/10 flex items-center gap-2 text-xs font-medium text-zinc-800 dark:text-white pointer-events-none select-none z-10"
      >
        <div className="p-1 rounded-md bg-purple-500/20 text-purple-600 dark:text-purple-400">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <span>High Performance</span>
      </motion.div>

      {/* Badge 2: Bottom-Left Floating Pill */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-zinc-900/90 border border-blue-500/30 backdrop-blur-xl shadow-lg shadow-blue-500/10 flex items-center gap-2 text-xs font-medium text-zinc-800 dark:text-white pointer-events-none select-none z-10"
      >
        <div className="p-1 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span>Clean Architecture</span>
      </motion.div>

      {/* Badge 3: Type Safe Mini Pill */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden sm:flex absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-lg text-[11px] font-medium text-emerald-600 dark:text-emerald-300 items-center gap-1.5 pointer-events-none select-none z-10"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span>100% Type-Safe</span>
      </motion.div>
    </div>
  );
}

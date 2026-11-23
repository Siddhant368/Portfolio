"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/portfolio-data";
import { FolderGit2, Layers, Sparkles } from "lucide-react";

export function AboutStats() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FolderGit2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 1:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {ABOUT_DATA.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="group relative p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] hover:border-purple-500/40 backdrop-blur-xl shadow-md dark:shadow-lg transition-colors duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle top corner gradient highlight */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-white/[0.06] group-hover:scale-110 transition-transform duration-300">
              {getIcon(index)}
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              0{index + 1}
            </span>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
              {stat.label}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

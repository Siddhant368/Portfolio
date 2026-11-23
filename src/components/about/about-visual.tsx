"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Globe, Rocket, Shield, Terminal } from "lucide-react";

export function AboutVisual() {
  const pillars = [
    {
      icon: <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      title: "Frontend Craftsmanship",
      desc: "Pixel-perfect, accessible, and responsive web user interfaces.",
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Scalable Backend",
      desc: "Efficient APIs, clean schema design, and modular services.",
    },
    {
      icon: <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: "Problem Solving",
      desc: "Translating real-world product needs into maintainable code.",
    },
    {
      icon: <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      title: "Modern Tooling",
      desc: "TypeScript type safety, version control, and continuous integration.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Background radial aura */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/20 via-blue-600/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-2xl bg-white/90 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 shadow-xl dark:shadow-2xl overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-zinc-200/80 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide">
                Engineering Blueprint
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Full Stack Development Philosophy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active</span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-white/[0.04] hover:border-purple-500/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1 rounded-md bg-white dark:bg-zinc-800/80 shadow-xs">
                  {item.icon}
                </div>
                <h4 className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {item.title}
                </h4>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlights */}
        <div className="pt-4 border-t border-zinc-200/80 dark:border-white/[0.05] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Passionate about clean architecture</span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">v2.0</span>
        </div>
      </motion.div>
    </div>
  );
}

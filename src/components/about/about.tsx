"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AboutStats } from "./about-stats";
import { AboutVisual } from "./about-visual";
import { ABOUT_DATA } from "@/data/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="About Me"
          badgeVariant="accent"
          title="Driven by Code,"
          gradientText="Crafting Impact."
          description="Get to know more about my background, development philosophy, and what fuels my passion for building web software."
        />

        {/* 2-Column Grid: Narrative & Developer Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Role & Name Highlight */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-700 dark:text-purple-300 mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>
                {ABOUT_DATA.name} • {ABOUT_DATA.role}
              </span>
            </div>

            {/* Core Description Quote */}
            <blockquote className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6 leading-snug border-l-2 border-purple-500 pl-4">
              &ldquo;{ABOUT_DATA.description}&rdquo;
            </blockquote>

            {/* Intro Narrative */}
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-6 font-normal">
              {ABOUT_DATA.intro} I enjoy breaking down complex product requirements
              into structured, modular components and solving engineering challenges
              with speed and precision.
            </p>

            {/* Key Interests & Focus Areas */}
            <div className="w-full pt-4 border-t border-zinc-200 dark:border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <Compass className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Core Focus &amp; Interests</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_DATA.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Visual Architecture Card */}
          <div className="lg:col-span-5 w-full">
            <AboutVisual />
          </div>
        </div>

        {/* Animated Statistics Row */}
        <AboutStats />
      </Container>
    </section>
  );
}

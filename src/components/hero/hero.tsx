"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./social-links";
import { HeroVisual } from "./hero-visual";
import { HERO_DATA } from "@/data/portfolio-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="success">{HERO_DATA.badge}</Badge>
            </motion.div>

            {/* Sub-heading Greeting */}
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl font-medium tracking-wide">
                Hi, I&apos;m{" "}
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  {HERO_DATA.name}
                </span>
              </span>
            </motion.div>

            {/* Main Title with Gradient Accent */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]"
            >
              <span className="block">Full Stack</span>
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent">
                Developer.
              </span>
            </motion.h1>

            {/* Short Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                href={HERO_DATA.primaryCta.href}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {HERO_DATA.primaryCta.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={HERO_DATA.secondaryCta.href}
                download="Siddhant_Singh_Rajput_Resume.pdf"
                icon={<Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                {HERO_DATA.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Social Icons & Status */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-zinc-200 dark:border-white/[0.06] w-full"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Connect with me
              </span>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Developer Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

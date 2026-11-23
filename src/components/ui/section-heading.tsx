"use client";

import { motion } from "framer-motion";
import { Badge } from "./badge";

interface SectionHeadingProps {
  badge: string;
  badgeVariant?: "success" | "accent" | "neutral";
  title: string;
  gradientText?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "accent",
  title,
  gradientText,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col mb-12 md:mb-16 ${
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      <div className="mb-4">
        <Badge variant={badgeVariant} withDot={false}>
          {badge}
        </Badge>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4 leading-tight">
        {title}{" "}
        {gradientText && (
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 bg-clip-text text-transparent">
            {gradientText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

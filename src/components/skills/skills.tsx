"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "./skill-card";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Skills"
          badgeVariant="accent"
          title="Tools &amp;"
          gradientText="Technologies."
          description="A curated overview of the modern stack I employ to build scalable full-stack applications from concept to production."
        />

        {/* 2x2 Clean Adaptive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

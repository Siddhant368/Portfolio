"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectFilter } from "./project-filter";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { PROJECTS_DATA } from "@/data/portfolio-data";
import { ProjectFilterType, ProjectItem } from "@/types";

export function Projects() {
  const [currentFilter, setCurrentFilter] = useState<ProjectFilterType>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Compute counts dynamically
  const counts = useMemo(() => {
    return {
      All: PROJECTS_DATA.length,
      "Full Stack": PROJECTS_DATA.filter((p) =>
        p.filterCategories.includes("Full Stack")
      ).length,
      Frontend: PROJECTS_DATA.filter((p) =>
        p.filterCategories.includes("Frontend")
      ).length,
      Backend: PROJECTS_DATA.filter((p) =>
        p.filterCategories.includes("Backend")
      ).length,
    };
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (currentFilter === "All") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter((project) =>
      project.filterCategories.includes(currentFilter)
    );
  }, [currentFilter]);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Projects"
          badgeVariant="accent"
          title="Featured"
          gradientText="Projects."
          description="Some projects I've built with passion, creativity and modern technologies."
        />

        {/* Dynamic Category Filter Bar */}
        <ProjectFilter
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          counts={counts}
        />

        {/* 2-Column Responsive Grid on Desktop / Adaptive on Tablet / Single on Mobile */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={handleOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Container>
    </section>
  );
}

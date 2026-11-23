import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Skills } from "@/components/skills/skills";
import { Education } from "@/components/education/education";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { BackgroundGlow } from "@/components/background/background-glow";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-purple-500/30 selection:text-white">
      {/* Background Ambient Gradient Glows & Engineering Grid */}
      <BackgroundGlow />

      {/* Left-Side Vertical Dock Navbar (Desktop) & Top Header (Mobile) */}
      <Navbar />

      {/* Main Content Sections with Left Padding Offset for Desktop Dock */}
      <main className="flex-1 md:pl-20 lg:pl-24">
        {/* Phase 1: Hero Section */}
        <Hero />

        {/* Phase 2: About Me Section */}
        <About />

        {/* Phase 2: Technical Skills Section */}
        <Skills />

        {/* Phase 2: Education Timeline Section */}
        <Education />

        {/* Phase 2: Experience & Certifications Section */}
        <Experience />

        {/* Phase 3: Featured Projects Showcase */}
        <Projects />

        {/* Phase 4: Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Phase 4: Professional Footer with Left Padding Offset for Desktop Dock */}
      <div className="md:pl-20 lg:pl-24">
        <Footer />
      </div>
    </div>
  );
}

"use client";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactInfoCard } from "./contact-info";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          badge="Get In Touch"
          badgeVariant="accent"
          title="Let's Build"
          gradientText="Something Together."
          description="Have a project in mind or an exciting opportunity? I'd love to hear from you."
        />

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 w-full">
            <ContactInfoCard />
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export interface NavItem {
  label: string;
  href: string;
  iconName: 'home' | 'about' | 'skills' | 'projects' | 'contact';
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
  ariaLabel: string;
}

export interface HeroData {
  badge: string;
  name: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  socialLinks: SocialLink[];
}

export interface AboutData {
  name: string;
  role: string;
  description: string;
  intro: string;
  interests: string[];
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: 'frontend' | 'backend' | 'database' | 'tools';
  skills: string[];
}

export interface EducationItem {
  degree: string;
  college: string;
  status: string;
  field: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeText: string;
}

export type ProjectFilterType = 'All' | 'Full Stack' | 'Frontend' | 'Backend';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategories: ('Full Stack' | 'Frontend' | 'Backend')[];
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  iconType: 'education' | 'restaurant' | 'pg' | 'fintech';
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

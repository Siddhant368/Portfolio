
import {
  AboutData,
  CertificationItem,
  ContactInfo,
  EducationItem,
  ExperienceItem,
  HeroData,
  NavItem,
  ProjectItem,
  SkillCategory,
} from "@/types";

// ==============================
// NAVIGATION DATA
// ==============================

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", iconName: "home" },
  { label: "About", href: "#about", iconName: "user" },
  { label: "Skills", href: "#skills", iconName: "code" },
  { label: "Projects", href: "#projects", iconName: "folder" },
  { label: "Contact", href: "#contact", iconName: "mail" },
];

// ==============================
// HERO SECTION
// ==============================

export const HERO_DATA: HeroData = {
  badge: "Available for Opportunities",
  name: "Siddhant Singh Rajput",
  title: "Full Stack Developer",
  description:
    "Building modern, scalable, and user-friendly web applications. Passionate about translating complex engineering challenges into sleek, high-performance digital experiences.",

  primaryCta: {
    label: "View My Work",
    href: "#projects",
  },

  secondaryCta: {
    label: "Download Resume",
    href: "/resume.pdf",
  },

  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/Siddhant368",
      icon: "github",
      ariaLabel: "Visit Siddhant's GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/siddhant-singh-sp0319/",
      icon: "linkedin",
      ariaLabel: "Connect with Siddhant on LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:siddhantsingh0319@gmail.com",
      icon: "email",
      ariaLabel: "Send an email to Siddhant",
    },
  ],
};

// ==============================
// ABOUT SECTION
// ==============================

export const ABOUT_DATA: AboutData = {
  name: "Siddhant Singh Rajput",
  role: "Full Stack Developer",

  description:
    "I'm a passionate Full Stack Developer who enjoys building modern, scalable and user-friendly web applications. I work with frontend and backend technologies and love learning new tools and solving real-world problems through code.",

  intro:
    "Driven by curiosity and a commitment to software craftsmanship, I focus on building cohesive digital products from database schemas up to polished user interfaces.",

  interests: [
    "Full Stack Architecture & RESTful Services",
    "Modern Frontend Frameworks & Design Systems",
    "Real-World Problem Solving Through Clean Code",
    "Performance Optimization & Responsive UI/UX",
  ],

  stats: [
    {
      value: "4+",
      label: "Projects Built",
      description:
        "Modern web applications designed and developed",
    },
    {
      value: "Full Stack",
      label: "Development",
      description:
        "End-to-end expertise across frontend and backend",
    },
    {
      value: "Continuous",
      label: "Learning",
      description:
        "Exploring new paradigms, tools, and best practices",
    },
  ],
};

// ==============================
// SKILLS SECTION
// ==============================

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting fast, accessible, and responsive user interfaces",
    iconName: "frontend",

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend Development",
    description:
      "Designing robust server architectures and APIs",
    iconName: "backend",

    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
    ],
  },

  {
    title: "Databases & Caching",
    description:
      "Managing reliable, scalable, and high-performance data",
    iconName: "database",

    skills: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },

  {
    title: "Tools & DevOps",
    description:
      "Modern workflows, version control, and deployment pipelines",
    iconName: "tools",

    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
    ],
  },
];

// ==============================
// EDUCATION SECTION
// ==============================

export const EDUCATION_DATA: EducationItem = {
  degree: "B.Tech in Computer Science Engineering",
  college: "Geetanjali Institute of Technical Studies (GITS)",
  status: "Final Year",
  field: "Computer Science & Engineering",

  highlights: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Web Engineering & Systems Design",
  ],
};

// ==============================
// EXPERIENCE SECTION
// ==============================

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "WebSenor Pvt. Ltd., Udaipur",
    type: "Internship",

    description:
      "Worked on developing and maintaining web application modules, implementing responsive UI layouts, and integrating backend REST APIs.",

    skills: [
      "Full Stack Development",
      "React.js",
      "Node.js",
      "REST APIs",
      "Frontend Engineering",
    ],
  },
];

// ==============================
// CERTIFICATIONS SECTION
// ==============================

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "MERN Stack Developer Certificate",
    issuer: "Full Stack Web Development",
    badgeText: "MERN Certified",
  },

  {
    title: "C++ NPTEL Certificate",
    issuer: "NPTEL",
    badgeText: "Programming in C++",
  },

  {
    title: "45-Day Grass Training",
    issuer: "Grass Academy",
    badgeText: "Technical Training",
  },
];

// ==============================
// PROJECTS SECTION
// ==============================

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "rtu-studyverse",
    title: "RTU StudyVerse",
    category: "Educational Platform",
    filterCategories: ["Full Stack", "Frontend"],

    description:
      "A student-focused educational platform that provides study materials, notes, previous year question papers and AI-powered learning assistance.",

    fullDescription:
      "RTU StudyVerse is a comprehensive academic resource hub engineered specifically for university students. It solves the friction of scattered study materials by organizing syllabus-aligned notes, historical examination papers, and digital PDF assets in a unified interface, augmented with an integrated Google Gemini AI chatbot to clarify concepts in real time.",

    features: [
      "Notes and PDF resources",
      "Previous year question papers",
      "Gemini AI chatbot",
      "Admin dashboard",
      "User authentication",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],

    iconType: "education",
    githubUrl: "https://github.com/Siddhant368",
    liveDemoUrl: "https://rtuweb.vercel.app/",
  },

  {
    id: "foodhub",
    title: "FoodHub",
    category: "Restaurant SaaS Platform",
    filterCategories: ["Full Stack", "Backend"],

    description:
      "A restaurant management platform designed to simplify restaurant operations, menu management and order workflows.",

    fullDescription:
      "FoodHub is a specialized SaaS solution built to streamline restaurant workflows from floor orders to kitchen updates. It provides food business operators with granular control over menu items, categorization, and live order states, secured by role-based access controls and an analytical admin dashboard.",

    features: [
      "Restaurant management",
      "Menu and category management",
      "Role-based authentication",
      "Order management",
      "Admin dashboard",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],

    iconType: "restaurant",
    githubUrl: "https://github.com/Siddhant368/FoodDash",
    liveDemoUrl: "https://fooddashsidd.vercel.app/",
  },

  {
    id: "pgmitra",
    title: "PGMitra",
    category: "PG Management Platform",
    filterCategories: ["Full Stack", "Backend"],

    description:
      "A smart PG management platform designed to help PG owners manage students, rooms, rent and daily operations.",

    fullDescription:
      "PGMitra is an operational management platform crafted for PG and hostel owners. It consolidates tenant onboarding, room allocation, recurring rent tracking, and attendance logs into a centralized dashboard, eliminating manual paperwork and enhancing operational clarity.",

    features: [
      "Student management",
      "Room management",
      "Rent tracking",
      "Attendance management",
      "Owner dashboard",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Tailwind CSS",
    ],

    iconType: "pg",
    githubUrl: "https://github.com/Siddhant368/Pg-Mitra",
    liveDemoUrl: "https://pg-mitra-sidd.vercel.app/",
  },
];

// ==============================
// CONTACT SECTION
// ==============================

export const CONTACT_INFO: ContactInfo = {
  email: "siddhantsingh0319@gmail.com",
  location: "Udaipur, Rajasthan, India",
  availability: "Available for Opportunities",
  githubUrl: "https://github.com/Siddhant368",
  linkedinUrl: "https://www.linkedin.com/in/siddhant-singh-sp0319/",
  resumeUrl: "/resume.pdf",
};

// ==============================
// CODE SNIPPET
// ==============================

export const CODE_SNIPPET = `// developer.config.ts

export const developer = {
  name: "Siddhant Singh Rajput",
  role: "Full Stack Developer",

  skills: {
    frontend: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs"
    ],

    database: [
      "MongoDB",
      "PostgreSQL",
      "Redis"
    ],

    tools: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel"
    ]
  },

  status: "Crafting modern web experiences",
  availableForHire: true
};`;

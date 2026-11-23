# Siddhant Singh Rajput – Full Stack Developer Portfolio

A modern, high-performance, and visually captivating developer portfolio website engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

Designed with a deep charcoal dark aesthetic (`#09090b`), ambient radial purple & blue gradient glows, subtle glassmorphism, responsive architecture, and accessibility standards.

---

## 🌟 Architecture & Implemented Sections

### 1. Navigation & Header (`#home`)
* **Sticky Glass Navbar**: Dynamic backdrop blur (`backdrop-blur-xl`), border glow, and scroll shadow.
* **Branded Logo**: Modern typography (`Siddhant.`) with interactive glowing gradient dot.
* **Navigation Links**: Active scroll-spy for `Home`, `About`, `Skills`, `Projects`, and `Contact`.
* **Mobile Drawer**: Animated slide-down menu with backdrop blur and touch-optimized navigation.
* **Quick Resume CTA**: Direct download button pointing to the resume PDF.

### 2. Hero Section
* **Availability Badge**: Pulsing emerald status dot indicating *"Available for Opportunities"*.
* **Typography Hierarchy**: Personalized greeting and high-impact gradient title (*"Full Stack Developer."*).
* **Call to Actions**: Dual buttons (*"View My Work"* with smooth project scroll and *"Download Resume"*).
* **Social Network Triggers**: GitHub, LinkedIn, and Email with tooltips and hover elevation.
* **Interactive Developer Visual**: macOS-style code window featuring TypeScript configuration, syntax highlighting, git status indicator, and floating glassmorphic badges (*"High Performance"*, *"Clean Architecture"*, *"100% Type-Safe"*).

### 3. About Me Section (`#about`)
* **Developer Philosophy**: Featured quote highlighting modern, scalable, and user-friendly web applications.
* **Engineering Blueprint**: Visual architecture card showcasing frontend craftsmanship, scalable backend design, problem-solving, and modern tooling.
* **Core Focus Areas**: Checklist covering Full Stack Architecture, Design Systems, Clean Code, and UI/UX optimization.
* **Animated Statistics**: Stat cards highlighting `4+ Projects Built`, `Full Stack Development`, and `Continuous Learning`.

### 4. Technical Arsenal (`#skills`)
* **2x2 Adaptive Category Grid**:
  * **Frontend Development**: HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS.
  * **Backend Development**: Node.js, Express.js, NestJS, REST APIs.
  * **Databases & Caching**: MongoDB, PostgreSQL, Redis.
  * **Tools & DevOps**: Git, GitHub, Postman, VS Code, Vercel, Render.
* **Interactive Skill Badges**: Individual technology pills with hover scale and glowing indicators. No fake percentages or arbitrary skill bars.

### 5. Education Timeline (`#education`)
* **Academic Journey**:
  * **Degree**: B.Tech in Computer Science Engineering
  * **College**: GITS
  * **Status**: Final Year (highlighted with an emerald status beacon)
  * **Curriculum Focus**: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Web Engineering & Systems Design.
* **Visual Presentation**: Glowing vertical timeline with illuminated graduation icon node.

### 6. Experience & Certifications (`#experience`)
* **Professional Experience**:
  * Web Development Internship at **WebSenor** with responsibilities and tech stack tags.
* **Verified Certifications & Training**:
  * MERN Stack Developer Certificate (Full Stack Web Development)
  * C++ NPTEL Certificate (NPTEL)
  * 45-Day Grass Training (Grass Academy)

### 7. Featured Projects Showcase (`#projects`)
* **Project Catalog**:
  1. **RTU StudyVerse** (Educational Platform): Notes & PDF resources, question papers, Gemini AI chatbot, admin dashboard, user auth (`React.js`, `Node.js`, `Express.js`, `MongoDB`, `Gemini API`).
  2. **FoodHub** (Restaurant SaaS Platform): Restaurant management, menu and category workflows, role-based auth, order workflows, admin dashboard (`Next.js`, `TypeScript`, `Node.js`, `MongoDB`).
  3. **PGMitra** (PG Management Platform): Tenant & student management, room allocation, rent tracking, attendance logs (`Next.js`, `TypeScript`, `NestJS`, `MongoDB`, `Tailwind CSS`).
  4. **Loan Buddha** (FinTech Platform): Credit score checking, user auth, credit report generation, downloadable PDF statements (`React.js`, `TypeScript`, `NestJS`, `PDFKit`).
* **Dynamic Category Filtering**: Animated pill filters for `All`, `Full Stack`, `Frontend`, and `Backend` with live project count badges.
* **Interactive Project Modal**: Deep-dive dialog with problem breakdown, feature checklists, technology stack, and source code / demo links.
* **High-Tech Thumbnails**: Bespoke application browser chrome mockups with domain badges, custom category icons, and hover zoom effect.

### 8. Contact & Inquiry Section (`#contact`)
* **Direct Communication**: Email address with one-click copy button, location (`Rajasthan, India`), and social links.
* **Interactive Form**:
  * Real-time and submission validation (Full Name, Email Address, Subject, Message).
  * Loading state with spinning indicator.
  * Server-side route handler at `/api/contact`.
  * Configurable Resend API integration with a transparent `mailto:` client fallback when environment variables are not yet configured.

### 9. Footer & Utilities
* **Footer**: Full-stack developer branding, quick links, copyright with dynamic year evaluated via `useSyncExternalStore`, and smooth Back-to-Top button.
* **SEO & Metadata**: Dynamic Open Graph images, Twitter cards, canonical tags, `sitemap.xml`, and `robots.txt`.
* **Security Headers**: Configured in `next.config.ts` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
* **Custom 404 Page**: Branded dark space exploration theme with a direct return button.
* **Custom Favicon**: Edge-generated branded app icon (`icon.tsx`).

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons |
| **Fonts** | Next.js Google Fonts (`Geist`, `Geist Mono`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf                     # Downloadable resume document
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # Server-side contact form handler
│   │   ├── globals.css                # Global styles, Tailwind imports, scrollbar
│   │   ├── icon.tsx                   # Dynamic branded favicon generator (32x32)
│   │   ├── layout.tsx                 # Root layout, OpenGraph, JSON-LD, Geist font
│   │   ├── loading.tsx                # Loading spinner UI
│   │   ├── not-found.tsx              # Custom branded 404 page
│   │   ├── page.tsx                   # Main single-page portfolio
│   │   ├── robots.ts                  # Dynamic robots.txt route
│   │   └── sitemap.ts                 # Dynamic sitemap.xml route
│   ├── components/
│   │   ├── about/
│   │   │   ├── about.tsx              # About Me section narrative
│   │   │   ├── about-stats.tsx        # Animated statistics cards
│   │   │   └── about-visual.tsx       # Engineering Blueprint visual card
│   │   ├── background/
│   │   │   └── background-glow.tsx    # Ambient radial glows & grid texture
│   │   ├── contact/
│   │   │   ├── contact.tsx            # Contact section container
│   │   │   ├── contact-form.tsx       # Validated form with API & mailto fallback
│   │   │   └── contact-info.tsx       # Email copy, location, resume CTA
│   │   ├── education/
│   │   │   └── education.tsx          # Education timeline (B.Tech GITS)
│   │   ├── experience/
│   │   │   └── experience.tsx         # WebSenor internship & certifications
│   │   ├── footer/
│   │   │   └── footer.tsx             # Professional footer & back-to-top
│   │   ├── hero/
│   │   │   ├── hero.tsx               # Hero layout, badges & dual CTAs
│   │   │   ├── hero-visual.tsx        # macOS code editor window
│   │   │   └── social-links.tsx       # GitHub, LinkedIn, Email buttons
│   │   ├── navbar/
│   │   │   ├── mobile-menu.tsx        # Responsive hamburger drawer
│   │   │   ├── nav-links.tsx          # Scroll-spy navigation items
│   │   │   └── navbar.tsx             # Sticky glassmorphism header
│   │   ├── projects/
│   │   │   ├── project-card.tsx       # Card with hover zoom & action triggers
│   │   │   ├── project-filter.tsx     # Animated filter tabs with live counters
│   │   │   ├── project-modal.tsx      # Comprehensive project details dialog
│   │   │   ├── project-thumbnail.tsx  # Browser mockup thumbnail
│   │   │   └── projects.tsx           # Projects showcase & state container
│   │   ├── skills/
│   │   │   ├── skill-card.tsx         # Category skill card with pills
│   │   │   └── skills.tsx             # 2x2 technical skills grid
│   │   └── ui/
│   │       ├── badge.tsx              # Pill badge with live pulse beacon
│   │       ├── button.tsx             # Reusable button & link component
│   │       ├── container.tsx          # Responsive centered container
│   │       └── section-heading.tsx    # Standardized section header
│   ├── data/
│   │   └── portfolio-data.ts          # Centralized configuration & content store
│   └── types/
│       └── index.ts                   # Strict TypeScript interfaces
├── .env.example                       # Environment variable template
├── .gitignore                         # Git ignore configuration
├── next.config.ts                     # Next.js configuration & security headers
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# Optional: Set your production website URL for canonical tags and sitemaps
NEXT_PUBLIC_SITE_URL=https://siddhantsinghrajput.vercel.app

# Optional: Resend API Key for automated contact form email delivery
# Obtain from https://resend.com
RESEND_API_KEY=your_resend_api_key_here

# Recipient email where contact form submissions will be routed
CONTACT_EMAIL=siddhantsinghrajput@example.com
```

*Note: If `RESEND_API_KEY` is not provided, the contact form automatically provides a one-click `mailto:` client fallback, ensuring no messages are ever lost.*

---

## 🚀 Getting Started & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Build and test production bundle
```bash
# Compile and verify static/dynamic routes
npm run build

# Start local production server
npm run start

# Run ESLint quality checks
npm run lint
```

---

## 📦 GitHub Preparation & Push Commands

To commit your complete portfolio and push it to your GitHub repository:

```bash
# 1. Stage all files
git add .

# 2. Commit the full portfolio implementation
git commit -m "feat: complete modern developer portfolio (Phases 1-5)"

# 3. Rename default branch to main (if on master)
git branch -M main

# 4. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push to GitHub
git push -u origin main
```

---

## ☁️ Step-by-Step Vercel Deployment Guide

Deploying this portfolio on Vercel is seamless and zero-config:

1. **Sign in to Vercel**: Visit [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. **Import Project**:
   - Click **"Add New..."** → **"Project"**.
   - Select your newly pushed GitHub repository (`portfolio`).
3. **Configure Project**:
   - **Framework Preset**: Next.js (automatically detected).
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `.next` (default).
4. **Environment Variables**:
   Under the **Environment Variables** accordion, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-portfolio.vercel.app`
   - `RESEND_API_KEY` = `re_your_api_key` *(optional, for email delivery)*
   - `CONTACT_EMAIL` = `siddhantsinghrajput@example.com`
5. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will build the application using Next.js Turbopack, run TypeScript checks, generate static pages, and assign a production URL.
6. **Verify Live Deployment**:
   - Visit the production domain assigned by Vercel.
   - Verify smooth scrolling, interactive project modals, responsive design, resume download, and contact form behavior.

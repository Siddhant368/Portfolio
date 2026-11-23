import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://siddhantsinghrajput.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Siddhant Singh Rajput | Full Stack Developer",
    template: "%s | Siddhant Singh Rajput",
  },
  description:
    "Explore the portfolio of Siddhant Singh Rajput, a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS and MongoDB.",
  keywords: [
    "Siddhant Singh Rajput",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "MongoDB",
    "Tailwind CSS",
    "Portfolio",
    "India",
  ],
  authors: [{ name: "Siddhant Singh Rajput", url: siteUrl }],
  creator: "Siddhant Singh Rajput",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Siddhant Singh Rajput | Full Stack Developer",
    description:
      "Explore the portfolio of Siddhant Singh Rajput, a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS and MongoDB.",
    url: siteUrl,
    siteName: "Siddhant Singh Rajput Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Singh Rajput | Full Stack Developer",
    description:
      "Explore the portfolio of Siddhant Singh Rajput, a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS and MongoDB.",
    creator: "@siddhant",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddhant Singh Rajput",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    sameAs: ["https://github.com", "https://linkedin.com"],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS and MongoDB.",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("portfolio-theme");var p=window.matchMedia("(prefers-color-scheme: dark)").matches;if(s==="dark"||(!s&&p)){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.add("light");document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-purple-500/30 selection:text-white flex flex-col transition-colors duration-300">
        <ThemeProvider>
          {/* Accessible Skip To Main Content link */}
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-purple-600 text-white rounded-xl font-medium shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

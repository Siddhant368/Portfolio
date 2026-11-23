"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2,
  Send,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error" | "unconfigured";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message was sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else if (data.configured === false) {
        setStatus({
          type: "unconfigured",
          message:
            data.message ||
            "Server email service is not configured yet (missing RESEND_API_KEY in .env.local). You can send this message directly via your email client below.",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Failed to send your message. Please try again or reach out directly via email.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error occurred. Please check your connection or send an email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 shadow-md dark:shadow-2xl relative overflow-hidden"
    >
      {/* Background corner highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 via-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />

      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        Fill out the form below and I will get back to you as soon as possible.
      </p>

      {/* Status Banners */}
      {status.type === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 dark:text-emerald-400 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-900 dark:text-emerald-200">Message Delivered!</p>
            <p className="text-xs text-emerald-700 dark:text-emerald-400/90">{status.message}</p>
          </div>
        </div>
      )}

      {status.type === "unconfigured" && (
        <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 text-sm flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950 dark:text-amber-200">
                Email API Not Yet Configured
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-300/80 leading-relaxed">
                {status.message}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={handleMailtoFallback}
            icon={<ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
            className="w-full justify-center text-xs"
          >
            Open in Email Client (mailto:)
          </Button>
        </div>
      )}

      {status.type === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-900 dark:text-red-300 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-500 dark:text-red-400 mt-0.5" />
          <p className="text-xs leading-relaxed">{status.message}</p>
        </div>
      )}

      {/* The Form */}
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Full Name <span className="text-purple-600 dark:text-purple-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.name ? "border-red-500/60" : "border-zinc-200 dark:border-white/[0.08]"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Email Address <span className="text-purple-600 dark:text-purple-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.email ? "border-red-500/60" : "border-zinc-200 dark:border-white/[0.08]"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Subject <span className="text-purple-600 dark:text-purple-400">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Project Inquiry / Opportunity"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
              errors.subject ? "border-red-500/60" : "border-zinc-200 dark:border-white/[0.08]"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
          >
            Message <span className="text-purple-600 dark:text-purple-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, timeline, and goals..."
            disabled={isSubmitting}
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/80 border text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-y ${
              errors.message ? "border-red-500/60" : "border-zinc-200 dark:border-white/[0.08]"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            icon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
            iconPosition="right"
            className="w-full justify-center"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${className}`}
    >
      {children}
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 -z-20 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--accent)]/[0.04] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent)]/[0.03] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[var(--accent)]/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <FadeIn>
            <header className="mb-20 md:mb-28">
              {/* Social links row */}
              <div className="flex items-center justify-end gap-4 mb-12">
                <a
                  href="mailto:maguire.murphy@live.com"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/50 transition-all"
                  aria-label="Email"
                >
                  <EmailIcon />
                </a>
                <a
                  href="https://github.com/maguire-murphy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/50 transition-all"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://linkedin.com/in/maguiremurphy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)]/50 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>

              {/* Hero */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent rounded-full" />
                <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold tracking-tight mb-4">
                  Maguire Murphy
                </h1>
                <p className="text-xl md:text-2xl text-[var(--accent)] font-medium mb-6">
                  Product & Growth
                </p>
                <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">
                  I build products that turn complexity into clarity. Currently
                  focused on AI, SaaS, and helping teams ship.
                </p>
              </div>
            </header>
          </FadeIn>

          {/* Experience */}
          <FadeIn delay={100}>
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-xs font-mono text-[var(--accent)] tracking-wider uppercase">
                  01
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                  Experience
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--surface)] to-transparent" />
              </div>

              <div className="grid gap-4">
                {/* Exadel */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative p-6 rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm hover:border-[var(--accent)]/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">Exadel</h3>
                        <p className="text-[var(--accent)] text-sm">
                          Product Management & Business Analyst Intern
                        </p>
                      </div>
                      <span className="text-sm text-[var(--muted)] md:text-right shrink-0">
                        Summer 2024
                      </span>
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Shipped one of the company&apos;s first live customer
                      demos of a real-time AI simulation platform. Owned the
                      full cycle: configuring scenarios, validating data,
                      running client walkthroughs, and surfacing product gaps.
                    </p>
                  </div>
                </div>

                {/* Blueprint */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative p-6 rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm hover:border-[var(--accent)]/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Blueprint Technologies
                        </h3>
                        <p className="text-[var(--accent)] text-sm">
                          Product Management & Analytics Intern
                        </p>
                      </div>
                      <span className="text-sm text-[var(--muted)] md:text-right shrink-0">
                        2023
                      </span>
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Worked directly with the CEO and LLM team on AI-assisted
                      workflows. Designed and tested prompting strategies,
                      analyzed failure modes, and helped evaluate feasibility
                      for internal LLM integration.
                    </p>
                  </div>
                </div>

                {/* Front Runner */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/20 via-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative p-6 rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm hover:border-[var(--accent)]/20 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Front Runner Sports
                        </h3>
                        <p className="text-[var(--accent)] text-sm">
                          Sales & Market Research Intern
                        </p>
                      </div>
                      <span className="text-sm text-[var(--muted)] md:text-right shrink-0">
                        Early 2023
                      </span>
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed">
                      Identified brand partnerships for NIL athletes, from local
                      sponsorships to national campaigns including a nationally
                      aired commercial. Built intuition for GTM strategy and
                      customer segmentation.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Beacon */}
          <FadeIn delay={200}>
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-xs font-mono text-[var(--accent)] tracking-wider uppercase">
                  02
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                  Projects
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--surface)] to-transparent" />
              </div>

              <div className="grid gap-4">
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm overflow-hidden hover:border-[var(--accent)]/20 transition-colors">
                    {/* Project header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                          Beacon
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                          Live
                        </span>
                      </div>

                      <p className="text-[var(--muted)] mb-5 leading-relaxed">
                        A revenue analytics platform demonstrating Stripe and
                        HubSpot API integration. Tracks MRR, ARR, churn,
                        retention, and pipeline metrics for B2B SaaS companies.
                        Gives teams unified visibility without the spreadsheet
                        gymnastics.
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Stripe API",
                          "HubSpot API",
                          "Next.js",
                          "TypeScript",
                          "Revenue Analytics",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--muted)] border border-[var(--surface)] hover:border-[var(--muted)]/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Screenshot */}
                    <a
                      href="https://beaconproject.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative mx-6 mb-6 rounded-xl overflow-hidden border border-[var(--surface)] group-hover:border-[var(--muted)]/20 transition-colors">
                        <Image
                          src="/beacon.png"
                          alt="Beacon dashboard showing MRR, churn rate, and customer metrics"
                          width={1200}
                          height={675}
                          className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">
                            View live demo
                          </span>
                          <ArrowIcon className="text-[var(--accent)]" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Pre-Deploy Checklist */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm overflow-hidden hover:border-[var(--accent)]/20 transition-colors">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                          Pre-Deploy Checklist
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                          Live
                        </span>
                      </div>

                      <p className="text-[var(--muted)] mb-5 leading-relaxed">
                        A Claude Code plugin that runs 12 parallel subagent audits
                        on Supabase + Vercel + Next.js apps before deployment.
                        Checks security, RLS policies, rate limiting, input
                        validation, error handling, and more. It also generates
                        auto-fixes and a SHIP IT / DO NOT SHIP verdict.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {[
                          "Claude Code",
                          "Subagents",
                          "Supabase MCP",
                          "Vercel CLI",
                          "Next.js",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--muted)] border border-[var(--surface)] hover:border-[var(--muted)]/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://github.com/maguire-murphy/pre-deploy-checklist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                      >
                        View on GitHub
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Grab a Date */}
                <div className="group relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent)]/30 via-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative rounded-2xl border border-[var(--surface)] bg-[var(--background)]/80 backdrop-blur-sm overflow-hidden hover:border-[var(--accent)]/20 transition-colors">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                          Grab a Date
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--foreground)]/10 text-[var(--foreground)]/70 border border-[var(--foreground)]/20">
                          Beta
                        </span>
                      </div>

                      <p className="text-[var(--muted)] mb-5 leading-relaxed">
                        Built an activity-first dating app where matches swipe on date
                        ideas together. Chat unlocks only after both people confirm
                        the plan, skipping the small-talk spiral and getting
                        straight to real dates.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {[
                          "React Native",
                          "Expo",
                          "Supabase",
                          "PostGIS",
                          "Stripe",
                          "Cloudflare R2",
                          "Next.js",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] text-[var(--muted)] border border-[var(--surface)] hover:border-[var(--muted)]/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://www.grabadate.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                      >
                        Visit site
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Background */}
          <FadeIn delay={300}>
            <section className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-mono text-[var(--accent)] tracking-wider uppercase">
                  03
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                  Background
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--surface)] to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-[var(--surface)] bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40 transition-colors">
                  <p className="text-xs text-[var(--accent)] font-mono uppercase tracking-wider mb-1">
                    Education
                  </p>
                  <p className="font-medium">UW Economics &apos;25</p>
                </div>
                <div className="p-4 rounded-xl border border-[var(--surface)] bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40 transition-colors">
                  <p className="text-xs text-[var(--accent)] font-mono uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="font-medium">Seattle, WA</p>
                </div>
                <div className="p-4 rounded-xl border border-[var(--surface)] bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40 transition-colors">
                  <p className="text-xs text-[var(--accent)] font-mono uppercase tracking-wider mb-1">
                    Languages
                  </p>
                  <p className="font-medium">English & Spanish</p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* Footer */}
          <FadeIn delay={400}>
            <footer className="pt-10 border-t border-[var(--surface)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[var(--muted)]">Open to opportunities</p>
                <a
                  href="mailto:maguire.murphy@live.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity"
                >
                  Get in touch
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </footer>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}

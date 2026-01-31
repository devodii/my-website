"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import * as React from "react"
import { ExternalLink, Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react"
import { Button } from "@/components/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
]

const experiences = [
  {
    title: "Founding Engineer",
    company: "Tarot Master",
    period: "Sept 2023 – Aug 2025",
    summary:
      "Built distributed backend (Nest.js, PostgreSQL), Contentful CMS, Stripe, OpenAI/Claude/Gemini streaming. Next.js web app (10k+ users), React Native/Expo app.",
  },
  {
    title: "Full Stack Developer",
    company: "Minimo (part-time)",
    period: "May 2024 – Dec 2024",
    summary: "React Aria components, webhooks, form builder with embedding and tracking.",
  },
]

const projects = [
  {
    title: "PayKit",
    description: "Payment-agnostic SDK for Stripe, Polar, and others. Plugin-ready for MedusaJS and similar.",
    links: [
      { label: "usepaykit.dev", href: "https://usepaykit.dev" },
      { label: "GitHub", href: "https://github.com/usepaykit/paykit-sdk" },
    ],
  },
  {
    title: "Tarot Master",
    description: "AI tarot reading platform. Web and Android app, thousands of users.",
    links: [
      { label: "tarotmaster.ai", href: "https://tarotmaster.ai" },
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.rodrigo.tarotmaster" },
    ],
  },
]

function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const toggle = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggle} type="button">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-bold">
            Emmanuel Odii
          </Link>
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </nav>
        </div>
      </header>

      <section className="py-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 sm:flex-row sm:items-start sm:gap-8">
          <Link
            href="#about"
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Image
              src="/profile.png"
              alt="Emmanuel Odii"
              width={80}
              height={80}
              className="h-full w-full object-cover object-center"
              priority
            />
          </Link>
          <div className="min-w-0 text-center sm:text-left">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Hi, I'm Emmanuel Odii</h1>
            <p className="mt-1 text-muted-foreground text-sm sm:text-base">
              🏴‍☠️ 19yo cracked builder, 🦄 My goal is to simplify payments for the web.
            </p>
            <div className="mt-3 flex justify-center gap-4 text-muted-foreground sm:justify-start">
              <a
                href="https://github.com/devodii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://x.com/devodii_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="X"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuelodii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:emmanuelodii80@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="size-5" />
              </a>
              <a
                href="https://www.medium.com/@emmanuelodii80"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 -55 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-6">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">About</h2>
          <p className="text-sm text-muted-foreground">
            I started teaching myself to code on an Android phone back in 2022, then got helped by{" "}
            <a
              href="https://www.linkedin.com/posts/evedes_code-career-africa-activity-6989964177289187328-kYbD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3Qk-oBhEpXoDpmtM0AybCEfVZ8G0GiPWE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:no-underline"
            >
              Eduardo Vedes
            </a>{" "}
            to get a computer to code on.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Since then I've shipped stuff like Tarot Master (12k+ users) and PayKit.</p>
        </div>
      </section>

      <section id="experience" className="py-6">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">Experience</h2>
          <ul className="space-y-4">
            {experiences.map((exp, i) => (
              <li key={i}>
                <p className="font-medium">
                  {exp.title} at {exp.company}
                  <span className="ml-2 text-muted-foreground font-normal text-sm">{exp.period}</span>
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{exp.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" className="py-6">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">Projects</h2>
          <ul className="space-y-4">
            {projects.map((p, i) => (
              <li key={i}>
                <p className="font-medium">{p.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-2 flex flex-wrap gap-3 text-sm">
                  {p.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary underline underline-offset-2 hover:no-underline"
                    >
                      {link.label}
                      <ExternalLink className="size-3.5 shrink-0" />
                    </a>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="py-6">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Emmanuel Odii</span>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/devodii"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </Link>
            <Link
              href="https://x.com/devodii_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="X"
            >
              <Twitter className="size-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuelodii/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

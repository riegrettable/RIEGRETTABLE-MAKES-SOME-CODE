"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { PasswordProtection } from "@/components/password-protection"

const projects = [
  {
    id: "lumi",
    title: "Lumi AI Learning Companion",
    description: "0-to-1 product development for an AI-powered education platform",
  },
  {
    id: "covid-19",
    title: "COVID-19 Response at Color Health",
    description: "Designed testing infrastructure that scaled to 13,000+ sites nationwide",
  },
  {
    id: "k12-testing",
    title: "K-12 Pooled Testing Solutions",
    description: "Streamlined testing workflows for educational institutions",
  },
  {
    id: "gender-affirming",
    title: "Designing Gender-Affirming Experiences at Color Health",
    description: "Medical equity initiatives for inclusive healthcare",
  },
  {
    id: "hitag",
    title: "HiTag: Global Fish Tracking",
    description: "iOS MVP for field scientists tracking global fish populations",
  },
  {
    id: "her",
    title: "HER Profile Redesign",
    description: "Product pivot from dating to social networking for queer women",
  },
]

export default function ProductDesign() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/#about" className="text-base font-medium hover:opacity-60 transition-opacity">
                  Katie Rieger
                </Link>
              </div>

              <nav className="hidden sm:flex gap-8">
                <Link href="/#about" className={cn(typography.nav, "hover:text-foreground/60 transition-colors")}>
                  About
                </Link>
                <Link
                  href="/product-design"
                  className={cn(typography.nav, "hover:text-foreground/60 transition-colors")}
                >
                  Work
                </Link>
              </nav>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="sm:hidden p-2 hover:bg-muted/50 rounded transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {isMenuOpen && (
              <nav className="sm:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-border">
                <Link href="/#about" className={cn(typography.nav, "hover:text-primary transition-colors")}>
                  About
                </Link>
                <Link href="/product-design" className={cn(typography.nav, "hover:text-primary transition-colors")}>
                  Work
                </Link>
              </nav>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <h1 className={typography.h1}>Recent work</h1>
            <p className={cn(typography.bodyLg, "text-muted-foreground mt-4")}>
              Selected projects spanning healthcare, education, climate, and social impact.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-8 sm:space-y-10">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/product-design/${project.id}`}
                  className="group block p-6 sm:p-8 border border-border rounded-lg hover:border-primary hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={cn(typography.h3, "group-hover:text-primary transition-colors")}>
                        {project.title}
                      </h2>
                      <p className={cn(typography.bodySm, "text-muted-foreground mt-2 leading-relaxed")}>
                        {project.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PasswordProtection>
  )
}

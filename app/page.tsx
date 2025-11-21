"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { ImageLightbox } from "@/components/image-lightbox"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-medium">Katie Rieger</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex gap-8">
              <Link href="/#about" className={cn(typography.nav, "hover:text-foreground/60 transition-colors")}>
                About
              </Link>
              <Link href="/product-design" className={cn(typography.nav, "hover:text-foreground/60 transition-colors")}>
                Work
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 hover:bg-muted/50 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
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
      <section id="about" className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <h1 className={cn(typography.h1, "mb-6")}>I bring strategic product design to mission-driven teams.</h1>
            <p className={cn(typography.bodyLg, "text-foreground/60 leading-relaxed")}>
              I've shaped design solutions for healthcare, climate action, and education. These days, I'm improving
              outcomes in education as the Founding Designer at Lumi.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className={cn(typography.h2, "mb-16")}>Experience</h2>

          <div className="space-y-16">
            {/* Lumi */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207242.png" alt="Lumi logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>Lumi, Founding Designer</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Drove 0-to-1 product development for an AI-powered storytelling tool for K-12 schools. Leading product
                  strategy and design, transforming how students engage with writing through research-backed educational
                  scaffolding.
                </p>
              </div>
            </div>

            {/* LayerUp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207243.png" alt="LayerUp logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>LayerUp, Founding Designer</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Transformed a business-in-a-box tool for insulation contractors from MVP to a comprehensive product
                  suite.
                </p>
              </div>
            </div>

            {/* Climate Tech Design Consultant */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207244.png" alt="Climate Tech logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>Climate Tech Design Consultant</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Designed and shipped an iOS MVP for tracking global fish populations in just 3 weeks, optimizing
                  workflows specifically for field scientists.
                </p>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-4")}>
                  Collaborated with LA-based non-profits via dashboard.earth, designing native mobile experiences that
                  promote community-based climate action across the city.
                </p>
              </div>
            </div>

            {/* Color Health */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207245.png" alt="Color Health logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>Color Health, Senior Product Designer</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Led the design of COVID-19 testing infrastructure that scaled to over 13,000 sites nationwide,
                  developed the company's first immunization services, spearheaded medical equity initiatives, and
                  helped grow the design team from 2 to 40 members.
                </p>
              </div>
            </div>

            {/* HER */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207246.png" alt="HER logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>HER, Lead Product Designer</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Completed a product pivot from dating to social networking for queer women, designing features that
                  significantly boosted user engagement.
                </p>
              </div>
            </div>

            {/* BigMarker */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img src="/images/frame-207247.png" alt="BigMarker logo" className="w-12 h-12" />
              </div>
              <div>
                <h3 className={typography.h3}>BigMarker, UX Designer</h3>
                <p className={cn(typography.bodySm, "text-foreground/60 leading-relaxed mt-3")}>
                  Designed webinar marketing tools including one-click instant meetings for both enterprise and SMB
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <a href="#" className="text-base underline hover:text-foreground/60 transition-colors">
            Download resume
          </a>
        </div>
      </section>

      {/* Footer Illustration Section */}
      <section id="work" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-md">
              <ImageLightbox
                src="/images/self-20portrait.webp"
                alt="Self portrait illustration"
                width={500}
                height={500}
              />
            </div>
            <p className={cn(typography.caption, "text-foreground/60")}>This is a self portrait.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { PasswordProtection } from "@/components/password-protection"
import { CaseStudyNav } from "@/components/case-study-nav"
import { ImageLightbox } from "@/components/image-lightbox"

export default function GenderAffirmingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
          <div className="max-w-[1024px] mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-base font-medium hover:opacity-60 transition-opacity">
                Katie Rieger
              </Link>

              <nav className="hidden sm:flex gap-8">
                <Link href="/" className={cn(typography.nav, "hover:opacity-60 transition-opacity")}>
                  About
                </Link>
                <Link href="/product-design" className={cn(typography.nav, "hover:opacity-60 transition-opacity")}>
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
                <Link href="/" className={cn(typography.nav, "hover:text-primary transition-colors")}>
                  About
                </Link>
                <Link href="/product-design" className={cn(typography.nav, "hover:text-primary transition-colors")}>
                  Work
                </Link>
              </nav>
            )}
          </div>
        </header>

        <article>
          <div className="max-w-[1024px] mx-auto px-6">
            <Link
              href="/product-design"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-12"
            >
              <ArrowLeft size={16} />
              <span className={typography.bodySm}>Back to work</span>
            </Link>

            <div className="mt-12 mb-24">
              <h1 className={typography.h1}>Designing a gender-affirming genetic testing experience</h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <h3 className={cn(typography.bodyMd, "font-semibold mb-2")}>Role</h3>
                  <p className={cn(typography.body, "text-muted-foreground")}>Lead Product Designer</p>
                </div>
                <div>
                  <h3 className={cn(typography.bodyMd, "font-semibold mb-2")}>Timeline</h3>
                  <p className={cn(typography.body, "text-muted-foreground")}>2020-2022</p>
                </div>
                <div>
                  <h3 className={cn(typography.bodyMd, "font-semibold mb-2")}>Team</h3>
                  <p className={cn(typography.body, "text-muted-foreground")}>
                    Cross-functional: Engineering, Medical Affairs, Scientific
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-16 mb-24">
              <section>
                <h2 className={typography.h2}>Background</h2>
                <p className={cn(typography.body, "mt-4")}>
                  Color is a data-driven health service powered by genetics. Color provides clinical care, so we are
                  required to collect specific information about participants for medical purposes. One piece of
                  information we are required to collect is an individual's sex assigned at birth.
                </p>
                <p className={cn(typography.body, "mt-4")}>We use this data to:</p>
                <ul className={cn(typography.body, "mt-4 space-y-2 list-disc list-inside")}>
                  <li>Identify risk for genetic disease</li>
                  <li>Share screening guidelines</li>
                  <li>Suggest appropriate health resources</li>
                </ul>
                <p className={cn(typography.body, "mt-4")}>
                  There are two places in our product where we collect an individual's sex assigned at birth:
                </p>
                <ul className={cn(typography.body, "mt-4 space-y-2 list-disc list-inside")}>
                  <li>When a participant activates their Color genetic test kit</li>
                  <li>
                    OR at the start of health history (participants can add their health history before they receive
                    their kit)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={typography.h2}>So what's the problem?</h2>
                <p className={cn(typography.body, "mt-4")}>
                  If a user's self-reported sex does not match their sample's observed sex chromosome count, it triggers
                  an investigation.
                </p>
                <p className={cn(typography.body, "mt-4")}>
                  There are a handful of reasons that explain a mismatch, one of which is when an individual's sex
                  assigned at birth is different than their gender identity.
                </p>
                <p className={cn(typography.body, "mt-4")}>
                  This creates issues in reporting for these individuals, so Color returns an "Instant Report" that does
                  not contain risk information or screening guidelines. Without risk information or screening
                  guidelines, reports are virtually meaningless, and individuals in this situation do not have access to
                  personal risk information and screening guidelines.
                </p>
              </section>

              <section>
                <h2 className={typography.h2}>Understanding the complexity</h2>
                <p className={cn(typography.body, "mt-4")}>
                  I worked with cross-functional partners at Color to answer the following questions:
                </p>
                <ul className={cn(typography.body, "mt-6 space-y-4")}>
                  <li>
                    <strong>Medicine and research:</strong> How do we return accurate and actionable information? How do
                    we work within the limitations around research for transgender and non-binary individuals?
                  </li>
                  <li>
                    <strong>Language:</strong> How do we collect accurate information while being sensitive towards all
                    users? What is the most up-to-date terminology?
                  </li>
                  <li>
                    <strong>Data:</strong> How do we collect only what we need for accurate reporting?
                  </li>
                  <li>
                    <strong>Engineering constraints:</strong> Reports are complex! How can we work within Color's
                    existing system?
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={typography.h2}>How did we solve this?</h2>
                <p className={cn(typography.body, "mt-4")}>
                  Improved content design – clarifying that we are asking for sex assigned at birth for quality control
                  purposes – allowed us to address this problem without a massive (and unfeasible) engineering overhaul.
                </p>
                <div className="my-8">
                  <ImageLightbox
                    src="/images/products.webp"
                    alt="Three mobile screens showing the sex assigned at birth question across different Color Health products: Essential Care, COVID-19 Testing, and COVID-19 Immunization"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className={cn(typography.body, "mt-4")}>
                  By updating language (changing "sex" to "sex assigned at birth"), adding a new field for gender
                  identity (which allows us to provide an experience across the rest of the site catered to gender
                  non-conforming individuals), and working within our existing reports structure & note system, we were
                  able to build and release this update in one week.
                </p>
                <p className={cn(typography.body, "mt-4")}>
                  These seemingly small changes have large implications for democratizing access to precision
                  healthcare.
                </p>
              </section>

              <section>
                <h2 className={typography.h2}>Ongoing work</h2>
                <p className={cn(typography.body, "mt-4")}>
                  As Color expanded into other health areas, including diagnostics and immunizations, reporting
                  requirements began to shift.
                </p>
                <p className={cn(typography.body, "mt-4")}>
                  In collaboration with the Scientific and Medical Affairs teams, I designed a unified system for
                  collecting sensitive information about "sex assigned at birth" that met the varying regulatory,
                  clinical, legal, and contractual requirements of our many healthcare products. Most importantly, it
                  helped participants feel seen and understood.
                </p>
                <div className="my-8">
                  <ImageLightbox
                    src="/images/content.webp"
                    alt="Content specification document showing the logic for when to display different explanations for the sex assigned at birth question based on lab, reporting, clinical interpretation, and guideline requirements"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className={cn(typography.body, "mt-4")}>
                  This content design system improved parity for transgender patients across all of Color's healthcare
                  products. I also created internal documentation for teams across Color, as well as training materials
                  for providers, clinicians, and other staff at Color's nationwide healthcare sites. This easy-to-follow
                  system helped teams move faster while ensuring thoughtful care experiences for patients.
                </p>
              </section>
            </div>
          </div>

          <CaseStudyNav currentProjectId="gender-affirming" />
        </article>
      </div>
    </PasswordProtection>
  )
}

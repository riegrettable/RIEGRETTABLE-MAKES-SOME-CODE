"use client"

import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import { ArrowLeft, Printer, Share2, Check } from "lucide-react"
import { typography } from "@/lib/typography"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ResumePage() {
  const [showCopied, setShowCopied] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link", err)
    }
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white;
          }
          main {
            max-width: 100% !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <div className="min-h-screen flex flex-col">
        <div className="no-print hidden">
          <SiteHeader />
        </div>

        <main className="flex-1 w-full max-w-[800px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-8 no-print">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={handlePrint} className="h-9 w-9" aria-label="Print resume">
                <Printer className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={handleShare} className="h-9 w-9" aria-label="Share resume">
                  <Share2 className="h-4 w-4" />
                </Button>
                {showCopied && (
                  <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-foreground text-background text-sm rounded-md shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <Check className="h-4 w-4" />
                    Link copied to clipboard
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <header className="space-y-2 border-b pb-6">
              <h1 className={typography.h1}>Katie Rieger</h1>
              <p className={typography.body}>Product Designer & Strategist</p>
              <div className="flex gap-4 text-sm">
                <a
                  href="mailto:hello@katierieger.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@katierieger.com
                </a>
                <span className="text-muted-foreground">/</span>
                <a
                  href="https://katierieger.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  katierieger.com
                </a>
              </div>
            </header>

            {/* Lumi */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>Lumi</h2>
                <p className="text-sm text-muted-foreground">Sept 2024 – Present</p>
              </div>
              <p className={typography.smallCaps}>Founding Designer</p>
              <p className="text-sm text-muted-foreground">AI-powered EdTech platform for creative learning.</p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Led 0 to 1 product design as sole designer at 7-person team, shipping student creator tools and
                  educator analytics platform to 4 partner districts and 200+ students in Q1 2025.
                </li>
                <li>
                  • Conducted research with 20+ teachers across 5 districts and analyzed academic studies (MIT Media
                  Lab), uncovering AI misuse patterns that drove strategic pivot from "AI co-creator" to "learning
                  companion" model.
                </li>
                <li>
                  • Defined Lumi's responsible AI frameworks and design principles informed by educational research,
                  shifting product strategy from an answer-providing AI experience to a pedagogically-sound AI platform.
                </li>
                <li>
                  • Facilitated quarterly design sprints to align product, eng, and district success teams, reducing
                  feature development cycle time by ~50% (from 4+ weeks to 2 weeks).
                </li>
                <li>
                  • Established monthly educator feedback sessions with 20-teacher cohort across 5 districts, ensuring
                  features are rooted in educational pedagogy and improving adoption from ~10% to 90% within 2 weeks of
                  release.
                </li>
              </ul>
            </section>

            {/* LayerUp */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>LayerUp</h2>
                <p className="text-sm text-muted-foreground">Jul 2023 – Sept 2024</p>
              </div>
              <p className={typography.smallCaps}>Founding Designer</p>
              <p className="text-sm text-muted-foreground">
                Business-in-a-box digital tool for insulation contractors. Acquired by GIC in Oct 2024.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Led UX design for multi-platform MVP serving 10+ contractors, creating workflows that supported
                  $500k+ in project value and contributed to successful acquisition.
                </li>
                <li>
                  • Designed contractor-friendly interfaces that achieved 78% weekly active usage among early adopters,
                  demonstrating product-market fit.
                </li>
              </ul>
            </section>

            {/* Freelance */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>Freelance</h2>
                <p className="text-sm text-muted-foreground">Dec 2022 – Jul 2023</p>
              </div>
              <p className={typography.smallCaps}>Climate Tech Designer</p>
              <p className="text-sm text-muted-foreground">
                Designed mobile experiences for climate tech and conservation nonprofits.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Large Pelagics Research Center: Designed HiTag, an iOS app that allows citizen scientists
                  (commercial and recreational fishers) to aid data collection on tagged fish.
                </li>
                <li>
                  • dashboard.earth: Collaborated with 3 conservation nonprofits on L.A. community climate solutions,
                  designing mobile experiences that facilitated climate actions for 1,000+ users in first 6 months.
                </li>
              </ul>
            </section>

            {/* Color Health */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>Color Health</h2>
                <p className="text-sm text-muted-foreground">Feb 2019 – Nov 2022</p>
              </div>
              <p className={typography.smallCaps}>Senior Product Designer</p>
              <p className="text-sm text-muted-foreground">
                Biotech company specializing in diagnostics and immunizations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Designed COVID-19 testing workflows deployed across 13,000+ sites nationwide, processing 10M+ tests
                  and serving diverse populations including non-English speakers and low-literacy users.
                </li>
                <li>
                  • Partnered with Genetic Counselors to redesign genetic testing results delivery, creating access for
                  transgender patients previously excluded by confusing language.
                </li>
                <li>
                  • Created a scalable, inclusive design system adopted across 8 product lines, reducing design
                  inconsistencies by 60% and cutting engineering implementation time by 35%.
                </li>
                <li>• Mentored junior designers and contributed to scaling the design team from 2 to 40.</li>
                <li>
                  • Founded Medical Equity Working Group (12 cross-functional members), establishing inclusive design
                  standards that influenced company-wide product policies.
                </li>
              </ul>
            </section>

            {/* HER */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>HER</h2>
                <p className="text-sm text-muted-foreground">Jan 2018 – Feb 2019</p>
              </div>
              <p className={typography.smallCaps}>Lead Product Designer</p>
              <p className="text-sm text-muted-foreground">Social app for queer women.</p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Led design and research during strategic pivot from dating to social platform, designing community
                  features (feed, events, groups) that increased daily active users by 40% and session length by 25%.
                </li>
                <li>
                  • Conducted user research with 50+ members across 5 global cities, informing features that boosted App
                  Store rating to 4.4 stars.
                </li>
              </ul>
            </section>

            {/* BigMarker */}
            <section className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h2 className={typography.h3}>BigMarker</h2>
                <p className="text-sm text-muted-foreground">Aug 2015 – Jan 2018</p>
              </div>
              <p className={typography.smallCaps}>Product Designer</p>
              <p className="text-sm text-muted-foreground">Webinar marketing tool.</p>
              <ul className="space-y-2 text-sm">
                <li>
                  • Designed UX for webinar features including one-click instant meetings, used by enterprise and SMB
                  customers.
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

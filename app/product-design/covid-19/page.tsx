"use client"

import { useState } from "react"

import Link from "next/link"
import { ArrowLeft, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { CaseStudyNav } from "@/components/case-study-nav"
import { ImageLightbox } from "@/components/image-lightbox"
import { PasswordProtection } from "@/components/password-protection"

export default function ColorCovidCaseStudy() {
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

        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
          <Link
            href="/product-design"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className={typography.h1}>Designing COVID-19 testing solutions at scale</h1>

          <p className={cn(typography.bodyLg, "mt-6 text-muted-foreground")}>
            How we served millions of Americans during the pandemic by putting users at the center of design to
            transform critical health infrastructure.
          </p>

          <div className="mt-6 pt-6 border-t border-border">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground mb-1">Role</dt>
                <dd className="text-muted-foreground">Lead UX Designer</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Timeline</dt>
                <dd className="text-muted-foreground">2020-2021</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Impact</dt>
                <dd className="text-muted-foreground">Millions of tests processed</dd>
              </div>
            </dl>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
          {/* Introduction */}
          <section className="space-y-6">
            <p className={typography.body}>
              When COVID-19 hit, Color rapidly pivoted from genetic testing to become a critical piece of America's
              testing infrastructure.
            </p>

            <p className={typography.body}>
              We initially partnered with Bay Area public health departments to serve diverse communities of essential
              workers who needed accessible, reliable testing. The challenge was immense: our users were primarily
              mobile-first, often had limited data bandwidth, spoke different languages, and needed an experience simple
              enough to use during a health crisis.
            </p>

            <p className={typography.body}>
              My role was leading the UX transformation of our entire genetic testing platform to meet these urgent
              public health needs.
            </p>
          </section>

          {/* Core Work */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Core work: public health diagnostics foundation</h2>

            <p className={typography.body}>
              The foundation of our COVID-19 response centered on truly understanding our users—essential workers from
              diverse communities across the Bay Area. Through user research, I discovered that most people would
              register and receive results on their phones, often with limited data.
            </p>

            <p className={typography.body}>
              This led me to design mobile-first experiences with localized content that respected different cultural
              contexts and language needs, as well as site accessibility considerations. The registration and results
              flow had to be simple enough for someone to complete while stressed about their health, yet comprehensive
              enough to ensure proper follow-up care.
            </p>

            <p className={typography.body}>
              This user-centered approach became the model for our diagnostics tools that scaled nationwide and later
              influenced vaccination programs.
            </p>

            <div className="mt-8 flex gap-4 overflow-x-auto md:overflow-x-visible">
              <div className="flex-shrink-0 w-48 md:flex-1">
                <ImageLightbox
                  src="/images/kit-20activation-20mobile-20old.png"
                  alt="COVID-19 test scheduling homepage with language selection and options to schedule for self or someone under 18"
                  width={375}
                  height={812}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-shrink-0 w-48 md:flex-1">
                <ImageLightbox
                  src="/images/kit-20activation-20mobile-20old-1.png"
                  alt="COVID-19 test information page explaining what the test detects and instructions for positive results"
                  width={375}
                  height={812}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-shrink-0 w-48 md:flex-1">
                <ImageLightbox
                  src="/images/reg6.png"
                  alt="Appointment location selection interface showing Embarcadero site with map, accessibility information, and booking option"
                  width={375}
                  height={812}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-shrink-0 w-48 md:flex-1">
                <ImageLightbox
                  src="/images/reg12.png"
                  alt="Test results summary page showing patient information and negative SARS-CoV-2 test result"
                  width={375}
                  height={812}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Field Research: United Airlines */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Field research: United Airlines partnership</h2>

            <p className={typography.body}>
              When we expanded beyond public health to support businesses, I encountered an important lesson about the
              importance of observing users in their actual work environment.
            </p>

            <p className={typography.body}>
              At our United Airlines partnership site at SFO, wait times were unacceptably long. Rather than guessing at
              solutions, I went onsite to watch clinicians work. I immediately saw the problem: scanning small, round
              test tube barcodes with large iPads required awkward one-handed positioning that slowed down the entire
              process.
            </p>

            <p className={typography.body}>
              By bringing this user insight back to my team, we implemented external barcode scanners that dramatically
              improved throughput and made clinicians' jobs easier.
            </p>

            <div className="mt-8">
              <ImageLightbox
                src="/images/barcode.jpeg"
                alt="COVID-19 testing station setup with clinician scanning test tube barcodes using external scanner, showing organized box of test tubes, tablet device, and hand sanitizer"
                width={1200}
                height={900}
                className="rounded-lg w-full"
              />
            </div>
          </section>

          {/* K-12 Schools */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Specialized workflows: K-12 school testing</h2>

            <p className={typography.body}>
              User empathy took on new meaning when we expanded to K-12 schools with pooled testing programs.
            </p>

            <p className={typography.body}>
              I traveled to Cincinnati public schools to observe the testing process firsthand, where I discovered
              something our adult-focused design hadn't considered: kids drop things. A lot.
            </p>

            <p className={typography.body}>
              While our corporate testing packages worked perfectly for office environments, children were dropping
              swabs during the collection process, leaving schools without enough supplies to test all students.
            </p>

            <p className={typography.body}>
              This direct user observation led us to adjust our supply calculations specifically for school
              environments, ensuring consistent testing completion rates.
            </p>
          </section>

          {/* University Ship-to-Home */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Complex logistics: University ship-to-home</h2>

            <p className={typography.body}>
              Our university ship-to-home program presented one of the most complex user experience challenges: guiding
              students through a multi-step process with unforgiving timing constraints.
            </p>

            <p className={typography.body}>
              Students had to swab themselves, find the right type of FedEx dropbox (not all accept biohazards), and
              complete everything within a specific window before returning to campus. One mistake meant the sample
              would expire, and their return to campus would be delayed.
            </p>

            <p className={typography.body}>
              Working closely with engineering, I designed content and workflows that broke down this complex logistics
              challenge into clear, actionable steps that students could successfully follow under pressure.
            </p>
          </section>

          {/* Conclusion */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Impact and learnings</h2>

            <p className={typography.body}>
              This work taught me that truly user-centered design means going beyond personas and surveys; it means
              showing up where your users are, watching them work, and understanding their real constraints.
            </p>

            <p className={typography.body}>
              Whether it was essential workers using phones with limited data, clinicians struggling with awkward
              hardware, children dropping swabs, or students navigating complex logistics, every design decision started
              with deep user empathy.
            </p>

            <p className={typography.body}>
              The result was a testing infrastructure that served millions of Americans during our country's greatest
              public health challenge, proving that when you truly understand your users, you can design solutions that
              work at any scale.
            </p>
          </section>
        </article>

        {/* Case Study Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
          <CaseStudyNav currentProjectId="covid-19" />
        </div>
      </div>
    </PasswordProtection>
  )
}

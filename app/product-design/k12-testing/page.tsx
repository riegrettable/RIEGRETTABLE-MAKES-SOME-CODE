"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { CaseStudyNav } from "@/components/case-study-nav"
import { PasswordProtection } from "@/components/password-protection"

export default function K12PooledTesting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-base font-medium hover:opacity-60 transition-opacity">
                Katie Rieger
              </Link>

              <nav className="hidden sm:flex gap-8">
                <Link href="/#about" className={cn(typography.nav, "hover:opacity-60 transition-opacity")}>
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

        <main>
          <article className="max-w-4xl mx-auto px-6 py-12">
            <Link
              href="/product-design"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ChevronLeft size={16} />
              Back to work
            </Link>

            <h1 className={cn(typography.h1, "mb-4")}>COVID-19 Pooled Testing</h1>
            <p className={cn(typography.bodyLg, "text-muted-foreground mb-16")}>
              How a lean product team used an iterative, feedback-driven process to design a clinical testing tool that
              met regulatory requirements and was usable by teachers with minimal training.
            </p>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Overview</h2>
              <p className={cn(typography.body, "mb-4")}>
                I was the lead designer for Color's COVID-19 diagnostic services during the pandemic. Pooled testing was
                one of the many services my team built to meet immediate testing needs as the pandemic rapidly unfolded.
                With a lean team and tight timelines, we were designing for accessibility and efficiency.
              </p>
              <p className={typography.body}>
                We built a patient-facing experience, an admin-facing experience, and a clinician-facing experience in
                the Onsite Tool. For this case study, I will focus on how we designed a pooled testing workflow in the
                Onsite Tool.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Background</h2>
              <p className={cn(typography.body, "mb-4")}>
                <strong>There was a need for affordable and available COVID-19 tests.</strong>
              </p>
              <p className={cn(typography.body, "mb-4")}>
                Employers and K-12 schools were struggling to reopen during the summer of 2021. Individual COVID-19 lab
                testing was expensive, but rapid tests were scarce. K-12 schools specifically needed an affordable
                option to monitor the spread of COVID-19.
              </p>
              <p className={cn(typography.body, "mb-8 italic")}>
                How might we improve affordability and access to COVID-19 testing so that employers and schools can
                re-open safely and quickly?
              </p>

              <h3 className={cn(typography.h3, "mb-4")}>Opportunity: Pooled testing</h3>
              <p className={cn(typography.body, "mb-4")}>
                Pooled testing was identified as an opportunity by Color's Lab Team. We could use our existing COVID-19
                lab infrastructure to support pooled testing.
              </p>
              <p className={cn(typography.body, "mb-4")}>
                A group of individual nasal samples would be "pooled" in the same collection tube. The pool would be
                analyzed as one sample at the lab, which reduces cost at scale. If the sample is positive, then at least
                one person in the pool is positive for COVID-19. If the sample is negative, then everyone in the pool is
                negative for COVID-19.
              </p>
              <p className={typography.body}>
                We had the lab infrastructure to make pooled testing a reality, but we needed software to support it.
              </p>
            </section>

            <section className="mb-16">
              <h3 className={cn(typography.h3, "mb-6")}>The Team</h3>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                <li>1 product manager</li>
                <li>1 engineering lead</li>
                <li>1 full-stack software engineer</li>
                <li>1 product designer (me)</li>
              </ul>

              <h3 className={cn(typography.h3, "mb-4 mt-8")}>My role</h3>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                <li>UX/UI designer</li>
                <li>Content designer</li>
                <li>Visual designer</li>
                <li>Interaction designer</li>
                <li>Prototyper</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Timeline: Unknown</h2>
              <p className={cn(typography.body, "mb-4")}>
                The ambiguity of the pandemic meant that we would often identify potential solutions before we knew
                whether or not customers would ultimately need them. Pooled testing was no different; a contract had not
                yet been signed when we kicked off the project, so it was possible that it would be a dead-end. It was
                also possible that we would sign a contract and need a functioning product with a week's notice.
              </p>

              <h2 className={cn(typography.h2, "mb-4 mt-8")}>Users: Unknown</h2>
              <p className={cn(typography.body, "mb-4")}>
                Without a contract signed, we did not know exactly what use cases or users pooled testing would need to
                support.
              </p>
              <p className={typography.body}>
                Designing for reopening workplaces would have different technical requirements and nuances than
                designing for reopening K-12 schools.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Assumption-based model: Design for K-12</h2>
              <p className={cn(typography.body, "mb-4")}>
                At this point in time, we had successful testing programs for public health departments and private
                employers. We had not yet designed for dependents (schoolchildren), and we hypothesized that the need
                for affordable testing would be greater among K-12 schools than employers.
              </p>
              <p className={cn(typography.body, "mb-4")}>
                We decided to move forward under the assumption that our key customer for pooled testing would be K-12
                schools.
              </p>
              <p className={typography.body}>
                Without bandwidth for in-depth research, I used the information we did have to develop assumption-based
                requirements and constraints. This was a starting point, but I would need to find an opportunity to test
                these assumptions.
              </p>
            </section>

            <section className="mb-16">
              <h3 className={cn(typography.h3, "mb-4")}>Assumption-based workflow</h3>
              <p className={cn(typography.body, "mb-4")}>
                Color's Onsite Tool supports the workflows for providers, clinicians, and other staff at testing sites.
              </p>
              <p className={typography.body}>
                To inform the digital pooled testing experience, I worked closely with the Commercial Team, the Lab
                Team, and the Medical Affairs team to map a workflow for K-12 schools.
              </p>

              <h3 className={cn(typography.h3, "mb-4 mt-8")}>Assumption-based digital model</h3>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside mb-4")}>
                <li>1 classroom = 1 pool</li>
                <li>
                  The Onsite Tool would always be used on tablet and did not need to be mobile-responsive (Color
                  provided iPads to all test sites up until this point)
                </li>
              </ul>

              <h3 className={cn(typography.h3, "mb-4 mt-8")}>Assumption-based users</h3>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                <li>Nurses have a clinical background and familiarity with complex clinical tools</li>
                <li>
                  Nurses would receive training from Color (this was the model for all of Color's COVID-19 test sites up
                  until this point)
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Iteration 1: Recycle Existing Product</h2>
              <p className={cn(typography.body, "mb-4")}>
                We only had one engineer on this project, and we might need to ship a functioning product with a week's
                notice. Therefore, we decided as a team to reuse as much of the existing experience as possible.
              </p>
              <p className={cn(typography.body, "mb-4")}>
                For K-12 schools, we operated under the assumption that 1 pool = 1 classroom.
              </p>
              <p className={typography.body}>
                Under this assumption, I adapted the logged in homepage to reflect a list of pools instead of a list of
                all patients.
              </p>
            </section>

            <section className="mb-16">
              <h3 className={cn(typography.h3, "mb-4")}>Feedback</h3>
              <p className={cn(typography.body, "mb-4")}>
                I created a prototype for the Commercial Team to share with potential customers. We received feedback
                from Cincinnati Public Schools which upended a handful of our assumptions.
              </p>

              <h4 className={cn(typography.h4, "mb-4 mt-6")}>New users: Teachers</h4>
              <p className={cn(typography.body, "mb-4")}>Teachers, not nurses, would conduct testing</p>
              <p className={cn(typography.body, "mb-2")}>Unlike nurses:</p>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside mb-4")}>
                <li>Teachers may not have experience with clinical tools</li>
                <li>Teachers may not have a clinical background</li>
                <li>It was unlikely they would have bandwidth to review complex training materials</li>
              </ul>
              <p className={cn(typography.body, "mb-4")}>
                The Onsite Tool had to be usable without training, and it needed a flexible model for creating pools of
                students.
              </p>

              <h4 className={cn(typography.h4, "mb-4 mt-6")}>New data structure</h4>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                <li>The original thinking that 1 pool = 1 classroom would not work in a school setting</li>
                <li>
                  Students often moved between classrooms and schools within a district, so it would be difficult to
                  manage in the Admin Dashboard or on Color's backend
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Iteration 2: Search-first</h2>
              <p className={cn(typography.body, "mb-4")}>
                Teachers are busy and needed a simple, easy-to-understand product. Plus, they would not only be using a
                digital tool for pooled testing; they would also be juggling samples and managing students. Therefore, I
                proposed a solution that utilized the following principles:
              </p>
              <ul className={cn(typography.body, "space-y-2 list-disc list-inside mb-4")}>
                <li>Each step should have one clear task and one clear action</li>
                <li>The experience should be search-first instead of relying on an expansive patient list</li>
                <li>In lieu of training materials, speed bumps should be incorporated for error prevention</li>
              </ul>
              <p className={typography.body}>
                It would require more engineering effort, but it responded to real needs of teachers and their
                environment.
              </p>
            </section>

            <section className="mb-16">
              <h3 className={cn(typography.h3, "mb-4")}>Feedback</h3>
              <p className={cn(typography.body, "mb-4")}>
                The Commercial Team shared the prototype with Cincinnati Public Schools. It was well-received for its
                usability, but we had a handful of new problems.
              </p>

              <h4 className={cn(typography.h4, "mb-4 mt-6")}>New timeline: 1 week</h4>
              <p className={cn(typography.body, "mb-4")}>
                Commercial had signed a contract; my team had one week to ship a functioning product.
              </p>

              <h4 className={cn(typography.h4, "mb-4 mt-6")}>New users: Any school staff member</h4>
              <p className={cn(typography.body, "mb-4")}>
                It would no longer be teachers using the Onsite Tool; it would be anyone at a given school who was
                available when needed.
              </p>

              <h4 className={cn(typography.h4, "mb-4 mt-6")}>New requirements: Mobile-first</h4>
              <p className={typography.body}>
                School staff would be using their personal mobile devices, so we needed a mobile-first experience.
              </p>
            </section>

            <section className="mb-16">
              <h3 className={cn(typography.h3, "mb-4")}>Negotiating timelines</h3>
              <p className={cn(typography.body, "mb-4")}>
                It would not be possible for our engineer to build the search-first solution in one week. We either
                needed to develop the list view UI, which we knew was not usable, or we needed a deadline extension to
                build the search-first experience.
              </p>
              <p className={typography.body}>
                Because the Commercial Team had seen firsthand the value of the search-first experience, my team
                received a deadline extension. But now, I had a new design challenge: the UI needed to be optimized for
                mobile.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Iteration 3: Mobile Responsive</h2>
              <p className={cn(typography.body, "mb-4")}>
                I initially attempted to include search, the patient list, and the list of participants in the pool in
                the mobile UI.
              </p>

              <h3 className={cn(typography.h3, "mb-4 mt-6")}>Feedback</h3>
              <p className={typography.body}>
                When I asked for feedback from my team, they had an idea: the patient list was not usable, and we were
                building a search-first experience, so why not remove the patient list?
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>What We Built</h2>
              <p className={cn(typography.body, "mb-4")}>
                At this point, we had a usable, mobile responsive solution for Pooled Testing that was validated by real
                users and could be feasibly built by our engineering in the new timeline. My team successfully designed
                and shipped a patient experience, a clinician experience in the Onsite Tool, and new analytics features
                for the Admin Dashboard.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Real-world Feedback</h2>
              <p className={cn(typography.body, "mb-4")}>
                I visited a Cincinnati Public School during the launch of Pooled Testing, and while the digital
                experience was easily for school staff to use, I discovered that we were going to need more swabs. Color
                supplied its own test kits to schools, including swabs; the number of swabs was equal to the number of
                students at the school. However, young schoolchildren don't have perfect dexterity. I noticed that they
                would often drop swabs on the ground, touch them with their fingers, or find other ways to contaminate
                them. This meant that the school ran out of swabs before testing was complete. I brought this feedback
                to the broader team at Color, and we updated the supplies we sent to schools to improve the pooled
                testing experience.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Impact</h2>
              <p className={cn(typography.body, "mb-4")}>
                We quickly met technical, ambiguous testing needs in 2021 with a user-centered approach, and this
                approach also established design as a thought partner across Color. Through research and insights about
                real users and the context in which they work, we built an effective solution that also created a
                paradigm shift within Color.
              </p>
              <p className={cn(typography.body, "mb-4")}>
                Because the commercial team witnessed firsthand the value of an iterative design process and feedback
                from real users, we moved from an assumption-based model to a user-informed model as an organization.
              </p>
              <p className={typography.body}>
                The market shifted, and towards the end of 2021, vaccines were becoming available. Then, in 2022,
                vaccines and rapid tests became readily available, so the need for affordable lab testing diminished.
              </p>
            </section>
          </article>

          <div className="max-w-4xl mx-auto px-6 py-12 border-t border-border">
            <CaseStudyNav currentProjectId="k12-testing" />
          </div>
        </main>
      </div>
    </PasswordProtection>
  )
}

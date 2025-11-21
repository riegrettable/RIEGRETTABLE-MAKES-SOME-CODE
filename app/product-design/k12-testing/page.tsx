"use client"

import { useState } from "react"
import Link from "next/link"
import ImageLightbox from "@/components/image-lightbox"
import { ImageGallery } from "@/components/image-gallery"
import { ChevronLeft, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { CaseStudyNav } from "@/components/case-study-nav"
import { PasswordProtection } from "@/components/password-protection"

export default function K12TestingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 bg-background border-b border-border">
          <div className="max-w-[1024px] mx-auto px-6 py-6">
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
          <article className="max-w-[1024px] mx-auto px-6 py-12">
            <Link
              href="/product-design"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ChevronLeft size={16} />
              Back to work
            </Link>

            <h1 className={cn(typography.h1, "mb-4")}>COVID-19 Pooled Testing</h1>

            <div className="mt-6 pt-6 border-t border-border">
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-foreground mb-1">Role</dt>
                  <dd className="text-muted-foreground">Senior Product Designer</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground mb-1">Timeline</dt>
                  <dd className="text-muted-foreground">2 weeks</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground mb-1">Team</dt>
                  <dd className="text-muted-foreground">Cross-functional: Product, Engineering, Clinical Operations</dd>
                </div>
              </dl>
            </div>

            <div className="my-8">
              <ImageLightbox
                src="/images/1-pooled-20testing.png"
                alt="Pooled testing workflow showing participant management interface and real-world school testing"
                width={1200}
                height={800}
                className="rounded-lg"
              />
            </div>

            <section className="space-y-8">
              <div>
                <h2 className={cn(typography.h2, "mb-4")}>Background</h2>
                <p className={typography.body}>
                  In fall 2020, Color Health was contracted by several public school districts to design and deploy a
                  pooled testing program to help K-12 students return to in-person learning safely.
                </p>
                <p className={cn(typography.body, "mt-4")}>
                  Pooled testing is when samples from multiple people are combined ("pooled") and tested together. If
                  the pool tests negative, everyone in the pool is negative. If it tests positive, all samples need to
                  be retested individually. This approach dramatically reduces testing costs and speeds up turnaround
                  times, making it an effective solution for schools with limited budgets.
                </p>
              </div>

              <div className="my-8">
                <ImageLightbox
                  src="/images/2-pooledtesting.webp"
                  alt="Diagram showing pooled testing process: multiple samples combined into one test, then if positive, retested individually"
                  width={1200}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </section>

            <section className="mt-24 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className={cn(typography.h2, "mb-4")}>Timeline: Unknown</h2>
                <p className={typography.body}>
                  The ambiguity of the pandemic meant that we would often identify potential solutions before we knew
                  whether or not customers would ultimately need them. Pooled testing was no different; a contract had
                  not yet been signed when we kicked off the project, so it was possible that it would be a dead-end. It
                  was also possible that we would sign a contract and need a functioning product with a week's notice.
                </p>
              </div>

              <div>
                <h2 className={cn(typography.h2, "mb-4")}>Users: Unknown</h2>
                <p className={cn(typography.body, "mb-4")}>
                  Without a contract signed, we did not know exactly what use cases or users pooled testing would need
                  to support.
                </p>
                <p className={typography.body}>
                  Designing for reopening workplaces would have different technical requirements and nuances than
                  designing for reopening K-12 schools.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className={cn(typography.h3, "mb-4")}>Assumption-based workflow</h3>
                  <p className={typography.body}>
                    Color's Onsite Tool supports the workflows for providers, clinicians, and other staff at testing
                    sites.
                  </p>
                  <p className={typography.body}>
                    To inform the digital pooled testing experience, I worked closely with the Commercial Team, the Lab
                    Team, and the Medical Affairs team to map a workflow for K-12 schools.
                  </p>
                </div>

                <div>
                  <h3 className={cn(typography.h3, "mb-4")}>Assumption-based digital model</h3>
                  <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                    <li>1 classroom = 1 pool</li>
                    <li>
                      The Onsite Tool would always be used on tablet and did not need to be mobile-responsive (Color
                      provided iPads to all test sites up until this point)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={cn(typography.h3, "mb-4")}>Assumption-based users</h3>
                  <ul className={cn(typography.body, "space-y-2 list-disc list-inside")}>
                    <li>Nurses have a clinical background and familiarity with complex clinical tools</li>
                    <li>
                      Nurses would receive training from Color (this was the model for all of Color's COVID-19 test
                      sites up until this point)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Iteration 1: Recycle Existing Product</h2>
              <p className={typography.body}>
                We only had one engineer on this project, and we might need to ship a functioning product with a week's
                notice. Therefore, we decided as a team to reuse as much of the existing experience as possible.
              </p>
              <p className={typography.body}>
                For K-12 schools, we operated under the assumption that 1 pool = 1 classroom.
              </p>
              <p className={typography.body}>
                Under this assumption, I adapted the logged in homepage to reflect a list of pools instead of a list of
                all patients.
              </p>

              <div className="mt-8 mb-8">
                <ImageLightbox
                  src="/images/3-pooled-testing.webp"
                  alt="Workflow diagram showing the roles of Principal and Nurse in pooled testing process from creating pools to notifying guardians"
                  width={1200}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <div className="mt-8">
                <ImageGallery
                  images={[
                    {
                      src: "/images/4.1-pooled-testing.png",
                      alt: "Pooled testing dashboard showing list of classroom pools with model annotation: 1 row = 1 classroom = 1 pool",
                    },
                    {
                      src: "/images/4.2-pooled-testing.png",
                      alt: "Member confirmation screen showing nurse adding students from class to the pool",
                    },
                    {
                      src: "/images/4.3-pooled-testing.png",
                      alt: "Sample collection screen showing nurse adding pool barcode information",
                    },
                  ]}
                />
              </div>

              <div className="bg-muted/30 p-4 sm:p-6 rounded-lg border border-border mt-16">
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
                <p className={typography.body}>
                  The Onsite Tool had to be usable without training, and it needed a flexible model for creating pools
                  of students.
                </p>

                <h4 className={cn(typography.h4, "mb-4 mt-6")}>New data structure</h4>
                <p className={cn(typography.body, "mb-2")}>
                  The original thinking that 1 pool = 1 classroom would not work in a school setting
                </p>
                <p className={typography.body}>
                  Students often moved between classrooms and schools within a district, so it would be difficult to
                  manage in the Admin Dashboard or on Color's backend
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Iteration 2: Search-first</h2>
              <p className={typography.body}>
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
              <p className={typography.body}>
                In the new workflow, each step of the pooled testing process is a focused screen with one clear action.
              </p>
            </section>

            <section className="mb-16">
              <div className="bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
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
              </div>

              <div className="mt-8">
                <ImageLightbox
                  src="/images/5-pooled-testing-start.jpg"
                  alt="Mobile interface showing the Start a new pool screen with barcode input"
                  className="w-full rounded-lg border border-border"
                />
                <p className={cn(typography.body, "mt-4 text-center text-muted-foreground")}>
                  In the new workflow, students would line up outside of a testing room. Inside the room, school staff
                  would use the Onsite Tool on their personal mobile phones.
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Negotiating timelines</h2>
              <p className={typography.body}>
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
              <p className={typography.body}>
                I initially attempted to include search, the patient list, and the list of participants in the pool in
                the mobile UI.
              </p>

              <div className="bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
                <h3 className={cn(typography.h3, "mb-4 mt-6")}>Feedback</h3>
                <p className={cn(typography.body, "mb-4")}>
                  When I asked for feedback from my team, they had an idea: the patient list was not usable, and we were
                  building a search-first experience, so why not remove the patient list?
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>What We Built</h2>
              <p className={typography.body}>
                At this point, we had a usable, mobile responsive solution for Pooled Testing that was validated by real
                users and could be feasibly built by our engineering in the new timeline. My team successfully designed
                and shipped a patient experience, a clinician experience in the Onsite Tool, and new analytics features
                for the Admin Dashboard.
              </p>
            </section>

            <section className="mb-16">
              <h2 className={cn(typography.h2, "mb-4")}>Real-world Feedback</h2>
              <p className={typography.body}>
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
              <p className={typography.body}>
                We quickly met technical, ambiguous testing needs in 2021 with a user-centered approach, and this
                approach also established design as a thought partner across Color. Through research and insights about
                real users and the context in which they work, we built an effective solution that also created a
                paradigm shift within Color.
              </p>
              <p className={typography.body}>
                Because the commercial team witnessed firsthand the value of an iterative design process and feedback
                from real users, we moved from an assumption-based model to a user-informed model as an organization.
              </p>
              <p className={typography.body}>
                The market shifted, and towards the end of 2021, vaccines were becoming available. Then, in 2022,
                vaccines and rapid tests became readily available, so the need for affordable lab testing diminished.
              </p>
            </section>
          </article>

          <div className="max-w-[1024px] mx-auto px-6 py-12 border-t border-border">
            <CaseStudyNav currentProjectId="k12-testing" />
          </div>
        </main>
      </div>
    </PasswordProtection>
  )
}

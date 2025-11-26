import { SiteHeader } from "@/components/site-header"
import { PasswordProtection } from "@/components/password-protection"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { typography } from "@/lib/typography"

export default function ResumePage() {
  return (
    <PasswordProtection>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />

        <main className="flex-1 w-full max-w-[800px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

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
                  • Responsible for 0 to 1 product design, including a suite of creator tools for students and a suite
                  of analytics tools for teachers and school administrators.
                </li>
                <li>
                  • Defined Lumi's design principles for responsible AI in education, shaping strategy from AI that
                  provides answers to students to AI that fosters critical thinking.
                </li>
                <li>
                  • Facilitated design sprints to drive strategic and tactical alignment across product, engineering,
                  and customer success.
                </li>
                <li>
                  • Prototyped and tested a Socratic questioning AI approach with teachers, enabling product pivot
                  validated by real classrooms.
                </li>
                <li>
                  • Established educator-centered design practices, running bi-weekly feedback sessions to ensure
                  accessibility and usability at scale.
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
                  • Led UX design for a multi-platform MVP, creating contractor-friendly workflows that scaled into a
                  full product within 12 months.
                </li>
                <li>• Facilitated design sprints to align roadmap and support successful acquisition.</li>
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
                  • Large Pelagics Research Center: Designed iOS MVP for global fish population tracking, optimizing
                  workflows for scientists in resource-limited conditions.
                </li>
                <li>
                  • dashboard.earth: Collaborated with nonprofits on community-based climate solutions, designing native
                  mobile experiences that promoted collective action.
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
                  • Designed COVID-19 testing workflows used at &gt;13,000 sites across the U.S., optimized for outdated
                  smartphones, low literacy, and multilingual contexts.
                </li>
                <li>
                  • Created a scalable, inclusive design system that reduced medical barriers across healthcare
                  offerings.
                </li>
                <li>
                  • Partnered with Genetic Counselors to redesign genetic testing result delivery, improving
                  accessibility for transgender patients.
                </li>
                <li>• Mentored junior designers and help scale the design team from 2 to 40.</li>
                <li>• Founded the Medical Equity Working Group to advance inclusive design practices.</li>
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
                  • Led design and research during pivot from dating to social app, focusing on inclusive features
                  (social feed, events, community tools) that boosted engagement.
                </li>
                <li>• Directed company-wide rebrand across product and marketing.</li>
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
    </PasswordProtection>
  )
}

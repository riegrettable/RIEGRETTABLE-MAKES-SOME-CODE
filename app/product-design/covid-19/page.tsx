"use client"
import { typography } from "@/lib/typography"
import { ImageLightbox } from "@/components/image-lightbox"
import { CaseStudyLayout } from "@/components/case-study-layout"

export default function ColorCovidCaseStudy() {
  return (
    <CaseStudyLayout
      title="Color: Designing COVID-19 testing solutions at scale"
      role="Senior Product Designer"
      timeline="2020-2022"
      team="Cross-functional: Product, Engineering, Clinical Operations"
      currentProjectId="covid-19"
    >
      {/* Introduction */}
      <section className="space-y-6">
        <p className={typography.body}>
          When COVID-19 hit, Color rapidly pivoted from genetic testing to become a critical piece of America's testing
          infrastructure. My role was leading the UX transformation of our entire genetic testing platform to meet
          urgent public health needs across multiple contexts: public health sites, corporate partnerships, K-12
          schools, and university programs.
        </p>

        <p className={typography.body}>
          Each deployment required understanding dramatically different user needs and constraints.
        </p>
      </section>

      {/* Core Work */}
      <section className="space-y-6">
        <h2 className={typography.h2}>Project 1: Public health diagnostics foundation</h2>

        <p className={typography.body}>
          <strong>Context:</strong> Partnering with Bay Area public health departments to serve diverse communities of
          essential workers
        </p>

        <p className={typography.body}>
          <strong>The challenge:</strong> Our users were primarily mobile-first, often had limited data bandwidth, spoke
          different languages, and needed an experience simple enough to use during a health crisis.
        </p>

        <p className={typography.body}>
          <strong>My approach:</strong> Through user research, I discovered that most people would register and receive
          results on their phones, often with limited data. I designed mobile-first experiences with localized content
          that respected different cultural contexts and language needs. The registration and results flow had to be
          simple enough for someone to complete while stressed about their health, yet comprehensive enough to ensure
          proper follow-up care.
        </p>

        <p className={typography.body}>
          <strong>Impact:</strong> This user-centered approach became the model for our diagnostics tools that scaled
          nationwide and later influenced vaccination programs.
        </p>

        <div className="mt-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-4 min-w-max sm:min-w-0 sm:grid sm:grid-cols-4">
            <ImageLightbox
              src="/images/kit-20activation-20mobile-20old.png"
              alt="COVID-19 test scheduling homepage with language selection and options to schedule for self or someone under 18"
              width={375}
              height={812}
              className="rounded-lg flex-shrink-0 w-[280px] sm:w-auto"
            />
            <ImageLightbox
              src="/images/kit-20activation-20mobile-20old-1.png"
              alt="COVID-19 test information page explaining what the test detects and instructions for positive results"
              width={375}
              height={812}
              className="rounded-lg flex-shrink-0 w-[280px] sm:w-auto"
            />
            <ImageLightbox
              src="/images/reg6.png"
              alt="Appointment location selection interface showing Embarcadero site with map, accessibility information, and booking option"
              width={375}
              height={812}
              className="rounded-lg flex-shrink-0 w-[280px] sm:w-auto"
            />
            <ImageLightbox
              src="/images/reg12.png"
              alt="Test results summary page showing patient information and negative SARS-CoV-2 test result"
              width={375}
              height={812}
              className="rounded-lg flex-shrink-0 w-[280px] sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Field Research: United Airlines */}
      <section className="space-y-6">
        <h2 className={typography.h2}>
          Project 2: Corporate partnerships,{" "}
          <a
            href="https://techcrunch.com/2020/09/24/united-airlines-is-making-covid-19-tests-available-to-passengers-powered-in-part-by-color/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            United Airlines pilot
          </a>
        </h2>

        <p className={typography.body}>
          <strong>Context:</strong> Supporting businesses with onsite testing programs, starting with United Airlines at
          SFO
        </p>

        <p className={typography.body}>
          <strong>The challenge:</strong> Wait times at our United Airlines testing site were unacceptably long,
          creating bottlenecks for airline employees and passengers.
        </p>

        <p className={typography.body}>
          <strong>My approach:</strong> Rather than guessing at solutions, I went onsite to watch clinicians work. I
          immediately saw the problem: scanning small, round test tube barcodes with large iPads required awkward
          one-handed positioning that slowed down the entire process. By bringing this user insight back to my team, we
          implemented external barcode scanners.
        </p>

        <p className={typography.body}>
          <strong>Impact:</strong> Dramatically improved throughput and made clinicians' jobs easier, proving the value
          of field observation.
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
        <h2 className={typography.h2}>Project 3: Pooled testing</h2>

        <p className={typography.body}>
          <strong>Context:</strong> Expanding affordable testing options for K-12 public schools with pooled testing
          programs to enable safe in-person learning
        </p>

        <p className={typography.body}>
          <strong>The challenge:</strong> Our adult-focused testing packages weren't accounting for the realities of
          testing children in school environments.
        </p>

        <p className={typography.body}>
          <strong>My approach:</strong> I traveled to Cincinnati Public Schools to observe the testing process
          firsthand, where I discovered something critical: kids drop things. A lot. While our corporate testing
          packages worked perfectly for office environments, children were dropping swabs during the collection process,
          leaving schools without enough supplies to test all students.
        </p>

        <p className={typography.body}>
          <strong>Impact:</strong> This direct observation led us to adjust our supply calculations specifically for
          school environments, ensuring consistent testing completion rates and uninterrupted school operations.
        </p>

        <div className="mt-8">
          <ImageLightbox
            src="/images/1-pooled-20testing.png"
            alt="Pooled testing workflow showing Color dashboard for adding participants to a testing pool (left) and healthcare worker administering a nasal swab test to a masked student in a K-12 school setting (right)"
            width={1920}
            height={1080}
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* University Ship-to-Home */}
      <section className="space-y-6">
        <h2 className={typography.h2}>
          Project 4:{" "}
          <a
            href="https://news.harvard.edu/gazette/story/2020/09/self-administered-covid-19-tests-to-replace-observed-testing/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            University ship-to-home programs
          </a>
        </h2>

        <p className={typography.body}>
          <strong>Context:</strong> Supporting universities with at-home testing programs for students returning to
          campus
        </p>

        <p className={typography.body}>
          <strong>The challenge:</strong> Students had to swab themselves, find the right type of FedEx dropbox (not all
          accept biohazards), and complete everything within a specific window before returning to campus. One mistake
          meant the sample would expire, and their return to campus would be delayed.
        </p>

        <p className={typography.body}>
          <strong>My approach:</strong> Working closely with engineering, I designed content and workflows that broke
          down this complex logistics challenge into clear, actionable steps that students could successfully follow
          under pressure.
        </p>

        <p className={typography.body}>
          <strong>Impact:</strong> Enabled thousands of students to safely return to campus by making a complex,
          time-sensitive process manageable.
        </p>

        <div className="mt-8">
          <ImageLightbox
            src="/images/1-usac.png"
            alt="Ship-to-home testing workflow showing a person using their phone to scan a QR code on testing kit instructions (left) alongside the mobile interface for kit activation with an 'Activate kit' button (right)"
            width={1920}
            height={1080}
            className="rounded-lg w-full"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className={typography.h2}>Impact and learnings</h2>

        <p className={typography.body}>
          This work taught me that truly user-centered design means going beyond personas and surveys. You must show up
          where your users are, watch them work, and understand their real constraints.
        </p>

        <p className={typography.body}>
          Whether it was essential workers using phones with limited data, clinicians struggling with awkward hardware,
          children dropping swabs, or students navigating complex logistics, every design decision started with deep
          user empathy.
        </p>

        <p className={typography.body}>
          The result was a testing infrastructure that served millions of Americans during our country's greatest public
          health challenge, proving that when you truly understand your users, you can design solutions that work at any
          scale.
        </p>
      </section>
    </CaseStudyLayout>
  )
}

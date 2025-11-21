"use client"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { ImageLightbox } from "@/components/image-lightbox"
import { ImageGallery } from "@/components/image-gallery"
import { CaseStudyLayout } from "@/components/case-study-layout"

export default function GenderAffirmingPage() {
  return (
    <CaseStudyLayout
      title="Color: Gender-Affirming Healthcare"
      role="Senior Product Designer"
      timeline="2020-2022"
      team="Cross-functional: Engineering, Medical Affairs, Scientific Affairs"
      currentProjectId="gender-affirming"
    >
      <article className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20 space-y-12">
        <section className="space-y-6">
          <h2 className={typography.h2}>Background</h2>
          <p className={cn(typography.body, "mt-4")}>
            Color is a data-driven health service powered by genetics. Color provides clinical care, so we are required
            to collect specific information about participants for medical purposes. One piece of information we are
            required to collect is an individual's sex assigned at birth.
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
              OR at the start of health history (participants can add their health history before they receive their
              kit)
            </li>
          </ul>

          <div className="mt-8">
            <ImageGallery
              images={[
                {
                  src: "/images/gender-affirming-kit-activation.webp",
                  alt: "Color kit activation screen showing the 'Set up your account' form where sex is collected during kit activation",
                },
                {
                  src: "/images/gender-affirming-results-report.webp",
                  alt: "Color genetic test report showing risk assessment charts and patient information, demonstrating how accurate reports are returned according to medical research",
                },
                {
                  src: "/images/gender-affirming-sex-question.webp",
                  alt: "Screen asking 'Are you female or male?' before participant adds their health history, showing two large circular icons for selecting sex",
                },
                {
                  src: "/images/gender-affirming-health-history.webp",
                  alt: "Cancer health history questionnaire showing how appropriate health history questions are asked to assess cancer risk based on sex assigned at birth",
                },
              ]}
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={typography.h2}>So what's the problem?</h2>
          <p className={cn(typography.body, "mt-4")}>
            If a user's self-reported sex does not match their sample's observed sex chromosome count, it triggers an
            investigation.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            There are a handful of reasons that explain a mismatch, one of which is when an individual's sex assigned at
            birth is different than their gender identity.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            This creates issues in reporting for these individuals, so Color returns an "Instant Report" that does not
            contain risk information or screening guidelines. Without risk information or screening guidelines, reports
            are virtually meaningless, and individuals in this situation do not have access to personal risk information
            and screening guidelines.
          </p>

          <div className="mt-8">
            <ImageLightbox
              src="/images/gender-affirming-issue.webp"
              alt="Color kit activation form showing the issue where participants add their gender identity instead of their sex assigned at birth, creating mismatches in reporting between observed chromosome count and sex"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={typography.h2}>Understanding the complexity</h2>
          <p className={cn(typography.body, "mt-4")}>
            I worked with cross-functional partners at Color to answer the following questions:
          </p>
          <ul className={cn(typography.body, "mt-6 space-y-4")}>
            <li>
              <strong>Medicine and research:</strong> How do we return accurate and actionable information? How do we
              work within the limitations around research for transgender and non-binary individuals?
            </li>
            <li>
              <strong>Language:</strong> How do we collect accurate information while being sensitive towards all users?
              What is the most up-to-date terminology?
            </li>
            <li>
              <strong>Data:</strong> How do we collect only what we need for accurate reporting?
            </li>
            <li>
              <strong>Engineering constraints:</strong> Reports are complex! How can we work within Color's existing
              system?
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={typography.h2}>How did we solve this?</h2>
          <p className={cn(typography.body, "mt-4")}>
            Improved content design – clarifying that we are asking for sex assigned at birth for quality control
            purposes – allowed us to address this problem without a massive (and unfeasible) engineering overhaul.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            By updating language (changing "sex" to "sex assigned at birth"), adding a new field for gender identity
            (which allows us to provide an experience across the rest of the site catered to gender non-conforming
            individuals), and working within our existing reports structure & note system, we were able to build and
            release this update in one week.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            These seemingly small changes have large implications for democratizing access to precision healthcare.
          </p>

          <div className="mt-8">
            <ImageGallery
              images={[
                {
                  src: "/images/solution-1-kit-activation.webp",
                  alt: "Kit activation form showing updated language changing from 'sex' to 'sex assigned at birth' with helpful tooltip explaining why this information is needed",
                },
                {
                  src: "/images/solution-2-gender-options.webp",
                  alt: "About you section showing the new gender identity field with inclusive options including Female, Male, Non-binary, Prefer to self-describe, and Prefer not to say",
                },
                {
                  src: "/images/solution-3-inclusive-modal.webp",
                  alt: "Modal explaining 'We are working on building an inclusive Color experience for everyone' to set expectations about report limitations",
                },
                {
                  src: "/images/solution-4-health-history.webp",
                  alt: "Health history start screen asking 'What sex were you assigned at birth?' with clear explanation and option to add more about gender",
                },
                {
                  src: "/images/solution-5-expanded-gender.webp",
                  alt: "Sex assigned at birth question with the 'Add more about your gender' section expanded showing the gender identity field",
                },
                {
                  src: "/images/solution-6-report-note.webp",
                  alt: "Genetic test results page with new note explaining 'This report is generated according to your sex assigned at birth' to share accurate risk and screening guidelines",
                },
              ]}
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={typography.h2}>Ongoing work</h2>
          <p className={cn(typography.body, "mt-4")}>
            As Color expanded into other health areas, including diagnostics and immunizations, reporting requirements
            began to shift.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            In collaboration with the Scientific and Medical Affairs teams, I designed a unified system for collecting
            sensitive information about "sex assigned at birth" that met the varying regulatory, clinical, legal, and
            contractual requirements of our many healthcare products. Most importantly, it helped participants feel seen
            and understood.
          </p>
          <p className={cn(typography.body, "mt-4")}>
            This content design system improved parity for transgender patients across all of Color's healthcare
            products. I also created internal documentation for teams across Color, as well as training materials for
            providers, clinicians, and other staff at Color's nationwide healthcare sites. This easy-to-follow system
            helped teams move faster while ensuring thoughtful care experiences for patients.
          </p>

          <div className="mt-8">
            <ImageLightbox
              src="/images/final-system-diagram.png"
              alt="Comprehensive content design system diagram showing the question structure on the left with explainer text for different use cases, and three mobile screens on the right demonstrating consistent implementation across Essential Care, COVID-19 Testing, and COVID-19 Immunization products"
              className="w-full rounded-lg"
            />
          </div>
        </section>
      </article>
    </CaseStudyLayout>
  )
}

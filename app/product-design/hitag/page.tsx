"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { CaseStudyLayout } from "@/components/case-study-layout"
import { PasswordProtection } from "@/components/password-protection"

export default function HiTagCaseStudy() {
  return (
    <PasswordProtection>
      <CaseStudyLayout
        title="HiTag: Global Fish Tracking"
        role="Product Designer"
        timeline="4 weeks"
        team="Cross-functional: 3 Marine Biologists, 2 Software Engineers"
        currentProjectId="hitag"
      >
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-16">
          <div className="space-y-4">
            <p className={cn(typography.h2, "text-muted-foreground")}>Under construction, check back soon.</p>
            <p className={typography.body}>In the meantime, view HiTag on the App Store.</p>
          </div>

          <Link
            href="https://tracking.fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            View on App Store
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </CaseStudyLayout>
    </PasswordProtection>
  )
}

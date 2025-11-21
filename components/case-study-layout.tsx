"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { typography } from "@/lib/typography"
import { CaseStudyNav } from "@/components/case-study-nav"
import { PasswordProtection } from "@/components/password-protection"
import { SiteHeader } from "@/components/site-header"
import type { ReactNode } from "react"

interface CaseStudyLayoutProps {
  title: string
  role: string
  timeline: string
  team: string
  currentProjectId: string
  children: ReactNode
}

export function CaseStudyLayout({ title, role, timeline, team, currentProjectId, children }: CaseStudyLayoutProps) {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />

        {/* Back Link */}
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
          <Link
            href="/product-design"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>

        {/* Header Section */}
        <section className="max-w-[1024px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className={typography.h1}>{title}</h1>

          <div className="mt-6 pt-6 border-t border-border">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground mb-1">Role</dt>
                <dd className="text-muted-foreground">{role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Timeline</dt>
                <dd className="text-muted-foreground">{timeline}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Team</dt>
                <dd className="text-muted-foreground">{team}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20 space-y-12">{children}</article>

        {/* Case Study Navigation */}
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20">
          <CaseStudyNav currentProjectId={currentProjectId} />
        </div>
      </div>
    </PasswordProtection>
  )
}

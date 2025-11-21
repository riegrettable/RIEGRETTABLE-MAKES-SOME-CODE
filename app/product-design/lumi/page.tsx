"use client"

import Link from "next/link"
import { ImageLightbox } from "@/components/image-lightbox"
import { ArrowLeft, Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { CaseStudyNav } from "@/components/case-study-nav"
import { useState, useRef } from "react"
import { PasswordProtection } from "@/components/password-protection"

export default function LumiCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border">
          <div className="max-w-[1024px] mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/about" className="text-base font-medium hover:opacity-60 transition-opacity">
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
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
          <Link
            href="/product-design"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>

        <section className="max-w-[1024px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className={typography.h1}>Lumi: Designing AI tools that support learning</h1>

          <div className="mt-6 pt-6 border-t border-border">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground mb-1">Role</dt>
                <dd className="text-muted-foreground">Lead Product Designer</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Timeline</dt>
                <dd className="text-muted-foreground">January 2025-Present (4 iterations)</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground mb-1">Team</dt>
                <dd className="text-muted-foreground">Cross-functional: Engineering, Customer Success, ML</dd>
              </div>
            </dl>
          </div>
        </section>

        <article className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20 space-y-12">
          <section className="space-y-6">
            <p className={typography.body}>
              When AI writing tools entered classrooms, they created a new problem: students were using AI to bypass
              learning entirely.
            </p>

            <p className={typography.body}>
              Lumi specifically was technically impressive, but educationally harmful. The first iteration of our
              product wrote entire documents for students instead of helping them learn to write.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <ImageLightbox
                src="/images/1-20-20original-20product-20experience.png"
                alt="Screenshot of Lumi's original product interface where a student asks 'Can you write it for me?' and Lumi responds by writing an entire character analysis document about Napoleon from Animal Farm. A pink callout highlights 'Lumi AI was originally able to write entire documents for students based on a simple request'"
                width={1400}
                height={900}
                className="rounded-lg"
              />
            </div>

            <div className="bg-muted/30 p-6 sm:p-8 rounded-lg border border-border">
              <h3 className={cn(typography.h3, "mb-3")}>The opportunity</h3>
              <p className={typography.body}>
                How might AI support learning, not replace learning, while still engaging students?
              </p>
            </div>
          </section>

          {/* My role */}
          <section className="space-y-6">
            <h2 className={typography.h2}>My role</h2>
            <p className={typography.body}>
              Led all research, product strategy, UX design, and implementation across four major iterations, from
              initial discovery and vision-setting through the current teacher customization platform.
            </p>
          </section>

          {/* Setting the North Star */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Setting the North Star: Lumi as a Socratic Teacher</h2>
            <p className={typography.body}>
              Through roundtables with 20+ teachers across 5 districts and analysis of classroom usage patterns, I
              partnered with our Customer Success team to establish a research-backed vision for the product.
            </p>
            <p className={typography.body}>
              We analyzed research from institutions like MIT Media Lab to align our approach with evidence-based
              teaching methods. The research was clear: AI tools that provide answers undermine learning, while those
              that scaffold thinking and prompt reflection support it.
            </p>

            <p className={typography.body}>
              This led us to our North Star: <strong>Lumi as a Socratic teaching partner</strong> that guides students
              to their own answers, not a shortcut to completed work. This vision became the foundation for every
              product decision as we rebuilt the experience from the ground up.
            </p>
          </section>

          {/* New Owl Teacher Illustration */}
          <div className="my-16">
            <ImageLightbox
              src="/images/socratic-20teacher-20image.png"
              alt="Image of a socratic owl asking the student a question."
              width={1200}
              height={800}
              className="rounded-lg"
              maxWidth="max-w-[400px] mx-auto"
            />
          </div>

          <section className="space-y-6">
            <h2 className={typography.h2}>My approach: Phased implementation with continuous user feedback</h2>
            <p className={typography.body}>
              I redesigned the product around educational scaffolding rather than content generation, rolling out
              changes iteratively based on real classroom feedback:
            </p>

            <div className="space-y-12">
              <div>
                <h3 className={cn(typography.h3, "mb-2")}>Phase 1: Constraining AI behavior</h3>
                <p className={typography.body}>
                  Shifted from open-ended document generation to inline suggestions students could accept or reject.
                </p>
                <div className="my-6 rounded-lg overflow-hidden">
                  <ImageLightbox
                    src="/images/2-20-20writing-20suggestions.png"
                    alt="Screenshot of Lumi interface showing character analysis notes for Napoleon from Animal Farm. A chat interface on the left shows conversation with Lumi, and a document editor on the right displays quotes and examples. A pink callout reads 'Students used multiple writing suggestions to write entire documents'"
                    width={1400}
                    height={900}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4 bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "Kids are using Lumi suggestions to write the entire document for them."
                  </p>
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "The hardest part about teaching is that I am spread too thin to coach all of my students, so lots
                    of them don't get the attention they need."
                  </p>
                  <p className={typography.body}>
                    <strong>Learning:</strong> Teachers revealed they weren't opposed to AI assistance - they
                    desperately wanted tools that could provide the individual coaching they couldn't offer every
                    student. But our current approach was replacing student thinking rather than supporting it.
                  </p>
                </div>
              </div>

              <div>
                <h3 className={cn(typography.h3, "mb-2")}>Phase 2: Feedback over generation</h3>
                <p className={typography.body}>
                  Removed inline suggestions and introduced a "Get feedback" button where Lumi responds to student work
                  in chat.
                </p>
                <div className="my-6 rounded-lg overflow-hidden">
                  <ImageLightbox
                    src="/images/3-20-20lumi-27s-20feedback.png"
                    alt="Screenshot of Lumi interface showing a chat conversation where a student asks 'Can you provide feedback on my document?' and Lumi responds with 'This is a great start! Here are ideas to consider:' followed by three numbered suggestions for analyzing Napoleon's character from Animal Farm. A pink callout reads 'Students can receive feedback from Lumi as they work, mirroring teacher behavior'"
                    width={1400}
                    height={900}
                    className="rounded-lg"
                  />
                </div>
                <div className="mb-4 flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg">
                  <span className="text-2xl">✅</span>
                  <p className={cn(typography.body, "text-green-900 dark:text-green-100")}>
                    <strong>Progress:</strong> Students were actually engaging with Lumi's questions rather than copying
                    answers, which was a major step toward AI that supports learning.
                  </p>
                </div>
                <div className="mt-4 bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "What if this is for a science class, and the teacher doesn't want the student spending time on
                    character analysis? How do we make sure Lumi talks about the right things?"
                  </p>
                  <p className={typography.body}>
                    <strong>Learning:</strong> Teachers loved the shift, but feedback was often too general or not
                    grade-appropriate. We needed teacher control over what Lumi discusses to ensure it aligns with
                    specific learning objectives.
                  </p>
                </div>
              </div>

              <div>
                <h3 className={cn(typography.h3, "mb-2")}>Phase 3: Teacher customization system</h3>
                <p className={typography.body}>
                  Built a project configuration interface where teachers define rubrics, standards, and lesson plans
                  that inform every AI interaction.
                </p>
                <div className="my-6 rounded-lg overflow-hidden">
                  <ImageLightbox
                    src="/images/4-20-20teacher-20project-20customization.png"
                    alt="Split screen showing Lumi's teacher project setup interface on left with 'New project' form including project name, learning goals, templates, and class selection, and student view on right showing Character Analysis Notes with pink callout 'Teachers can now add context to inform Lumi's feedback in the chat with students'"
                    width={1400}
                    height={800}
                    className="rounded-lg"
                  />
                </div>
                <div className="mb-4 flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg">
                  <span className="text-2xl">✅</span>
                  <p className={cn(typography.body, "text-green-900 dark:text-green-100")}>
                    <strong>Progress:</strong> Teachers could now customize feedback to align with their specific
                    curriculum and learning goals.
                  </p>
                </div>
                <div className="mt-4 bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "This seems like it would really help lift up my students who get stuck. I don't have time to work
                    with all of them one-on-one, and I don't have a teaching assistant this year, so this sort of thing
                    can help fill gaps for me."
                  </p>
                  <p className={typography.body}>
                    <strong>Learning:</strong> Contextualized feedback dramatically improved relevance and educational
                    value. Teachers saw Lumi as a teaching assistant that could provide individualized support at scale.
                  </p>
                </div>
              </div>

              <div>
                <h3 className={cn(typography.h3, "mb-2")}>Phase 4: Structured scaffolding</h3>
                <p className={typography.body}>
                  Designed a step-based writing process that breaks assignments into manageable parts, with
                  teacher-configured guidance at each stage. Added analytics so teachers can assess how students engage
                  with AI, not just their output.
                </p>
                <div className="my-6 rounded-lg overflow-hidden">
                  <ImageLightbox
                    src="/images/5-20-20structured-20scaffolding.png"
                    alt="Split screen showing comprehensive teacher project setup interface on left with project details, step types, objectives, and customization options, and student checklist view on right. Pink callouts highlight 'Teachers have full project customization capabilities' and 'Teacher customization informs AI-generated checklists to keep students on track with classroom goals'"
                    width={1400}
                    height={900}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-4 bg-muted/30 p-4 sm:p-6 rounded-lg border border-border">
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "This is awesome that I can 'train' Lumi the way I can tell GPT to do things. I spend less time now
                    reminding students what they need to be working on."
                  </p>
                  <p className={cn(typography.body, "mb-3 italic")}>
                    "I love it, but it's time-consuming to customize an entire project."
                  </p>
                  <p className={typography.body}>
                    <strong>Learning:</strong> Teachers love being in the drivers seat, but there is an opportunity for
                    an AI agent that makes project customization more efficient.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The outcome */}
          <section className="space-y-6">
            <h2 className={typography.h2}>Looking ahead</h2>
            <p className={typography.body}>
              This is ongoing, incremental work. Each phase brings us closer to a Socratic, always-available teacher
              that enables personalized learning at scale while keeping it engaging for students and leaving teachers in
              control.
            </p>
          </section>
        </article>

        {/* Case Study Navigation */}
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20">
          <CaseStudyNav currentProjectId="lumi" />
        </div>
      </div>
    </PasswordProtection>
  )
}

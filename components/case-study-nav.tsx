import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const projects = [
  { id: "lumi", title: "Lumi AI Learning Companion" },
  { id: "covid-19", title: "COVID-19 Response at Color Health" },
  { id: "k12-testing", title: "K-12 Pooled Testing Solutions" },
  { id: "gender-affirming", title: "Designing Gender-Affirming Experiences at Color Health" },
  { id: "hitag", title: "HiTag: Global Fish Tracking" },
  { id: "her", title: "HER Profile Redesign" },
]

interface CaseStudyNavProps {
  currentProjectId: string
}

export function CaseStudyNav({ currentProjectId }: CaseStudyNavProps) {
  const currentIndex = projects.findIndex((p) => p.id === currentProjectId)
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <nav className="border-t border-border pt-12 mt-16">
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        {/* Previous Project */}
        <div className="flex-1">
          {previousProject && (
            <Link
              href={`/product-design/${previousProject.id}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous: {previousProject.title}
            </Link>
          )}
        </div>

        {/* Next Project */}
        <div className="flex-1 text-right">
          {nextProject && (
            <Link
              href={`/product-design/${nextProject.id}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Next: {nextProject.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

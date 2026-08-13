import { ExperienceList } from '@/components/experience-list'

export default function HomePage() {
  return (
    <main className="mx-auto min-h-dvh max-w-3xl px-6 py-20 sm:py-28">
      <header>
        <p className="text-xs uppercase tracking-widest text-accent">
          Product Designer
        </p>
        <h1 className="mt-4 text-balance font-serif text-5xl leading-tight text-foreground sm:text-6xl">
          Designing 0&rarr;1 experiences for complex, high-stakes products.
        </h1>
        <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I lead product design for agentic experiences and build user research
          practices that help teams make sharper, faster decisions.
        </p>
      </header>

      <ExperienceList />

      <footer className="mt-20 border-t border-border pt-8 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} &middot; Built with Next.js.</p>
      </footer>
    </main>
  )
}

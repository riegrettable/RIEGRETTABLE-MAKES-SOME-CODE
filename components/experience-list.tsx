import Image from 'next/image'
import { experiences } from '@/lib/experience'

export function ExperienceList() {
  return (
    <section aria-labelledby="experience-heading" className="mt-20">
      <div className="mb-8 flex items-baseline justify-between border-b border-border pb-4">
        <h2
          id="experience-heading"
          className="font-serif text-2xl text-foreground"
        >
          Experience
        </h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Selected roles
        </span>
      </div>

      <ul className="flex flex-col">
        {experiences.map((item) => (
          <li
            key={`${item.company}-${item.role}`}
            className="group flex flex-col gap-4 border-b border-border py-8 sm:flex-row sm:gap-6"
          >
            <div className="shrink-0">
              {item.logo ? (
                <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl">
                  <Image
                    src={item.logo || '/placeholder.svg'}
                    alt={item.logoAlt ?? `${item.company} logo`}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted font-serif text-xl text-muted-foreground"
                >
                  {item.company.charAt(0)}
                </span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-lg font-medium text-foreground">
                  {item.company}
                </h3>
                <span aria-hidden="true" className="text-muted-foreground">
                  &middot;
                </span>
                <p className="text-lg text-accent">{item.role}</p>
                {item.period ? (
                  <span className="ml-auto text-sm text-muted-foreground">
                    {item.period}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

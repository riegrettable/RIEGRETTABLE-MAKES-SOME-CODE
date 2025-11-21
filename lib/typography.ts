/**
 * Consolidated font styles for consistent typography across the site
 * Use these className strings for consistent sizing, weights, and line-heights
 */

export const typography = {
  // Headings
  h1: "text-4xl sm:text-5xl font-bold leading-tight text-balance",
  h2: "text-2xl sm:text-3xl font-bold leading-tight text-balance",
  h3: "text-lg sm:text-xl font-bold leading-snug",
  h4: "text-base sm:text-lg font-bold",

  // Body text
  body: "text-base leading-relaxed",
  bodySm: "text-sm leading-relaxed",
  bodyLg: "text-base sm:text-lg leading-relaxed",

  // Captions & small text
  caption: "text-sm text-muted-foreground",
  captionXs: "text-xs text-muted-foreground",

  // Navigation & UI
  nav: "text-sm",
  label: "text-sm font-medium",

  // Links
  link: "underline hover:text-primary transition-colors",
  linkInline: "underline hover:text-foreground transition-colors",

  // Muted/secondary text
  muted: "text-muted-foreground",
  mutedSm: "text-sm text-muted-foreground",
} as const

/**
 * Combine typography styles easily
 * @example: cn(typography.h2, "text-primary")
 */
export type TypographyKey = keyof typeof typography

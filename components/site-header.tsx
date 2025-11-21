"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/#about") {
      return pathname === "/"
    }
    return pathname.startsWith("/product-design")
  }

  return (
    <header className="border-b border-border">
      <div className="max-w-[1024px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-base font-medium hover:opacity-60 transition-opacity">
              Katie Rieger
            </Link>
          </div>

          <nav className="hidden sm:flex gap-8">
            <Link
              href="/#about"
              className={cn(
                typography.nav,
                "hover:text-foreground/60 transition-colors relative",
                isActive("/#about") &&
                  "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground",
              )}
            >
              About
            </Link>
            <Link
              href="/product-design"
              className={cn(
                typography.nav,
                "hover:text-foreground/60 transition-colors relative",
                isActive("/product-design") &&
                  "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-foreground",
              )}
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
            <Link
              href="/#about"
              className={cn(
                typography.nav,
                "hover:text-primary transition-colors relative",
                isActive("/#about") && "border-b-2 border-foreground pb-1",
              )}
            >
              About
            </Link>
            <Link
              href="/product-design"
              className={cn(
                typography.nav,
                "hover:text-primary transition-colors relative",
                isActive("/product-design") && "border-b-2 border-foreground pb-1",
              )}
            >
              Work
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { typography } from "@/lib/typography"
import { cn } from "@/lib/utils"

export function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = sessionStorage.getItem("workAuth")
    if (auth === "rieger") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "rieger") {
      sessionStorage.setItem("workAuth", "rieger")
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  if (isLoading) {
    return null
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className={cn(typography.h2, "mb-6 text-center")}>Password Required</h1>
          <p className={cn(typography.body, "mb-8 text-center text-muted-foreground")}>
            This content is password protected. Please enter the password to view.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                autoFocus
              />
              {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

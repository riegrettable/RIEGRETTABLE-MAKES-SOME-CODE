import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Katie Rieger | Product Designer",
  description:
    "Strategic product designer bringing design to mission-driven teams in healthcare, climate, and education.",
  openGraph: {
    title: "Katie Rieger | Product Designer",
    description:
      "Strategic product designer bringing design to mission-driven teams in healthcare, climate, and education.",
    url: "https://katierieger.com",
    siteName: "Katie Rieger",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 1200,
        alt: "Katie Rieger - Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katie Rieger | Product Designer",
    description:
      "Strategic product designer bringing design to mission-driven teams in healthcare, climate, and education.",
    images: ["/og-image.webp"],
  },
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Polyfill for Iterator.prototype.toArray() - required for React 19.2.1
const iteratorPolyfill = `
(function() {
  try {
    var testMap = new Map();
    testMap.set('test', 1);
    var iter = testMap.values();
    if (iter && typeof iter.toArray !== 'function') {
      var proto = Object.getPrototypeOf(iter);
      if (proto) {
        proto.toArray = function() { return Array.from(this); };
      }
    }
  } catch(e) {}
})();
`

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
      <head>
        <Script
          id="iterator-polyfill"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: iteratorPolyfill }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

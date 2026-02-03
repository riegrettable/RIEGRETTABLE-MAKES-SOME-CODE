"use client"

import { SiteHeader } from "@/components/site-header"
import { ImageLightbox } from "@/components/image-lightbox"

interface ArtPiece {
  id: string
  title: string
  image: string
  width: number
  height: number
}

const artPieces: ArtPiece[] = [
  {
    id: "free-phil",
    title: "Free Phil",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/groundhog%20day-Wv5QHZI4XsafufEQr1viwF7zI3jC56.jpg",
    width: 1200,
    height: 1600,
  },
]

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="max-w-[1024px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-medium mb-12">Art</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artPieces.map((piece) => (
            <div key={piece.id} className="flex flex-col gap-2">
              <ImageLightbox
                src={piece.image}
                alt={piece.title}
                width={piece.width}
                height={piece.height}
                className="rounded-lg border border-border hover:border-foreground/30 transition-colors"
              />
              <h2 className="text-sm font-medium text-center">{piece.title}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

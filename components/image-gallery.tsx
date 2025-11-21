"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ImageLightbox } from "@/components/image-lightbox"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="space-y-4 bg-white p-6 rounded-lg">
      {/* Main Image with Navigation */}
      <div className="relative group">
        <ImageLightbox
          src={images[selectedIndex].src || "/placeholder.svg"}
          alt={images[selectedIndex].alt}
          className="w-full rounded-lg"
        />

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-background/90 px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageLightbox
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={cn(
              "w-full rounded-lg transition-all cursor-pointer",
              selectedIndex === index ? "ring-2 ring-primary opacity-100" : "opacity-60 hover:opacity-100",
            )}
            onClick={(e) => {
              e.preventDefault()
              setSelectedIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

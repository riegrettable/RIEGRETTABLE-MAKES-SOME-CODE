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
    <div className="space-y-4 bg-white p-4 sm:p-6 rounded-lg">
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
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-1.5 sm:p-2 rounded-full shadow-lg transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-1.5 sm:p-2 rounded-full shadow-lg transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-background/90 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <ImageLightbox
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={cn(
              "h-20 sm:h-32 w-auto flex-shrink-0 rounded-lg transition-all cursor-pointer",
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

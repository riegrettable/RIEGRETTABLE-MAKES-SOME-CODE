"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageLightboxProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  maxWidth?: string
  onClick?: (e: React.MouseEvent) => void
}

export function ImageLightbox({ src, alt, width = 1200, height = 800, className, maxWidth, onClick }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    link.download = alt || "image"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <button
        onClick={(e) => {
          if (onClick) {
            onClick(e)
          } else {
            setIsOpen(true)
          }
        }}
        className="cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary rounded-lg w-full"
        aria-label={`View ${alt} in full size`}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-auto", maxWidth, className)}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleDownload()
            }}
            className="absolute top-4 left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2"
            aria-label="Download image"
          >
            <Download className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ImageLightbox

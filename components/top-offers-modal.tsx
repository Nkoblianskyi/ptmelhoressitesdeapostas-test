"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log("[v0] TopOffersModal mounted")

    // Show modal on first visit
    const hasVisited = localStorage.getItem("hasVisitedBefore")
    console.log("[v0] hasVisited:", hasVisited)

    if (!hasVisited) {
      const timer = setTimeout(() => {
        console.log("[v0] Opening modal after 3 seconds")
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-600" />)
      }
    }

    return starElements
  }

  // Get only the first site
  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[450px] p-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-mercedes-teal overflow-hidden">
        <DialogHeader className="p-4 pb-3 bg-gradient-to-r from-mercedes-teal/20 to-transparent border-b border-mercedes-teal/30">
          <DialogTitle className="text-center text-lg md:text-xl font-bold bg-gradient-to-r from-mercedes-teal via-mercedes-teal-light to-mercedes-teal bg-clip-text text-transparent">
            Melhor Oferta de Apostas
          </DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-mercedes-teal/40 shadow-2xl shadow-mercedes-teal/20">
            {/* TOP Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 z-10 shadow-lg">
              #1 RECOMENDADO
            </div>

            {/* Logo Section */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-4 text-center border-b border-mercedes-teal/30">
              <div className="relative bg-black h-20 w-full max-w-[200px] mx-auto mb-3 mt-2 p-4 rounded-lg border border-gray-700">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
                <span className="font-bold text-lg text-mercedes-teal">{topSite.rating.toFixed(1)}</span>
                <span className="text-gray-400 text-sm">({topSite.reviews} avaliações)</span>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="p-4 text-center bg-gradient-to-br from-mercedes-teal/10 to-transparent border-b border-mercedes-teal/30">
              <div className="text-sm text-mercedes-teal uppercase font-bold mb-2 tracking-wide">BÓNUS EXCLUSIVO</div>
              <p className="font-bold text-white text-xl md:text-2xl leading-tight mb-3">{topSite.bonus}</p>
            </div>

            {/* CTA Button */}
            <div className="p-4 text-center">
              <a
                href={topSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-base font-bold rounded-lg text-center transition-all duration-200 mb-3 transform hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                OBTER BÓNUS AGORA
              </a>

              {/* Disclaimer */}
              <div className="text-center">
                <p className="text-xs text-gray-400 font-medium">+18 | T&Cs Aplicam-se | Jogue com Responsabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

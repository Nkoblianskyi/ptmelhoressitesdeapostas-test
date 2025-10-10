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


    const hasVisited = localStorage.getItem("hasVisitedBefore")


    if (!hasVisited) {
      const timer = setTimeout(() => {
      
        setIsOpen(true)
        localStorage.setItem("hasVisitedBefore", "true")
      }, 12000)

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
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-400" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[400px] sm:max-w-[450px] p-0 bg-gradient-to-br from-white via-portugal-sand/30 to-white border-2 border-portugal-gold overflow-hidden">
        <DialogHeader className="p-4 pb-3 bg-gradient-to-r from-portugal-gold/20 to-transparent border-b border-portugal-gold/30">
          <DialogTitle className="text-center text-lg md:text-xl font-bold bg-gradient-to-r from-portugal-gold via-portugal-orange to-portugal-gold bg-clip-text text-transparent">
            Melhor Oferta de Apostas
          </DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-portugal-sand/20 to-white border border-portugal-gold/40 shadow-2xl shadow-portugal-gold/20">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 z-10 shadow-lg">
              #1 RECOMENDADO
            </div>

            <div className="bg-gradient-to-br from-portugal-sand/30 to-white p-4 text-center border-b border-portugal-gold/30">
              <div className="relative bg-white h-20 w-full max-w-[200px] mx-auto mb-3 mt-2 p-4 rounded-lg border border-portugal-gold/20 shadow-sm">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
                <span className="font-bold text-lg text-portugal-gold">{topSite.rating.toFixed(1)}</span>
                <span className="text-gray-600 text-sm">({topSite.reviews} avaliações)</span>
              </div>
            </div>

            <div className="p-4 text-center bg-gradient-to-br from-portugal-gold/10 to-transparent border-b border-portugal-gold/30">
              <div className="text-sm text-portugal-orange uppercase font-bold mb-2 tracking-wide">BÓNUS EXCLUSIVO</div>
              <p className="font-bold text-gray-900 text-xl md:text-2xl leading-tight mb-3">{topSite.bonus}</p>
            </div>

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

              <div className="text-center">
                <p className="text-xs text-gray-600 font-medium">+18 | T&Cs Aplicam-se | Jogue com Responsabilidade</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

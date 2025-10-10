import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types"
import Link from "next/link"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-gray-600" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-gray-600" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  return (
    <section className="py-2 md:py-2">
      <div className="container mx-auto px-3 md:px-4 max-w-[1400px]">
        <div className="grid gap-2">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 4 && site.badges.length > 0
            const borderColor = isFirstPlace ? "border-green-500" : "border-mercedes-teal/40"
            const accentColor = isFirstPlace ? "green-500" : "mercedes-teal"
            const shadowColor = isFirstPlace ? "shadow-green-500/30" : "shadow-mercedes-teal/20"

            return (
              <div
                key={site.id}
                className={`relative overflow-hidden group ${
                  isFirstPlace
                    ? `bg-gradient-to-br from-mercedes-black via-mercedes-dark-grey/80 to-mercedes-black border-l-4 border-r-4 ${borderColor} shadow-2xl ${shadowColor} rounded-xl`
                    : `bg-gradient-to-r from-mercedes-dark-grey/90 via-mercedes-black to-mercedes-dark-grey/90 border-l-2 border-r-2 ${borderColor} rounded-lg shadow-lg hover:${shadowColor} transition-all duration-300`
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mercedes-teal/10 to-transparent transform -skew-x-12"></div>
                </div>

                {showBadge && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="relative">
                      <div className="bg-green-500 text-mercedes-black text-xs font-black px-4 py-2 uppercase tracking-wider shadow-xl clip-path-badge">
                        {site.badges[0]}
                      </div>
                    
                    </div>
                  </div>
                )}

                {/* Desktop & Tablet Layout */}
                <div className="hidden md:block">
                  <Link href={site.url} target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-[280px_1fr_240px_200px] items-center gap-0 p-6 relative">
                      <div className="relative">
                        <div
                          className={`flex items-center justify-center bg-gradient-to-br from-mercedes-black to-mercedes-dark-grey rounded-lg p-6 h-[140px] border-2 border-${accentColor}/30 relative overflow-hidden group-hover:border-${accentColor}/50 transition-colors`}
                        >
                          <div
                            className={`absolute top-0 right-0 w-12 h-12 bg-${accentColor}/20 transform rotate-45 translate-x-6 -translate-y-6`}
                          ></div>
                          <div className="relative h-20 w-full z-10">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-6 relative">
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-${accentColor}/50 to-transparent`}
                        ></div>
                        <p className={`text-${accentColor} text-xs font-black mb-2 uppercase tracking-widest`}>
                          BÓNUS BOAS-VINDAS
                        </p>
                        <h3 className="text-white text-2xl font-black leading-tight bg-gradient-to-r from-white via-mercedes-silver to-white bg-clip-text">
                          {site.bonus}
                        </h3>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-6 relative">
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-${accentColor}/50 to-transparent`}
                        ></div>
                        <p className={`text-${accentColor} text-xs font-black mb-2 uppercase tracking-widest`}>
                          PONTUAÇÃO
                        </p>
                        <div className="relative">
                          <div className="text-white text-5xl font-black mb-2 drop-shadow-[0_0_10px_rgba(0,210,190,0.3)]">
                            {site.rating.toFixed(1)}
                          </div>
                          <div className={`absolute -inset-2 bg-${accentColor}/10 blur-xl -z-10 rounded-full`}></div>
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-mercedes-light-grey text-xs font-semibold">
                          ({site.reviews.toLocaleString()} avaliações)
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-3 px-6 relative">
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-${accentColor}/50 to-transparent`}
                        ></div>
                        <button
                          className={`w-full bg-gradient-to-r ${isFirstPlace ? "from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-500" : "from-mercedes-teal via-mercedes-teal-light to-mercedes-teal hover:from-mercedes-teal-light hover:to-mercedes-teal"} transition-all duration-300 text-white font-black py-4 px-8 rounded-lg text-center uppercase tracking-wider transform hover:scale-105`}
                        >
                          Registar
                        </button>
                        <p
                          className={`text-${accentColor} font-bold text-sm hover:text-${accentColor === "green-500" ? "green-600" : "mercedes-teal-light"} transition-colors cursor-pointer uppercase tracking-wide`}
                        >
                          Visitar Site
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div
                    className={`relative border-t-2 border-${accentColor}/20 px-6 py-3 bg-gradient-to-r from-mercedes-black/80 via-mercedes-dark-grey/40 to-mercedes-black/80`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-${accentColor} to-transparent`}
                    ></div>
                    <p className="text-mercedes-light-grey text-xs leading-relaxed text-center">{site.terms}</p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <Link href={site.url} target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-2 gap-3 items-center mb-4">
                      <div className="flex justify-start mt-4">
                        <div
                          className={`p-4 relative rounded-lg bg-gradient-to-br from-mercedes-black to-mercedes-dark-grey border-2 border-${accentColor}/30 w-full overflow-hidden`}
                        >
                          <div
                            className={`absolute top-0 right-0 w-8 h-8 bg-${accentColor}/20 transform rotate-45 translate-x-4 -translate-y-4`}
                          ></div>
                          <div className="relative h-20 w-full z-10">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className={`text-xs text-${accentColor} uppercase font-black mb-1 tracking-wider`}>
                          BÓNUS
                        </div>
                        <div className="text-2xl font-black text-white leading-tight">{site.bonus}</div>
                      </div>
                    </div>

                    <div className={`border-t-2 border-${accentColor}/20 pt-2 relative`}>
                      <div
                        className={`absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-${accentColor} to-transparent`}
                      ></div>
                      <div className="grid grid-cols-3 items-center gap-2">
                        <div className="text-center mt-2">
                          <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                          <div className="text-[10px] text-mercedes-light-grey font-bold">({site.reviews})</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-white leading-none mb-2 drop-shadow-[0_0_8px_rgba(0,210,190,0.3)]">
                            {site.rating.toFixed(1)}
                          </div>
                          <div className={`text-[10px] text-${accentColor} font-black uppercase tracking-wider`}>
                            Score
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <button
                            className={`w-full bg-gradient-to-r ${isFirstPlace ? "from-green-500 to-green-400 hover:from-green-400 hover:to-green-500" : "from-mercedes-teal to-mercedes-teal-light hover:from-mercedes-teal-light hover:to-mercedes-teal"} transition-all text-white font-black py-4 px-4 rounded text-center text-xs uppercase`}
                          >
                            Registar
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={`border-t-2 border-${accentColor}/20 pt-3 mt-3 relative`}>
                      <div
                        className={`absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-${accentColor} to-transparent`}
                      ></div>
                      <p className="text-mercedes-light-grey text-[10px] leading-relaxed text-center">{site.terms}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

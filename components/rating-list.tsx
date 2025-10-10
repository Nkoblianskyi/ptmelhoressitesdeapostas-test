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
      <div className="container mx-auto max-w-[1250px]">
        <div className="grid gap-2">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 3 && site.badges.length > 0

            return (
              <div
                key={site.id}
                className={`relative overflow-hidden group ${
                  isFirstPlace
                    ? "bg-white border-l-4 border-r-4 border-green-500 shadow-2xl shadow-green-500/30 rounded-xl"
                    : "bg-white border-l-2 border-r-2 border-mclaren-orange/40 rounded-lg shadow-lg hover:shadow-mclaren-orange/20 transition-all duration-300"
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-mclaren-orange/10 to-transparent transform -skew-x-12"></div>
                </div>

                {showBadge && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="relative">
                      <div className="bg-mclaren-orange text-white text-xs font-black px-4 py-2 uppercase tracking-wider shadow-xl clip-path-badge">
                        {site.badges[0]}
                      </div>
                      <div className="absolute -bottom-1 left-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[8px] border-t-mclaren-orange/80"></div>
                    </div>
                  </div>
                )}

                {/* Desktop & Tablet Layout */}
                <div className="hidden md:block">
                  <Link href={site.url} target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-[280px_1fr_240px_200px] items-center gap-0 p-6 relative">
                      <div className="relative">
                        <div
                          className={`flex items-center justify-center bg-gradient-to-br bg-black rounded-lg p-6 h-[140px] border-2 relative overflow-hidden transition-colors ${
                            isFirstPlace
                              ? "border-green-500/30 group-hover:border-green-500/50"
                              : "border-mclaren-orange/30 group-hover:border-mclaren-orange/50"
                          }`}
                        >
                          <div
                            className={`absolute top-0 right-0 w-12 h-12 transform rotate-45 translate-x-6 -translate-y-6 ${
                              isFirstPlace ? "bg-green-500/20" : "bg-mclaren-orange/20"
                            }`}
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
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent to-transparent ${
                            isFirstPlace ? "via-green-500/50" : "via-mclaren-orange/50"
                          }`}
                        ></div>
                        <p
                          className={`text-xs font-black mb-2 uppercase tracking-widest ${
                            isFirstPlace ? "text-green-500" : "text-mclaren-orange"
                          }`}
                        >
                          BÓNUS BOAS-VINDAS
                        </p>
                        <h3 className="text-gray-900 text-2xl font-black leading-tight">{site.bonus}</h3>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-6 relative">
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent to-transparent ${
                            isFirstPlace ? "via-green-500/50" : "via-mclaren-orange/50"
                          }`}
                        ></div>
                        <p
                          className={`text-xs font-black mb-2 uppercase tracking-widest ${
                            isFirstPlace ? "text-green-500" : "text-mclaren-orange"
                          }`}
                        >
                          PONTUAÇÃO
                        </p>
                        <div className="relative">
                          <div className="text-gray-900 text-5xl font-black mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                            {site.rating.toFixed(1)}
                          </div>
                          <div
                            className={`absolute -inset-2 blur-xl -z-10 rounded-full ${
                              isFirstPlace ? "bg-green-500/10" : "bg-mclaren-orange/10"
                            }`}
                          ></div>
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-gray-600 text-xs font-semibold">
                          ({site.reviews.toLocaleString()} avaliações)
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-3 px-6 relative">
                        <div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent to-transparent ${
                            isFirstPlace ? "via-green-500/50" : "via-mclaren-orange/50"
                          }`}
                        ></div>
                        <button
                          className={`w-full transition-all duration-300 text-white font-black py-4 px-8 rounded-lg text-center uppercase tracking-wider transform hover:scale-105 ${
                            isFirstPlace
                              ? "bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:to-green-500"
                              : "bg-gradient-to-r from-mclaren-orange via-mclaren-gold to-mclaren-orange hover:from-mclaren-gold hover:to-mclaren-orange"
                          }`}
                        >
                          Registar
                        </button>
                        <p
                          className={`font-bold text-sm transition-colors cursor-pointer uppercase tracking-wide ${
                            isFirstPlace
                              ? "text-green-500 hover:text-green-600"
                              : "text-mclaren-orange hover:text-mclaren-gold"
                          }`}
                        >
                          Visitar Site
                        </p>
                      </div>
                    </div>
                  </Link>

                  <div
                    className={`relative px-6 py-3 bg-gradient-to-r from-gray-50/80 via-white/40 to-gray-50/80 ${
                      isFirstPlace ? "border-t-2 border-green-500/20" : "border-t-2 border-mclaren-orange/20"
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r to-transparent ${
                        isFirstPlace ? "from-green-500" : "from-mclaren-orange"
                      }`}
                    ></div>
                    <p className="text-gray-600 text-xs leading-relaxed text-center">{site.terms}</p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-4">
                  <Link href={site.url} target="_blank" rel="noopener noreferrer">
                    <div className="grid grid-cols-2 gap-3 items-center mb-4">
                      <div className="flex justify-start mt-4">
                        <div
                          className={`p-4 relative rounded-lg bg-gradient-to-br bg-black border-2 w-full overflow-hidden ${
                            isFirstPlace ? "border-green-500/30" : "border-mclaren-orange/30"
                          }`}
                        >
                          <div
                            className={`absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-4 -translate-y-4 ${
                              isFirstPlace ? "bg-green-500/20" : "bg-mclaren-orange/20"
                            }`}
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
                        <div
                          className={`text-xs uppercase font-black mb-1 tracking-wider ${
                            isFirstPlace ? "text-green-500" : "text-mclaren-orange"
                          }`}
                        >
                          BÓNUS
                        </div>
                        <div className="text-2xl font-black text-gray-900 leading-tight">{site.bonus}</div>
                      </div>
                    </div>

                    <div
                      className={`pt-2 relative ${
                        isFirstPlace ? "border-t-2 border-green-500/20" : "border-t-2 border-mclaren-orange/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r to-transparent ${
                          isFirstPlace ? "from-green-500" : "from-mclaren-orange"
                        }`}
                      ></div>
                      <div className="grid grid-cols-3 items-center gap-2">
                        <div className="text-center mt-2">
                          <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                          <div className="text-[10px] text-gray-600 font-bold">({site.reviews})</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-gray-900 leading-none mb-2 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]">
                            {site.rating.toFixed(1)}
                          </div>
                          <div
                            className={`text-[10px] font-black uppercase tracking-wider ${
                              isFirstPlace ? "text-green-500" : "text-mclaren-orange"
                            }`}
                          >
                            Score
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <button
                            className={`w-full transition-all duration-300 text-white font-black py-4 px-4 rounded text-center text-xs uppercase ${
                              isFirstPlace
                                ? "bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-500"
                                : "bg-gradient-to-r from-mclaren-orange to-mclaren-gold hover:from-mclaren-gold hover:to-mclaren-orange"
                            }`}
                          >
                            Registar
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`pt-3 mt-3 relative ${
                        isFirstPlace ? "border-t-2 border-green-500/20" : "border-t-2 border-mclaren-orange/20"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r to-transparent ${
                          isFirstPlace ? "from-green-500" : "from-mclaren-orange"
                        }`}
                      ></div>
                      <p className="text-gray-600 text-[10px] leading-relaxed text-center">{site.terms}</p>
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

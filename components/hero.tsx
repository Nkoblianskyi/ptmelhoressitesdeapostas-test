"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Shield, Smartphone, Award, CheckCircle } from "lucide-react"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative py-4 sm:py-6 md:py-8 overflow-hidden max-h-[280px] sm:max-h-[320px] md:max-h-[350px] pt-14 md:pt-18">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/stadium-background.png')] bg-cover bg-center" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-portugal-gold to-transparent" />

      <div className="container mx-auto sm:max-w-[1280px] relative z-10 px-2 sm:px-4">
        <div className="relative">
          <div className="bg-gradient-to-br from-white via-orange-50/80 to-amber-50/90 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-portugal-gold/30 shadow-2xl">
            <div className="text-center mb-2 sm:mb-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-1.5 leading-tight">
                <span className="block">
                  <span className="text-portugal-green">Melhores Sites </span>
                  <span className="text-portugal-red">de</span>
                </span>
                <span className="block bg-gradient-to-r from-portugal-gold via-portugal-orange to-portugal-gold bg-clip-text text-transparent">
                  Apostas em Portugal
                </span>
              </h1>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                <div className="h-px w-4 sm:w-8 bg-gradient-to-r from-transparent to-portugal-gold" />
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-700 font-medium">
                  Atualizado {new Date().toLocaleDateString("pt-PT", { month: "short", year: "numeric" })}
                </p>
                <div className="h-px w-4 sm:w-8 bg-gradient-to-l from-transparent to-portugal-gold" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 max-w-2xl mx-auto leading-snug">
                Rankings verificados. Compare bónus, odds e funcionalidades das casas de apostas legais.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="bg-white/90 border border-portugal-gold/30 rounded p-1.5 sm:p-2 text-center hover:border-portugal-gold/60 hover:bg-amber-50/50 transition-colors">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-portugal-gold" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-900">100% Legal</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 mt-0.5 hidden sm:block">
                  Licenciado
                </p>
              </div>

              <div className="bg-white/90 border border-portugal-gold/30 rounded p-1.5 sm:p-2 text-center hover:border-portugal-gold/60 hover:bg-amber-50/50 transition-colors">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-portugal-gold" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-900">Bónus Fáceis</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 mt-0.5 hidden sm:block">Simples</p>
              </div>

              <div className="bg-white/90 border border-portugal-gold/30 rounded p-1.5 sm:p-2 text-center hover:border-portugal-gold/60 hover:bg-amber-50/50 transition-colors hidden md:block">
                <Smartphone className="w-5 h-5 mx-auto mb-1 text-portugal-gold" />
                <p className="text-[10px] md:text-xs font-bold text-gray-900">Mobile Friendly</p>
                <p className="text-[8px] md:text-[9px] text-gray-600 mt-0.5">Otimizado</p>
              </div>

              <div className="bg-white/90 border border-portugal-gold/30 rounded p-1.5 sm:p-2 text-center hover:border-portugal-gold/60 hover:bg-amber-50/50 transition-colors hidden md:block">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-portugal-gold" />
                <p className="text-[10px] md:text-xs font-bold text-gray-900">Sites Confiáveis</p>
                <p className="text-[8px] md:text-[9px] text-gray-600 mt-0.5">Verificados</p>
              </div>
            </div>

            <div className="text-center pt-1.5 sm:pt-2 border-t border-portugal-gold/20">
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-700">
                +18 •{" "}
                <button
                  onClick={openModal}
                  className="text-portugal-gold hover:text-portugal-orange font-medium underline decoration-portugal-gold/30 hover:decoration-portugal-gold transition-colors"
                >
                  Info Publicitária
                </button>
              </p>
            </div>
          </div>

          <div className="absolute -top-1 -left-1 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-portugal-gold/30 rounded-tl-lg" />
          <div className="absolute -bottom-1 -right-1 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-portugal-gold/30 rounded-br-lg" />
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

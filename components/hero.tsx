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

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mercedes-teal to-transparent" />

      <div className="container mx-auto sm:max-w-[1280px] relative z-10 px-2 sm:px-4">
        <div className="relative">
          <div className="bg-gradient-to-br from-mercedes-dark-grey/95 to-mercedes-black/98 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-mercedes-teal/30 shadow-2xl">
            <div className="text-center mb-2 sm:mb-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-1.5 leading-tight">
                <span className="block">
                  <span className="text-green-600">Melhores Sites </span>
                  <span className="text-red-600">de</span>
                </span>
                <span className="block bg-gradient-to-r from-mercedes-teal via-mercedes-teal-light to-mercedes-teal bg-clip-text text-transparent">
                  Apostas em Portugal
                </span>
              </h1>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                <div className="h-px w-4 sm:w-8 bg-gradient-to-r from-transparent to-mercedes-teal" />
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-mercedes-silver font-medium">
                  Atualizado {new Date().toLocaleDateString("pt-PT", { month: "short", year: "numeric" })}
                </p>
                <div className="h-px w-4 sm:w-8 bg-gradient-to-l from-transparent to-mercedes-teal" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm text-mercedes-light-grey max-w-2xl mx-auto leading-snug">
                Rankings verificados. Compare bónus, odds e funcionalidades das casas de apostas legais.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="bg-mercedes-black/60 border border-mercedes-teal/20 rounded p-1.5 sm:p-2 text-center hover:border-mercedes-teal/50 transition-colors">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-mercedes-teal" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white">100% Legal</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-mercedes-silver mt-0.5 hidden sm:block">
                  Licenciado
                </p>
              </div>

              <div className="bg-mercedes-black/60 border border-mercedes-teal/20 rounded p-1.5 sm:p-2 text-center hover:border-mercedes-teal/50 transition-colors">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-mercedes-teal" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white">Bónus Fáceis</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-mercedes-silver mt-0.5 hidden sm:block">
                  Simples
                </p>
              </div>

              <div className="bg-mercedes-black/60 border border-mercedes-teal/20 rounded p-1.5 sm:p-2 text-center hover:border-mercedes-teal/50 transition-colors hidden md:block">
                <Smartphone className="w-5 h-5 mx-auto mb-1 text-mercedes-teal" />
                <p className="text-[10px] md:text-xs font-bold text-white">Mobile Friendly</p>
                <p className="text-[8px] md:text-[9px] text-mercedes-silver mt-0.5">Otimizado</p>
              </div>

              <div className="bg-mercedes-black/60 border border-mercedes-teal/20 rounded p-1.5 sm:p-2 text-center hover:border-mercedes-teal/50 transition-colors hidden md:block">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-mercedes-teal" />
                <p className="text-[10px] md:text-xs font-bold text-white">Sites Confiáveis</p>
                <p className="text-[8px] md:text-[9px] text-mercedes-silver mt-0.5">Verificados</p>
              </div>
            </div>

            <div className="text-center pt-1.5 sm:pt-2 border-t border-mercedes-teal/20">
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-mercedes-silver">
                +18 •{" "}
                <button
                  onClick={openModal}
                  className="text-mercedes-teal hover:text-mercedes-teal-light font-medium underline decoration-mercedes-teal/30 hover:decoration-mercedes-teal transition-colors"
                >
                  Info Publicitária
                </button>
              </p>
            </div>
          </div>

          <div className="absolute -top-1 -left-1 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-mercedes-teal/30 rounded-tl-lg" />
          <div className="absolute -bottom-1 -right-1 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-mercedes-teal/30 rounded-br-lg" />
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

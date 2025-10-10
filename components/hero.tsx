"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import { Smartphone, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative overflow-hidden min-h-[280px] md:min-h-0 md:max-h-[350px] pt-14 md:pt-18 max-w-[1400px] mx-auto">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/bg-2.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60 md:bg-white/90" />
      </div>

      <div className="container mx-auto sm:max-w-[1280px] relative z-10 ">
        <div className="relative">
          <div className="bg-transparent md:bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 md:border md:border-mclaren-orange/30 md:shadow-2xl">
            <div className="text-center mb-2 sm:mb-3">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-1 sm:mb-1.5 leading-tight">
                <span className="block">
                  <span className="text-white md:text-mclaren-green">Melhores Sites </span>
                  <span className="text-white md:text-mclaren-red">de</span>
                </span>
                <span className="block text-mclaren-orange md:bg-gradient-to-r md:from-mclaren-orange md:via-mclaren-gold md:to-mclaren-orange md:bg-clip-text md:text-transparent">
                  Apostas em Portugal
                </span>
              </h1>

              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                <div className="h-px w-4 sm:w-8 bg-gradient-to-r from-transparent to-mclaren-orange" />
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-white md:text-gray-700 font-medium">
                  Atualizado {new Date().toLocaleDateString("pt-PT", { month: "short", year: "numeric" })}
                </p>
                <div className="h-px w-4 sm:w-8 bg-gradient-to-l from-transparent to-mclaren-orange" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm text-white md:text-gray-700 max-w-2xl mx-auto leading-snug">
                Rankings verificados. Compare bónus, odds e funcionalidades das casas de apostas legais.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="md:bg-white/90 border border-mclaren-orange rounded p-1.5 sm:p-2 text-center hover:border-mclaren-orange hover:bg-orange-50/50 transition-colors">
                <Image src="/flag.png" alt="Legal" width={20} height={20} className="mx-auto mb-0.5 sm:mb-1" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white md:text-gray-900">100% Legal</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 mt-0.5 hidden sm:block">
                  Licenciado
                </p>
              </div>

              <div className="md:bg-white/90 border border-mclaren-orange rounded p-1.5 sm:p-2 text-center hover:border-mclaren-orange hover:bg-orange-50/50 transition-colors">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mx-auto mb-0.5 sm:mb-1 text-mclaren-orange" />
                <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white md:text-gray-900">Bónus Fáceis</p>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-600 mt-0.5 hidden sm:block">Simples</p>
              </div>

              <div className="bg-white border border-mclaren-orange/30 rounded p-1.5 sm:p-2 text-center hover:border-mclaren-orange hover:bg-orange-50/50 transition-colors hidden md:block">
                <Smartphone className="w-5 h-5 mx-auto mb-1 text-mclaren-orange" />
                <p className="text-[10px] md:text-xs font-bold text-gray-900">Mobile Friendly</p>
                <p className="text-[8px] md:text-[9px] text-gray-600 mt-0.5">Otimizado</p>
              </div>

              <div className="bg-white border border-mclaren-orange/30 rounded p-1.5 sm:p-2 text-center hover:border-mclaren-orange hover:bg-orange-50/50 transition-colors hidden md:block">
                <CheckCircle className="w-5 h-5 mx-auto mb-1 text-mclaren-orange" />
                <p className="text-[10px] md:text-xs font-bold text-gray-900">Sites Confiáveis</p>
                <p className="text-[8px] md:text-[9px] text-gray-600 mt-0.5">Verificados</p>
              </div>
            </div>

            <div className="text-center pt-1.5 sm:pt-2 md:border-t md:border-mclaren-orange/20">
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-white md:text-gray-700">
                +18 •{" "}
                <button
                  onClick={openModal}
                  className="text-mclaren-orange hover:text-mclaren-gold font-medium underline decoration-mclaren-orange/30 hover:decoration-mclaren-orange transition-colors"
                >
                  Info Publicitária
                </button>
              </p>
            </div>
          </div>

          <div className="absolute -top-1 -left-1 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-mclaren-orange/30 rounded-tl-lg hidden md:block" />
          <div className="absolute -bottom-1 -right-1 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-mclaren-orange/30 rounded-br-lg hidden md:block" />
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

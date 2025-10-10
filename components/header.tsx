"use client"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b-4 border-mclaren-orange shadow-sm">
      <div className="w-full max-w-[1150px] mx-auto px-4">
        <div className="flex items-center justify-center gap-4 h-14 md:h-20">
          <Logo size="sm" className="md:text-base lg:text-lg" />
          <p className="text-xl font-bold text-gray-900">Pt Melhores Sites de Apostas</p>
        </div>
      </div>
    </header>
  )
}

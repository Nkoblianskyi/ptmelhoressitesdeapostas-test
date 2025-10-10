"use client"

import { bettingSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { CompareBonusTypes } from "@/components/compare-bonus-types"
import { SportsVariety } from "@/components/sports-variety"
import { TopBettingSitesPortugal } from "@/components/top-betting-sites-portugal"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-mercedes-black md:bg-cover md:bg-center md:bg-fixed md:bg-no-repeat md:bg-[url('/152c1baa5698d83ca6faefadbd68946d.jpg')]">
      <Header />
      <main className="relative z-10 max-w-[1250px] mx-auto">
        <Hero />
        <RatingList sites={bettingSites} />
        <TopBettingSitesPortugal />
        <SportsVariety />
        <RatingMethodology />
        <CompareBonusTypes />
        <FaqSection />
      </main>
      <Footer />
      <TopOffersModal sites={bettingSites} />
      <CookieBanner />
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PT Melhores Sites de Apostas - Melhores Sites de Apostas Online em Portugal",
  description:
    "Descubra os melhores sites de apostas desportivas em Portugal. Análises especializadas, bónus exclusivos e classificações confiáveis para futebol, ténis, basquetebol e mais desportos.",
  keywords: [
    "apostas desportivas Portugal",
    "sites de apostas Portugal",
    "casas de apostas Portugal",
    "apostas online Portugal",
    "melhores sites apostas",
    "apostas futebol Portugal",
    "apostas ténis",
    "apostas basquetebol",
    "bónus apostas desportivas",
    "apostas ao vivo",
    "odds apostas",
    "apostas legais Portugal",
    "betting sites Portugal",
    "apostas desportivas online",
    "comparação casas apostas",
    "apostas Formula 1",
    "apostas MMA",
    "apostas hóquei",
    "apostas dardos",
    "apostas bilhar",
    "top sites apostas Portugal",
    "ranking casas apostas",
    "apostas seguras Portugal",
    "apostas responsáveis",
  ],
  authors: [{ name: "PT Melhores Sites de Apostas" }],
  openGraph: {
    title: "PT Melhores Sites de Apostas - Melhores Sites de Apostas Online em Portugal",
    description:
      "Análises especializadas dos melhores sites de apostas desportivas em Portugal. Bónus exclusivos e classificações confiáveis.",
    url: "https://ptmelhoressitesdeapostas.com",
    siteName: "PT Melhores Sites de Apostas",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

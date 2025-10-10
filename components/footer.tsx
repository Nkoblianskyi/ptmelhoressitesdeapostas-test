import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-mercedes-black text-white py-8 md:py-12 border-t-2 border-mercedes-teal/40">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex flex-col justify-around md:flex-row gap-6 md:gap-12 mb-8 md:mb-12">
          <div className="">
            <div className="flex flex-row justify-start gap-2 items-center">
              <Logo className="mb-4" size="lg" />
              <p className="text-2xl font-semibold mb-2"> Pt Melhores Sites de Apostas</p>
            </div>
            <p className="text-mercedes-light-grey text-xs md:text-sm mb-4">
              PortugalApostasDesportivas.com fornece comparações independentes de plataformas de apostas desportivas.
              Podemos receber comissões de marcas em destaque, o que pode influenciar as classificações.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-mercedes-light-grey text-sm">
              <li>
                <Link href="/about" className="hover:text-mercedes-teal transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-mercedes-teal transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-mercedes-teal transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 md:mb-12">
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Parceiros Jogo Responsável</h3>
          <p className="text-mercedes-light-grey text-xs md:text-sm mb-4">
            Trabalhamos com organizações de confiança para promover o jogo responsável e fornecer apoio quando
            necessário.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
            <div className="bg-mercedes-dark-grey p-2 md:p-3 rounded-lg flex flex-col items-center border border-mercedes-teal/30">
              <Link href="https://www.srij.turismodeportugal.pt/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                  <Image src="/srij-new.svg" alt="SRIJ" fill className="object-contain" />
                </div>
              </Link>
              <span className="text-[8px] md:text-xs text-center text-mercedes-silver">Regulação Jogos</span>
            </div>

            <div className="bg-mercedes-dark-grey p-2 md:p-3 rounded-lg flex flex-col items-center border border-mercedes-teal/30">
              <Link href="https://www.sicad.pt/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                  <Image src="/icad.png" alt="ICAD" fill className="object-contain" />
                </div>
              </Link>
              <span className="text-[8px] md:text-xs text-center text-mercedes-silver">Comportamentos Aditivos</span>
            </div>

            <div className="bg-mercedes-dark-grey p-2 md:p-3 rounded-lg flex flex-col items-center border border-mercedes-teal/30">
              <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
              <span className="text-[8px] md:text-xs text-center text-mercedes-silver">Apoio Confidencial</span>
            </div>

            <div className="bg-mercedes-dark-grey p-2 md:p-3 rounded-lg flex flex-col items-center border border-mercedes-teal/30">
              <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <span className="text-[8px] md:text-xs text-center text-mercedes-silver">Consciencialização</span>
            </div>

            <div className="bg-mercedes-dark-grey p-2 md:p-3 rounded-lg flex flex-col items-center border border-mercedes-teal/30">
              <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[32px] mb-1 md:mb-2">
                  <Image src="/jogo-responsavel-new.png" alt="Jogo Responsável" fill className="object-contain" />
                </div>
              </Link>
              <span className="text-[8px] md:text-xs text-center text-mercedes-silver">Jogo Responsável PT</span>
            </div>
          </div>
        </div>

        <div className="border-t border-mercedes-teal/30 pt-4 md:pt-6 text-center text-xs md:text-sm text-mercedes-light-grey">
          <p>© {new Date().getFullYear()} portugalapostasdesportivas.com. Todos os direitos reservados.</p>
          <p className="mt-2">
            Jogue com responsabilidade. Apenas +18. Se precisa de ajuda:{" "}
            <Link href="tel:213950213" className="text-mercedes-teal hover:text-mercedes-teal-light transition-colors">
              213 950 213
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

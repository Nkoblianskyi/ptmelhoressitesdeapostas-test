export function RatingMethodology() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            hsl(var(--mclaren-orange)) 10px,
            hsl(var(--mclaren-orange)) 11px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-mclaren-orange to-transparent mx-auto mb-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black tracking-tight">
            Apostas Desportivas
            <span className="block text-mclaren-orange mt-2">em Portugal</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubra as melhores casas de apostas para todos os tipos de desportos. Comparamos odds, mercados e
            funcionalidades para ajudá-lo a encontrar a plataforma ideal para as suas apostas desportivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Futebol</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Apostas em Primeira Liga, Champions League, Premier League e todos os principais campeonatos mundiais.
              Mercados ao vivo, apostas combinadas e odds competitivas para cada jogo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Ténis</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cobertura completa de Grand Slams, ATP e WTA. Apostas em sets, games e pontos específicos. Streaming ao
              vivo disponível nas melhores plataformas para acompanhar cada match point.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Basquetebol</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              NBA, Euroliga e campeonatos nacionais. Apostas em handicaps, totais de pontos e desempenho de jogadores.
              Estatísticas detalhadas para apostas informadas em cada partida.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Desportos Motorizados</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fórmula 1, MotoGP e outras competições automobilísticas. Apostas em vencedores de corridas, pole positions
              e pódios. Mercados especiais para qualificações e campeonatos completos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Desportos de Combate</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              UFC, boxe e outras artes marciais. Apostas em métodos de vitória, rounds e lutas completas. Análises
              detalhadas de lutadores para maximizar as suas oportunidades de ganho.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-200 to-white border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-mclaren-orange/10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Outros Desportos</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Hóquei no gelo, voleibol, andebol, ciclismo e muito mais. Cobertura abrangente de eventos internacionais e
              nacionais. Odds competitivas em todos os mercados disponíveis.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/95 via-orange-50/95 to-white/95 border-2 border-mclaren-orange/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-mclaren-orange/10">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-1 bg-mclaren-orange" />
              <h3 className="text-2xl md:text-3xl font-bold text-black">Sistema de Pontuação</h3>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              O nosso sistema de avaliação analisa cada plataforma através de múltiplos critérios objetivos. Cada casa
              de apostas é testada e pontuada numa escala de 0 a 10, considerando a experiência real dos apostadores
              portugueses e a qualidade dos serviços oferecidos.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="bg-white/40 border-l-4 border-mclaren-orange rounded-r-xl p-6 hover:bg-white/60 transition-colors">
              <h4 className="text-lg font-bold text-mclaren-orange mb-3">Variedade de Mercados</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Avaliamos a amplitude de desportos disponíveis, desde futebol e ténis até desportos de nicho. Analisamos
                o número de ligas cobertas, tipos de apostas oferecidas e mercados especiais para cada modalidade
                desportiva.
              </p>
            </div>

            <div className="bg-white/40 border-l-4 border-mclaren-orange rounded-r-xl p-6 hover:bg-white/60 transition-colors">
              <h4 className="text-lg font-bold text-mclaren-orange mb-3">Competitividade das Odds</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Comparamos as odds oferecidas em eventos principais e secundários. Plataformas com margens mais baixas e
                odds mais generosas recebem pontuações superiores, garantindo melhor valor para os apostadores.
              </p>
            </div>

            <div className="bg-white/40 border-l-4 border-mclaren-orange rounded-r-xl p-6 hover:bg-white/60 transition-colors">
              <h4 className="text-lg font-bold text-mclaren-orange mb-3">Funcionalidades e Usabilidade</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Testamos apostas ao vivo, cash out, streaming de eventos, aplicações móveis e velocidade da plataforma.
                A facilidade de navegação e a qualidade da experiência do utilizador são fatores determinantes na
                avaliação.
              </p>
            </div>

            <div className="bg-white/40 border-l-4 border-mclaren-orange rounded-r-xl p-6 hover:bg-white/60 transition-colors">
              <h4 className="text-lg font-bold text-mclaren-orange mb-3">Bónus e Promoções</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Analisamos os bónus de boas-vindas, promoções regulares e programas de fidelidade. Consideramos os
                requisitos de apostas, prazos de validade e a transparência dos termos e condições apresentados.
              </p>
            </div>

            <div className="bg-white/40 border-l-4 border-mclaren-orange rounded-r-xl p-6 hover:bg-white/60 transition-colors">
              <h4 className="text-lg font-bold text-mclaren-orange mb-3">Segurança e Suporte</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Verificamos o licenciamento legal em Portugal, métodos de pagamento seguros, velocidade de levantamentos
                e qualidade do apoio ao cliente. A proteção de dados e o jogo responsável são prioridades na nossa
                avaliação.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-mclaren-orange/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-mclaren-orange/10 to-white border-2 border-mclaren-orange rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-mclaren-orange mb-2">9.0 - 10.0</div>
                <div className="text-base font-semibold text-black mb-3">Excelência</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Plataformas premium com serviço superior em todas as categorias
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-200/50 to-white border-2 border-gray-500 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">7.5 - 8.9</div>
                <div className="text-base font-semibold text-black mb-3">Muito Bom</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Casas de apostas confiáveis com excelente qualidade geral
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-200/30 to-white border-2 border-gray-600 rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">6.0 - 7.4</div>
                <div className="text-base font-semibold text-black mb-3">Bom</div>
                <div className="text-xs text-gray-600 leading-relaxed">
                  Opções sólidas para apostadores com necessidades específicas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

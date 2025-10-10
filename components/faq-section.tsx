export function FaqSection() {
  return (
    <section className="py-12 md:py-20 bg-white  relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
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
            Perguntas Frequentes
            <span className="block text-mclaren-orange mt-2">sobre os Melhores Sites de Apostas</span>
          </h2>
          <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Respostas às perguntas mais populares sobre as{" "}
            <span className="text-mclaren-orange font-semibold">melhores plataformas de betting</span> e sites de
            apostas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">Como escolher o melhor site de apostas?</h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Ao escolher um site de betting top, preste atenção à presença de licença, reputação da plataforma, odds,
              velocidade de levantamentos, bónus e qualidade do suporte. Todos os melhores sites de apostas no nosso
              ranking atendem aos mais altos padrões de qualidade e segurança.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Os melhores sites de betting da sua lista são seguros?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Sim! Cada site de apostas top no nosso ranking possui uma licença oficial de reguladores internacionais
              (Curaçao, Malta, UK). Verificamos a segurança, confiabilidade e reputação de cada plataforma de betting
              top antes de adicionar à lista.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Que bónus oferecem os melhores sites de apostas?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              As melhores plataformas de betting oferecem bónus de boas-vindas até 100% no primeiro depósito, apostas
              grátis, cashback, bónus em apostas múltiplas e programas de fidelidade. Cada site de apostas top tem
              promoções únicas para jogadores novos e regulares.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Qual a rapidez dos levantamentos nos melhores sites de betting?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Nos melhores sites de apostas, os levantamentos demoram de alguns minutos a 24 horas, dependendo do método
              de pagamento. Carteiras eletrónicas (Skrill, Neteller) são as mais rápidas, transferências bancárias podem
              demorar 1-3 dias. Todos os melhores sites de betting garantem levantamentos rápidos.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Existem aplicações móveis nos melhores sites de apostas?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Sim! Todas as melhores plataformas de betting têm aplicações móveis para iOS e Android, bem como versões
              móveis adaptativas dos sites. Os melhores sites de apostas garantem acesso conveniente às apostas a partir
              de qualquer dispositivo.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Que tipos de apostas estão disponíveis nos melhores sites de betting?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Os melhores sites de apostas oferecem apostas simples, múltiplas, sistemas, apostas ao vivo, apostas de
              longo prazo e ofertas especiais. As melhores plataformas de betting têm centenas de opções de apostas para
              cada evento.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Com que frequência é atualizado o ranking dos melhores sites de apostas?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Atualizamos o nosso ranking das melhores plataformas de betting mensalmente. Monitorizamos constantemente
              as mudanças nos melhores sites de apostas: novos bónus, alterações nas odds, atualizações de
              funcionalidades. A nossa lista está sempre atualizada!
            </p>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-gray-50 border border-mclaren-orange/30 rounded-xl p-6 hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-mclaren-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-4 h-4 border-2 border-mclaren-orange rounded-full" />
              </div>
              <h3 className="text-lg font-bold text-mclaren-orange">
                Posso confiar nas suas análises dos melhores sites de betting?
              </h3>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed pl-11">
              Absolutamente! Testamos pessoalmente cada site de apostas top, fazemos depósitos, apostas e levantamentos.
              As nossas análises das melhores plataformas de betting baseiam-se em experiência real, não em materiais
              publicitários. Honestidade e transparência são os nossos principais princípios.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-mclaren-orange/5 via-white to-mclaren-orange/5 border-2 border-mclaren-orange/40 rounded-2xl p-8 md:p-10 backdrop-blur-sm text-center">
          <div className="h-1 w-20 bg-mclaren-orange mx-auto mb-6" />
          <p className="text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Não encontrou resposta à sua pergunta sobre os{" "}
            <strong className="text-black">melhores sites de apostas</strong> ou{" "}
            <strong className="text-black">melhores plataformas de betting</strong>? Consulte as análises detalhadas de
            cada site no nosso ranking ou contacte-nos para obter informações adicionais sobre os melhores sites de
            apostas!
          </p>
        </div>
      </div>
    </section>
  )
}

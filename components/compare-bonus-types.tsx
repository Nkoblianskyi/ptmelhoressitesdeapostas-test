export function CompareBonusTypes() {
  return (
    <section className="py-12 md:py-20 bg-white  relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            135deg,
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
            Compare Tipos de
            <span className="block text-mclaren-orange mt-2">Bónus</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="group bg-gradient-to-br from-gray-100 to-white border border-mclaren-orange/30 rounded-xl overflow-hidden hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20 hover:-translate-y-1">
            <div className="bg-mclaren-orange/10 p-6 border-b border-mclaren-orange/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-mclaren-orange/20 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-mclaren-orange rounded" />
                </div>
                <h3 className="text-xl font-bold text-mclaren-orange">Apostas Grátis</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                Receba apostas grátis após fazer uma aposta qualificativa. Use estas apostas grátis para apostar sem
                arriscar o seu próprio dinheiro. Os ganhos geralmente excluem a participação.
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-white border border-mclaren-orange/30 rounded-xl overflow-hidden hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20 hover:-translate-y-1">
            <div className="bg-mclaren-orange/10 p-6 border-b border-mclaren-orange/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-mclaren-orange/20 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-mclaren-orange rounded" />
                </div>
                <h3 className="text-xl font-bold text-mclaren-orange">Bónus de Depósito</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                As casas de apostas igualam uma percentagem do seu primeiro depósito como fundos de bónus. Estes
                normalmente vêm com requisitos de apostas antes de poder levantar.
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-100 to-white border border-mclaren-orange/30 rounded-xl overflow-hidden hover:border-mclaren-orange transition-all duration-300 hover:shadow-lg hover:shadow-mclaren-orange/20 hover:-translate-y-1">
            <div className="bg-mclaren-orange/10 p-6 border-b border-mclaren-orange/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-mclaren-orange/20 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-mclaren-orange rounded" />
                </div>
                <h3 className="text-xl font-bold text-mclaren-orange">Sem Depósito</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                Receba fundos de bónus ou apostas grátis apenas por se registar, sem necessidade de depósito. Estes
                geralmente têm termos mais rigorosos e valores mais baixos, mas são livres de risco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

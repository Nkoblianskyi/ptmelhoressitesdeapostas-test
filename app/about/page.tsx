import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white pt-14 md:pt-18">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre Nós</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-mclaren-orange mb-4">
              ptmelhoressitesdeapostas.com
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              O seu guia de confiança para as melhores experiências de apostas desportivas em Portugal
            </p>
          </div>

          <div className="space-y-10">
            <section className="bg-white rounded-lg p-8 shadow-sm border border-mclaren-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Nossa Missão</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Na ptmelhoressitesdeapostas.com, a nossa missão é fornecer aos apostadores portugueses informações
                precisas e atualizadas sobre os melhores sites de apostas desportivas disponíveis no mercado nacional.
                Acreditamos na transparência, honestidade e no jogo responsável como pilares fundamentais da nossa
                atividade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Somos uma equipa de especialistas portugueses apaixonados pelo desporto e pelas apostas, dedicados a
                ajudar os nossos utilizadores a tomar decisões informadas e seguras no mundo das apostas desportivas.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-mclaren-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Análises Independentes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todas as nossas análises são conduzidas de forma independente pela nossa equipa de especialistas em
                apostas desportivas. Testamos minuciosamente cada plataforma para garantir que fornecemos informações
                precisas sobre a experiência do utilizador, bónus, métodos de pagamento e atendimento ao cliente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A nossa equipa tem anos de experiência no mercado português de apostas e conhece profundamente as
                necessidades e preferências dos apostadores nacionais.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-mclaren-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Nossa Metodologia de Classificação</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Levamos as nossas classificações muito a sério. A nossa equipa utiliza um sistema de avaliação
                abrangente para garantir que apenas os melhores sites de apostas chegam ao topo da nossa lista. Eis como
                avaliamos e selecionamos os sites de apostas para as nossas classificações:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">Licenciamento e Segurança</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Apenas listamos sites de apostas devidamente licenciados pelo SRIJ (Serviço de Regulação e Inspeção
                    de Jogos) ou outras autoridades respeitáveis. Verificamos encriptação SSL, medidas de proteção de
                    dados e protocolos de segurança gerais.
                  </p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">Ofertas de Bónus e Promoções</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Avaliamos bónus de boas-vindas, promoções contínuas e programas de fidelidade. A nossa equipa lê as
                    letras pequenas para avaliar requisitos de apostas, limites de tempo e outros termos para garantir
                    que são justos e alcançáveis.
                  </p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">Experiência do Utilizador</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Testamos o website e aplicações móveis quanto à facilidade de uso, navegação, velocidades de
                    carregamento e design geral. Um bom site de apostas deve ser intuitivo e acessível tanto para
                    principiantes como para apostadores experientes.
                  </p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">Mercados de Apostas e Odds</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Comparamos a gama de desportos e eventos cobertos, bem como a variedade de opções de apostas
                    disponíveis. Também analisamos a competitividade das odds em diferentes mercados para garantir que
                    obtém bom valor.
                  </p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">
                    Métodos de Pagamento e Levantamentos
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Verificamos a variedade de opções de depósito e levantamento, tempos de processamento, taxas e
                    limites. Os melhores sites de apostas oferecem múltiplos métodos de pagamento convenientes e
                    levantamentos rápidos.
                  </p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-lg border border-mclaren-orange/30">
                  <h4 className="text-lg font-semibold mb-3 text-mclaren-orange">Apoio ao Cliente</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Testamos a capacidade de resposta, conhecimento e utilidade das equipas de apoio ao cliente.
                    Valorizamos sites de apostas que oferecem múltiplos canais de contacto (chat ao vivo, email,
                    telefone) e disponibilidade 24/7.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-orange-50/30 rounded-lg p-8 shadow-sm border border-mclaren-orange/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">O Nosso Sistema de Pontuação</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cada site de apostas recebe uma pontuação de 10 baseada na nossa avaliação abrangente. A pontuação final
                é uma média ponderada de todos os critérios, com segurança e experiência do utilizador a receberem a
                maior prioridade. Apenas sites com pontuação superior a 8.0 chegam à nossa lista recomendada.
              </p>
              <p className="text-mclaren-orange font-semibold text-lg">
                Padrão de Excelência: Apenas os melhores sites fazem parte da nossa seleção
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-mclaren-orange/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Divulgação de Afiliação</h3>
              <p className="text-gray-700 leading-relaxed">
                A ptmelhoressitesdeapostas.com é financiada através de parcerias de afiliação com operadores de apostas.
                Quando se regista através dos nossos links, podemos receber uma comissão. Isto ajuda-nos a manter o
                nosso site e continuar a fornecer informações gratuitas aos nossos utilizadores. No entanto, isto não
                influencia as nossas análises ou classificações. Priorizamos sempre a precisão e os interesses dos
                utilizadores.
              </p>
            </section>

            <section className="bg-red-50 border border-red-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Jogo Responsável</h3>
              <p className="text-gray-700 leading-relaxed">
                Defendemos fortemente o jogo responsável. As apostas devem ser divertidas e não uma forma de ganhar
                dinheiro. Encorajamos os nossos utilizadores a estabelecer limites, nunca perseguir perdas e procurar
                ajuda se o jogo se tornar problemático.
              </p>
            </section>

            <section className="bg-orange-50/30 rounded-lg p-8 shadow-sm border border-mclaren-orange/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Nossa Equipa</h3>
              <p className="text-gray-700 leading-relaxed">
                A nossa equipa é composta por entusiastas de apostas experientes, especialistas da indústria e analistas
                profissionais portugueses. Cada membro traz conhecimentos únicos para garantir que as nossas análises
                são abrangentes e precisas. Combinamos anos de conhecimento da indústria com uma paixão por ajudar os
                utilizadores a encontrar as melhores experiências de apostas.
              </p>
            </section>

            <section className="bg-orange-50/30 rounded-lg p-8 shadow-sm border border-mclaren-orange/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contacte-nos</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tem questões ou sugestões? Adoraríamos ouvir de si. Contacte a nossa equipa em{" "}
                <a
                  href="mailto:info@ptmelhoressitesdeapostas.com"
                  className="text-mclaren-orange hover:text-mclaren-gold font-semibold underline"
                >
                  info@ptmelhoressitesdeapostas.com
                </a>
              </p>
              <p className="text-gray-700 font-semibold">Resposta garantida em 24 horas</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

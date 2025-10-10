import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 pt-14 md:pt-18">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
            <p className="text-sm text-gray-600">Última atualização: 27 de Janeiro de 2025</p>
          </div>

          <div className="space-y-10">
            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">O que são Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Os cookies são pequenos ficheiros de texto que são colocados no seu computador ou dispositivo móvel
                quando visita um website. São amplamente utilizados para fazer os websites funcionarem de forma mais
                eficiente e fornecer informações aos proprietários do site. Os cookies melhoram a experiência do
                utilizador ao lembrar as suas preferências e ativar certas funcionalidades.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Usamos Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O ptmelhoressitesdeapostas.com usa cookies por várias razões, incluindo para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fazer o nosso website funcionar como esperaria</li>
                <li>Lembrar as suas definições durante e entre visitas</li>
                <li>Melhorar a velocidade/segurança do site</li>
                <li>Permitir que partilhe páginas com redes sociais como o Facebook</li>
                <li>Melhorar continuamente o nosso website para si</li>
                <li>Tornar o nosso marketing mais eficiente</li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de Cookies que Usamos</h2>
              <p className="text-gray-700 leading-relaxed mb-6">Usamos os seguintes tipos de cookies:</p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold mb-2 text-mclaren-gold">Cookies Essenciais</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies são necessários para o website funcionar adequadamente. Permitem funcionalidades
                    principais como segurança, gestão de rede e acesso à conta. Pode desativar estes cookies alterando
                    as definições do seu navegador, mas isto pode afetar como o website funciona.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold mb-2 text-mclaren-orange">Cookies de Desempenho</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies ajudam-nos a entender como os visitantes interagem com o nosso website recolhendo e
                    reportando informações anonimamente. Permitem-nos reconhecer e contar o número de visitantes e ver
                    como os visitantes se movem pelo nosso website quando o estão a usar.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold mb-2 text-mclaren-gold">Cookies de Funcionalidade</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies permitem ao website fornecer funcionalidade melhorada e personalização. Podem ser
                    definidos por nós ou por fornecedores terceiros cujos serviços adicionámos às nossas páginas.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold mb-2 text-mclaren-orange">Cookies de Segmentação</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Estes cookies registam a sua visita ao nosso website, as páginas que visitou e os links que seguiu.
                    Usaremos esta informação para tornar o nosso website e a publicidade exibida nele mais relevante
                    para os seus interesses.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Em alguns casos especiais, também usamos cookies fornecidos por terceiros de confiança. A seguinte
                secção detalha quais cookies de terceiros pode encontrar através deste site:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis na
                  web para nos ajudar a entender como usa o site e formas de melhorarmos a sua experiência.
                </li>
                <li>
                  Também usamos botões de redes sociais e/ou plug-ins neste site que lhe permitem conectar-se com a sua
                  rede social de várias formas. Para que funcionem, os sites de redes sociais definirão cookies através
                  do nosso site que podem ser usados para melhorar o seu perfil no site deles ou contribuir para os
                  dados que detêm.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gerir Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A maioria dos navegadores web permite algum controlo da maioria dos cookies através das definições do
                navegador. Para saber mais sobre cookies, incluindo como ver que cookies foram definidos, visite
                www.aboutcookies.org ou www.allaboutcookies.org.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Para optar por não ser rastreado pelo Google Analytics em todos os websites, visite
                https://tools.google.com/dlpage/gaoptout.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Alterações à Nossa Política de Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar a nossa Política de Cookies de tempos a tempos. Notificá-lo-emos de quaisquer
                alterações publicando a nova Política de Cookies nesta página e atualizando a data "Última atualização"
                no topo desta política.
              </p>
            </section>

            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 shadow-sm border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacte-nos</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre a nossa Política de Cookies, contacte-nos em:{" "}
                <a
                  href="mailto:privacidade@ptmelhoressitesdeapostas.com"
                  className="text-mclaren-gold hover:text-mclaren-orange font-semibold underline"
                >
                  privacidade@ptmelhoressitesdeapostas.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

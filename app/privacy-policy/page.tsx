import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 pt-14 md:pt-18">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
            <p className="text-sm text-gray-600">Última atualização: 27 de Janeiro de 2025</p>
          </div>

          <div className="space-y-10">
            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introdução</h2>
              <p className="text-gray-700 leading-relaxed">
                No ptmelhoressitesdeapostas.com, respeitamos a sua privacidade e estamos comprometidos em proteger os
                seus dados pessoais. Esta política de privacidade informá-lo-á sobre como cuidamos dos seus dados
                pessoais quando visita o nosso website e dir-lhe-á sobre os seus direitos de privacidade e como a lei o
                protege.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Os Dados que Recolhemos Sobre Si</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos recolher, usar, armazenar e transferir diferentes tipos de dados pessoais sobre si, que
                agrupámos da seguinte forma:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Dados de Identidade incluem primeiro nome, apelido, nome de utilizador ou identificador similar.
                </li>
                <li>Dados de Contacto incluem endereço de email e números de telefone.</li>
                <li>
                  Dados Técnicos incluem endereço de protocolo de internet (IP), os seus dados de login, tipo e versão
                  do navegador, definição de fuso horário e localização, tipos e versões de plug-ins do navegador,
                  sistema operativo e plataforma, e outras tecnologias nos dispositivos que usa para aceder a este
                  website.
                </li>
                <li>Dados de Uso incluem informações sobre como usa o nosso website, produtos e serviços.</li>
                <li>
                  Dados de Marketing e Comunicações incluem as suas preferências em receber marketing de nós e dos
                  nossos terceiros e as suas preferências de comunicação.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Usamos os Seus Dados Pessoais</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Só usaremos os seus dados pessoais quando a lei nos permitir. Mais comummente, usaremos os seus dados
                pessoais nas seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Onde precisamos de executar o contrato que estamos prestes a celebrar ou celebrámos consigo.</li>
                <li>
                  Onde é necessário para os nossos interesses legítimos e os seus interesses e direitos fundamentais não
                  se sobrepõem a esses interesses.
                </li>
                <li>Onde precisamos de cumprir uma obrigação legal.</li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propósitos para os Quais Usaremos os Seus Dados Pessoais
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Definimos abaixo uma descrição de todas as formas como planeamos usar os seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Para o registar como um novo cliente</li>
                <li>Para gerir a nossa relação consigo</li>
                <li>Para permitir que participe num sorteio, competição ou complete um inquérito</li>
                <li>Para administrar e proteger o nosso negócio e este website</li>
                <li>Para entregar conteúdo relevante do website e anúncios para si</li>
                <li>
                  Para usar análise de dados para melhorar o nosso website, produtos/serviços, marketing, relações com
                  clientes e experiências
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Pode definir o seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando
                os websites definem ou acedem a cookies. Se desativar ou recusar cookies, note que algumas partes deste
                website podem tornar-se inacessíveis ou não funcionar adequadamente. Para mais informações sobre os
                cookies que usamos, consulte a nossa Política de Cookies.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Segurança de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementámos medidas de segurança apropriadas para prevenir que os seus dados pessoais sejam
                acidentalmente perdidos, usados ou acedidos de forma não autorizada, alterados ou divulgados. Além
                disso, limitamos o acesso aos seus dados pessoais àqueles funcionários, agentes, contratados e outros
                terceiros que têm uma necessidade comercial de saber.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Só reteremos os seus dados pessoais pelo tempo razoavelmente necessário para cumprir os propósitos para
                os quais os recolhemos, incluindo para os propósitos de satisfazer quaisquer requisitos legais,
                regulamentares, fiscais, contabilísticos ou de relatório.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Os Seus Direitos Legais</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sob certas circunstâncias, tem direitos sob as leis de proteção de dados em relação aos seus dados
                pessoais, incluindo o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Solicitar acesso aos seus dados pessoais</li>
                <li>Solicitar correção dos seus dados pessoais</li>
                <li>Solicitar eliminação dos seus dados pessoais</li>
                <li>Objetar ao processamento dos seus dados pessoais</li>
                <li>Solicitar restrição do processamento dos seus dados pessoais</li>
                <li>Solicitar transferência dos seus dados pessoais</li>
                <li>Direito de retirar consentimento</li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links de Terceiros</h2>
              <p className="text-gray-700 leading-relaxed">
                Este website pode incluir links para websites de terceiros, plug-ins e aplicações. Clicar nesses links
                ou ativar essas conexões pode permitir que terceiros recolham ou partilhem dados sobre si. Não
                controlamos estes websites de terceiros e não somos responsáveis pelas suas declarações de privacidade.
              </p>
            </section>

            <section className="bg-white rounded-lg p-8 shadow-sm border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Alterações à Política de Privacidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar a nossa política de privacidade de tempos a tempos. Notificá-lo-emos de quaisquer
                alterações publicando a nova política de privacidade nesta página e atualizando a data "Última
                atualização" no topo desta política de privacidade.
              </p>
            </section>

            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 shadow-sm border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contacte-nos</h2>
              <p className="text-gray-700 leading-relaxed">
                Se tiver questões sobre esta política de privacidade ou as nossas práticas de privacidade, contacte-nos
                em:{" "}
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

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const Termos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 section-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep to-wine-medium" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              Termos de Uso e Aviso Legal
            </h1>
            <p className="text-primary-foreground/80">
              Última atualização: Janeiro de 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Important notice */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Aviso Importante</h3>
                <p className="text-muted-foreground text-sm">
                  Este site tem caráter exclusivamente informativo. As informações 
                  aqui apresentadas não constituem aconselhamento jurídico e não 
                  devem ser utilizadas como única fonte para decisões legais.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  1. Sobre os Serviços
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Lins Advogados é um escritório de advocacia regularmente inscrito 
                  na Ordem dos Advogados do Brasil (OAB), especializado em Direito 
                  Previdenciário e outras áreas do Direito. Os serviços são prestados 
                  mediante contrato específico, após análise individualizada de cada caso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  2. Não Garantia de Resultados
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Cada caso é único.</strong> Os 
                  resultados obtidos em processos anteriores não garantem êxito em 
                  novos casos. O sucesso de uma demanda jurídica depende de diversos 
                  fatores, incluindo documentação, provas, legislação vigente e 
                  entendimento dos tribunais.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Não prometemos nem garantimos resultados específicos. Nosso compromisso 
                  é oferecer análise técnica competente, estratégia adequada e 
                  acompanhamento profissional em todas as etapas do seu processo.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  3. Prazos e Processos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os prazos mencionados em nosso site ou comunicações são estimativas 
                  baseadas em experiências anteriores. Prazos reais podem variar de 
                  acordo com a complexidade do caso, trâmites do INSS, varas judiciais 
                  e outros fatores fora de nosso controle.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  4. Confidencialidade
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todas as informações compartilhadas conosco são tratadas com sigilo 
                  profissional, conforme previsto no Código de Ética da OAB e na 
                  legislação aplicável. O sigilo advocatício protege você e suas 
                  informações em todas as circunstâncias.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  5. Honorários
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Os honorários advocatícios são definidos em contrato específico, 
                  após análise do caso. Os valores variam conforme a complexidade 
                  da demanda, forma de atuação e outros fatores. Não há cobrança 
                  de valores antes da formalização do contrato de prestação de serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  6. Propriedade Intelectual
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo deste site, incluindo textos, imagens, logotipos 
                  e design, é de propriedade da Lins Advogados e está protegido 
                  por direitos autorais. É proibida a reprodução sem autorização prévia.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  7. Alterações nos Termos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de atualizar estes termos a qualquer momento. 
                  Recomendamos a leitura periódica desta página.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  8. Contato
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Em caso de dúvidas sobre estes termos, entre em contato pelo 
                  e-mail: contato@linsadvogados.com.br
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Termos;

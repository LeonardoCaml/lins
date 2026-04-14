import { motion } from "framer-motion";

const Privacidade = () => {
  return (
    <>
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
              Política de Privacidade
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
            className="max-w-3xl mx-auto prose prose-lg"
          >
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  1. Introdução
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A Lins Advogados está comprometida com a proteção da sua privacidade 
                  e dos seus dados pessoais. Esta Política de Privacidade descreve como 
                  coletamos, usamos, armazenamos e protegemos suas informações, em 
                  conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  2. Dados Coletados
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos coletar os seguintes dados pessoais:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Nome completo</li>
                  <li>Número de telefone e WhatsApp</li>
                  <li>Endereço de e-mail</li>
                  <li>Cidade e estado de residência</li>
                  <li>Informações sobre seu caso jurídico</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  3. Finalidade do Tratamento
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Seus dados são utilizados para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Entrar em contato sobre sua solicitação</li>
                  <li>Prestar serviços advocatícios</li>
                  <li>Enviar informações relevantes sobre seu caso</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  4. Compartilhamento de Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não compartilhamos seus dados pessoais com terceiros, exceto quando 
                  necessário para a prestação dos serviços jurídicos (como órgãos 
                  públicos, tribunais ou o INSS) ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  5. Segurança dos Dados
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adotamos medidas técnicas e organizacionais adequadas para proteger 
                  seus dados contra acesso não autorizado, alteração, divulgação ou 
                  destruição. O sigilo profissional da advocacia também protege 
                  todas as informações que nos são confiadas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  6. Seus Direitos
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Confirmar a existência de tratamento de seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar o consentimento dado</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-serif font-bold text-foreground mb-4">
                  7. Contato
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco pelo e-mail: contato@linsadvogados.com.br
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacidade;

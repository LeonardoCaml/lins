import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  Heart,
  Users,
  Gavel,
  Building,
  Shield,
  CheckCircle,
} from "lucide-react";
import WaIcon from "@/components/ui/WaIcon";

const WHATSAPP_LINK =
  "https://wa.me/5581999999999?text=Olá! Gostaria de saber mais sobre ";

const services = [
  {
    id: "aposentadorias",
    icon: Scale,
    title: "Aposentadorias INSS",
    subtitle: "Por idade, tempo de contribuição e especial",
    description:
      "Análise completa do seu histórico contributivo para identificar a melhor modalidade de aposentadoria. Organizamos sua documentação e acompanhamos todo o processo.",
    items: [
      "Aposentadoria por idade",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria especial (atividades insalubres)",
      "Aposentadoria do professor",
      "Aposentadoria da pessoa com deficiência",
    ],
  },
  {
    id: "revisoes",
    icon: FileText,
    title: "Revisões Previdenciárias",
    subtitle: "Correção de benefícios mal calculados",
    description:
      "Verificamos se sua aposentadoria ou benefício foi calculado corretamente pelo INSS. Muitos segurados têm direito a valores maiores.",
    items: [
      "Revisão da vida toda",
      "Revisão de teto",
      "Revisão de atividade concomitante",
      "Revisão de benefício por incapacidade",
      "Inclusão de períodos não computados",
    ],
  },
  {
    id: "auxilio",
    icon: Heart,
    title: "Auxílio por Incapacidade",
    subtitle: "Auxílio-doença e aposentadoria por invalidez",
    description:
      "Orientação para afastamento por problemas de saúde, com organização correta da documentação médica e acompanhamento das perícias.",
    items: [
      "Auxílio-doença (incapacidade temporária)",
      "Aposentadoria por invalidez",
      "Auxílio-acidente",
      "Acompanhamento de perícias médicas",
      "Recursos contra indeferimentos",
    ],
  },
  {
    id: "bpc",
    icon: Users,
    title: "BPC/LOAS",
    subtitle: "Benefício de Prestação Continuada",
    description:
      "Benefício assistencial para idosos e pessoas com deficiência em situação de vulnerabilidade. Verificamos os requisitos e organizamos seu requerimento.",
    items: [
      "BPC para idosos (65 anos ou mais)",
      "BPC para pessoas com deficiência",
      "Análise de critérios de renda familiar",
      "Recursos administrativos",
      "Ações judiciais quando necessário",
    ],
  },
  {
    id: "pensao",
    icon: FileText,
    title: "Pensão por Morte",
    subtitle: "Proteção aos dependentes",
    description:
      "Acompanhamento completo do processo de pensão por morte, garantindo que os dependentes recebam o benefício a que têm direito.",
    items: [
      "Pensão para cônjuge/companheiro(a)",
      "Pensão para filhos menores ou inválidos",
      "Pensão para pais dependentes",
      "Habilitação tardia de dependentes",
      "Revisão de cotas de pensão",
    ],
  },
  {
    id: "familia",
    icon: Gavel,
    title: "Direito de Família",
    subtitle: "Pensão alimentícia e questões familiares",
    description:
      "Atuação em demandas familiares com foco em pensão alimentícia, guarda e questões relacionadas.",
    items: [
      "Ação de alimentos",
      "Revisional de alimentos",
      "Execução de alimentos",
      "Exoneração de alimentos",
      "Guarda e regulamentação de visitas",
    ],
  },
  {
    id: "civel",
    icon: Building,
    title: "Direito Cível",
    subtitle: "Contratos e responsabilidade civil",
    description:
      "Assessoria em questões cíveis diversas, com atendimento personalizado e estratégia adequada para cada caso.",
    items: [
      "Contratos em geral",
      "Indenizações por danos morais e materiais",
      "Cobranças e execuções",
      "Direito do consumidor",
      "Inventários e partilhas",
    ],
  },
  {
    id: "administrativo",
    icon: Shield,
    title: "Direito Administrativo",
    subtitle: "Servidores e questões contra a administração",
    description:
      "Atuação em processos envolvendo a administração pública, concursos e direitos de servidores.",
    items: [
      "Concursos públicos",
      "Direitos de servidores",
      "Processos administrativos",
      "Mandado de segurança",
      "Impugnações e recursos",
    ],
  },
];

const AreasDeAtuacao = () => {
  return (
    <Layout>
      {/* Hero */}
      <div id="areas-de-atuacao">
        <section className="pt-32 pb-16 section-wine relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-wine-deep to-wine-medium" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                Áreas de Atuação
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Especialistas em Direito Previdenciário e INSS, com experiência
                também em outras áreas para oferecer atendimento completo.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Services detail */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                        Especialidade Principal
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-accent font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button type="submit" className="btn-primary">
                      <a
                        href={WHATSAPP_LINK + service.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center"
                      >
                        <WaIcon />
                        Consultar sobre {service.title.split(" ")[0]}
                      </a>
                    </button>
                  </div>
                  {/* Items list */}
                  <div
                    className={`bg-secondary rounded-xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h3 className="font-semibold text-foreground mb-6">
                      O que inclui:
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="py-16 section-wine">
          <div className="container flex flex-col items-center px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
              Não sabe qual área se aplica ao seu caso?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Entre em contato para uma análise inicial. Nossa equipe vai
              orientar você sobre o melhor caminho para sua situação.
            </p>
            <button
              type="submit"
              className="btn-primary max-w-lg"
              style={{ width: "100%", padding: "18px" }}
            >
              <a
                href={WHATSAPP_LINK + "meu caso"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <WaIcon />
                Falar com um Especialista
              </a>
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AreasDeAtuacao;

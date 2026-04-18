import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  FileText,
  Heart,
  Users,
  Gavel,
  Building,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scale,
    title: "Aposentadorias INSS",
    description:
      "Análise completa do seu histórico contributivo para identificar a melhor modalidade de aposentadoria.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Revisões Previdenciárias",
    description:
      "Verificamos se seu benefício foi calculado corretamente e buscamos valores maiores quando possível.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Auxílio por Incapacidade",
    description:
      "Orientação para afastamento por problemas de saúde com suporte em documentação e perícias médicas.",
    highlight: true,
  },
  {
    icon: Users,
    title: "BPC/LOAS",
    description:
      "Análise de elegibilidade para benefício assistencial destinado a idosos e pessoas com deficiência.",
    highlight: false,
  },
  {
    icon: FileText,
    title: "Pensão por Morte",
    description:
      "Acompanhamento completo para garantir o benefício aos dependentes do segurado.",
    highlight: false,
  },
  {
    icon: Gavel,
    title: "Direito de Família",
    description:
      "Atuação em pensão alimentícia, guarda e outras demandas familiares com foco em proteção jurídica.",
    highlight: false,
  },
  {
    icon: Building,
    title: "Direito Cível",
    description:
      "Contratos, indenizações e demandas cíveis com estratégia personalizada para cada caso.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Direito Administrativo",
    description:
      "Atuação em concursos, direitos de servidores e processos contra a administração pública.",
    highlight: false,
  },
];

export const Services = () => {
  return (
    <section id="areas-de-atuacao" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground">
            Foco em Direito Previdenciário e INSS, com atendimento também em
            outras áreas do Direito para oferecer suporte completo aos nossos
            clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`card-premium group cursor-pointer ${
                service.highlight ? "border-accent/20" : ""
              }`}
            >
              {/* Ícone */}
              <div className="relative w-12 h-12 mb-5">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  {/* Fundo base */}
                  <span className="absolute inset-0 bg-muted rounded-full transition-colors duration-300 group-hover:bg-transparent" />

                  {/* Fundo animado */}
                  <span className="absolute inset-0 bg-accent scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-center rounded-full shadow-md group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]" />

                  {/* Ícone */}
                  <service.icon className="relative z-10 w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
              </div>

              {/* Conteúdo */}
              <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Badge */}
              {service.highlight && (
                <span className="inline-block mt-4 text-xs font-medium text-accent">
                  Especialidade Principal
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="wineOutline" size="lg" asChild>
            <Link to="/areas-de-atuacao">
              Ver Todas as Áreas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

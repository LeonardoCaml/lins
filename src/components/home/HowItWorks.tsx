import { motion } from "framer-motion";
import { MessageSquare, Search, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Envie seu Caso",
    description:
      "Entre em contato pelo WhatsApp ou formulário. Descreva brevemente sua situação e envie documentos iniciais.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise e Direcionamento",
    description:
      "Nossa equipe avalia seu caso com atenção, identifica a melhor estratégia e orienta os próximos passos.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Acompanhamento Transparente",
    description:
      "Você recebe atualizações em cada etapa do processo, com clareza sobre prazos e procedimentos.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 section-wine relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary-foreground mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-primary-foreground/70">
            Três passos simples para você dar início à sua demanda
            previdenciária com orientação profissional e segura.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 w-full"
              >
                <div className="card-wine text-center relative z-10 h-full">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-6">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-sans font-semibold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Connector arrow — desktop only, not after last */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 shrink-0 text-accent/40 my-6">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}

              {/* Connector — mobile vertical */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden justify-center py-3">
                  <div className="w-px h-8 bg-accent/25" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

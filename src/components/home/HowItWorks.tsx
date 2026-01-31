import { motion } from "framer-motion";
import { MessageSquare, Search, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Envie seu Caso",
    description: "Entre em contato pelo WhatsApp ou formulário. Descreva brevemente sua situação e envie documentos iniciais.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise e Direcionamento",
    description: "Nossa equipe avalia seu caso com atenção, identifica a melhor estratégia e orienta os próximos passos.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Acompanhamento Transparente",
    description: "Você recebe atualizações em cada etapa do processo, com clareza sobre prazos e procedimentos.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 section-wine relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mt-3 mb-4">
            Como Funciona
          </h2>
          <p className="text-primary-foreground/70">
            Três passos simples para você dar início à sua demanda previdenciária 
            com orientação profissional e segura.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent z-0" />
              )}
              
              <div className="card-wine text-center relative z-10">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/30 flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2 text-accent">
            <span className="text-sm font-medium">Inicie agora sua análise</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

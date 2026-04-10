import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Heart,
  Briefcase,
  MapPin,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Especialização Reconhecida",
    description:
      "Foco em Direito Previdenciário com equipe dedicada e atualizada nas constantes mudanças da legislação do INSS.",
  },
  {
    icon: Clock,
    title: "Agilidade no Atendimento",
    description:
      "Respostas rápidas e triagem eficiente. Seu tempo é valioso e nós respeitamos isso.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Tratamos cada caso com empatia e atenção. Você não é só mais um processo para nós.",
  },
  {
    icon: Briefcase,
    title: "Profissionais Capacitados",
    description:
      "Equipe com experiência comprovada e histórico de êxito em milhares de casos previdenciários.",
  },
  {
    icon: MapPin,
    title: "Fácil Localização",
    description:
      "Escritório bem localizado em Recife, com atendimento presencial e online para todo o Brasil.",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description:
      "Acompanhamento do início ao fim, com atualizações constantes sobre o andamento do seu processo.",
  },
];

const stats = [
  { value: "15k+", label: "Clientes" },
  { value: "26", label: "Estados" },
  { value: "5★", label: "Avaliação" },
];

const floatAnimations = [
  {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
  {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1.3,
    },
  },
  {
    y: [0, -14, 0],
    transition: {
      duration: 3.8,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 2.6,
    },
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Nossa Diferença
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
              Por que a Lins Advogados?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-sm">
              Com mais de 15.000 clientes atendidos, construímos nossa reputação
              através de resultados sólidos, transparência e atendimento de
              primeira qualidade.
            </p>

            {/* Floating stat badges */}
            <div className="flex items-end gap-4 h-24">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  animate={floatAnimations[i]}
                  className="text-center px-5 py-3 rounded-2xl bg-primary/5 border border-primary/10"
                >
                  <p className="text-2xl font-heading font-bold text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — reason cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 rounded-2xl bg-secondary hover:bg-primary/5 border border-transparent hover:border-primary/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

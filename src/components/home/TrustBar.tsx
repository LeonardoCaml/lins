import { motion } from "framer-motion";
import { Shield, Globe, Users, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Sigilo e Responsabilidade",
    description: "Seus dados e caso tratados com máxima confidencialidade",
  },
  {
    icon: Globe,
    title: "Atendimento Nacional",
    description: "Atuação em todo o Brasil de forma presencial e online",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais dedicados ao Direito Previdenciário",
  },
  {
    icon: FileCheck,
    title: "Orientação por Etapas",
    description: "Acompanhamento claro do início ao fim do processo",
  },
];

export const TrustBar = () => {
  return (
    <section className="relative section-wine border-y border-accent/10 overflow-hidden">
      {/* Gold line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10 overflow-hidden border border-accent/10">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-center text-center gap-4 px-8 py-10 bg-wine-gradient"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>

              <div>
                <h3 className="font-semibold text-primary-foreground leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient opacity-40" />
    </section>
  );
};

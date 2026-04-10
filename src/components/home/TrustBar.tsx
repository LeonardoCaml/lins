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
    <section className="bg-secondary py-12 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { AlertCircle, Ban, Clock, ShieldOff } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Ban,
    title: "Benefício negado pelo INSS",
    description:
      "Muitas pessoas têm seu pedido negado sem entender os motivos ou saber como recorrer.",
  },
  {
    icon: Clock,
    title: "Demora nos processos",
    description:
      "A burocracia faz com que processos demorem meses, enquanto você precisa de ajuda agora.",
  },
  {
    icon: ShieldOff,
    title: "Não conhece seus direitos",
    description:
      "Muitos brasileiros não sabem que têm direito a benefícios que podem mudar sua vida.",
  },
  {
    icon: AlertCircle,
    title: "Dificuldade financeira",
    description:
      "Sem renda suficiente, até as necessidades básicas ficam comprometidas.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-section-warm">
      <div className="container mx-auto px-4 py-16 container-narrow">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Você se identifica?
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mt-2">
            Sabemos como é difícil passar por isso
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Se você está enfrentando alguma dessas situações, saiba que não está
            sozinho. Estamos aqui para ajudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative bg-card rounded-2xl p-6 border border-border overflow-hidden group transition-all duration-300 ease-out hover:-translate-y-1 hover:border-wine/50 hover:shadow-[0_8px_32px_-4px_rgba(var(--wine-rgb,100,20,30),0.18)]"
            >
              {/* Top accent bar */}
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wine/60 via-wine to-wine/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center flex-shrink-0 mb-4">
                <problem.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="font-semibold text-foreground mb-2 leading-snug">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

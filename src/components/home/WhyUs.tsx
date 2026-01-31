import { motion } from "framer-motion";
import { Award, Clock, Heart, Briefcase, MapPin, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Especialização Reconhecida",
    description: "Foco em Direito Previdenciário com equipe dedicada e atualizada nas constantes mudanças da legislação do INSS.",
  },
  {
    icon: Clock,
    title: "Agilidade no Atendimento",
    description: "Respostas rápidas e triagem eficiente. Seu tempo é valioso e nós respeitamos isso.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada caso com empatia e atenção. Você não é só mais um processo para nós.",
  },
  {
    icon: Briefcase,
    title: "Profissionais Capacitados",
    description: "Equipe com experiência comprovada e histórico de êxito em milhares de casos previdenciários.",
  },
  {
    icon: MapPin,
    title: "Fácil Localização",
    description: "Escritório bem localizado em Recife, com atendimento presencial e online para todo o Brasil.",
  },
  {
    icon: Headphones,
    title: "Suporte Contínuo",
    description: "Acompanhamento do início ao fim, com atualizações constantes sobre o andamento do seu processo.",
  },
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Nossa Diferença
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
              Por que a Lins Advogados?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com mais de 15.000 clientes atendidos, construímos nossa reputação 
              através de resultados sólidos, transparência e atendimento de primeira 
              qualidade. Cada caso é tratado com a atenção que merece.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-serif font-bold text-primary">15k+</p>
                <p className="text-sm text-muted-foreground">Clientes</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-serif font-bold text-primary">26</p>
                <p className="text-sm text-muted-foreground">Estados</p>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <p className="text-3xl font-serif font-bold text-primary">5★</p>
                <p className="text-sm text-muted-foreground">Avaliação</p>
              </div>
            </div>
          </motion.div>

          {/* Right content - reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-lg bg-secondary hover:bg-primary/5 transition-colors group"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

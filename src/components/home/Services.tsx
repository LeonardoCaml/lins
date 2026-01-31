import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Scale, 
  FileText, 
  Heart, 
  Users, 
  Gavel, 
  Building,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scale,
    title: "Aposentadorias INSS",
    description: "Idade, tempo de contribuição, especial. Análise completa do seu caso para encontrar o melhor caminho.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Revisões Previdenciárias",
    description: "Verificamos se sua aposentadoria foi calculada corretamente e buscamos o reajuste devido.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Auxílio-Doença",
    description: "Orientação para afastamento por incapacidade, com organização correta da documentação médica.",
    highlight: true,
  },
  {
    icon: Users,
    title: "BPC/LOAS",
    description: "Benefício para idosos e pessoas com deficiência. Verificamos os requisitos do seu caso.",
    highlight: true,
  },
  {
    icon: FileText,
    title: "Pensão por Morte",
    description: "Acompanhamento completo para garantir o benefício aos dependentes do segurado.",
    highlight: true,
  },
  {
    icon: Gavel,
    title: "Pensão Alimentícia",
    description: "Ações de alimentos, revisão e execução. Proteção dos direitos familiares.",
    highlight: false,
  },
  {
    icon: Building,
    title: "Direito Cível",
    description: "Contratos, indenizações e demais questões cíveis com atendimento personalizado.",
    highlight: false,
  },
  {
    icon: Scale,
    title: "Direito Administrativo",
    description: "Concursos, servidores públicos e questões contra a administração.",
    highlight: false,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground">
            Foco em Direito Previdenciário e INSS, com atendimento também em 
            outras áreas do Direito para oferecer suporte completo aos nossos clientes.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`card-premium group cursor-pointer ${
                service.highlight ? "border-accent/20" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                service.highlight 
                  ? "bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground" 
                  : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"
              }`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              {service.highlight && (
                <span className="inline-block mt-3 text-xs font-medium text-accent">
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

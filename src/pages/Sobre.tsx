import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Scale, MessageCircle } from "lucide-react";
import officeImage from "@/assets/office.png";

const WHATSAPP_LINK = "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta.";

const values = [
  {
    icon: Scale,
    title: "Ética e Transparência",
    description: "Atuamos com honestidade e clareza em todas as etapas, informando sobre possibilidades reais e expectativas.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada cliente é tratado com respeito e atenção. Entendemos que por trás de cada processo há uma história.",
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Equipe constantemente atualizada sobre mudanças na legislação e jurisprudência previdenciária.",
  },
  {
    icon: MapPin,
    title: "Acessibilidade",
    description: "Atendimento presencial em Recife e online para todo o Brasil, facilitando o acesso à justiça.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wine-deep to-wine-medium" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Sobre a Lins Advogados
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Conheça nossa história, valores e o compromisso com cada cliente 
              que confia em nosso trabalho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={officeImage}
                alt="Escritório Lins Advogados em Recife"
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                Compromisso com Resultados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">Lins Advogados</strong> nasceu com o propósito 
                  de oferecer atendimento jurídico de excelência, especialmente na área 
                  previdenciária. Com sede em Recife/PE, expandimos nossa atuação para 
                  todo o Brasil, atendendo clientes de norte a sul do país.
                </p>
                <p>
                  Ao longo dos anos, construímos uma trajetória marcada por mais de 
                  <strong className="text-foreground"> 15.000 clientes atendidos</strong>, sempre 
                  priorizando a transparência, o respeito e a busca pelo melhor resultado 
                  possível em cada caso.
                </p>
                <p>
                  Nossa equipe é formada por profissionais especializados e dedicados, 
                  que entendem as dificuldades enfrentadas por quem busca seus direitos 
                  junto ao INSS. Por isso, oferecemos não apenas assessoria jurídica, 
                  mas também acolhimento e orientação clara em cada etapa do processo.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-serif font-bold text-primary">15k+</p>
                  <p className="text-sm text-muted-foreground">Clientes</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-serif font-bold text-primary">26</p>
                  <p className="text-sm text-muted-foreground">Estados</p>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <p className="text-3xl font-serif font-bold text-primary">5★</p>
                  <p className="text-sm text-muted-foreground">Avaliação</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Nossos Princípios
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3">
              Valores que nos Guiam
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center shadow-lg border border-border"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "Ajudamos você a conquistar o melhor benefício, com estratégia e 
                acompanhamento humano. Acreditamos que todos merecem ter seus 
                direitos previdenciários respeitados e buscamos isso com dedicação 
                em cada caso que assumimos."
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Fale Conosco
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;

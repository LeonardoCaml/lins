import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta.";

const testimonials = [
  {
    name: "Maria da Conceição Silva",
    location: "São Paulo, SP",
    text: "Concedido em tempo recorde! Achei que nunca conseguiria minha aposentadoria por tempo de contribuição, mas a equipe da Lins Advogados conseguiu resolver tudo com muita competência e profissionalismo. Recomendo de olhos fechados!",
    rating: 5,
    service: "Aposentadoria por Tempo de Contribuição",
    date: "Janeiro 2024",
  },
  {
    name: "João Carlos Ferreira",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento de primeira qualidade! Me senti seguro do início ao fim do processo. A equipe sempre me manteve informado sobre cada etapa. Consegui meu auxílio-doença e agora estou em tratamento tranquilo.",
    rating: 5,
    service: "Auxílio-Doença",
    date: "Dezembro 2023",
  },
  {
    name: "Ana Beatriz Oliveira",
    location: "Recife, PE",
    text: "Excelentes profissionais! Resolve tudo: INSS, pensão, cível... Escritório com ótima localização e equipe muito atenciosa. Minha mãe conseguiu o BPC graças ao trabalho deles.",
    rating: 5,
    service: "BPC/LOAS",
    date: "Novembro 2023",
  },
  {
    name: "Pedro Henrique Santos",
    location: "Salvador, BA",
    text: "Êxito nos resultados! Conseguiram revisar minha aposentadoria e aumentar meu benefício em mais de 30%. Profissionais sérios, dedicados e que realmente entendem do assunto.",
    rating: 5,
    service: "Revisão de Aposentadoria",
    date: "Outubro 2023",
  },
  {
    name: "Fernanda Costa Lima",
    location: "Fortaleza, CE",
    text: "Atendimento humanizado e muito profissional. Me explicaram cada etapa do processo com paciência. Mesmo morando em outro estado, o atendimento online foi impecável. Super recomendo!",
    rating: 5,
    service: "Pensão por Morte",
    date: "Setembro 2023",
  },
  {
    name: "Roberto Lima Souza",
    location: "Belo Horizonte, MG",
    text: "Mesmo morando em outro estado, o atendimento online foi excelente. Consegui minha aposentadoria especial sem precisar ir a Recife. Comunicação clara e objetiva em todo o processo.",
    rating: 5,
    service: "Aposentadoria Especial",
    date: "Agosto 2023",
  },
  {
    name: "Sandra Regina Almeida",
    location: "Curitiba, PR",
    text: "Depois de ser negada pelo INSS três vezes, a Lins Advogados conseguiu reverter meu caso na justiça. Equipe muito competente e que não desiste dos clientes.",
    rating: 5,
    service: "Auxílio por Incapacidade",
    date: "Julho 2023",
  },
  {
    name: "Marcos Antônio Vieira",
    location: "Brasília, DF",
    text: "Profissionalismo exemplar. Desde o primeiro contato até a conclusão do meu processo de pensão alimentícia, fui tratado com respeito e eficiência. Recomendo fortemente.",
    rating: 5,
    service: "Pensão Alimentícia",
    date: "Junho 2023",
  },
];

const stats = [
  { value: "15.000+", label: "Clientes Atendidos" },
  { value: "98%", label: "Satisfação" },
  { value: "5★", label: "Avaliação Média" },
  { value: "26", label: "Estados Atendidos" },
];

const Depoimentos = () => {
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
              Resultados & Depoimentos
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Histórias reais de clientes que confiaram em nosso trabalho 
              e conquistaram seus direitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badge */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-foreground">
                  Avaliações Verificadas
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/30 transition-all duration-300"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Service tag */}
                <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded mb-4">
                  {testimonial.service}
                </span>
                
                {/* Author */}
                <div className="border-t border-border pt-4 flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 section-wine">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-6">
              Faça parte das nossas histórias de sucesso
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Agende sua análise e descubra como podemos ajudar você a conquistar 
              seus direitos previdenciários.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Avaliar meu Caso
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Depoimentos;

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WaIcon from "@/components/ui/WaIcon";

const WHATSAPP_LINK =
  "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta.";

const testimonials = [
  {
    name: "Eduardo Pedro",
    location: "Recife, PE",
    text: "Contratei para a aposentadoria da minha genitora e foi concedido em tempo recorde. Recomendo pelos resultados.",
    rating: 5,
    service: "Aposentadoria",
    date: "2 anos atrás",
  },
  {
    name: "Netbits",
    location: "Recife, PE",
    text: "Aqui você resolve tudo nas áreas Cível, Criminal, INSS, Pensão Alimentícia e mais.",
    rating: 5,
    service: "Atendimento Geral",
    date: "2 anos atrás",
  },
  {
    name: "Ana Cris",
    location: "Recife, PE",
    text: "Muito boa localização e boa recepção no atendimento.",
    rating: 5,
    service: "Atendimento Presencial",
    date: "3 anos atrás",
  },
  {
    name: "Nildiane Santos",
    location: "Recife, PE",
    text: "Atendimento de primeira qualidade, ótima localização e excelentes profissionais. Recomendo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "6 anos atrás",
  },
  {
    name: "Conceição Rocha",
    location: "Recife, PE",
    text: "Excelente localização com profissionais capacitados e de fácil acessibilidade.",
    rating: 5,
    service: "Atendimento Presencial",
    date: "6 anos atrás",
  },
  {
    name: "Marcelo Acioly",
    location: "Recife, PE",
    text: "Excelentes profissionais, excelente atendimento e de fácil localização. Recomendo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "6 anos atrás",
  },
  {
    name: "Eduardo Amaral",
    location: "Recife, PE",
    text: "Fui a este lugar pela primeira vez.",
    rating: 4,
    service: "Atendimento Presencial",
    date: "8 anos atrás",
  },
  {
    name: "Wilson J Silva",
    location: "Recife, PE",
    text: "Muito bom.",
    rating: 5,
    service: "Atendimento Geral",
    date: "4 anos atrás",
  },
  {
    name: "Luiz Siqueira",
    location: "Recife, PE",
    text: "Ótimo atendimento.",
    rating: 5,
    service: "Atendimento Geral",
    date: "3 anos atrás",
  },
  {
    name: "Erika Alves",
    location: "Recife, PE",
    text: "Ótimo.",
    rating: 5,
    service: "Atendimento Geral",
    date: "2 anos atrás",
  },
  {
    name: "Robson Flor",
    location: "Recife, PE",
    text: "Boa.",
    rating: 4,
    service: "Atendimento Geral",
    date: "1 ano atrás",
  },
  {
    name: "Cleanderson Yuri",
    location: "Recife, PE",
    text: "Ótima.",
    rating: 5,
    service: "Atendimento Geral",
    date: "3 anos atrás",
  },
];

const stats = [
  { value: "15.000+", label: "Clientes Atendidos" },
  { value: "98%", label: "Satisfação" },
  { value: "5★", label: "Avaliação Média" },
  { value: "26", label: "Estados Atendidos" },
];

const Depoimentos = () => {
  const [visibleCount, setVisibleCount] = useState(3);
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
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Resultados & Depoimentos
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Histórias reais de clientes que confiaram em nosso trabalho e
              conquistaram seus direitos.
            </p>
          </motion.div>
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium group cursor-pointer border-accent/20"
              >
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
                <span className="inline-block text-xs bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  {testimonial.service}
                </span>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-6">
              Faça parte das nossas histórias de sucesso
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Agende sua análise e descubra como podemos ajudar você a
              conquistar seus direitos previdenciários.
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WaIcon />
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

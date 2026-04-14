import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TestimonialsCarousel from "../ui/TestimonialCarrousel";

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

export const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="depoimentos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-4"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Avaliações Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">
            Mais de 25.000 clientes atendidos em todo o Brasil. Confira alguns
            depoimentos de quem confiou no nosso trabalho.
          </p>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              Avaliações verificadas
            </span>
          </div>
        </motion.div>

        <TestimonialsCarousel />

        {/* Load more / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div>
            <Button variant="wineOutline" size="lg" asChild>
              <Link to="/depoimentos">Ver Todos os Resultados</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

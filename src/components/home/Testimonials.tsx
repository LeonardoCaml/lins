import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Concedido em tempo recorde! Achei que nunca conseguiria minha aposentadoria, mas a equipe da Lins Advogados conseguiu resolver tudo com muita competência.",
    rating: 5,
    service: "Aposentadoria por Tempo de Contribuição",
  },
  {
    name: "João Carlos",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento de primeira qualidade! Me senti seguro do início ao fim. Recomendo para todos que precisam de advogado previdenciário.",
    rating: 5,
    service: "Auxílio-Doença",
  },
  {
    name: "Ana Beatriz",
    location: "Recife, PE",
    text: "Excelentes profissionais! Resolve tudo: INSS, pensão, cível... Escritório com ótima localização e equipe muito atenciosa.",
    rating: 5,
    service: "BPC/LOAS",
  },
  {
    name: "Pedro Santos",
    location: "Salvador, BA",
    text: "Êxito nos resultados! Conseguiram revisar minha aposentadoria e aumentar meu benefício. Profissionais sérios e dedicados.",
    rating: 5,
    service: "Revisão de Aposentadoria",
  },
  {
    name: "Fernanda Costa",
    location: "Fortaleza, CE",
    text: "Atendimento humanizado e muito profissional. Me explicaram cada etapa do processo com paciência. Super recomendo!",
    rating: 5,
    service: "Pensão por Morte",
  },
  {
    name: "Roberto Lima",
    location: "Belo Horizonte, MG",
    text: "Mesmo morando em outro estado, o atendimento online foi excelente. Consegui meu benefício sem precisar ir a Recife.",
    rating: 5,
    service: "Aposentadoria Especial",
  },
];

export const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-20 bg-secondary">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">
            Mais de 15.000 clientes atendidos em todo o Brasil. 
            Confira alguns depoimentos de quem confiou no nosso trabalho.
          </p>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
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

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
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
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          {visibleCount < testimonials.length && (
            <Button
              variant="outline"
              onClick={() => setVisibleCount(testimonials.length)}
            >
              Ver mais depoimentos
            </Button>
          )}
          <div>
            <Button variant="wineOutline" size="lg" asChild>
              <Link to="/depoimentos">
                Ver Todos os Resultados
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

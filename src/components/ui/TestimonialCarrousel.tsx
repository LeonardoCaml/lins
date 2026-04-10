import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  date: string;
}

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

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  position: "center" | "side";
}

function TestimonialCard({ testimonial, position }: TestimonialCardProps) {
  const isCenter = position === "center";

  return (
    <motion.div
      animate={{
        scale: isCenter ? 1.04 : 0.94,
        opacity: isCenter ? 1 : 0.5,
      }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="card-premium group cursor-pointer border-accent/20 my-10 min-h-62"
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? "fill-accent text-accent"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p
        className={`leading-relaxed flex-1 transition-all duration-300 ${
          isCenter
            ? "text-foreground text-[15px]"
            : "text-muted-foreground text-sm"
        }`}
      >
        "{testimonial.text}"
      </p>

      {/* Service tag */}
      <span className="inline-block w-fit text-xs bg-primary/10 text-primary px-3 py-1 my-2 rounded-full">
        {testimonial.service}
      </span>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const visibleCount = useVisibleCount();
  const n = testimonials.length;

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + n) % n);
  }, [n]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % n);
  }, [n]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Build visible indices
  const getVisibleIndices = () => {
    if (visibleCount === 1) return [current];
    if (visibleCount === 2) {
      return [current, (current + 1) % n];
    }
    // 3 cards: prev, center, next
    return [(current - 1 + n) % n, current, (current + 1) % n];
  };

  const visibleIndices = getVisibleIndices();

  const getPosition = (idx: number): "center" | "side" => {
    if (visibleCount === 1) return "center";
    if (visibleCount === 2) return "center"; // both cards treated as center for tablet
    // Desktop: middle index is center
    return idx === visibleIndices[1] ? "center" : "side";
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          className="relative"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full border border-border bg-background
              flex items-center justify-center
              hover:bg-muted transition-colors
              -translate-x-4 md:-translate-x-5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            "
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden px-2">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? "30%" : "-30%",
                    opacity: 0,
                  }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({
                    x: dir > 0 ? "-30%" : "30%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className={`grid gap-5 items-stretch ${
                  visibleCount === 1
                    ? "grid-cols-1"
                    : visibleCount === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                }`}
              >
                {visibleIndices.map((idx) => (
                  <TestimonialCard
                    key={idx}
                    testimonial={testimonials[idx]}
                    position={getPosition(idx)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-9 h-9 rounded-full border border-border bg-background
              flex items-center justify-center
              hover:bg-muted transition-colors
              translate-x-4 md:translate-x-5
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            "
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Navegar depoimentos"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir para depoimento ${i + 1}`}
              onClick={() => goTo(i)}
              className={`
                rounded-full transition-all duration-300
                ${
                  i === current
                    ? "w-5 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Shield, Users, MapPin } from "lucide-react";
import WaIcon from "../ui/WaIcon";
import { LightBlobs } from "../ui/LightBlobs";
import { DarkBlobs } from "../ui/DarkBlobs";

const WHATSAPP_LINK =
  "https://wa.me/5581999999999?text=Olá! Gostaria de avaliar meu caso.";

export const Hero = () => {
  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wine-gradient"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <LightBlobs />
          <DarkBlobs />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-heading font-medium">
                Especialistas em Direito Previdenciário
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Consultoria em Previdência Social com{" "}
              <span className="text-gold-gradient">Foco no INSS</span> e
              Atendimento Personalizado
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Mais de 15.000 clientes atendidos. Atuação em todo o Brasil.
              Triagem rápida e orientação objetiva para o seu caso.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button variant="heroPrimary" size="xl" asChild>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon />
                  Avaliar meu caso no WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                <span>Atendimento elogiado</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Profissionais capacitados</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Localização excelente</span>
              </div>
            </motion.div> */}
          </div>
        </div>

        {/*
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div> */}
      </section>
    </>
  );
};

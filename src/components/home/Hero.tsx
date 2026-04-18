import { motion } from "framer-motion";
import WaIcon from "../ui/WaIcon";
import { LightBlobs } from "../ui/LightBlobs";
import { DarkBlobs } from "../ui/DarkBlobs";

const WHATSAPP_LINK =
  "https://wa.me/5581999279799?text=Olá! Gostaria de avaliar meu caso.";

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-sm text-accent font-heading font-medium">
                Especialistas em Direito Previdenciário
              </span>
            </motion.div>
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
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Mais de 15.000 clientes atendidos. Atuação em todo o Brasil.
              Triagem rápida e orientação objetiva para o seu caso.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary max-w-lg w-full flex items-center justify-center gap-2 py-[18px] px-8"
              >
                <WaIcon />
                Avaliar meu caso no WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

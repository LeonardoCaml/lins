import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import WaIcon from "../ui/WaIcon";
import { LightBlobs } from "../ui/LightBlobs";
import { DarkBlobs } from "../ui/DarkBlobs";

const WHATSAPP_LINK =
  "https://wa.me/5581999279799?text=Olá! Gostaria de avaliar meu caso.";

export const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wine-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LightBlobs />
        <DarkBlobs />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Pronto para entender seu direito e o melhor caminho?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Faça sua triagem agora e descubra como podemos ajudar você a
            conquistar o benefício que merece. Atendimento rápido e orientação
            clara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="btn-primary text-sm"
              style={{ width: "100%", padding: "18px" }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <WaIcon />
                Avaliar meu caso no WhatsApp
              </a>
            </button>

            <button
              type="submit"
              className="btn-secondary text-sm"
              style={{ width: "100%", padding: "18px" }}
            >
              <a
                href="/contato"
                rel="noopener noreferrer"
                className="flex gap-2"
              >
                <Calendar className="w-5 h-5" />
                Agendar Consulta{" "}
              </a>
            </button>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            Atendimento confidencial. Resposta em até 24h úteis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

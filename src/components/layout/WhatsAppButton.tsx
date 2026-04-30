import { motion } from "framer-motion";
import WaIcon from "../ui/WaIcon";

const WHATSAPP_LINK =
  "https://wa.me/558199279799?text=Olá! Vim pelo site da Lins Advogados e quero saber se tenho direito a algum benefício do INSS.";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-gold-dark via-accent to-gold-light text-accent-foreground font-semibold p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <WaIcon size={25} />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping opacity-75" />
    </motion.a>
  );
};

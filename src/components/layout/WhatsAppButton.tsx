import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5581999999999?text=Olá! Gostaria de agendar uma consulta.";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-gold-dark via-accent to-gold-light text-accent-foreground font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping opacity-75" />
    </motion.a>
  );
};

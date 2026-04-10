import { motion } from "framer-motion";

export const DarkBlobs = () => (
  <>
    <motion.div
      className="absolute top-1/2 right-[-15%] w-[55vw] max-w-[700px] h-[55vw] -translate-y-1/2 bg-wine-deep/20 rounded-full blur-3xl will-change-transform"
      animate={{
        x: [0, -60, 40, 0],
        y: [0, 40, -30, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute bottom-[-20%] right-[-20%] w-[65vw] max-w-[800px] h-[65vw] bg-wine-deep/30 rounded-full blur-3xl will-change-transform"
      animate={{
        x: [0, -40, 20, 0],
        y: [0, -30, 50, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

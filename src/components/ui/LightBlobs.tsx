import { motion } from "framer-motion";

export const LightBlobs = () => (
  <>
    <motion.div
      className="absolute top-[-20%] left-[-20%] w-[60vw] max-w-[700px] h-[60vw] bg-accent/10 rounded-full blur-3xl mix-blend-screen will-change-transform"
      animate={{
        x: [0, 80, -40, 0],
        y: [0, -60, 40, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute top-1/2 left-1/2 w-[50vw] max-w-[600px] h-[50vw] -translate-x-1/2 -translate-y-1/2 bg-accent/10 rounded-full blur-3xl mix-blend-screen will-change-transform"
      animate={{
        x: [-40, 60, -20, -40],
        y: [20, -50, 40, 20],
        scale: [1, 1.15, 0.9, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

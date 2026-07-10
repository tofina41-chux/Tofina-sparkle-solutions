import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-primary">
          <motion.div
            className="absolute inset-0 bg-white/30"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="font-display text-sm font-semibold tracking-[0.3em] text-secondary">
          TOFINA SPARKLE
        </p>
      </motion.div>
    </div>
  );
}

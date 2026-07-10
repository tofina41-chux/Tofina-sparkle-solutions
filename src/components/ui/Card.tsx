import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-accent/60 bg-white p-6 shadow-card ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

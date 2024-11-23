"use client";
import { motion } from "framer-motion";

export default function CodeBlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

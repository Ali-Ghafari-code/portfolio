"use client"
import { motion } from "framer-motion";

const AnimateWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWrapper;

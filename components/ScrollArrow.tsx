"use client";

import { motion } from "framer-motion";

export default function ScrollArrow({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "0 0 16px" }}>
      <motion.div
        onClick={handleClick}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        animate={{ y: [0, 7, 0] }}
        style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }}
      >
        {/* Two stacked chevrons for a subtle cascading effect */}
        <motion.svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0 }}
        >
          <path d="M2 2L12 11L22 2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        <motion.svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: 0.2 }}
        >
          <path d="M2 2L12 11L22 2" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

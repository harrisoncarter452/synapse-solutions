"use client";

import { motion } from "framer-motion";
import { Zap, Lightbulb, Heart, RefreshCw } from "lucide-react";

const values = [
  {
    icon: Zap,
    label: "Efficiency + Work Ethic",
    title: "We don't cut corners.\nWe eliminate them.",
    description:
      "Relentless execution is in our DNA. We work hard, move fast, and hold ourselves to a standard most agencies don't bother with. Every solution we build is engineered for maximum output with minimum friction — because your time is the most valuable thing we can give back.",
    color: "#8B5CF6",
  },
  {
    icon: Lightbulb,
    label: "Innovation",
    title: "Always at the frontier.\nSo you don't have to be.",
    description:
      "AI moves fast. We move faster. We live at the cutting edge so you can focus on your business — not keeping up with the technology. Every solution we deploy uses what's working right now, not what worked two years ago.",
    color: "#EC4899",
  },
  {
    icon: Heart,
    label: "Human Focus",
    title: "People-powered.\nAI-amplified.",
    description:
      "We're not here to replace people — we're here to make them extraordinary. Your team gets freed from the grunt work. Your customers get a curated experience that feels personal at scale. Every decision we make puts humans — yours and theirs — at the centre.",
    color: "#F59E0B",
  },
  {
    icon: RefreshCw,
    label: "Continuous Improvement",
    title: "Build. Reflect.\nGet better. Repeat.",
    description:
      "We don't deploy and disappear. We review, refine, and optimise — constantly. Your AI gets sharper every week it runs. We hold ourselves to the same standard: always reflecting, always improving, never satisfied with good enough.",
    color: "#8B5CF6",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="section-padding"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(180deg, rgba(139,92,246,0.04) 0%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#8B5CF6", letterSpacing: "0.12em", marginBottom: "16px" }}>
            OUR VALUES
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            What we stand for
            <br />
            <span className="gradient-text">every single day.</span>
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            These aren&apos;t words on a wall. They&apos;re how we show up for every client,
            every build, and every interaction.
          </p>
        </motion.div>

        {/* Values grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-border"
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon + label */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${value.color}18`,
                    border: `1px solid ${value.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <value.icon size={18} style={{ color: value.color }} />
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: value.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {value.label}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {value.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                {value.description}
              </p>

              {/* Bottom accent */}
              <div
                style={{
                  height: "2px",
                  background: `linear-gradient(90deg, ${value.color}, transparent)`,
                  borderRadius: "1px",
                  marginTop: "28px",
                  opacity: 0.4,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

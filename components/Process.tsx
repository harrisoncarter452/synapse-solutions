"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We listen first. A real conversation about how your business works, where the friction is, and what growth looks like for you. No jargon. No assumptions. Just a genuine deep-dive into your world.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We map your operations and design the right AI solution for your specific situation. You receive a clear roadmap — what we'll build, how it connects, and exactly what to expect. No surprises.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Build",
    description:
      "We get to work. Your solution is trained on your content, integrated with your systems, and tested thoroughly before anything goes live. Fast deployment — most solutions are live within 5–10 days.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy, onboard your team, and stay close. Your AI solution is monitored, refined, and updated as your business grows. We're a long-term partner — not a one-off vendor.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 50%, transparent 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#EC4899", letterSpacing: "0.12em", marginBottom: "16px" }}>
            HOW IT WORKS
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
            From conversation
            <br />
            <span className="gradient-text">to live in days</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            A clear, simple process — because building AI for your business
            should feel easy.
          </p>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
            position: "relative",
          }}
        >
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "32px",
              left: "calc(12.5% + 24px)",
              right: "calc(12.5% + 24px)",
              height: "1px",
              background: "linear-gradient(90deg, #8B5CF6, #EC4899, #F59E0B)",
              opacity: 0.25,
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Number + Icon */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2))",
                    border: "1px solid rgba(139,92,246,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <step.icon size={22} style={{ color: "#8B5CF6" }} />
                </div>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.06)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, TrendingUp, Bot, Globe, Palette } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollArrow from "@/components/ScrollArrow";

const cyclingWords = ["optimised.", "supercharged.", "unstoppable.", "transformed.", "connected."];

const serviceCards = [
  { icon: MessageSquare, label: "AI Chatbots", sub: "Internal & External", color: "#8B5CF6" },
  { icon: TrendingUp, label: "Lead Generation", sub: "Guaranteed results", color: "#EC4899" },
  { icon: Bot, label: "AI Agents", sub: "Working 24/7", color: "#F59E0B" },
  { icon: Globe, label: "Web & App Design", sub: "Customers & internal tools", color: "#A78BFA" },
  { icon: Palette, label: "Graphic Design & Branding", sub: "Identity & creative", color: "#22D3EE" },
];

const stats = [
  { value: "5", label: "AI services" },
  { value: "24/7", label: "Always on" },
  { value: "0", label: "Risk on leads" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        paddingTop: "110px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Orbs */}
      <div style={{ position: "absolute", top: "20%", right: "30%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 65%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px", width: "100%", position: "relative", zIndex: 1, flex: 1, display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "80px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left column ── */}
          <div>
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(48px, 6vw, 78px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                marginBottom: "12px",
              }}
            >
              Your business,
            </motion.h1>

            {/* Cycling word */}
            <div
              style={{
                fontSize: "clamp(48px, 6vw, 78px)",
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                marginBottom: "36px",
                height: "1.1em",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="gradient-text"
                  style={{ display: "block" }}
                >
                  {cyclingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ marginBottom: "48px", maxWidth: "640px" }}
            >
              <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "16px" }}>
                We take care of the work that holds your business back, so your people are free to think, create, and build real relationships.
              </p>
              <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", fontWeight: 700, lineHeight: 1.75, background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We empower your team, supercharge your operations, and connect every part of your business to the tools and intelligence it needs to grow.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-gradient"
                style={{ fontSize: "15px", padding: "15px 34px" }}
              >
                Request a Quote <ArrowRight size={17} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="btn-outline"
                style={{ fontSize: "15px", padding: "15px 34px" }}
              >
                Our Services
              </button>
            </motion.div>

          </div>

          {/* ── Right column — service cards ── */}
          <div style={{ position: "relative" }} className="hero-cards">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "14px",
                  padding: "16px 20px",
                  marginBottom: i < serviceCards.length - 1 ? "10px" : "0",
                  transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                  cursor: "default",
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.055)",
                  borderColor: `${card.color}40`,
                  x: 6,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: `${card.color}18`,
                    border: `1px solid ${card.color}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <card.icon size={18} style={{ color: card.color }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                    {card.sub}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight size={14} style={{ color: card.color, opacity: 0.6, flexShrink: 0 }} />
              </motion.div>
            ))}

            {/* Glow behind cards */}
            <div
              style={{
                position: "absolute",
                inset: "-20px",
                background: "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom — scroll arrow + section heading */}
      <div style={{ textAlign: "center", padding: "0 24px 36px", position: "relative", zIndex: 1 }}>
        <ScrollArrow targetId="painpoints" />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: "clamp(22px, 3vw, 36px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginTop: "0px",
          }}
        >
          What you can expect{" "}
          <span className="gradient-text">from us...</span>
        </motion.h2>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-cards {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

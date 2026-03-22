"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket, DollarSign, HeadphonesIcon, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    eyebrow: "Revenue",
    title: "More revenue. More growth.",
    description:
      "Flood your business with qualified buyers and close the gap between potential and performance. We build the pipeline, run the campaigns, and hand your team pre-qualified leads ready to close.",
    color: "#8B5CF6",
    highlight: true,
  },
  {
    icon: Target,
    eyebrow: "Lead Capture",
    title: "Zero leads left behind.",
    description:
      "Every enquiry captured, responded to instantly, and handed to your team pre-qualified — regardless of the hour. No more leads falling through the cracks after hours or over the weekend.",
    color: "#F59E0B",
    highlight: false,
  },
  {
    icon: DollarSign,
    eyebrow: "Costs",
    title: "Lower costs. Higher productivity.",
    description:
      "Automate the processes eating your margin and hand the savings back to your bottom line. Less overhead, leaner operations, and a business that produces more with exactly what it has.",
    color: "#EC4899",
    highlight: false,
  },
  {
    icon: Rocket,
    eyebrow: "Productivity",
    title: "Give your team their time back.",
    description:
      "Admin, data entry, repetitive follow-up — offloaded. Your people focus on judgment, relationships, and the decisions that actually move the needle. Same headcount. Exponentially more impact.",
    color: "#8B5CF6",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    eyebrow: "Customer Service",
    title: "On call at 3am. No complaints.",
    description:
      "Instant, accurate answers around the clock — without adding a single person to payroll. Every customer gets a fast, helpful response the moment they reach out, day or night.",
    color: "#EC4899",
    highlight: false,
  },
  {
    icon: BarChart3,
    eyebrow: "Competitive Edge",
    title: "An asset that pays forever.",
    description:
      "AI compounds in value — sharper context week over week, deeper integration, and a strategic edge that grows over time. It's not a cost. It's the highest-returning investment your business can make.",
    color: "#F59E0B",
    highlight: true,
  },
];

export default function WhySynapse() {
  return (
    <section id="why" className="section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ marginBottom: "64px", maxWidth: "720px" }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#F59E0B", letterSpacing: "0.12em", marginBottom: "16px" }}>
            WHY AI. WHY NOW.
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "20px",
            }}
          >
            Your competitors aren&apos;t
            <br />
            <span className="gradient-text">waiting around.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            We believe in continuous improvement and empowerment. AI doesn&apos;t replace great people —
            it removes the grunt work that stops them from being great.
            Here&apos;s what that looks like in practice.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="why-grid"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{
                background: card.highlight ? `${card.color}08` : "#0A0A0A",
                border: `1px solid ${card.highlight ? card.color + "30" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "18px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s, transform 0.2s, background 0.2s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${card.color}50`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = card.highlight ? `${card.color}30` : "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Subtle glow for highlighted cards */}
              {card.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "160px",
                    height: "160px",
                    background: `radial-gradient(circle, ${card.color}12 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: `${card.color}15`,
                  border: `1px solid ${card.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <card.icon size={22} style={{ color: card.color }} />
              </div>

              {/* Eyebrow */}
              <p style={{ fontSize: "11px", fontWeight: 600, color: card.color, letterSpacing: "0.1em", marginBottom: "8px" }}>
                {card.eyebrow.toUpperCase()}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: "14px",
                  color: "white",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, flex: 1 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            marginTop: "48px",
            padding: "32px 40px",
            background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.06) 50%, rgba(245,158,11,0.06) 100%)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "6px" }}>
              The best time to start was yesterday.{" "}
              <span className="gradient-text">The second best is now.</span>
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
              Every week without AI is a week your competitors pull further ahead.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gradient"
            style={{ fontSize: "15px", padding: "15px 32px", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Get Started Today
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

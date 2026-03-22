"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket, DollarSign, HeadphonesIcon, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    eyebrow: "Revenue",
    title: "Your pipeline is bleeding out.",
    description:
      "Flat conversion. Stagnant growth. Every week you wait, your competitors are flooding their funnel with qualified buyers. We close the gap — fast.",
    color: "#8B5CF6",
    highlight: true,
  },
  {
    icon: Target,
    eyebrow: "Lead Capture",
    title: "Leads don't wait. Your team does.",
    description:
      "Enquiries drop after hours. Follow-up is slow. Every missed lead is revenue walking straight to your competitor. We capture, respond, and pre-qualify every single one — instantly, around the clock.",
    color: "#F59E0B",
    highlight: false,
  },
  {
    icon: DollarSign,
    eyebrow: "Costs",
    title: "Your overheads are winning.",
    description:
      "Wages, inefficiency, and manual processes are eating your margin quarter after quarter. We automate the drain. The savings go straight back to your bottom line.",
    color: "#EC4899",
    highlight: false,
  },
  {
    icon: Rocket,
    eyebrow: "Productivity",
    title: "Your best people are doing work AI should do.",
    description:
      "Admin. Data entry. Repetitive follow-up. Your sharpest minds are burning hours on the lowest-value tasks. Offload it. Same headcount — exponentially more output.",
    color: "#8B5CF6",
    highlight: false,
  },
  {
    icon: HeadphonesIcon,
    eyebrow: "Customer Service",
    title: "Slow response times are costing you daily.",
    description:
      "Every unanswered message is a lost sale, a bad review, a customer gone. Instant, accurate answers 24/7 — without adding a single person to payroll. You rest. It never does.",
    color: "#EC4899",
    highlight: false,
  },
  {
    icon: BarChart3,
    eyebrow: "Competitive Edge",
    title: "The gap is widening. Every. Single. Day.",
    description:
      "AI compounds in value — sharper context, deeper integration, harder for rivals to replicate. Your competitors who move first will be impossible to catch. Don't be the one playing catch-up.",
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
            Right now, businesses like yours are deploying AI to capture more leads, slash overheads, and outpace rivals who are still doing things manually. The window to act is open — but it won&apos;t be forever.
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

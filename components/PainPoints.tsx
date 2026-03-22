"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, HeadphonesIcon, GraduationCap } from "lucide-react";

const points = [
  {
    icon: TrendingUp,
    headline: "More revenue,",
    sub: "more growth.",
    description: "Pipeline stagnant? Conversion flat? We flood your business with qualified buyers and close the gap between potential and performance.",
    color: "#8B5CF6",
  },
  {
    icon: DollarSign,
    headline: "Lower costs,",
    sub: "higher productivity.",
    description: "Wages, overheads, and inefficiency are eating your margin. We automate the drain and hand the savings back to your bottom line.",
    color: "#EC4899",
  },
  {
    icon: Target,
    headline: "Zero leads",
    sub: "left behind.",
    description: "Enquiries dropping off after hours. Slow follow-up. Every lead captured, responded to instantly, and handed to your team pre-qualified.",
    color: "#F59E0B",
  },
  {
    icon: HeadphonesIcon,
    headline: "Customer service",
    sub: "that never sleeps.",
    description: "Slow response times cost you business every day. Instant, accurate answers around the clock — without adding a single person to payroll.",
    color: "#8B5CF6",
  },
  {
    icon: GraduationCap,
    headline: "Smarter teams,",
    sub: "from day one.",
    description: "Give every team member instant access to SOPs, policies, and expertise — without pulling a senior off their real work. Your people grow sharper, not more dependent.",
    color: "#EC4899",
  },
];

export default function PainPoints() {
  return (
    <section
      id="painpoints"
      style={{
        padding: "28px 0 48px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "14px",
          }}
          className="painpoints-grid"
        >
          {points.map((p, i) => (
            <motion.div
              key={p.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              style={{
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "28px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${p.color}50`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Icon graphic */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: `${p.color}15`,
                  border: `1px solid ${p.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  flexShrink: 0,
                }}
              >
                <p.icon size={24} style={{ color: p.color }} />
              </div>

              {/* Headline */}
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "2px",
                  color: "white",
                }}
              >
                {p.headline}
              </div>
              <div
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "14px",
                  color: p.color,
                  whiteSpace: "nowrap",
                }}
              >
                {p.sub}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  flex: 1,
                }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .painpoints-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .painpoints-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

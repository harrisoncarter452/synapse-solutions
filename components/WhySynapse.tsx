"use client";

import { motion } from "framer-motion";
import { Zap, Moon, TrendingUp, Users, BarChart3, Rocket } from "lucide-react";
import PainPointsGrid from "@/components/PainPointsGrid";

const reasons = [
  {
    icon: Rocket,
    title: "Give your team their time back.",
    description:
      "Admin, data entry, repetitive follow-up — offloaded. Your people focus on judgment, relationships, and the decisions that actually move the needle. Same headcount. Exponentially more impact.",
    color: "#8B5CF6",
  },
  {
    icon: Moon,
    title: "On call at 3am. No complaints.",
    description:
      "Every enquiry answered. Every lead captured. Every task executed — regardless of the hour or the day. Fully operational while your team rests, so nothing slips through the cracks.",
    color: "#EC4899",
  },
  {
    icon: Zap,
    title: "Zero variance. Zero excuses.",
    description:
      "Consistent precision from day one to year three. No mood swings, no dips in quality, no 'I'll circle back on that.' Reliable performance isn't an aspiration here — it's the baseline.",
    color: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Friction is the enemy. We kill it.",
    description:
      "We map every workflow, locate every drag on your operations, and automate it out of existence. Faster decisions, lower overhead, and a business that runs cleaner than it ever has.",
    color: "#8B5CF6",
  },
  {
    icon: Users,
    title: "Grow revenue. Not your roster.",
    description:
      "Triple the volume without a single new hire. AI handles the workload surge — inbound queries, pipeline management, internal requests — while your team stays locked on high-value work.",
    color: "#EC4899",
  },
  {
    icon: BarChart3,
    title: "An asset that pays forever.",
    description:
      "Unlike a subscription you forget about, AI compounds in value. Sharper context week over week, deeper integration, and a strategic edge that becomes harder for competitors to close.",
    color: "#F59E0B",
  },
];

export default function WhySynapse() {
  return (
    <section id="why" className="section-padding">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ marginBottom: "72px", maxWidth: "640px" }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#F59E0B", letterSpacing: "0.12em", marginBottom: "16px" }}>
            WHY AI. WHY NOW.
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
            Your competitors aren't
            <br />
            <span className="gradient-text">waiting around.</span>
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            We believe in continuous improvement and empowerment. AI doesn&apos;t replace great people —
            it removes the grunt work that stops them from being great.
            Here&apos;s what that looks like in practice.
          </p>
        </motion.div>

        <PainPointsGrid />

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{
                padding: "36px 32px",
                background: "#0A0A0A",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#111111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0A0A0A";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: `${reason.color}18`,
                  border: `1px solid ${reason.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <reason.icon size={20} style={{ color: reason.color }} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

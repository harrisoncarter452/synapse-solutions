"use client";

import { motion } from "framer-motion";
import ScrollArrow from "@/components/ScrollArrow";
import {
  MessageSquare,
  TrendingUp,
  Bot,
  Smartphone,
  Globe,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "AI Chatbots",
    subtitle: "Internal & External",
    summary: "Connect every customer and team member to instant answers — 24/7, on-brand, without adding headcount.",
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    accentColor: "#8B5CF6",
    description: `Every business has two frontlines — the one facing your customers, and the one facing your team. Both need to work flawlessly. Both can, with Synapse Solutions.

A synapse is the connection point where signals transfer and intelligence flows. We do exactly that for your business — bridging every gap between your customers and answers, and between your team and the knowledge they need.`,
    externalTitle: "External Chatbot — For Your Customers",
    externalDesc:
      "Connects every person who visits your website to the answer, the person, or the next step they need — 24 hours a day, 7 days a week, on-brand every time.",
    externalFeatures: [
      "Greets every website visitor and starts the conversation",
      "Answers FAQs, product questions, and pricing enquiries instantly",
      "Qualifies leads and routes them to the right person",
      "Captures contact details from visitors outside business hours",
      "Books appointments and integrates with your calendar",
      "Connects to your CRM so every interaction is logged",
      "Trained on your content, your tone, your brand",
      "Escalates gracefully to a human when needed",
    ],
    internalTitle: "Internal Chatbot — For Your Team",
    internalDesc:
      "Give every team member instant access to the knowledge they need to excel — SOPs, policies, procedures, answers — without pulling a senior off their real work. Your people grow sharper and more independent from day one.",
    internalFeatures: [
      "Instant answers on processes, policies, and procedures — no waiting",
      "Onboards new staff in days, not weeks, with guided knowledge access",
      "Surfaces the right document, SOP, or contact in seconds",
      "Seniors stop repeating themselves — their expertise scales across the team",
      "Works across Slack, Teams, or your internal tools",
      "Trained on your internal knowledge base and documentation",
      "Updates automatically when your documentation changes",
      "Available 24/7 — even outside business hours",
    ],
    stat: { value: "Instant answers", label: "for your customers and team" },
    dualColumn: true,
  },
  {
    id: "leadgen",
    icon: TrendingUp,
    title: "Advanced Lead Generation",
    subtitle: "& Management",
    summary: "We inundate your business with qualified buyers, marketing across multiple mediums — full refund if we don't deliver, no questions asked.",
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
    accentColor: "#EC4899",
    description:
      "We don't just generate leads — we flood your pipeline with qualified buyers who are ready to spend. Facebook and Google ads, cold email, SMS outreach, and more — all handled end-to-end: strategy, creatives, targeting, and ongoing management. AI qualifies every lead, nurtures them instantly, and delivers only serious prospects to your team. If we don't deliver, you get a full refund. No questions asked.",
    features: [
      "Facebook & Google ad campaigns — strategy, creatives & management all handled",
      "Cold email & SMS outreach — targeted, personalised, and fully managed",
      "Full refund if we don't deliver — zero questions asked",
      "AI-powered lead scoring — your team only speaks to serious buyers",
      "Automated follow-up sequences that feel personal, not automated",
      "Instant lead response — contacted in seconds, not hours",
      "Multi-channel nurturing across email, SMS, paid ads, and retargeting",
      "CRM enrichment and full pipeline visibility",
      "Real-time reporting on spend, lead quality, and conversion",
    ],
    stat: { value: "Full refund", label: "if we don't deliver" },
    guarantee: true,
  },
  {
    id: "agents",
    icon: Bot,
    title: "Custom AI Agents",
    subtitle: "& Digital Employees",
    summary: "Your own AI employees — working 24/7, never sick, never tired, never complaining. Built for your exact processes.",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    accentColor: "#F59E0B",
    description:
      "This isn't a chatbot that answers questions. A custom AI agent is a fully autonomous digital employee — working around the clock, 365 days a year, without a single sick day or complaint. Built specifically for your business, it connects to your tools, remembers everything, and executes complex tasks end-to-end — from your inbox to your CRM to your calendar — while your team sleeps. You own it outright. Your data never leaves your environment.",
    features: [
      "Works 24/7 — 3am on a Sunday, still on the job, never complaining",
      "Purpose-built for your specific workflows and business logic",
      "Connects to 100+ platforms — email, CRM, calendar, Slack, WhatsApp",
      "Persistent memory — learns your business, clients, and preferences over time",
      "Sends emails, books meetings, updates records, and executes multi-step workflows",
      "No sick days, no overtime, no salary — a fraction of the cost of a hire",
      "Deployed on your infrastructure — your data stays yours, always",
      "Full staff onboarding and documentation included",
    ],
    stat: { value: "Working 24/7", label: "No sick days. No breaks. No complaints.", label2: "365 days a year." },
  },
  {
    id: "design",
    icon: Globe,
    title: "Web & App Design",
    subtitle: "Digital Products",
    summary: "Websites that convert strangers into customers. Apps that delight your clients. Custom internal tools that supercharge your team. All designed and built by us.",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    accentColor: "#A78BFA",
    description:
      "We build digital products for the two audiences that matter most — the customers who buy from you, and the team who run your business. Every product is strategy-led, performance-first, and built with AI considered from day one.",
    externalTitle: "For Your Customers",
    externalDesc:
      "Your website is your hardest-working team member — and your apps are the products your customers keep coming back to. We build both with one goal: convert, retain, and grow.",
    externalFeatures: [
      "Premium websites — strategy-led, conversion-focused, built to outperform",
      "Fast, SEO-optimised, and mobile-first from the ground up",
      "AI chat and lead capture integrated from day one",
      "Customer-facing iOS, Android, and cross-platform apps",
      "Pixel-perfect interfaces that earn trust and drive action",
      "Analytics and performance tracking configured and ready",
    ],
    internalTitle: "For Your Team",
    internalDesc:
      "Off-the-shelf software wasn't built for your business. We build custom internal tools that replace the manual processes eating your team's day — purpose-built, intuitive, and powerful.",
    internalFeatures: [
      "Custom internal tools built around your exact workflows",
      "Replace spreadsheets, manual processes, and clunky software",
      "AI and automation integrated — not bolted on after",
      "Dashboards, portals, and operations software that actually gets used",
      "Fast load times, smooth interactions, accessible for every team member",
      "Ongoing support and iteration as your business evolves",
    ],
    stat: { value: "Custom tools", label: "to improve customer experience and staff productivity" },
    dualColumn: true,
  },
  {
    id: "branding",
    icon: Palette,
    title: "Graphic Design & Branding",
    subtitle: "Identity & Creative",
    summary: "A brand that commands attention and earns trust. From logo to full identity system — every visual built to make your business unforgettable.",
    gradient: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
    accentColor: "#22D3EE",
    description:
      "Your brand is the first impression you never get back. We build visual identities that are bold, cohesive, and built to last — from the logo on your business card to the creative assets running your Meta campaigns. Great design isn't decoration. It's a competitive advantage that makes everything else perform better.",
    features: [
      "Logo design and full brand identity systems",
      "Brand strategy — positioning, voice, and visual direction",
      "Social media graphics and content templates",
      "Meta ad creatives built for scroll-stopping performance",
      "Pitch decks, presentations, and sales collateral",
      "Packaging and print design",
      "Brand guidelines — so every touchpoint stays consistent",
      "Ongoing creative retainer available for growing teams",
    ],
    stat: { value: "Stand out", label: "with powerful design" },
  },
];

// ─── Summary tile grid ────────────────────────────────────────────────────────

function SummaryTile({ service, index }: { service: typeof services[0]; index: number }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="gradient-border"
      style={{
        padding: "28px",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => scrollTo(`service-${service.id}`)}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
    >
      {/* Icon */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: service.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          flexShrink: 0,
        }}
      >
        <service.icon size={20} color="white" />
      </div>

      {/* Title */}
      <h3 style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "4px" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "12px", color: service.accentColor, fontWeight: 500, marginBottom: "12px", letterSpacing: "0.02em" }}>
        {service.subtitle}
      </p>

      {/* Guarantee badge */}
      {service.guarantee && (
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(236,72,153,0.1)",
          border: "1px solid rgba(236,72,153,0.3)",
          borderRadius: "100px",
          padding: "4px 10px",
          fontSize: "11px",
          fontWeight: 600,
          color: "#EC4899",
          letterSpacing: "0.05em",
          marginBottom: "10px",
          width: "fit-content",
        }}>
          ✦ GUARANTEED RESULTS
        </div>
      )}

      {/* Summary */}
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, flex: 1, marginBottom: "20px" }}>
        {service.summary}
      </p>

      {/* Learn More */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: service.accentColor,
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        Learn More <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

// ─── Expanded service detail section ─────────────────────────────────────────

function ServiceDetail({ service, index }: { service: typeof services[0]; index: number }) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={`service-${service.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-80px" }}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 0",
        scrollMarginTop: "100px",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "52px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1, minWidth: "260px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: service.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <service.icon size={26} color="white" />
          </div>
          <div>
            <h3
              style={{
                fontSize: "clamp(26px, 3.5vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
              }}
            >
              {service.title}
            </h3>
            <p style={{ fontSize: "14px", color: service.accentColor, fontWeight: 500, marginTop: "4px" }}>
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Stat */}
        <div
          style={{
            textAlign: "right",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: service.accentColor,
              lineHeight: 1,
              marginBottom: "4px",
            }}
          >
            {service.stat.value}
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>
            {service.stat.label}
          </div>
          {"label2" in service.stat && (
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", fontWeight: 400, marginTop: "2px" }}>
              {(service.stat as { value: string; label: string; label2: string }).label2}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "17px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.8,
          maxWidth: "760px",
          marginBottom: "44px",
          whiteSpace: "pre-line",
        }}
      >
        {service.description}
      </p>

      {/* Features — dual-column layout for chatbots and design */}
      {service.dualColumn ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", marginBottom: "44px" }}>
          {/* External */}
          <div
            style={{
              background: "rgba(139,92,246,0.06)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: "14px",
              padding: "28px",
            }}
          >
            <p style={{ fontSize: "12px", color: "#8B5CF6", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "10px" }}>
              EXTERNAL
            </p>
            <h4 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>{service.externalTitle?.replace("External Chatbot — ", "")}</h4>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "20px" }}>
              {service.externalDesc}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
              {service.externalFeatures?.map((f) => (
                <li key={f} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                  <CheckCircle size={14} style={{ color: "#8B5CF6", flexShrink: 0, marginTop: "2px" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal */}
          <div
            style={{
              background: "rgba(139,92,246,0.06)",
              border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: "14px",
              padding: "28px",
            }}
          >
            <p style={{ fontSize: "12px", color: "#8B5CF6", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "10px" }}>
              INTERNAL
            </p>
            <h4 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "6px" }}>{service.internalTitle?.replace("Internal Chatbot — ", "")}</h4>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "20px" }}>
              {service.internalDesc}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
              {service.internalFeatures?.map((f) => (
                <li key={f} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                  <CheckCircle size={14} style={{ color: "#8B5CF6", flexShrink: 0, marginTop: "2px" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
            marginBottom: "44px",
          }}
        >
          {service.features?.map((feature) => (
            <div
              key={feature}
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                padding: "16px 18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
              }}
            >
              <CheckCircle size={15} style={{ color: service.accentColor, flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{feature}</span>
            </div>
          ))}
        </div>
      )}

      {/* Guarantee callout — lead gen only */}
      {service.guarantee && (
        <div style={{
          background: "rgba(236,72,153,0.07)",
          border: "1px solid rgba(236,72,153,0.25)",
          borderRadius: "14px",
          padding: "24px 28px",
          marginBottom: "28px",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
        }}>
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "rgba(236,72,153,0.15)",
            border: "1px solid rgba(236,72,153,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "18px",
          }}>
            ✦
          </div>
          <div>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "6px" }}>
              Full refund if we don&apos;t deliver — no questions asked.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
              We handle Facebook ads, Google ads, cold email, SMS outreach, and campaign management end-to-end.
              We inundate your pipeline with qualified buyers — or you get every cent back.
              No lock-in contracts, no excuses, no risk.
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={scrollToContact}
        className="btn-gradient"
        style={{ fontSize: "15px", padding: "14px 32px" }}
      >
        Request a Quote — {service.title} <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="services">
      {/* ── Part 1: Summary tile grid ── */}
      <div
        className="section-padding"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 100%)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#8B5CF6", letterSpacing: "0.12em", marginBottom: "16px" }}>
              WHAT WE DO
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
              Five ways we grow
              <br />
              <span className="gradient-text">your business</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
              Select any service to learn more, or scroll down to explore each one in detail.
            </p>
          </motion.div>

          {/* Top row — 3 tiles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            {services.slice(0, 3).map((s, i) => (
              <SummaryTile key={s.id} service={s} index={i} />
            ))}
          </div>

          {/* Bottom row — 2 tiles centred */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
              gap: "16px",
              maxWidth: "680px",
              margin: "0 auto",
            }}
            className="bottom-tiles"
          >
            {services.slice(3).map((s, i) => (
              <SummaryTile key={s.id} service={s} index={i + 3} />
            ))}
          </div>
        </div>
      </div>

      <ScrollArrow targetId="service-chatbots" />

      {/* ── Part 2: Expanded service details ── */}
      <div
        id="service-details"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {services.map((s, i) => (
          <div key={s.id}>
            <ServiceDetail service={s} index={i} />
            {i < services.length - 1 && (
              <ScrollArrow targetId={`service-${services[i + 1].id}`} />
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bottom-tiles {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

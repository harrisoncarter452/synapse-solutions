"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "AI Chatbots (Internal & External)",
  "Advanced Lead Generation & Management",
  "Custom AI Agents / Digital Employees",
  "Web & App Design (Customer-facing & Internal Tools)",
  "Graphic Design & Branding",
  "Multiple Services / Not Sure Yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    color: "white",
    fontSize: "15px",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.6)",
    marginBottom: "8px",
    letterSpacing: "0.02em",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.05) 50%, transparent 100%)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-quote"
        >
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#8B5CF6", letterSpacing: "0.12em", marginBottom: "16px" }}>
              GET IN TOUCH
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Ready to close the
              <br />
              <span className="gradient-text">gap in your business?</span>
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "40px" }}>
              Tell us about your business and what you're trying to achieve.
              We'll get back to you within one business day with a clear,
              no-obligation quote.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Email", value: "info@synapse-ai-solutions.com" },
                { label: "Response time", value: "Within 1 business day" },
                { label: "No obligation", value: "Quote is always free" },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                      flexShrink: 0,
                      marginTop: "7px",
                    }}
                  />
                  <div>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "2px" }}>
                      {label}
                    </span>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="gradient-border form-card"
            style={{ padding: "40px" }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle size={48} style={{ color: "#8B5CF6", margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
                  Message sent!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  Thanks for reaching out. We'll review your request and get
                  back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "24px",
                    background: "none",
                    border: "1px solid rgba(139,92,246,0.4)",
                    color: "#8B5CF6",
                    padding: "10px 24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "28px", letterSpacing: "-0.02em" }}>
                  Request a Quote
                </h3>

                {/* Row: Name + Email */}
                <div className="form-name-email" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                {/* Company */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Company / Business</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your business name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Service */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Service Interested In *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#0A0A0A" }}>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#0A0A0A" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Approximate Budget (USD)</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#0A0A0A" }}>Select range...</option>
                    <option value="Under $2,000" style={{ background: "#0A0A0A" }}>Under $2,000</option>
                    <option value="$2,000 – $5,000" style={{ background: "#0A0A0A" }}>$2,000 – $5,000</option>
                    <option value="$5,000 – $15,000" style={{ background: "#0A0A0A" }}>$5,000 – $15,000</option>
                    <option value="$15,000+" style={{ background: "#0A0A0A" }}>$15,000+</option>
                    <option value="Not sure yet" style={{ background: "#0A0A0A" }}>Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={labelStyle}>Tell us about your project *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your business, what you're trying to achieve, and any specific challenges you're facing..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {status === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#F87171",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please email us directly at info@synapse-ai-solutions.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gradient"
                  style={{ width: "100%", justifyContent: "center", fontSize: "15px", opacity: status === "loading" ? 0.7 : 1 }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Quote Request <Send size={16} />
                    </>
                  )}
                </button>

                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: "16px" }}>
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .grid-quote {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}

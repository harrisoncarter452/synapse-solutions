"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Image from "next/image";

type Message = {
  id: number;
  from: "syn" | "user";
  text: string;
  quickReplies?: string[];
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    from: "syn",
    text: "Hey! I'm Syn, your Synapse Solutions assistant. What can I help you with today?\n\nInterested in a chatbot like me? I can help your customers and team 24/7.",
    quickReplies: [
      "What services do you offer?",
      "Tell me about AI Chatbots",
      "How does lead gen work?",
      "I want a quote",
    ],
  },
];

const RESPONSES: Record<string, { text: string; quickReplies: string[] }> = {
  "What services do you offer?": {
    text: "We offer 5 services: AI Chatbots (internal & external), Advanced Lead Generation with guaranteed results, Custom AI Agents & Digital Employees, Web & App Design, and Graphic Design & Branding. Which interests you most?",
    quickReplies: ["AI Chatbots", "Lead Generation", "AI Agents", "Design services"],
  },
  "Tell me about AI Chatbots": {
    text: "Our AI Chatbots work on two fronts. Externally — answering customer questions, capturing leads, and booking appointments 24/7. Internally — giving your team instant access to SOPs, policies, and knowledge. Both live in 5–10 days.",
    quickReplies: ["How much does it cost?", "I want a quote", "Tell me more"],
  },
  "How does lead gen work?": {
    text: "We run multi-channel campaigns end-to-end — Facebook and Google ads, cold email, SMS outreach, strategy, creatives, and management, all handled by us. AI qualifies every lead before they reach your team. Best part: if we don't deliver qualified leads, you get a full refund. No questions asked.",
    quickReplies: ["That sounds great", "I want a quote", "What other services?"],
  },
  "I want a quote": {
    text: "Perfect — let's get you sorted. Fill out our quote form and we'll come back to you within one business day with a clear, no-obligation proposal.",
    quickReplies: ["Take me to the form"],
  },
  "Take me to the form": {
    text: "Heading there now! 👇",
    quickReplies: [],
  },
  "AI Chatbots": {
    text: "Our AI Chatbots are trained on your content, your tone, and your brand. External bots handle customers 24/7 — internal bots give your team instant answers. Live in 5–10 days.",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "Lead Generation": {
    text: "We flood your pipeline with qualified buyers using Facebook ads, Google ads, cold email, and SMS outreach — all fully managed. AI qualification included. Full refund guarantee if we don't deliver. Zero risk.",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "AI Agents": {
    text: "Custom AI Agents are autonomous digital employees built for your exact business. They connect to 100+ platforms, learn over time, and work 24/7 — no sick days, no salary, no complaints.",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "Design services": {
    text: "We do Web & App Design (customer-facing and internal tools) and Graphic Design & Branding (logos, identity, Meta creatives, pitch decks). All built to make your business look as good as it performs.",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "How much does it cost?": {
    text: "All our services are quoted based on your specific needs — no generic pricing. Request a quote and we'll give you a clear, honest number within one business day.",
    quickReplies: ["I want a quote"],
  },
  "That sounds great": {
    text: "It really is. No lock-in contracts, no upfront risk — just a consistent pipeline of buyers. Want to get started?",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "Tell me more": {
    text: "The internal chatbot alone can save hours per week — onboarding new staff in days, not weeks, and cutting the constant 'where is X document?' interruptions. Want to explore it for your business?",
    quickReplies: ["I want a quote", "What other services?"],
  },
  "What other services?": {
    text: "We also do Advanced Lead Generation (guaranteed results), Custom AI Agents, Web & App Design, and Graphic Design & Branding. What's catching your eye?",
    quickReplies: ["Lead Generation", "AI Agents", "Design services", "I want a quote"],
  },
};

const FALLBACK = {
  text: "Great question — I'd love to help you explore that. The best next step is a quick quote request so our team can give you a tailored answer.",
  quickReplies: ["I want a quote", "What services do you offer?"],
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [notified, setNotified] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(10);

  // Auto-open after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      setNotified(false);
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Show notification dot when closed
  useEffect(() => {
    if (!open) setNotified(true);
  }, [open]);

  const addSynMessage = (response: typeof FALLBACK) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId.current++, from: "syn", text: response.text, quickReplies: response.quickReplies },
      ]);
    }, 900);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: nextId.current++, from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    if (text === "Take me to the form") {
      setTimeout(() => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }, 600);
      addSynMessage({ text: "Heading there now! Fill in your details and we'll be in touch.", quickReplies: [] });
      return;
    }

    const response = RESPONSES[text] ?? FALLBACK;
    addSynMessage(response);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => { setOpen(true); setNotified(false); }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 999,
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(139,92,246,0.45)",
            }}
          >
            <Image src="/brain.png" alt="Syn" width={58} height={58} style={{ objectFit: "contain", padding: "1px" }} />
            {notified && (
              <span style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#F59E0B",
                border: "2px solid #0A0A0A",
              }} />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 999,
              width: "360px",
              maxWidth: "calc(100vw - 32px)",
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.15)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <Image src="/brain.png" alt="Syn" width={52} height={52} style={{ objectFit: "contain", padding: "1px" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>Syn</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", marginTop: "3px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                  Synapse Solutions · Online
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => setOpen(false)} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "6px", width: "28px", height: "28px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X size={14} color="white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxHeight: "380px",
              minHeight: "200px",
            }}>
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div style={{
                    display: "flex",
                    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                    alignItems: "flex-end",
                    gap: "8px",
                  }}>
                    {msg.from === "syn" && (
                      <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #8B5CF6, #EC4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                        <Image src="/brain.png" alt="Syn" width={40} height={40} style={{ objectFit: "contain", padding: "1px" }} />
                      </div>
                    )}
                    <div style={{
                      maxWidth: "78%",
                      padding: "10px 14px",
                      borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                      background: msg.from === "user" ? "linear-gradient(135deg, #8B5CF6, #EC4899)" : "rgba(255,255,255,0.06)",
                      color: "white",
                      fontSize: "14px",
                      lineHeight: 1.55,
                    }}>
                      {msg.text}
                    </div>
                  </div>

                  {/* Quick replies */}
                  {msg.from === "syn" && msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div style={{ marginTop: "8px", marginLeft: "34px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          style={{
                            background: "rgba(139,92,246,0.1)",
                            border: "1px solid rgba(139,92,246,0.3)",
                            borderRadius: "100px",
                            color: "#A78BFA",
                            fontSize: "12px",
                            fontWeight: 500,
                            padding: "5px 12px",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "background 0.15s, border-color 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(139,92,246,0.2)";
                            e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                            e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)";
                          }}
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "linear-gradient(135deg, #8B5CF6, #EC4899)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden" }}>
                    <Image src="/brain.png" alt="Syn" width={32} height={32} style={{ objectFit: "contain" }} />
                  </div>
                  <div style={{ padding: "10px 16px", borderRadius: "14px 14px 14px 4px", background: "rgba(255,255,255,0.06)", display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7, delay: i * 0.15 }}
                        style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8B5CF6", display: "block" }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: "12px 14px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSend(input); }}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={() => handleSend(input)}
                disabled={!input.trim()}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: input.trim() ? "linear-gradient(135deg, #8B5CF6, #EC4899)" : "rgba(255,255,255,0.06)",
                  border: "none",
                  cursor: input.trim() ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
              >
                <Send size={15} color={input.trim() ? "white" : "rgba(255,255,255,0.3)"} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

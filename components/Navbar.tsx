"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      {/* ── Desktop layout ── */}
      <div className="nav-desktop">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "110px" }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Image
                src="/logo.png"
                alt="Synapse Solutions"
                width={320}
                height={80}
                style={{ objectFit: "contain" }}
              />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "40px", flexWrap: "nowrap" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                    transition: "color 0.2s",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="btn-gradient"
                style={{ padding: "10px 24px", fontSize: "14px" }}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile layout — logo pinned left, links scroll right ── */}
      <div className="nav-mobile">
        {/* Logo — stays fixed */}
        <div className="nav-mobile-logo">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <Image
              src="/logo.png"
              alt="Synapse Solutions"
              width={150}
              height={38}
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="nav-mobile-scroll">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: "0.03em",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                flexShrink: 0,
                padding: "6px 4px",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="btn-gradient"
            style={{ padding: "9px 18px", fontSize: "13px", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Request a Quote
          </button>
        </div>
      </div>

      <style>{`
        .nav-desktop { display: block; }
        .nav-mobile  { display: none; }

        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-mobile {
            display: flex;
            align-items: center;
            height: 64px;
            overflow: hidden;
          }
          .nav-mobile-logo {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 14px 0 16px;
            border-right: 1px solid rgba(255,255,255,0.08);
            background: inherit;
          }
          .nav-mobile-scroll {
            display: flex;
            align-items: center;
            gap: 20px;
            overflow-x: auto;
            padding: 0 20px;
            height: 100%;
            flex: 1;
            /* hide scrollbar */
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .nav-mobile-scroll::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
}

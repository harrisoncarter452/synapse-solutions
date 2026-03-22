"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="navbar-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "110px" }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
          >
            <Image
              src="/logo.png"
              alt="Synapse Solutions"
              width={320}
              height={80}
              className="navbar-logo"
              style={{ objectFit: "contain" }}
            />
          </button>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden md:flex">
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden"
            style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10,10,10,0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "16px",
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="btn-gradient"
                style={{ width: "fit-content" }}
              >
                Request a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

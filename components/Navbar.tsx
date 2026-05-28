"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center"
      style={{
        background: scrolled
          ? "rgba(6,6,6,0.95)"
          : "rgba(8,8,8,0.9)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "980px",
        padding: "0 8px 0 22px",
        height: "46px",
        width: "max-content",
        maxWidth: "92vw",
        transition: "background 0.3s",
      }}
    >
      <ul className="flex items-center list-none">
        {links.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-[13px] text-[var(--dim)] px-[13px] leading-[46px] block transition-colors duration-200 hover:text-white bg-transparent border-none cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          </li>
        ))}
        <div
          className="w-px h-[18px] mx-1"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />
        <li>
          <div
            className="flex items-center gap-[6px] text-[12px] text-[var(--dim)] cursor-pointer whitespace-nowrap ml-1"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "980px",
              padding: "5px 13px",
            }}
          >
            tawfiqtech.ca ↗
          </div>
        </li>
      </ul>
      <button
        onClick={() => scrollTo("#contact")}
        className="text-[12px] font-medium cursor-pointer ml-2 whitespace-nowrap transition-opacity duration-200 hover:opacity-85"
        style={{
          background: "var(--white)",
          color: "#000",
          border: "none",
          borderRadius: "980px",
          padding: "8px 18px",
          fontFamily: "inherit",
        }}
      >
        Get started
      </button>
    </nav>
  );
}

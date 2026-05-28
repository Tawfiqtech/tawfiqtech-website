"use client";

const logos = [
  { name: "Next.js", color: "#ffffff", icon: "▲" },
  { name: "n8n", color: "#EA4B71", icon: "⚡" },
  { name: "Twilio", color: "#F22F46", icon: "◎" },
  { name: "Anthropic", color: "#CC785C", icon: "◈" },
  { name: "Make.com", color: "#6D00CC", icon: "⬡" },
  { name: "Netlify", color: "#00C7B7", icon: "◻" },
  { name: "Google Calendar", color: "#4285F4", icon: "◆" },
];

const stats = [
  { val: "24", unit: "h", desc: "AI handles leads around the clock — no missed calls" },
  { val: "7",  unit: "d", desc: "Starter sites go live in as little as 5–7 business days" },
  { val: "3",  unit: "x", desc: "Average lead response improvement with SMS automation" },
  { val: "$0", unit: " setup", desc: "Fixed-price packages, no hidden fees or surprise charges" },
];

export default function LogosAndStats() {
  return (
    <>
      <div className="px-8 py-6" style={{ borderTop: "1px solid var(--faint)", borderBottom: "1px solid var(--faint)" }}>
        <div className="flex gap-10 items-center justify-center flex-wrap">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center gap-2" style={{ opacity: 0.8 }}>
              <span style={{ color: l.color, fontSize: "16px" }}>{l.icon}</span>
              <span className="text-[12px] font-medium tracking-[0.02em]" style={{ color: l.color }}>{l.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4" style={{ borderBottom: "1px solid var(--faint)" }}>
        {stats.map((s, i) => (
          <div key={i} className="px-8 py-10 relative overflow-hidden" style={{ borderRight: i < stats.length - 1 ? "1px solid var(--faint)" : "none" }}>
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
            <div className="font-semibold text-white leading-none mb-2" style={{ fontSize: "40px", letterSpacing: "-0.04em" }}>
              {s.val}<span className="text-[22px] text-[var(--dimmer)]">{s.unit}</span>
            </div>
            <div className="text-[12px] text-[var(--dim)] font-light leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

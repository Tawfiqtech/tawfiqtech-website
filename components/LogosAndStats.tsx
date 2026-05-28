const logos = [
  "▲ Next.js", "⚡ n8n", "◎ Twilio",
  "◈ Anthropic", "⬡ Make.com", "◻ Netlify", "◆ Google Calendar",
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
      {/* Logos */}
      <div
        className="px-8 py-6"
        style={{ borderTop: "1px solid var(--faint)", borderBottom: "1px solid var(--faint)" }}
      >
        <div className="flex gap-10 items-center justify-center flex-wrap">
          {logos.map((l) => (
            <span
              key={l}
              className="text-[12px] font-medium flex items-center gap-[5px] tracking-[0.02em]"
              style={{ color: "rgba(255,255,255,0.13)" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="grid grid-cols-4"
        style={{ borderBottom: "1px solid var(--faint)" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="px-8 py-10 relative overflow-hidden"
            style={{
              borderRight: i < stats.length - 1 ? "1px solid var(--faint)" : "none",
            }}
          >
            {/* top shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
            />
            <div
              className="font-semibold text-white leading-none mb-2"
              style={{ fontSize: "40px", letterSpacing: "-0.04em" }}
            >
              {s.val}
              <span className="text-[22px] text-[var(--dimmer)]">{s.unit}</span>
            </div>
            <div className="text-[12px] text-[var(--dim)] font-light leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

"use client";

const logos = [
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  {
    name: "n8n",
    img: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
    invert: false,
  },
  {
    name: "Claude",
    img: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png",
    invert: false,
  },
  {
    name: "Netlify",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    invert: false,
  },
  {
    name: "Google Calendar",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    invert: false,
  },
  {
    name: "Google Sheets",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    invert: false,
  },
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
      {/* Logo bar — icons only, no labels */}
      <div className="px-6 py-6" style={{ borderTop: "1px solid var(--faint)", borderBottom: "1px solid var(--faint)" }}>
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center" style={{ opacity: 0.75 }}>
              <img
                src={l.img}
                alt={l.name}
                width={24}
                height={24}
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  filter: l.invert ? "invert(1)" : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats grid: 2x2 on mobile, 4-col on desktop */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ borderBottom: "1px solid var(--faint)" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="px-6 py-8 md:px-8 md:py-10 relative overflow-hidden"
            style={{
              borderRight: (i % 2 === 0) ? "1px solid var(--faint)" : "none",
              borderBottom: i < 2 ? "1px solid var(--faint)" : "none",
            }}
          >
            <div
              className="md:block absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
            />
            <div className="font-semibold text-white leading-none mb-2" style={{ fontSize: "clamp(28px, 5vw, 40px)", letterSpacing: "-0.04em" }}>
              {s.val}<span className="text-[18px] md:text-[22px] text-[var(--dimmer)]">{s.unit}</span>
            </div>
            <div className="text-[12px] text-[var(--dim)] font-light leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

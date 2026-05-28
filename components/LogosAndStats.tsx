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
    name: "Twilio",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twilio.svg",
    invert: false,
    color: "#F22F46",
  },
  {
    name: "Anthropic",
    img: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4",
    invert: false,
  },
  {
    name: "Make.com",
    img: "https://images.ctfassets.net/qqlj6g4ee76j/1RmS7nlGFUcMxQlRpFnJKg/7e49e7b40d6e2e59282d14b694e97b87/Make-Logo-RGB.png",
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
            <div key={l.name} className="flex items-center gap-2" style={{ opacity: 0.85 }}>
              <img
                src={l.img}
                alt={l.name}
                width={20}
                height={20}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  filter: l.invert ? "invert(1)" : "none",
                }}
              />
              <span className="text-[12px] font-medium tracking-[0.02em] text-white">{l.name}</span>
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

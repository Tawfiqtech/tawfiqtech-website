"use client";

const steps = [
  {
    num: "STEP 01",
    icon: "📞",
    title: "Discovery call",
    desc: "A 30-minute call to understand your business, your customers, and exactly what's costing you leads right now.",
  },
  {
    num: "STEP 02",
    icon: "⚙️",
    title: "Build & review",
    desc: "We build your site and automations, then walk you through everything before anything goes live. You approve it first.",
  },
  {
    num: "STEP 03",
    icon: "🚀",
    title: "Launch & support",
    desc: "Go live on your domain with your automations running and a full month of hands-on support included in every package.",
  },
];

export default function Process() {
  return (
    <div
      id="how"
      className="py-28 px-8 relative overflow-hidden"
      style={{ background: "#030303", borderTop: "1px solid var(--faint)", borderBottom: "1px solid var(--faint)" }}
    >
      {/* subtle horizontal line */}
      <div
        className="absolute top-1/2 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
      />

      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--dimmer)] mb-[14px]">
          The process
        </p>
        <h2
          className="font-semibold mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
        >
          From brief to live
          <br />
          <span style={{ color: "rgba(255,255,255,0.18)" }}>in under two weeks.</span>
        </h2>
        <p className="text-[14px] text-[var(--dim)] font-light leading-[1.72] max-w-[400px] mx-auto mb-14">
          No lengthy back-and-forth, no surprises — just a clean three-step process.
        </p>

        <div
          className="grid grid-cols-3 gap-px rounded-[18px] overflow-hidden"
          style={{ background: "var(--faint)" }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="text-left"
              style={{ background: "#030303", padding: "2.5rem 2.25rem" }}
            >
              <p className="text-[10px] text-[var(--dimmer)] tracking-[0.1em] mb-6">{step.num}</p>
              <div
                className="w-[38px] h-[38px] rounded-[9px] flex items-center justify-center text-[16px] mb-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {step.icon}
              </div>
              <p
                className="font-semibold mb-[10px]"
                style={{ fontSize: "18px", letterSpacing: "-0.02em" }}
              >
                {step.title}
              </p>
              <p className="text-[13px] text-[var(--dim)] font-light leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

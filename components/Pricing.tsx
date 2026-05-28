"use client";

const tiers = [
  {
    tier: "STARTER",
    name: "Starter",
    desc: "Get online with a site that looks professional and captures every lead.",
    price: "$650",
    meta: "Fixed price · 5–7 business days",
    featHdr: "Includes",
    feats: [
      "5-page professional website",
      "Mobile-responsive design",
      "Contact & quote form",
      "Instant SMS lead notification",
      "1 month of support",
    ],
    featured: false,
    btnLabel: "Learn more",
  },
  {
    tier: "GROWTH · MOST POPULAR",
    name: "Growth",
    desc: "Your site plus automations that keep working while you're on the job.",
    price: "$1,200",
    meta: "Fixed price · 7–10 business days",
    featHdr: "Everything in Starter, plus",
    feats: [
      "Auto email & SMS reply to new leads",
      "Online booking + Google Calendar sync",
      "1 month of support",
    ],
    featured: true,
    btnLabel: "Get started",
  },
  {
    tier: "PREMIUM",
    name: "Premium",
    desc: "A fully automated front office. AI handles your leads around the clock.",
    price: "$2,200",
    meta: "Custom quote · Priority delivery",
    featHdr: "Everything in Growth, plus",
    feats: [
      "AI chatbot or receptionist — 24/7",
      "Custom n8n automation workflow",
      "Dedicated support",
    ],
    featured: false,
    btnLabel: "Get a quote",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-8 max-w-[1100px] mx-auto">
      <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--dimmer)] mb-[14px]">
        Pricing
      </p>
      <h2
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
      >
        Fixed prices.
        <br />
        <span style={{ color: "rgba(255,255,255,0.18)" }}>No surprises.</span>
      </h2>
      <p className="text-[14px] text-[var(--dim)] font-light leading-[1.72] max-w-[400px] mb-12">
        Every package is a flat rate. You know exactly what you&apos;re getting before we start.
      </p>

      {/* Cards */}
      <div
        className="grid grid-cols-3 gap-px rounded-[18px] overflow-hidden"
        style={{ background: "var(--faint)" }}
      >
        {tiers.map((t) => (
          <div
            key={t.name}
            className="flex flex-col relative overflow-hidden"
            style={{ background: t.featured ? "#070707" : "var(--bg)", padding: "2.25rem 2rem" }}
          >
            {t.featured && (
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
              />
            )}
            <p className="text-[10px] text-[var(--dimmer)] tracking-[0.1em] uppercase mb-4">{t.tier}</p>
            <p className="font-semibold mb-[6px]" style={{ fontSize: "20px", letterSpacing: "-0.025em" }}>{t.name}</p>
            <p className="text-[12.5px] text-[var(--dim)] font-light leading-[1.65] mb-6">{t.desc}</p>
            <p className="font-semibold leading-none mb-1" style={{ fontSize: "44px", letterSpacing: "-0.04em" }}>{t.price}</p>
            <p className="text-[11px] text-[var(--dimmer)] mb-6">{t.meta}</p>
            <hr style={{ border: "none", borderTop: "1px solid var(--faint)", marginBottom: "1.25rem" }} />
            <p className="text-[10px] text-[var(--dimmer)] tracking-[0.08em] uppercase mb-[10px]">{t.featHdr}</p>
            {t.feats.map((f) => (
              <div key={f} className="flex gap-2 text-[12.5px] text-[var(--dim)] font-light leading-[1.6] mb-[7px]">
                <span className="text-[var(--dimmer)] text-[11px] mt-[2px] flex-shrink-0">—</span>
                {f}
              </div>
            ))}
            <div className="flex-1" />
            <button
              className="w-full py-[11px] rounded-[980px] text-[13px] font-medium cursor-pointer mt-6 transition-opacity duration-200 hover:opacity-[0.78]"
              style={
                t.featured
                  ? { background: "var(--white)", color: "#000", border: "none", fontFamily: "inherit" }
                  : { background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "var(--dim)", fontFamily: "inherit" }
              }
            >
              {t.btnLabel}
            </button>
          </div>
        ))}
      </div>

      {/* Retainer */}
      <div
        className="rounded-[14px] flex items-center justify-between gap-8 mt-px relative overflow-hidden"
        style={{
          background: "var(--faint)",
          border: "1px solid rgba(255,255,255,0.05)",
          padding: "2rem 2.25rem",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }}
        />
        <div>
          <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--dimmer)] mb-[6px]">Add-on</p>
          <p className="font-semibold mb-[6px]" style={{ fontSize: "17px", letterSpacing: "-0.02em" }}>Monthly maintenance.</p>
          <p className="text-[13px] text-[var(--dim)] font-light leading-[1.65] max-w-[380px]">
            Hosting, uptime monitoring, automation upkeep, content updates, and priority support. Everything stays running without you thinking about it.
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-semibold" style={{ fontSize: "30px", letterSpacing: "-0.03em" }}>$150–$250</p>
          <p className="text-[11px] text-[var(--dimmer)] mt-[3px]">per month</p>
        </div>
      </div>
    </section>
  );
}

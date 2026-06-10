"use client";

const nodes = [
  { icon: "🏠", name: "Arctic Air", val: "+12 bookings", pos: "top-[29%] left-[5%]" },
  { icon: "✦",  name: "Green Haven", val: "+8 leads",    pos: "top-[23%] right-[6%]" },
  { icon: "⬡",  name: "Essence Detail", val: "+19 calls", pos: "bottom-[29%] left-[4%]" },
  { icon: "◈",  name: "PlumbFast", val: "+6 jobs",       pos: "bottom-[27%] right-[5%]" },
];

const bars = [28, 50, 38, 72, 55, 88, 62, 44, 80, 33, 95, 58];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 pt-32 pb-20">
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-60px", right: "-40px",
          width: "60%", height: "75%",
          background: "radial-gradient(ellipse at 65% 25%, rgba(150,180,155,0.26) 0%, rgba(110,145,120,0.10) 35%, transparent 65%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-80px", left: "-60px",
          width: "38%", height: "45%",
          background: "radial-gradient(ellipse, rgba(120,145,128,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none grid-texture" />

      {/* Connector lines — hidden on mobile */}
      <div className="hidden md:block absolute top-[37%] left-0 w-[20%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07))" }} />
      <div className="hidden md:block absolute top-[32%] right-0 w-[22%] h-px pointer-events-none"
        style={{ background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.07))" }} />
      <div className="hidden md:block absolute bottom-[32%] left-0 w-[15%] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05))" }} />
      <div className="hidden md:block absolute bottom-[29%] right-0 w-[18%] h-px pointer-events-none"
        style={{ background: "linear-gradient(270deg, transparent, rgba(255,255,255,0.05))" }} />

      {/* Floating nodes — hidden on mobile */}
      {nodes.map((node) => (
        <div key={node.name} className={`hidden md:flex absolute items-center gap-[9px] ${node.pos}`}>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] flex-shrink-0"
            style={{
              background: "rgba(18,18,18,0.95)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            {node.icon}
          </div>
          <div>
            <div className="text-[12px] text-[var(--off)]">• {node.name}</div>
            <div className="text-[11px] text-[var(--dimmer)] mt-[1px]">{node.val}</div>
          </div>
        </div>
      ))}

      {/* Live chip — hidden on mobile */}
      <div
        className="hidden md:flex absolute top-[30%] right-[13%] items-center gap-[6px] text-[11px] text-[var(--dim)]"
        style={{
          background: "rgba(14,14,14,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          padding: "8px 12px",
        }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-[#4ade80] flex-shrink-0 animate-pulse-slow" />
        AI receptionist active
      </div>

      {/* Stat chip — hidden on mobile */}
      <div
        className="hidden md:block absolute bottom-[33%] left-[13%]"
        style={{
          background: "rgba(14,14,14,0.9)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "8px",
          padding: "10px 14px",
        }}
      >
        <div className="text-[18px] font-semibold tracking-tight text-white">98%</div>
        <div className="text-[10px] text-[var(--dimmer)] mt-[2px] tracking-[0.04em]">LEAD CAPTURE RATE</div>
      </div>

      {/* Play button — hidden on mobile */}
      <div
        className="hidden md:flex absolute top-[17%] left-1/2 -translate-x-1/2 w-[38px] h-[38px] rounded-full items-center justify-center cursor-pointer text-[11px] text-[var(--dim)] transition-colors duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        ▶
      </div>

      {/* Mobile stat strip — visible only on mobile */}
      <div className="flex md:hidden items-center gap-4 mb-6 w-full justify-center flex-wrap">
        <div
          className="flex items-center gap-[6px] text-[11px] text-[var(--dim)]"
          style={{
            background: "rgba(14,14,14,0.9)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "7px 11px",
          }}
        >
          <div className="w-[6px] h-[6px] rounded-full bg-[#4ade80] flex-shrink-0 animate-pulse-slow" />
          AI receptionist active
        </div>
        <div
          style={{
            background: "rgba(14,14,14,0.9)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px",
            padding: "7px 11px",
          }}
        >
          <span className="text-[15px] font-semibold tracking-tight text-white">98%</span>
          <span className="text-[10px] text-[var(--dimmer)] ml-[5px] tracking-[0.04em]">LEAD CAPTURE RATE</span>
        </div>
      </div>

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 text-[12px] text-[var(--dim)] mb-8 cursor-pointer transition-colors duration-200 hover:border-white/20 animate-fade-up"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "980px",
          padding: "7px 16px",
        }}
      >
        <div
          className="w-[17px] h-[17px] rounded-full flex items-center justify-center text-[9px]"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          ⚡
        </div>
        Now serving Metro Vancouver &nbsp;→
      </div>

      {/* Headline */}
      <h1
        className="text-center font-semibold mb-5 max-w-[840px] animate-fade-up-delay-1"
        style={{ fontSize: "clamp(38px, 6.5vw, 80px)", letterSpacing: "-0.038em", lineHeight: "1.04" }}
      >
        Your website.{" "}
        <br />
        Your leads.{" "}
        <span style={{ color: "rgba(255,255,255,0.22)" }}>Automated.</span>
      </h1>

      {/* Subline */}
      <p
        className="text-[15px] text-[var(--dim)] text-center mb-10 max-w-[480px] font-light animate-fade-up-delay-2"
        style={{ lineHeight: "1.7" }}
      >
        Websites and AI automations for local service businesses — built to
        capture every lead while you&apos;re{" "}
        <span style={{ color: "rgba(255,255,255,0.48)" }}>out on the job.</span>
      </p>

      {/* CTAs */}
      <div className="flex gap-[10px] justify-center flex-wrap relative z-10 animate-fade-up-delay-3">
        <button
          onClick={() => scrollTo("#services")}
          className="flex items-center gap-[6px] text-[14px] font-normal cursor-pointer transition-colors duration-200"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--white)",
            padding: "12px 26px",
            borderRadius: "980px",
            fontFamily: "inherit",
          }}
        >
          See services &nbsp;↗
        </button>
        <button
          onClick={() => scrollTo("#pricing")}
          className="text-[14px] font-medium cursor-pointer transition-opacity duration-200 hover:opacity-[0.88]"
          style={{
            background: "var(--white)",
            color: "#000",
            border: "none",
            padding: "12px 26px",
            borderRadius: "980px",
            fontFamily: "inherit",
          }}
        >
          View pricing
        </button>
      </div>

      {/* Bar chart */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end gap-2 h-[100px] pointer-events-none opacity-60">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-px bar-grow"
            style={{
              height: `${h}%`,
              background: "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)",
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-8 flex items-center gap-[10px] text-[11px] text-[var(--dimmer)]">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] text-[var(--dim)]"
          style={{ border: "1px solid rgba(255,255,255,0.09)" }}
        >
          ↓
        </div>
        <span className="hidden sm:inline">01 / 04 · Scroll down</span>
      </div>

      <div className="absolute bottom-8 right-8 text-[10px] text-[var(--dimmer)] tracking-[0.08em]">
        TawfiqTech · 2026
      </div>
    </section>
  );
}

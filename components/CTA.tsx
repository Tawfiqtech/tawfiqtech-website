"use client";

const badges = ["No commitment", "Free 30-min call", "Metro Vancouver", "Fixed pricing"];

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-40 px-8 text-center relative overflow-hidden"
      style={{ borderTop: "1px solid var(--faint)" }}
    >
      {/* glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "400px",
          background: "radial-gradient(ellipse, rgba(150,185,158,0.11) 0%, transparent 60%)",
        }}
      />
      {/* grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <h2
          className="font-semibold mb-5"
          style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.038em", lineHeight: "1.08" }}
        >
          Ready to stop
          <br />
          <span style={{ color: "rgba(255,255,255,0.18)" }}>missing leads?</span>
        </h2>
        <p className="text-[15px] text-[var(--dim)] font-light mb-10">
          Book a free 30-minute discovery call. No commitment — just an honest conversation about what your business needs.
        </p>

        <div className="flex justify-center gap-[10px] flex-wrap mb-10">
          {badges.map((b) => (
            <span
              key={b}
              className="text-[11px] text-[var(--dimmer)] rounded-[980px] px-[14px] py-[5px]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {b}
            </span>
          ))}
        </div>

        <a
          href="mailto:hello@tawfiqtech.ca"
          className="inline-block text-[15px] font-medium cursor-pointer transition-opacity duration-200 hover:opacity-[0.88]"
          style={{
            background: "var(--white)",
            color: "#000",
            border: "none",
            padding: "14px 36px",
            borderRadius: "980px",
            fontFamily: "inherit",
            textDecoration: "none",
          }}
        >
          Book a free call ↗
        </a>

        <p className="text-[12px] text-[var(--dimmer)] mt-6">
          hello@tawfiqtech.ca · All prices in CAD
        </p>
      </div>
    </section>
  );
}

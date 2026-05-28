"use client";

const testimonials = [
  {
    quote:
      "We were missing calls every day. Now the AI handles after-hours inquiries and we wake up to booked appointments. It paid for itself in the first month.",
    name: "Arctic Air HVAC",
    biz: "HVAC · Metro Vancouver",
  },
  {
    quote:
      "The site looks completely professional and the SMS notifications mean I never miss a lead, even when I'm mid-job. TawfiqTech delivered fast and it just works.",
    name: "Green Haven Cleaning",
    biz: "Cleaning Services · Vancouver, BC",
  },
  {
    quote:
      "The booking system saved us hours every week. Clients book themselves, get a confirmation, and we get a calendar notification. Seamless from day one.",
    name: "Essence of Detail",
    biz: "Auto Detailing · Vancouver, BC",
  },
];

export default function Testimonials() {
  return (
    <div
      id="results"
      className="py-28 px-8 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--faint)" }}
    >
      {/* sage glow right */}
      <div
        className="absolute top-[30%] right-[-100px] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(140,170,145,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1100px] mx-auto">
        <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--dimmer)] mb-[14px] text-center">
          Client results
        </p>
        <h2
          className="font-semibold mb-14 text-center"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
        >
          Built for businesses{" "}
          <span style={{ color: "rgba(255,255,255,0.18)" }}>like yours.</span>
        </h2>

        <div
          className="grid grid-cols-3 gap-px rounded-[18px] overflow-hidden"
          style={{ background: "var(--faint)" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden"
              style={{ background: "var(--bg)", padding: "2.5rem 2.25rem" }}
            >
              {/* watermark quote */}
              <div
                className="absolute top-6 right-8 text-[40px] leading-none pointer-events-none select-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                ❝
              </div>
              <p className="text-[14px] text-[var(--dim)] font-light leading-[1.78] mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="w-6 h-px mb-4"
                style={{ background: "rgba(255,255,255,0.12)" }}
              />
              <p className="text-[13px] font-medium text-[var(--off)]">{t.name}</p>
              <p className="text-[11px] text-[var(--dimmer)] mt-[3px]">{t.biz}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

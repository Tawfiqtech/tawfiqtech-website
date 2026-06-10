"use client";

const services = [
  {
    num: "01 / WEBSITE",
    icon: "🌐",
    name: "Website Design",
    desc: "Fast, mobile-first websites built for local service businesses. Clean layout, strong calls to action, and forms that convert visitors into quote requests from day one.",
    tags: ["Next.js", "Tailwind", "Netlify"],
  },
  {
    num: "02 / AI",
    icon: "🤖",
    name: "AI Receptionist",
    desc: "An AI that answers calls, qualifies leads, and books appointments 24 hours a day — even when you're on the job. Powered by Claude, integrated with your calendar.",
    tags: ["Twilio", "Claude API", "Google Calendar"],
  },
  {
    num: "03 / AI",
    icon: "💬",
    name: "AI Chatbot",
    desc: "A smart chat widget that answers questions, captures lead info, and sends instant SMS notifications — so no visitor ever leaves without a follow-up.",
    tags: ["Claude API", "n8n", "SMS alerts"],
  },
  {
    num: "04 / AUTOMATION",
    icon: "📅",
    name: "Booking Automation",
    desc: "Replace back-and-forth scheduling with a system that syncs to Google Calendar, sends confirmations, and follows up with reminders automatically.",
    tags: ["Google Calendar", "n8n", "Make.com"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-8 max-w-[1100px] mx-auto">
      <p className="text-[10px] tracking-[0.12em] uppercase text-[var(--dimmer)] mb-[14px]">
        What we build
      </p>
      <h2
        className="font-semibold mb-4"
        style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
      >
        Four services.{" "}
        <br />
        <span style={{ color: "rgba(255,255,255,0.18)" }}>One clear goal.</span>
      </h2>
      <p className="text-[14px] text-[var(--dim)] font-light leading-[1.72] max-w-[400px] mb-10 md:mb-12">
        Built to solve one problem: local businesses missing leads because they&apos;re too busy to answer them.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-[18px] overflow-hidden"
        style={{ background: "var(--faint)" }}
      >
        {services.map((svc) => (
          <div
            key={svc.name}
            className="group relative overflow-hidden transition-colors duration-250 cursor-default"
            style={{ background: "var(--bg)", padding: "2rem 1.75rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#070707")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
          >
            {/* hover glow */}
            <div
              className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{
                background: "radial-gradient(ellipse, rgba(180,210,185,0.06) 0%, transparent 65%)",
              }}
            />
            {/* top shimmer on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)" }}
            />

            <p className="text-[10px] text-[var(--dimmer)] tracking-[0.1em] mb-6 md:mb-8">{svc.num}</p>

            <div
              className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-[18px] mb-4 md:mb-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {svc.icon}
            </div>

            <p
              className="font-semibold mb-[10px]"
              style={{ fontSize: "21px", letterSpacing: "-0.025em" }}
            >
              {svc.name}
            </p>
            <p className="text-[13px] text-[var(--dim)] font-light leading-[1.72]">{svc.desc}</p>

            <div className="flex flex-wrap gap-[5px] mt-5 md:mt-6 pb-8 md:pb-10">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] rounded-[4px] px-[9px] py-[3px]"
                  style={{
                    color: "rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className="absolute bottom-6 right-7 md:bottom-10 md:right-10 text-[18px] text-[var(--dimmer)] transition-all duration-200 group-hover:text-[var(--dim)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            >
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

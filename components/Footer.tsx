"use client";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const contact = [
  {
    label: "tawfiq_tech",
    href: "https://instagram.com/tawfiq_tech",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    label: "tawfiqtechautomations@gmail.com",
    href: "mailto:tawfiqtechautomations@gmail.com",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
  },
  {
    label: "(778) 919-2663",
    href: "tel:+17789192663",
    img: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/phone.svg",
    invert: true,
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ borderTop: "1px solid var(--faint)" }}>
      {/* Contact row */}
      <div
        className="flex items-center justify-center gap-10 flex-wrap px-8 py-6"
        style={{ borderBottom: "1px solid var(--faint)" }}
      >
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] text-[13px] font-medium text-white transition-opacity duration-200 hover:opacity-100"
            style={{ opacity: 0.75, textDecoration: "none" }}
          >
            <img
              src={c.img}
              alt={c.label}
              width={18}
              height={18}
              style={{
                width: "18px",
                height: "18px",
                objectFit: "contain",
                filter: c.invert ? "invert(1)" : "none",
              }}
            />
            {c.label}
          </a>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between flex-wrap gap-4 px-8 py-6">
        <div className="text-[14px] font-semibold tracking-[-0.01em] text-white">TawfiqTech</div>
        <div className="flex gap-6">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[12px] text-[var(--dimmer)] transition-colors duration-200 hover:text-[var(--dim)] bg-transparent border-none cursor-pointer font-[inherit]"
            >
              {l.label}
            </button>
          ))}
        </div>
        <p className="text-[12px] text-[var(--dimmer)]">© 2026 TawfiqTech. Metro Vancouver, BC.</p>
      </div>
    </footer>
  );
}

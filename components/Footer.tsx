const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-4 px-8 py-8"
      style={{ borderTop: "1px solid var(--faint)" }}
    >
      <div className="text-[14px] font-semibold tracking-[-0.01em]">TawfiqTech</div>
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
      <p className="text-[12px] text-[var(--dimmer)]">
        © 2026 TawfiqTech. Metro Vancouver, BC.
      </p>
    </footer>
  );
}

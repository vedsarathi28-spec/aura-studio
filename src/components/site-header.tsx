import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white">
              <span className="font-mono text-sm">A</span>
            </span>
            <span className="hidden sm:inline">Aarav<span className="text-gradient-vc">.dev</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-medium text-white shadow-glow hover:scale-[1.03] transition-transform">
              Hire Me
            </a>
            <button className="md:hidden grid h-10 w-10 place-items-center rounded-full glass" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass-strong p-2 animate-rise">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-secondary transition-colors text-sm">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

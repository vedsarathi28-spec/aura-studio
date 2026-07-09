import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Check, Code2, Globe,
  Layout, Mail, MessageCircle, Palette, Phone, Rocket, ShoppingBag,
  Sparkles, Star, Store, Trophy, Users, Wrench, Zap, Instagram, Linkedin, Github,
  Twitter, MapPin, ChevronDown,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import profileImg from "@/assets/profile.jpg";
import orbImg from "@/assets/hero-orb.jpg";
import logoIcon from "@/assets/panchariya-icon.png.asset.json";
import { useCountUp } from "@/hooks/use-reveal";

// ─── Quick-edit contact + status constants ───
export const AVAILABILITY = "Available for new projects · 2 slots open this month";
export const PHONE_DISPLAY = "+91 77424 84927";
export const PHONE_TEL = "+917742484927";
export const WHATSAPP = "https://wa.me/917742484927?text=Hi%20Panchariya%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.";
export const EMAIL = "workwithpp46@gmail.com";
export const INSTAGRAM = "https://instagram.com/workwithpp";
export const LINKEDIN = "https://www.linkedin.com/in/codewithpp";
export const GITHUB = "https://github.com/CodeWithPiyush41";
export const TWITTER = "https://x.com/workwithpp_";


/* ───────────────────────── HERO ───────────────────────── */

export function Hero() {
  return (
    <section className="relative isolate pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-noise pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 -z-10 h-[640px] w-[640px] rounded-full opacity-60 blur-2xl animate-float-orb"
        style={{ backgroundImage: `url(${orbImg})`, backgroundSize: "cover" }}
      />
      <div className="absolute top-1/3 -left-40 -z-10 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
           style={{ background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.6), transparent 70%)" }} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {AVAILABILITY}
            </span>

            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight">
              Building <span className="text-gradient">modern websites</span> that grow <span className="italic font-light">businesses.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Panchariya Labs — crafting premium digital experiences for startups, creators and local brands. Custom builds, end-to-end design, deployed in days.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/work" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] transition-transform">
                View My Work <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition-colors">
                Get a Website
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                Contact Me <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 max-w-lg rounded-2xl glass p-5 flex flex-col sm:flex-row sm:items-center gap-4 glow-border">
              <div className="flex-1">
                <p className="text-sm font-semibold">Currently building my client portfolio</p>
                <p className="mt-1 text-xs text-muted-foreground">Fresh case studies dropping soon — see the recent work below.</p>
              </div>
              <Link to="/work" className="inline-flex items-center gap-1.5 rounded-full glass-strong px-4 py-2 text-xs font-semibold hover:bg-secondary transition-colors shrink-0">
                See recent work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[image:var(--gradient-brand)] opacity-40 blur-2xl animate-glow-pulse" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong p-2">
                <img
                  src={profileImg}
                  alt="Panchariya Labs — web development agency"
                  width={768}
                  height={960}
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-strong p-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">Currently shipping</p>
                      <p className="text-xs text-muted-foreground truncate">Luxe Lifestyle Co. — E-commerce</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech chips */}
              <FloatChip className="absolute -left-4 top-12" icon={<Code2 className="h-4 w-4" />} text="Next.js · TypeScript" />
              <FloatChip className="absolute -right-6 top-1/3" icon={<Palette className="h-4 w-4" />} text="Figma → Pixel" delay="1s" />
              <FloatChip className="absolute -left-2 bottom-24" icon={<Rocket className="h-4 w-4" />} text="100 PageSpeed" delay="2s" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link to="/about" className="text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2 hover:text-foreground transition-colors">
            Scroll <ChevronDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const c = useCountUp(value);
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient-vc">
        <span ref={c.ref}>{c.value}</span>{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function FloatChip({ icon, text, className = "", delay = "0s" }: { icon: React.ReactNode; text: string; className?: string; delay?: string }) {
  return (
    <div className={`glass-strong rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2 animate-float-orb ${className}`} style={{ animationDelay: delay }}>
      <span className="text-gradient-vc">{icon}</span> {text}
    </div>
  );
}

/* ───────────────────────── MARQUEE ───────────────────────── */

export function Marquee() {
  const tech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Framer Motion", "Stripe", "Figma", "GSAP", "PostgreSQL", "Vercel"];
  const row = [...tech, ...tech];
  return (
    <section className="border-y border-border/60 py-6 overflow-hidden bg-secondary/30">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl font-semibold text-muted-foreground/60 flex items-center gap-12">
            {t} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */

export function About() {
  const skills = [
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"] },
    { label: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"] },
    { label: "Design", items: ["Figma", "Framer", "UI/UX", "Brand systems"] },
    { label: "Tooling", items: ["Vercel", "Git", "Analytics", "SEO"] },
  ];
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>About</SectionLabel>
        <div className="mt-6 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="relative aspect-square overflow-hidden rounded-3xl glass-strong p-2">
              <img src={profileImg} alt="Panchariya Labs" loading="lazy" width={768} height={768} className="h-full w-full rounded-[1.3rem] object-cover" />
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Based in Bengaluru · Working worldwide
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              I design and develop websites with <span className="text-gradient">obsessive attention to detail.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              For six years I've been building websites for founders, agencies and creators. From a five-page restaurant site to full SaaS dashboards — every project ships fast, looks premium, and is built to convert.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              I work solo, communicate clearly, and treat every project like my own. No bloated agencies, no junior handoffs — just me, your brand, and great code.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {skills.map((g) => (
                <div key={g.label} className="rounded-2xl glass p-5 glow-border">
                  <div className="text-xs uppercase tracking-wider text-primary font-semibold">{g.label}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <MiniStat icon={<Globe className="h-5 w-5" />} value={120} suffix="+" label="Websites" />
              <MiniStat icon={<Briefcase className="h-5 w-5" />} value={150} suffix="+" label="Projects" />
              <MiniStat icon={<Trophy className="h-5 w-5" />} value={6} suffix="yr" label="Experience" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, value, suffix, label }: { icon: React.ReactNode; value: number; suffix: string; label: string }) {
  const c = useCountUp(value);
  return (
    <div className="rounded-2xl glass p-5">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white">{icon}</div>
      <div className="mt-3 font-display text-2xl font-bold"><span ref={c.ref}>{c.value}</span>{suffix}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

/* ───────────────────────── SERVICES ───────────────────────── */

export function Services() {
  const services = [
    { icon: Store, title: "Business Websites", desc: "Premium presence for local brands & service businesses. Booking, leads, SEO out of the box.", tag: "from ₹15k" },
    { icon: Layout, title: "Portfolio Websites", desc: "Editorial layouts for creators, photographers, designers. Built to make people stop scrolling.", tag: "from ₹10k" },
    { icon: Rocket, title: "Landing Pages", desc: "High-converting single-page sites for product launches, ads campaigns and waitlists.", tag: "from ₹8k" },
    { icon: ShoppingBag, title: "E-commerce", desc: "Shopify and headless storefronts with custom cart, checkout, and product storytelling.", tag: "from ₹35k" },
    { icon: Code2, title: "Custom Web Apps", desc: "Dashboards, internal tools, SaaS MVPs. Full-stack React + Supabase / Postgres.", tag: "from ₹50k" },
    { icon: Wrench, title: "Website Redesign", desc: "Take your dated site and turn it into a 2026-grade brand asset. Same URL, new soul.", tag: "from ₹12k" },
  ];
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold max-w-2xl">
              Everything you need to <span className="text-gradient-vc">go live</span> — handled end-to-end.
            </h2>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group relative rounded-3xl glass p-7 hover:-translate-y-1 transition-all duration-500 glow-border overflow-hidden">
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-3xl group-hover:opacity-30 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary group-hover:bg-[image:var(--gradient-brand)] transition-colors duration-500">
                      <Icon className="h-6 w-6 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-gradient-vc">{s.tag}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROJECTS ───────────────────────── */

const PROJECT_GRADIENTS = [
  "linear-gradient(135deg,#7c3aed,#ec4899,#22d3ee)",
  "linear-gradient(135deg,#0ea5e9,#6366f1,#a855f7)",
  "linear-gradient(135deg,#f97316,#ef4444,#ec4899)",
  "linear-gradient(135deg,#10b981,#06b6d4,#3b82f6)",
  "linear-gradient(135deg,#f59e0b,#d946ef,#6366f1)",
  "linear-gradient(135deg,#e11d48,#7c3aed,#06b6d4)",
];

export function Projects() {
  const projects = [
    { title: "Luxe Lifestyle Co.", cat: "E-commerce", tech: ["Next.js", "Shopify", "GSAP"], featured: true },
    { title: "Orbit Studio", cat: "Agency", tech: ["React", "Framer", "Sanity"] },
    { title: "Ferment Café", cat: "Restaurant", tech: ["Astro", "Tailwind"] },
    { title: "Northpeak Realty", cat: "Real estate", tech: ["Next.js", "Supabase"] },
    { title: "Pulse Fitness", cat: "Gym & wellness", tech: ["React", "Stripe"] },
    { title: "Ledger CRM", cat: "SaaS dashboard", tech: ["TypeScript", "Postgres"] },
  ];
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>Featured Work</SectionLabel>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl font-bold max-w-2xl">
            A few of my <span className="text-gradient">recent builds.</span>
          </h2>
          <p className="text-muted-foreground max-w-sm">Selected projects from the last 18 months. Each one shipped fast and built to scale.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-5 auto-rows-[minmax(0,1fr)]">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} gradient={PROJECT_GRADIENTS[i]} large={i === 0 || i === 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, gradient, large }: { p: { title: string; cat: string; tech: string[]; featured?: boolean }; gradient: string; large?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl glass-strong ${large ? "lg:col-span-7" : "lg:col-span-5"} min-h-[360px] cursor-pointer hover:scale-[1.01] transition-transform duration-500`}>
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: gradient }}>
        <div className="absolute inset-0 bg-noise opacity-20" />
        {/* mock browser */}
        <div className="absolute inset-x-8 top-12 bottom-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="p-5 space-y-2">
            <div className="h-2 w-1/3 rounded bg-white/40" />
            <div className="h-2 w-1/2 rounded bg-white/25" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="aspect-square rounded bg-white/30" />
              <div className="aspect-square rounded bg-white/20" />
              <div className="aspect-square rounded bg-white/30" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {p.featured && (
        <span className="absolute top-5 left-5 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
          <Star className="h-3 w-3" /> Featured
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="text-xs uppercase tracking-wider opacity-80">{p.cat}</div>
        <h3 className="mt-1 font-display text-2xl font-bold">{p.title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[10px] font-medium">{t}</span>
            ))}
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-white text-black px-4 py-2 text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            Live demo <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */


export function Pricing() {
  const tiers = [
    {
      name: "Small", price: "10,000", tagline: "Perfect for personal brands & local services",
      features: ["Up to 5 pages", "Mobile responsive", "Contact form", "WhatsApp integration", "Instagram link", "Basic SEO", "Dark / Light mode"],
    },
    {
      name: "Medium", price: "20,000", tagline: "Growing businesses with content needs", popular: true,
      features: ["Everything in Small", "Up to 10 pages", "Photo / video gallery", "Blog with CMS", "Google Analytics", "Visitor counter", "Advanced SEO"],
    },
    {
      name: "Large", price: "40,000", tagline: "Full digital products & web platforms",
      features: ["Everything in Medium", "Up to 20 pages", "Admin dashboard", "Database integration", "User authentication", "Custom features", "Premium UI/UX"],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 sm:py-36 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center"><SectionLabel>Pricing</SectionLabel></div>
        <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center max-w-3xl mx-auto">
          Transparent pricing. <span className="text-gradient">No surprise invoices.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">One-time payment. 50% to start, 50% at launch. Hosting & domain billed separately.</p>

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.popular ? "bg-card border-2 border-transparent" : "glass"
              }`}
              style={t.popular ? { backgroundImage: "linear-gradient(var(--card),var(--card)),var(--gradient-brand)", backgroundOrigin: "border-box", backgroundClip: "padding-box,border-box" } : undefined}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                  Most popular
                </span>
              )}
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.name} Website</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-5xl font-bold">₹{t.price}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${t.popular ? "bg-[image:var(--gradient-brand)] text-white" : "bg-secondary"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
                  t.popular
                    ? "bg-[image:var(--gradient-brand)] text-white shadow-glow hover:scale-[1.02]"
                    : "glass-strong hover:bg-secondary"
                }`}
              >
                Choose {t.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PROCESS ───────────────────────── */

export function Process() {
  const steps = [
    { icon: MessageCircle, title: "Discussion", desc: "30-min call. We define scope, goals, references and timeline." },
    { icon: Palette, title: "Design", desc: "High-fidelity Figma mockups, revised until pixel-perfect." },
    { icon: Code2, title: "Development", desc: "Clean code, semantic HTML, responsive across every device." },
    { icon: Zap, title: "Testing", desc: "Performance, accessibility, cross-browser, real-device QA." },
    { icon: Rocket, title: "Launch", desc: "Deploy to your domain, analytics live, 14-day free support." },
  ];
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold max-w-3xl">
          From idea to launch in <span className="text-gradient-vc">5 sharp steps.</span>
        </h2>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-9 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative">
                  <div className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-full glass-strong">
                    <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-brand)] opacity-20 blur-md" />
                    <Icon className="relative h-6 w-6 text-gradient-vc" style={{ color: "oklch(0.78 0.16 200)" }} />
                    <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── STATS ───────────────────────── */

export function Stats() {
  const stats = [
    { icon: Globe, value: 120, suffix: "+", label: "Websites created" },
    { icon: ShoppingBag, value: 40, suffix: "+", label: "Websites sold" },
    { icon: Users, value: 85, suffix: "+", label: "Happy clients" },
    { icon: Briefcase, value: 150, suffix: "+", label: "Projects completed" },
  ];
  return (
    <section className="relative py-20 border-y border-border/60 bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatItem key={s.label} icon={s.icon} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatItem({ icon: Icon, value, suffix, label }: { icon: React.ElementType; value: number; suffix: string; label: string }) {
  const c = useCountUp(value);
  return (
    <div className="text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display text-5xl font-bold text-gradient-vc"><span ref={c.ref}>{c.value}</span>{suffix}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ───────────────────────── TESTIMONIALS ───────────────────────── */

const REVIEWS = [
  { name: "Priya Sharma", role: "Founder, Luxe Lifestyle", rating: 5, text: "Panchariya Labs delivered our store two weeks ahead of schedule and revenue jumped 38% in the first month. They're a unicorn." },
  { name: "Rohan Iyer", role: "CEO, Orbit Studio", rating: 5, text: "Communication on point, design instincts world-class. Easily the smoothest web project I've ever run." },
  { name: "Aisha Khan", role: "Marketing Lead, Northpeak", rating: 5, text: "Our old site looked stuck in 2015. Panchariya Labs rebuilt it in three weeks and our lead form fills tripled." },
  { name: "Daniel Cole", role: "Founder, Ledger", rating: 5, text: "Hired Panchariya Labs for an MVP. Got a production-ready dashboard. They think like product people, not just coders." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center"><SectionLabel>Testimonials</SectionLabel></div>
        <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center">
          Words from <span className="text-gradient">people I've worked with.</span>
        </h2>

        <div className="mt-14 relative">
          <div className="rounded-3xl glass-strong p-8 sm:p-12 min-h-[280px]">
            {REVIEWS.map((r, i) => (
              <div key={r.name} className={`${i === idx ? "block animate-rise" : "hidden"}`}>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl sm:text-3xl leading-snug">"{r.text}"</blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-white font-display text-lg font-bold">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Review ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[image:var(--gradient-brand)]" : "w-2 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

const FAQS = [
  { q: "How long does a website take?", a: "A small website takes 2–3 days, a medium website takes 5–7 days, and a large website takes 2–3 weeks." },
  { q: "Do you provide hosting?", a: "Yes — if you don't have your own hosting, we provide it for ₹3,000 per year. We deploy to your Vercel / Netlify / Hostinger account and configure the domain." },
  { q: "What about maintenance?", a: "We offer ongoing maintenance at ₹1,000 per month, which includes updates, security patches, and content tweaks." },
  { q: "Do you offer SEO services?", a: "Yes — we charge ₹5,000 per month for SEO, which includes keyword research, on-page optimization, and monthly performance reports." },
  { q: "Can I update the website later?", a: "Yes — we add a simple CMS for content edits, and offer maintenance retainers if you'd rather hand it off." },
  { q: "Do you provide support?", a: "Every project includes 14 days of free post-launch support. Extended support packages start at ₹2,000/month." },
  { q: "How do payments work?", a: "50% to kick off, 50% at launch. UPI, bank transfer, Stripe, or international wire — your call." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-secondary/20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center"><SectionLabel>FAQ</SectionLabel></div>
        <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center">
          Questions, <span className="text-gradient-vc">answered.</span>
        </h2>

        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-2xl glass overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-display text-lg font-semibold">{f.q}</span>
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full glass-strong transition-transform ${open === i ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight max-w-5xl">
          Let's build your <span className="text-gradient">next website.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">Tell me about your project — I reply within 24 hours, every weekday.</p>

        <div className="mt-16 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="rounded-3xl glass-strong p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@brand.com" />
            </div>
            <Field label="Project type" placeholder="Business site, e-commerce, redesign…" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Project details</label>
              <textarea
                rows={5}
                placeholder="Tell me about your goals, timeline and budget"
                className="mt-2 w-full rounded-2xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] text-white py-4 text-sm font-semibold shadow-glow hover:scale-[1.01] transition-transform"
            >
              {sent ? "Message sent ✓" : <>Send message <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <div className="space-y-4">
            <ContactCard icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" sub="Fastest response · IST 9 AM – 9 PM" href={WHATSAPP} cta="Open chat" />
            <ContactCard icon={<Mail className="h-5 w-5" />} title="Email" sub={EMAIL} href={`mailto:${EMAIL}`} cta="Send email" />
            <ContactCard icon={<Instagram className="h-5 w-5" />} title="Instagram" sub="Behind the scenes & process" href={INSTAGRAM} cta="Follow" />
            <ContactCard icon={<Phone className="h-5 w-5" />} title="Call" sub="+91 99999 99999" href="tel:+919999999999" cta="Dial" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}

function ContactCard({ icon, title, sub, href, cta }: { icon: React.ReactNode; title: string; sub: string; href: string; cta: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl glass p-5 hover:glass-strong transition-all glow-border">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-white shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground truncate">{sub}</div>
      </div>
      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground flex items-center gap-1 shrink-0">
        {cta} <ArrowUpRight className="h-3 w-3" />
      </span>
    </a>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

export function Footer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const stored = Number(localStorage.getItem("visits") || "0");
    const next = stored + 1;
    localStorage.setItem("visits", String(next));
    setCount(next + 12480);
  }, []);
  return (
    <footer className="relative border-t border-border/60 pt-20 pb-10 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold" aria-label="Panchariya Labs — Home">
              <img src={logoIcon.url} alt="Panchariya Labs" width={40} height={40} className="h-10 w-10 object-contain" />
              Panchariya<span className="text-gradient-vc">Labs</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">Freelance web developer building premium websites for modern brands. Available worldwide, based in Bengaluru.</p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: Instagram, href: INSTAGRAM },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Github, href: "https://github.com" },
                { icon: Twitter, href: "https://twitter.com" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-[image:var(--gradient-brand)] hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol title="Navigate" links={[
            ["Work", "/work"], ["Services", "/services"], ["About", "/about"], ["Pricing", "/pricing"], ["Contact", "/contact"],
          ]} />
          <FooterCol title="Services" links={[
            ["Business sites", "/services"], ["Portfolios", "/services"], ["E-commerce", "/services"], ["Web apps", "/services"], ["Redesign", "/services"],
          ]} />
          <FooterCol title="Resources" links={[
            ["FAQ", "/faq"], ["Process", "/process"], ["Testimonials", "/testimonials"],
          ]} />

        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Panchariya Labs. Crafted with obsession.</div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {count.toLocaleString("en-IN")} visitors
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider font-semibold">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map(([l, h]) => (
          <li key={l}><Link to={h as any} className="text-muted-foreground hover:text-foreground transition-colors">{l}</Link></li>
        ))}
      </ul>
    </div>
  );
}


/* ───────────────────────── SHARED ───────────────────────── */

export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[image:var(--gradient-brand)]" />
      {children}
    </span>
  );
}

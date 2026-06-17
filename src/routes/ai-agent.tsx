import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ldScripts } from "@/lib/seo";
import {
  Bot, MessageSquare, Phone, Mail, Users, Calendar, BarChart3, Globe,
  Shield, Cloud, Wrench, Zap, Check, ArrowRight, Sparkles, Brain,
  Workflow, Database, FileText, Bell, Languages, Lock, Star, Rocket,
  UtensilsCrossed, Hotel, Stethoscope, GraduationCap, Home, ShoppingCart,
  Dumbbell, Scissors, Scale, Factory, Car, Wrench as WrenchIcon, Package,
  Landmark, Building2, MessageCircle
} from "lucide-react";

export const Route = createFileRoute("/ai-agent")({
  head: () => ({
    meta: [
      { title: "AI Agent Services — Aarav Mehta" },
      { name: "description", content: "Custom AI chatbot solutions for businesses. WhatsApp AI, website chatbots, CRM integration & automation. Starting from ₹10,000." },
      { property: "og:title", content: "AI Agent Services — Aarav Mehta" },
      { property: "og:description", content: "Custom AI chatbot solutions for businesses. WhatsApp AI, website chatbots, CRM integration & automation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ai-agent" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Agent Services — Aarav Mehta" },
      { name: "twitter:description", content: "Custom AI chatbot solutions for businesses. WhatsApp AI, website chatbots, CRM integration & automation." },
    ],
    links: [{ rel: "canonical", href: "/ai-agent" }],
    scripts: ldScripts({
      name: "AI Agent Services — Aarav Mehta",
      description: "Custom AI chatbot solutions for businesses. WhatsApp AI, website chatbots, CRM integration & automation.",
      path: "/ai-agent",
    }),
  }),
  component: AiAgentPage,
});

/* ─── data ─── */

const pricingTiers = [
  {
    name: "Basic AI Agent",
    price: "10,000",
    subtitle: "Starting from ₹10,000",
    desc: "Perfect for startups and small businesses.",
    color: "from-emerald-500 to-teal-400",
    features: [
      "AI Chatbot trained on your business information",
      "Automatic replies to customer questions",
      "Contact information sharing",
      "Lead collection (Name, Phone, Email)",
      "FAQ automation",
      "Website integration",
      "Mobile-friendly chatbot",
      "Fast response time",
      "Secure deployment",
      "Cloud hosting setup",
      "7 Days Free Support",
    ],
  },
  {
    name: "Standard AI Agent",
    price: "20,000",
    subtitle: "₹20,000 – ₹35,000",
    desc: "Ideal for businesses receiving daily customer inquiries.",
    color: "from-sky-500 to-blue-500",
    popular: true,
    includes: "Everything in Basic, plus:",
    features: [
      "WhatsApp AI Chatbot",
      "Appointment & Booking Automation",
      "Email notifications",
      "Google Sheets integration",
      "Custom conversation flow",
      "Product & Service recommendations",
      "Multi-step conversations",
      "Personalized customer responses",
      "Basic analytics",
      "30 Days Free Support",
    ],
  },
  {
    name: "Professional AI Agent",
    price: "40,000",
    subtitle: "₹40,000 – ₹60,000",
    desc: "Built for growing businesses that need advanced automation.",
    color: "from-violet-500 to-purple-500",
    includes: "Everything in Standard, plus:",
    features: [
      "Custom API integrations",
      "CRM integration",
      "Admin dashboard",
      "Business analytics",
      "Customer management",
      "Multi-language support",
      "Smart notifications",
      "AI trained on your business documents",
      "Workflow automation",
      "Custom business logic",
      "60 Days Free Support",
    ],
  },
  {
    name: "Enterprise AI Agent",
    price: "75,000",
    subtitle: "₹75,000 – ₹2,00,000+",
    desc: "Complete AI automation solution for large businesses.",
    color: "from-amber-500 to-orange-500",
    includes: "Everything in Professional, plus:",
    features: [
      "Multiple AI agents",
      "Department-specific AI assistants",
      "Enterprise workflow automation",
      "Database integration",
      "Third-party software integration",
      "Advanced reporting & analytics",
      "Role-based access",
      "Enterprise-grade security",
      "Cloud deployment",
      "High-performance architecture",
      "Team training",
      "90 Days Priority Support",
    ],
  },
];

const featureCategories = [
  {
    title: "Customer Support",
    icon: MessageSquare,
    items: ["24/7 AI Chatbot", "Instant replies", "FAQ automation", "Smart conversation handling", "Customer query resolution"],
  },
  {
    title: "Lead Generation",
    icon: Users,
    items: ["Lead capture forms", "Customer information collection", "Qualification questions", "Contact management", "Lead export"],
  },
  {
    title: "Booking & Appointments",
    icon: Calendar,
    items: ["Appointment scheduling", "Reservation requests", "Booking confirmation", "Calendar integration", "Reminder messages"],
  },
  {
    title: "Business Automation",
    icon: Workflow,
    items: ["Workflow automation", "Task automation", "Form processing", "Data collection", "Automated notifications"],
  },
  {
    title: "Integrations",
    icon: Zap,
    items: ["WhatsApp Business", "Website chatbot", "Google Sheets", "Email services", "CRM systems", "Custom APIs"],
  },
  {
    title: "AI Capabilities",
    icon: Brain,
    items: ["Natural language understanding", "Context-aware conversations", "Business knowledge training", "Personalized responses", "Multi-language support"],
  },
  {
    title: "Analytics & Reports",
    icon: BarChart3,
    items: ["Conversation analytics", "Customer insights", "Lead reports", "Usage statistics", "Performance tracking"],
  },
  {
    title: "Security",
    icon: Shield,
    items: ["Secure data handling", "Encrypted communication", "Access control", "Reliable cloud hosting", "GDPR compliant"],
  },
];

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Hotel, label: "Hotels" },
  { icon: Stethoscope, label: "Clinics & Hospitals" },
  { icon: GraduationCap, label: "Schools & Coaching" },
  { icon: Home, label: "Real Estate" },
  { icon: ShoppingCart, label: "Retail Stores" },
  { icon: Dumbbell, label: "Gyms & Fitness" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Scale, label: "Legal & Consulting" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Car, label: "Automotive Services" },
  { icon: WrenchIcon, label: "Home Services" },
  { icon: Package, label: "E-commerce" },
  { icon: Landmark, label: "Community Orgs" },
  { icon: Building2, label: "Small & Medium Biz" },
];

const processSteps = [
  { icon: MessageCircle, title: "Free Consultation", desc: "We discuss your business needs, customer pain points, and automation goals." },
  { icon: Brain, title: "Requirement Analysis", desc: "Deep dive into your workflows, data sources, and integration requirements." },
  { icon: Workflow, title: "AI Workflow Design", desc: "Design conversation flows, decision trees, and automation logic." },
  { icon: Code, title: "Development & Integration", desc: "Build the AI agent, connect APIs, and integrate with your platforms." },
  { icon: Shield, title: "Testing & QA", desc: "Rigorous testing for accuracy, security, and real-world performance." },
  { icon: Rocket, title: "Deployment", desc: "Go live on your chosen channels — website, WhatsApp, or both." },
  { icon: Users, title: "Client Training", desc: "Train your team to manage the AI agent and read analytics." },
  { icon: Wrench, title: "Ongoing Support", desc: "Free support period with quick responses and continuous improvements." },
];

const whyChoose = [
  "Custom-built AI solutions",
  "Fast development & delivery",
  "Mobile-friendly integrations",
  "Scalable architecture",
  "Secure & reliable deployment",
  "Easy to use",
  "Dedicated support",
  "Affordable pricing",
  "Tailored for your business needs",
];

/* ─── page ─── */

function AiAgentPage() {
  return (
    <PageShell>
      <div className="pt-28 sm:pt-36">
        {/* ── Hero ── */}
        <section className="relative isolate pb-20 sm:pb-28">
          <div className="absolute inset-0 -z-10 bg-grid" />
          <div className="absolute inset-0 -z-10 bg-noise pointer-events-none" />
          <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.6 0.2 305 / 0.5), transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.4), transparent 70%)" }} />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-background to-transparent" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium animate-rise">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              New Service Launch
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.02] tracking-tight animate-rise" style={{ animationDelay: "0.1s" }}>
              Custom <span className="text-gradient">AI Agents</span> for your <span className="italic font-light">business.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "0.2s" }}>
              From WhatsApp chatbots to full enterprise automation — I build AI solutions that talk to your customers, collect leads, book appointments, and run your business 24/7.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-rise" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] transition-transform">
                Get a Free Consultation <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="relative py-28 sm:py-36 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <SectionLabel>Pricing</SectionLabel>
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center max-w-3xl mx-auto">
              Transparent AI packages. <span className="text-gradient">Pick what fits.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">One-time build fee. Support included. No recurring AI fees unless you choose cloud hosting.</p>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-7 flex flex-col glass glow-border hover:-translate-y-1 transition-all duration-500 ${tier.popular ? "border-2 border-transparent lg:-mt-4 lg:mb-4" : ""}`}
                  style={tier.popular ? { backgroundImage: "linear-gradient(var(--card),var(--card)),var(--gradient-brand)", backgroundOrigin: "border-box", backgroundClip: "padding-box,border-box" } : undefined}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${tier.color} text-white`}>
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold">{tier.name}</div>
                      <div className="text-xs text-muted-foreground">{tier.subtitle}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">{tier.desc}</p>

                  {tier.includes && (
                    <div className="mt-4 text-xs font-semibold text-primary">{tier.includes}</div>
                  )}

                  <ul className="mt-4 space-y-2.5 flex-1">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 grid h-4.5 w-4.5 place-items-center rounded-full bg-secondary shrink-0">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-[image:var(--gradient-brand)] text-white shadow-glow hover:scale-[1.02]"
                        : "glass-strong hover:bg-secondary"
                    }`}
                  >
                    Choose {tier.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="relative py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <SectionLabel>Features</SectionLabel>
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center max-w-3xl mx-auto">
              Everything your AI agent <span className="text-gradient">can do.</span>
            </h2>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featureCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.title} className="rounded-3xl glass p-6 glow-border hover:-translate-y-1 transition-all duration-500">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{cat.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-3.5 w-3.5 mt-0.5 text-success shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="relative py-28 sm:py-36 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <SectionLabel>Industries</SectionLabel>
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold text-center max-w-3xl mx-auto">
              Built for <span className="text-gradient">every business.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">From local shops to enterprise teams — AI agents tailored to your industry.</p>

            <div className="mt-14 grid grid-cols-3 sm:grid-cols-5 gap-4">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.label} className="group rounded-2xl glass p-5 text-center hover:-translate-y-1 transition-all duration-500 glow-border">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary group-hover:bg-[image:var(--gradient-brand)] transition-colors duration-500">
                      <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="mt-3 text-sm font-medium">{ind.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="relative py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold max-w-3xl">
              From idea to AI in <span className="text-gradient">8 steps.</span>
            </h2>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative rounded-2xl glass p-6">
                    <div className="flex items-center gap-3">
                      <div className="relative grid h-10 w-10 place-items-center rounded-full bg-secondary">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="relative py-28 sm:py-36 bg-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionLabel>Why Us</SectionLabel>
                <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold">
                  Why businesses <span className="text-gradient">choose me.</span>
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                  I don't just build chatbots — I build complete AI systems that understand your business, talk like your brand, and deliver real results from day one.
                </p>
                <div className="mt-8">
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] transition-transform">
                    Start Your AI Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChoose.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-2xl glass p-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-28 sm:py-36">
          <div className="absolute inset-0 -z-10 bg-grid" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="relative rounded-3xl glass-strong p-10 sm:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.5), transparent 70%)" }} />
              <div className="relative">
                <h2 className="font-display text-3xl sm:text-4xl font-bold">
                  Need a custom AI solution?
                </h2>
                <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                  Contact me today for a free consultation and receive a personalized quote based on your business requirements.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] transition-transform">
                    Get Free Quote <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition-colors">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}

function Code(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

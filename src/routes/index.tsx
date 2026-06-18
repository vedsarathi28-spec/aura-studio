import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Hero, Marquee, Stats, SectionLabel } from "@/components/sections";

import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panchariya Labs — Premium Freelance Web Developer" },
      { name: "description", content: "Modern websites that grow businesses. Custom builds, end-to-end design, deployed in days." },
      { property: "og:title", content: "Panchariya Labs — Premium Freelance Web Developer" },
      { property: "og:description", content: "Modern websites that grow businesses. Custom builds and design from ₹10,000." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Panchariya Labs — Premium Freelance Web Developer" },
      { name: "twitter:description", content: "Modern websites that grow businesses. Custom builds and design from ₹10,000." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: ldScripts({ name: "Panchariya Labs — Premium Freelance Web Developer", description: "Modern websites that grow businesses. Custom builds, end-to-end design, deployed in days.", path: "/" }),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <Stats />
      <section className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <SectionLabel>Explore</SectionLabel>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight">
            Pick where to <span className="text-gradient">go next.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Every section now lives on its own dedicated page — for cleaner reads, faster loads, and shareable links.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["About", "/about", "Who I am, my skills, and how I work."],
              ["Services", "/services", "Everything I build, end-to-end."],
              ["Work", "/work", "Featured client projects."],
              ["Demos", "/demos", "Live template gallery."],
              ["Pricing", "/pricing", "Transparent packages from ₹10k."],
              ["Contact", "/contact", "Let's start the conversation."],
            ].map(([label, to, desc]) => (
              <Link
                key={to}
                to={to as any}
                className="group rounded-3xl glass p-6 text-left glow-border hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold">{label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Testimonials, Stats } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Aarav Mehta" },
      { name: "description", content: "Reviews from founders, agencies and marketing leads who've worked with Panchariya Labs." },
      { property: "og:title", content: "Testimonials — Aarav Mehta" },
      { property: "og:description", content: "What clients say after launch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Testimonials — Aarav Mehta" },
      { name: "twitter:description", content: "What clients say after launch." },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
    scripts: ldScripts({ name: "Testimonials — Aarav Mehta", description: "What clients say after launch.", path: "/testimonials" }),
  }),
  component: () => <PageShell><div className="pt-24"><Stats /><Testimonials /></div></PageShell>,
});

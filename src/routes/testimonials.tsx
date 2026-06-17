import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Testimonials, Stats } from "@/components/sections";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Aarav Mehta" },
      { name: "description", content: "Reviews from founders, agencies and marketing leads who've worked with Aarav." },
      { property: "og:title", content: "Testimonials — Aarav Mehta" },
      { property: "og:description", content: "What clients say after launch." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => <PageShell><div className="pt-24"><Stats /><Testimonials /></div></PageShell>,
});

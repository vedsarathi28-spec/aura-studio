import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Projects, Testimonials } from "@/components/sections";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Aarav Mehta" },
      { name: "description", content: "Selected freelance projects from the last 18 months — e-commerce, agencies, restaurants, SaaS dashboards." },
      { property: "og:title", content: "Work — Aarav Mehta" },
      { property: "og:description", content: "Featured client projects and what they shipped with." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: () => <PageShell><div className="pt-24"><Projects /><Testimonials /></div></PageShell>,
});

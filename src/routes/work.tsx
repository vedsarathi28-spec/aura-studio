import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Projects, Stats, Testimonials } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Panchariya Labs" },
      { name: "description", content: "Selected freelance projects from the last 18 months — e-commerce, agencies, restaurants, SaaS dashboards." },
      { property: "og:title", content: "Work — Panchariya Labs" },
      { property: "og:description", content: "Featured client projects and what they shipped with." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Work — Panchariya Labs" },
      { name: "twitter:description", content: "Featured client projects and what they shipped with." },
    ],
    links: [{ rel: "canonical", href: "/work" }],
    scripts: ldScripts({ name: "Work — Panchariya Labs", description: "Featured client projects and what they shipped with.", path: "/work" }),
  }),
  component: () => <PageShell><div className="pt-24"><Projects /><Stats /><Testimonials /></div></PageShell>,
});

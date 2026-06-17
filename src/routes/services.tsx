import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Services, Process } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aarav Mehta" },
      { name: "description", content: "Business sites, portfolios, landing pages, e-commerce, custom web apps and redesigns — handled end-to-end." },
      { property: "og:title", content: "Services — Aarav Mehta" },
      { property: "og:description", content: "Everything you need to go live, by a single dedicated developer." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — Aarav Mehta" },
      { name: "twitter:description", content: "Everything you need to go live, by a single dedicated developer." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: ldScripts({ name: "Services — Aarav Mehta", description: "Everything you need to go live, by a single dedicated developer.", path: "/services" }),
  }),
  component: () => <PageShell><div className="pt-24"><Services /><Process /></div></PageShell>,
});

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Pricing, FAQ } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Panchariya Labs" },
      { name: "description", content: "Transparent website packages: Small ₹10k, Medium ₹20k, Large ₹40k. One-time payment, no surprise invoices." },
      { property: "og:title", content: "Pricing — Panchariya Labs" },
      { property: "og:description", content: "Three clear tiers. Pick the one that fits." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pricing — Panchariya Labs" },
      { name: "twitter:description", content: "Three clear tiers. Pick the one that fits." },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: ldScripts({ name: "Pricing — Panchariya Labs", description: "Three clear tiers. Pick the one that fits.", path: "/pricing" }),
  }),
  component: () => <PageShell><div className="pt-24"><Pricing /><FAQ /></div></PageShell>,
});

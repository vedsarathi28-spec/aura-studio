import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Pricing, FAQ } from "@/components/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Aarav Mehta" },
      { name: "description", content: "Transparent website packages: Small ₹10k, Medium ₹20k, Large ₹40k. One-time payment, no surprise invoices." },
      { property: "og:title", content: "Pricing — Aarav Mehta" },
      { property: "og:description", content: "Three clear tiers. Pick the one that fits." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: () => <PageShell><div className="pt-24"><Pricing /><FAQ /></div></PageShell>,
});

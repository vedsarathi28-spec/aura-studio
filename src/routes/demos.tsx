import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DemoGallery } from "@/components/sections";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Demo Library — Aarav Mehta" },
      { name: "description", content: "Browse live demo websites across business, portfolio, restaurant, gym, agency, school and e-commerce categories." },
      { property: "og:title", content: "Demo Library — Aarav Mehta" },
      { property: "og:description", content: "Click-through demos you can preview in seconds." },
      { property: "og:url", content: "/demos" },
    ],
    links: [{ rel: "canonical", href: "/demos" }],
  }),
  component: () => <PageShell><div className="pt-24"><DemoGallery /></div></PageShell>,
});

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { DemoGallery } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/demos")({
  head: () => ({
    meta: [
      { title: "Demo Library — Panchariya Labs" },
      { name: "description", content: "Browse live demo websites across business, portfolio, restaurant, gym, agency, school and e-commerce categories." },
      { property: "og:title", content: "Demo Library — Panchariya Labs" },
      { property: "og:description", content: "Click-through demos you can preview in seconds." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/demos" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Demo Library — Panchariya Labs" },
      { name: "twitter:description", content: "Click-through demos you can preview in seconds." },
    ],
    links: [{ rel: "canonical", href: "/demos" }],
    scripts: ldScripts({ name: "Demo Library — Panchariya Labs", description: "Click-through demos you can preview in seconds.", path: "/demos" }),
  }),
  component: () => <PageShell><div className="pt-24"><DemoGallery /></div></PageShell>,
});

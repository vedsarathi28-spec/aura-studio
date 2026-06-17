import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { FAQ } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aarav Mehta" },
      { name: "description", content: "Common questions about timelines, hosting, updates, support and payments." },
      { property: "og:title", content: "FAQ — Aarav Mehta" },
      { property: "og:description", content: "Quick answers before we talk." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FAQ — Aarav Mehta" },
      { name: "twitter:description", content: "Quick answers before we talk." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: ldScripts({ name: "FAQ — Aarav Mehta", description: "Quick answers before we talk.", path: "/faq" }),
  }),
  component: () => <PageShell><div className="pt-24"><FAQ /></div></PageShell>,
});

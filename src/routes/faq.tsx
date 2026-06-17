import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { FAQ } from "@/components/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aarav Mehta" },
      { name: "description", content: "Common questions about timelines, hosting, updates, support and payments." },
      { property: "og:title", content: "FAQ — Aarav Mehta" },
      { property: "og:description", content: "Quick answers before we talk." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => <PageShell><div className="pt-24"><FAQ /></div></PageShell>,
});

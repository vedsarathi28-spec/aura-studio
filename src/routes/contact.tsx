import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Contact } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aarav Mehta" },
      { name: "description", content: "Start your project — WhatsApp, email or the contact form. Replies within 24 hours on weekdays." },
      { property: "og:title", content: "Contact — Aarav Mehta" },
      { property: "og:description", content: "Let's build your next website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — Aarav Mehta" },
      { name: "twitter:description", content: "Let's build your next website." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: ldScripts({ name: "Contact — Aarav Mehta", description: "Let's build your next website.", path: "/contact" }),
  }),
  component: () => <PageShell><div className="pt-24"><Contact /></div></PageShell>,
});

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Aarav Mehta" },
      { name: "description", content: "From idea to launch in five sharp steps: discussion, design, development, testing, launch." },
      { property: "og:title", content: "Process — Aarav Mehta" },
      { property: "og:description", content: "How every project moves from brief to live site." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/process" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Process — Aarav Mehta" },
      { name: "twitter:description", content: "How every project moves from brief to live site." },
    ],
    links: [{ rel: "canonical", href: "/process" }],
    scripts: ldScripts({ name: "Process — Aarav Mehta", description: "How every project moves from brief to live site.", path: "/process" }),
  }),
  component: () => <PageShell><div className="pt-24"><Process /></div></PageShell>,
});

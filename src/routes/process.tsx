import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { Process } from "@/components/sections";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Aarav Mehta" },
      { name: "description", content: "From idea to launch in five sharp steps: discussion, design, development, testing, launch." },
      { property: "og:title", content: "Process — Aarav Mehta" },
      { property: "og:description", content: "How every project moves from brief to live site." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: () => <PageShell><div className="pt-24"><Process /></div></PageShell>,
});

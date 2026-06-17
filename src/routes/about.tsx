import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { About } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarav Mehta" },
      { name: "description", content: "Six years building premium websites for founders, agencies and creators. Skills, tooling and approach." },
      { property: "og:title", content: "About — Aarav Mehta" },
      { property: "og:description", content: "Freelance web developer based in Bengaluru, working worldwide." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => <PageShell><div className="pt-24"><About /></div></PageShell>,
});

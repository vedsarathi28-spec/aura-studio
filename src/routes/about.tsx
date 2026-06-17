import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { About } from "@/components/sections";
import { ldScripts } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarav Mehta" },
      { name: "description", content: "Six years building premium websites for founders, agencies and creators. Skills, tooling and approach." },
      { property: "og:title", content: "About — Aarav Mehta" },
      { property: "og:description", content: "Freelance web developer based in Bengaluru, working worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — Aarav Mehta" },
      { name: "twitter:description", content: "Freelance web developer based in Bengaluru, working worldwide." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: ldScripts({ name: "About — Aarav Mehta", description: "Freelance web developer based in Bengaluru, working worldwide.", path: "/about" }),
  }),
  component: () => <PageShell><div className="pt-24"><About /></div></PageShell>,
});

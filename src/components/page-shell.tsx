import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { FloatingButtons } from "@/components/floating-buttons";
import { Footer } from "@/components/sections";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden">
      <SiteHeader />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

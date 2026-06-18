export const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panchariya Labs",
  url: "/",
  description: "Premium freelance web developer crafting modern business websites, portfolios and e-commerce.",
  sameAs: [] as string[],
};

export function webPageLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: path,
    isPartOf: { "@type": "WebSite", name: "Panchariya Labs", url: "/" },
    publisher: ORG,
  };
}

export function ldScripts(args: { name: string; description: string; path: string }) {
  return [
    { type: "application/ld+json", children: JSON.stringify(ORG) },
    { type: "application/ld+json", children: JSON.stringify(webPageLd(args)) },
  ];
}

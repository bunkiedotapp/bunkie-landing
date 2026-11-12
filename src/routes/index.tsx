import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/bunkie/SiteNav";
import { Hero } from "@/components/bunkie/Hero";
import { About } from "@/components/bunkie/About";
import { Vision } from "@/components/bunkie/Vision";
import { WhatWeDo } from "@/components/bunkie/WhatWeDo";
import { Research } from "@/components/bunkie/Research";
import { ComingSoon } from "@/components/bunkie/ComingSoon";
import { EarlyAccess } from "@/components/bunkie/EarlyAccess";
import { Socials } from "@/components/bunkie/Socials";
import { FAQ } from "@/components/bunkie/FAQ";
import { SiteFooter } from "@/components/bunkie/SiteFooter";

const TITLE = "Bunkie – Find Rooms, PGs & Compatible Roommates";
const DESCRIPTION =
  "Discover rooms, PGs and shared flats with Bunkie. Explore accommodation and find compatible roommates based on lifestyle and living preferences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bunkie" },
      { property: "og:url", content: "https://www.bunkie.app/" },
      { property: "og:image", content: "https://www.bunkie.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Bunkie – Find your place. Find your people. Discover rooms, PGs and compatible roommates.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:site", content: "@bunkiedotapp" },
      { name: "twitter:image", content: "https://www.bunkie.app/og-image.png" },
      {
        name: "twitter:image:alt",
        content: "Bunkie – Find your place. Find your people. Discover rooms, PGs and compatible roommates.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.bunkie.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Bunkie",
            url: "https://www.bunkie.app/",
            logo: "https://www.bunkie.app/bunkie-logo.png",
            sameAs: [
              "https://www.instagram.com/bunkie.app",
              "https://www.threads.com/@bunkie.app",
              "https://x.com/bunkiedotapp",
              "https://www.facebook.com/profile.php?id=61596411542689",
              "https://www.youtube.com/@bunkiedotapp",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Bunkie",
            url: "https://www.bunkie.app/",
            publisher: {
              "@type": "Organization",
              name: "Bunkie",
              url: "https://www.bunkie.app/",
            },
          },
        ]),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-lime focus:px-4 focus:py-2 focus:text-lime-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Vision />
        <WhatWeDo />
        <Research />
        <ComingSoon />
        <EarlyAccess />
        <Socials />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

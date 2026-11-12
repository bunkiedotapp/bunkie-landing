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

const TITLE = "Bunkie — Find Your People. Find Your Place.";
const DESCRIPTION =
  "Bunkie is building a better way to discover PGs, flats for rent and shared accommodation with lifestyle context and roommate compatibility.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bunkie" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:site", content: "@bunkiedotapp" },
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

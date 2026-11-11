import seekersImg from "@/assets/seekers-window.jpg";
import providersImg from "@/assets/providers-door.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

function Side({
  tag,
  title,
  body,
  img,
  alt,
  inverted,
}: {
  tag: string;
  title: string;
  body: string;
  img: string;
  alt: string;
  inverted?: boolean;
}) {
  return (
    <div className={cn(inverted ? "bg-paper text-ink" : "bg-ink text-paper")}>
      <div className="shell grid items-stretch gap-10 py-16 sm:py-24 md:grid-cols-12 md:gap-8">
        <Reveal className={cn("md:col-span-5", inverted ? "md:order-2 md:col-start-8" : "")}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={img}
              alt={alt}
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              className="photo-mono size-full object-cover"
            />
            <span className="eyebrow absolute left-0 top-0 bg-lime px-3 py-2 text-lime-foreground">{tag}</span>
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className={cn(
            "flex flex-col justify-end md:col-span-6",
            inverted ? "md:order-1 md:col-start-1" : "md:col-start-7",
          )}
        >
          <h3 className="display-md max-w-xl">{title}</h3>
          <p className={cn("mt-8 max-w-lg text-lg leading-relaxed", inverted ? "text-paper-muted" : "text-ink-muted")}>
            {body}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" aria-labelledby="wwd-title" className="border-t border-line pt-24 sm:pt-36">
      <div className="shell pb-8 sm:pb-12">
        <SectionLabel index="03" className="text-ink-muted">What We Do</SectionLabel>
        <Reveal>
          <h2 id="wwd-title" className="display-lg mt-10 max-w-5xl">
            Bringing two sides <span className="text-lime">closer.</span>
          </h2>
        </Reveal>
      </div>
      <Side
        tag="Side A — Seekers"
        title="For those looking for a place."
        body="Whether you're a student, a working professional or someone moving to a new city, finding the right accommodation and the right people matters."
        img={seekersImg}
        alt="A single lit window in a dark apartment building at night"
      />
      <Side
        inverted
        tag="Side B — Providers"
        title="For those providing a place."
        body="PG owners, landlords and property providers are an essential part of the shared-living ecosystem. We want to understand their challenges and build towards a better experience for them too."
        img={providersImg}
        alt="A key left in the lock of an open apartment door"
      />
    </section>
  );
}

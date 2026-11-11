import { ComingSoonDot } from "./ComingSoonDot";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ComingSoon() {
  return (
    <section
      aria-labelledby="soon-title"
      className="overflow-hidden border-y border-line py-24 sm:py-36"
    >
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SectionLabel index="05" className="text-muted-foreground">
            Status
          </SectionLabel>
          <Reveal>
            <h2 id="soon-title" className="display-lg mt-10">
              Something better is taking shape.
            </h2>
          </Reveal>
        </div>
        <Reveal
          delay={100}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:self-end"
        >
          <p>
            We're working towards a better shared-living experience. The main Bunkie platform is
            currently under development.
          </p>
          <p className="text-foreground">Stay connected. The journey is just beginning.</p>
        </Reveal>
      </div>

      <Reveal className="shell mt-16 sm:mt-24">
        <p className="flex items-start gap-[3vw] font-display text-[21vw] font-extrabold uppercase leading-[0.82] tracking-[-0.06em] text-lime md:items-center md:gap-[2vw] md:whitespace-nowrap md:text-[12.2vw] 2xl:text-[11.2rem]">
          <ComingSoonDot className="mt-[3vw] size-3 md:mt-0 md:size-[2vw] 2xl:size-6" />
          <span>Coming soon</span>
        </p>
      </Reveal>
    </section>
  );
}

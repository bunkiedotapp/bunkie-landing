import { ComingSoonDot } from "./ComingSoonDot";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ComingSoon() {
  return (
    <section aria-labelledby="soon-title" className="overflow-hidden border-y border-line py-24 sm:py-36">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <SectionLabel index="05" className="text-ink-muted">Status</SectionLabel>
          <Reveal>
            <h2 id="soon-title" className="display-lg mt-10">Something better is taking shape.</h2>
          </Reveal>
        </div>
        <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-muted md:col-span-4 md:col-start-9 md:self-end">
          <p>
            We're working towards a better shared-living experience. The main Bunkie platform is
            currently under development.
          </p>
          <p className="text-paper">Stay connected. The journey is just beginning.</p>
        </Reveal>
      </div>

      <Reveal className="shell mt-16 sm:mt-24">
        <p className="flex items-center gap-[2vw] whitespace-nowrap font-display text-[14.5vw] font-extrabold uppercase leading-[0.8] tracking-[-0.06em] text-lime md:text-[12.4vw] 2xl:text-[11.4rem]">
          <ComingSoonDot className="size-[2.2vw] min-h-3 min-w-3 2xl:size-6" />
          <span className="md:hidden">Soon</span>
          <span className="hidden md:inline">Coming soon</span>
        </p>
        <p className="eyebrow mt-6 text-ink-muted md:hidden">The main platform is coming soon</p>
      </Reveal>
    </section>
  );
}

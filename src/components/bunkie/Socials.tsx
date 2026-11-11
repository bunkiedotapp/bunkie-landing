import { ArrowUpRight } from "lucide-react";
import { EXTERNAL, SOCIALS } from "@/lib/bunkie";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { SocialIcon } from "./SocialIcon";

export function Socials() {
  return (
    <section id="socials" aria-labelledby="socials-title" className="py-24 sm:py-36">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <SectionLabel index="06" className="text-ink-muted">Follow Our Journey</SectionLabel>
          <Reveal>
            <h2 id="socials-title" className="display-lg mt-10">
              Be part of the <span className="text-lime">journey.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink-muted">
              Follow Bunkie as we explore, learn and build a better shared-living experience.
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-line md:col-span-6 md:col-start-7 md:self-end">
          {SOCIALS.map((s, i) => (
            <Reveal as="li" key={s.key} delay={i * 70} className="border-b border-line">
              <a
                href={s.href}
                {...EXTERNAL}
                aria-label={`Bunkie on ${s.label} (opens in a new tab)`}
                className="group flex items-center gap-5 px-2 py-6 transition-colors duration-300 hover:bg-lime hover:text-lime-foreground sm:px-4 sm:py-7"
              >
                <SocialIcon name={s.key} className="size-6 shrink-0 text-lime transition-colors group-hover:text-lime-foreground" />
                <span className="font-display text-2xl font-extrabold uppercase tracking-[-0.03em] sm:text-3xl">{s.label}</span>
                <span className="eyebrow ml-auto hidden text-ink-muted transition-colors group-hover:text-lime-foreground lg:inline">
                  {s.handle}
                </span>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 max-lg:ml-auto" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

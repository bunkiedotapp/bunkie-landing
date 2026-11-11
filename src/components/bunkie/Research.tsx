import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL, PROVIDER_SURVEY_URL, SEEKER_SURVEY_URL } from "@/lib/bunkie";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const surveys = [
  {
    n: "01",
    title: "Looking for accommodation?",
    body: "Tell us about your experience searching for PGs, flats, rooms and compatible roommates.",
    cta: "Take the seeker survey",
    href: SEEKER_SURVEY_URL,
    lime: true,
  },
  {
    n: "02",
    title: "Are you a property provider?",
    body: "Share your experience as a PG owner, landlord, property manager or accommodation provider.",
    cta: "Take the provider survey",
    href: PROVIDER_SURVEY_URL,
    lime: false,
  },
];

export function Research() {
  return (
    <section id="research" aria-labelledby="research-title" className="py-24 sm:py-36">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <SectionLabel index="04" className="text-ink-muted">Our Research</SectionLabel>
            <Reveal>
              <h2 id="research-title" className="display-lg mt-10">
                Before we build, <span className="text-lime">we listen.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-muted md:col-span-5 md:self-end">
            <p className="text-paper">We believe meaningful products start with understanding real problems.</p>
            <p>
              We're currently conducting market research to understand the experiences of
              accommodation seekers and property providers.
            </p>
            <p>Your perspective can help shape what Bunkie becomes.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-line sm:mt-24 md:grid-cols-2">
          {surveys.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              className={cn(
                "flex min-h-[26rem] flex-col justify-between gap-12 p-7 sm:p-12",
                s.lime ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Survey {s.n}</span>
                <span className={cn("eyebrow", s.lime ? "" : "text-lime")}>Approx. 3–5 min</span>
              </div>
              <div>
                <h3 className="display-md max-w-md">{s.title}</h3>
                <p className={cn("mt-6 max-w-md text-lg leading-relaxed", s.lime ? "opacity-80" : "text-ink-muted")}>
                  {s.body}
                </p>
                <Button asChild variant={s.lime ? "ink" : "lime"} size="xl" className="mt-10 w-full sm:w-auto">
                  <a href={s.href} {...EXTERNAL}>
                    {s.cta} <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

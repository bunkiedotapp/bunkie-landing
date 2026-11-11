import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL, PROVIDER_SURVEY_URL, SEEKER_SURVEY_URL } from "@/lib/bunkie";
import { ComingSoonDot } from "./ComingSoonDot";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-14"
    >
      <div className="shell">
        <p className="eyebrow mb-8 text-muted-foreground animate-rise sm:mb-12">
          Accommodation <span className="text-lime">/</span> Roommates{" "}
          <span className="text-lime">/</span> Shared living
        </p>

        <h1 className="display-xl">
          <span className="block animate-rise [animation-delay:80ms]">Find your people.</span>
          <span className="block text-lime animate-rise [animation-delay:220ms]">
            Find your place.
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 sm:mt-16 md:grid-cols-12 md:gap-8 animate-rise [animation-delay:380ms]">
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:col-span-5">
            Finding a place to live should be easier. We're building a better way to discover
            accommodation and connect with people who share your lifestyle.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:col-span-7 md:justify-end md:self-end">
            <Button asChild variant="lime" size="xl">
              <a href={SEEKER_SURVEY_URL} {...EXTERNAL}>
                I'm Looking for Accommodation <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={PROVIDER_SURVEY_URL} {...EXTERNAL}>
                I'm a Property Provider <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>

        <p className="eyebrow mt-10 flex items-center gap-3 text-foreground animate-rise [animation-delay:500ms] sm:mt-14">
          <ComingSoonDot />
          The main Bunkie platform is coming soon.
        </p>
      </div>
    </section>
  );
}

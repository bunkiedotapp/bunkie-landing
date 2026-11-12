import { ArrowUpRight } from "lucide-react";
import heroBedroom from "@/assets/hero-bedroom.webp";
import heroBuilding from "@/assets/hero-building.webp";
import heroRoommates from "@/assets/hero-roommates.webp";
import { Button } from "@/components/ui/button";
import { EXTERNAL, PROVIDER_SURVEY_URL, SEEKER_SURVEY_URL } from "@/lib/bunkie";
import { ComingSoonDot } from "./ComingSoonDot";

function HeroGallery() {
  return (
    <div className="relative mx-auto h-[27rem] w-full max-w-[31rem] sm:h-[34rem] lg:h-[39rem] lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -bottom-[4%] -left-[10%] h-[46%] w-[118%] -rotate-[20deg] rounded-[50%] border-[1.05rem] border-lime/70 opacity-75 sm:border-[1.35rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[7%] top-[6%] z-30 hidden items-end gap-3 sm:flex"
      >
        <span className="block h-8 w-1.5 -rotate-[9deg] rounded-full bg-lime" />
        <span className="block h-11 w-1.5 rotate-[36deg] rounded-full bg-lime" />
        <span className="block h-8 w-1.5 rotate-[69deg] rounded-full bg-lime" />
      </div>

      <figure className="absolute bottom-[2%] right-[3%] z-10 h-[75%] w-[71%] rotate-[5deg] overflow-hidden rounded-[2.1rem] border-4 border-paper bg-card shadow-2xl sm:rounded-[2.8rem]">
        <img
          src={heroRoommates}
          alt="Three friends spending time together in a shared apartment"
          width={900}
          height={985}
          className="size-full object-cover"
        />
      </figure>

      <figure className="absolute left-[2%] top-[9%] z-20 h-[28%] w-[52%] -rotate-[9deg] overflow-hidden rounded-3xl border-4 border-paper bg-card shadow-xl">
        <img
          src={heroBedroom}
          alt="A warm, inviting bedroom in a shared accommodation"
          width={1000}
          height={563}
          className="size-full object-cover"
          fetchPriority="high"
        />
      </figure>

      <figure className="absolute bottom-[1%] right-[-4%] z-20 h-[27%] w-[55%] rotate-[10deg] overflow-hidden rounded-3xl border-4 border-paper bg-card shadow-xl">
        <img
          src={heroBuilding}
          alt="A contemporary apartment building surrounded by greenery"
          width={1000}
          height={563}
          className="size-full object-cover"
        />
      </figure>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-36 lg:min-h-[min(58rem,100svh)] lg:pt-32"
    >
      <div className="shell relative">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-7 lg:pb-8">
            <p className="eyebrow mb-10 text-muted-foreground animate-rise sm:mb-14">
              Shared accommodation <span className="text-lime">/</span> Compatible roommates{" "}
              <span className="text-lime">/</span> Better living
            </p>

            <h1 className="font-display text-[clamp(3.45rem,7.3vw,7.35rem)] font-extrabold leading-[0.85] tracking-[-0.065em] uppercase sm:text-[clamp(4.8rem,7.3vw,7.35rem)] lg:whitespace-nowrap">
              <span className="block animate-rise [animation-delay:80ms]">Find a place.</span>
              <span className="block text-lime animate-rise [animation-delay:220ms]">
                Find your people.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:340ms] sm:mt-11 sm:text-xl">
              Discover shared accommodation and connect with compatible roommates who match your
              lifestyle, routine, and goals.
            </p>

            <div className="mt-8 flex flex-col gap-3 animate-rise [animation-delay:420ms] sm:mt-10 sm:flex-row sm:flex-wrap">
              <Button asChild variant="lime" size="xl">
                <a href={SEEKER_SURVEY_URL} {...EXTERNAL}>
                  I&apos;m Looking for Accommodation <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href={PROVIDER_SURVEY_URL} {...EXTERNAL}>
                  I&apos;m a Property Provider <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative z-0 lg:col-span-5 lg:col-start-8 lg:-ml-8 lg:translate-x-16 lg:-translate-y-12">
            <HeroGallery />
          </div>
        </div>

        <p className="eyebrow mt-8 flex items-center gap-3 text-foreground animate-rise [animation-delay:500ms] lg:absolute lg:bottom-0 lg:left-[clamp(1.25rem,4vw,3rem)] lg:mt-0">
          <ComingSoonDot />
          The main Bunkie platform is coming soon.
        </p>
      </div>
    </section>
  );
}

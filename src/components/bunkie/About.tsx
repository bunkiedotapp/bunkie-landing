import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line py-24 sm:py-36"
    >
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <SectionLabel index="01" className="text-muted-foreground md:sticky md:top-28">
            About Bunkie
          </SectionLabel>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 id="about-title" className="display-lg">
              More than just a place <span className="text-lime">to live.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead mt-12 max-w-3xl text-foreground sm:mt-16">
              Finding accommodation is about more than four walls. It's about comfort, convenience,
              compatibility and the people you share your everyday life with.
            </p>
          </Reveal>
          <Reveal
            delay={180}
            className="mt-12 grid gap-8 text-base leading-relaxed text-muted-foreground sm:grid-cols-2 sm:gap-10"
          >
            <p>
              Bunkie was born from a simple thought: finding a place to live and finding the right
              people to live with should not be unnecessarily difficult.
            </p>
            <p className="border-l-2 border-lime pl-5">
              We're building Bunkie to bring accommodation discovery and roommate compatibility
              closer together, creating a more thoughtful shared-living experience.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

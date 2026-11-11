import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const statements = [
  "Better accommodation discovery.",
  "More compatible shared living.",
  "Stronger living communities.",
];

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-title"
      className="border-t border-line py-24 sm:py-36"
    >
      <div className="shell">
        <SectionLabel index="02" className="text-muted-foreground">
          Our Vision
        </SectionLabel>
        <Reveal>
          <h2 id="vision-title" className="display-lg mt-10 max-w-6xl">
            A better way to live <span className="text-lime">together.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <Reveal
            className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7"
            delay={100}
          >
            <p>
              We envision a world where finding accommodation feels less overwhelming, where people
              have more clarity when choosing where to live, and where shared living begins with
              better compatibility.
            </p>
            <p className="text-foreground">
              Our vision is to make the journey of finding a place and finding your people simpler,
              more transparent and more human.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 sm:mt-28">
          <p className="eyebrow mb-6 text-muted-foreground">What we're working towards</p>
          <ol className="border-b border-line">
            {statements.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 90} className="group border-t border-line">
                <div className="flex items-baseline gap-5 py-7 sm:gap-10 sm:py-10">
                  <span className="eyebrow w-8 shrink-0 text-lime">0{i + 1}</span>
                  <h3 className="display-md transition-colors duration-300 group-hover:text-lime">
                    {s}
                  </h3>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

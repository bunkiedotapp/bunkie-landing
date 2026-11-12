import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const statements = [
  "Accommodation discovery that fits.",
  "Lifestyle profiles that add context.",
  "Compatibility that informs decisions.",
];

const compatibilityTypes = [
  [
    "Person-to-property compatibility",
    "A planned view of how a property’s budget, location, amenities and rules align with an individual’s needs.",
  ],
  [
    "Person-to-person compatibility",
    "A planned comparison of prospective roommates’ lifestyle profiles and preferences.",
  ],
  [
    "Mutual compatibility",
    "A clearer two-way picture, so both people can consider whether the fit works for them.",
  ],
  [
    "Roommate requirement",
    "A planned way to compare a roommate requirement with the preferences a potential flatmate shares.",
  ],
  [
    "Group compatibility",
    "A planned view for shared homes, helping groups consider routines, expectations and fit together.",
  ],
] as const;

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
              From PGs and flats for rent to apartments, private rooms and shared accommodation,
              Bunkie is being designed to help people discover options around budget, location and
              personal preferences.
            </p>
            <p>
              Planned lifestyle profiles will add context beyond a listing: cleanliness, sleep
              schedules, smoking, drinking, partying, guests, pets, interests and daily routines.
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

        <div className="mt-20 grid gap-8 md:grid-cols-12 sm:mt-28">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">The compatibility engine</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal delay={100}>
              <h3 className="display-md">
                More context before <span className="text-lime">you choose.</span>
              </h3>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Bunkie is planned to bring property discovery and roommate compatibility together,
                so seekers, flatmates and providers can make better-informed accommodation
                decisions.
              </p>
            </Reveal>
            <ol className="mt-10 border-t border-line">
              {compatibilityTypes.map(([title, description], index) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={160 + index * 70}
                  className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6 sm:py-8"
                >
                  <span className="eyebrow text-lime sm:col-span-1">0{index + 1}</span>
                  <div className="sm:col-span-4">
                    <h4 className="font-display text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">
                      {title}
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground sm:col-span-7">
                    {description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

import { EARLY_ACCESS_FORM_EMBED_URL } from "@/lib/bunkie";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function EarlyAccess() {
  return (
    <section
      id="early-access"
      aria-labelledby="early-access-title"
      className="border-y border-line py-24 sm:py-36"
    >
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <SectionLabel index="06" className="text-muted-foreground">
            Early Access
          </SectionLabel>
          <Reveal>
            <h2 id="early-access-title" className="display-lg mt-10">
              Be among the <span className="text-lime">first.</span>
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={100}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Finding a place to live — or the right people to live with — should be easier.
              Register your interest and be among the first to hear when Bunkie is ready.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-10 sm:mt-12">
            <div className="overflow-hidden rounded-2xl border border-line bg-paper sm:rounded-3xl">
              <iframe
                src={EARLY_ACCESS_FORM_EMBED_URL}
                title="Bunkie early access registration"
                className="block h-[64rem] w-full border-0 bg-paper sm:h-[58rem]"
                loading="lazy"
              >
                Loading registration form…
              </iframe>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We’ll only use your details to keep you updated about Bunkie. A link to our Privacy
              Policy will be added here when it is published.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

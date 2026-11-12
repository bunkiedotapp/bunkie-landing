import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const questions = [
  {
    question: "What is Bunkie?",
    answer:
      "Bunkie is a planned shared-living platform that brings property discovery, lifestyle context and roommate compatibility closer together.",
  },
  {
    question: "Can I find PGs, flats and rooms?",
    answer:
      "That is the goal. Bunkie is being built to help people discover PGs, flats for rent, apartments, private rooms and shared accommodation around their budget, location and preferences.",
  },
  {
    question: "How does roommate compatibility work?",
    answer:
      "Planned lifestyle profiles will help people compare preferences such as cleanliness, sleep schedules, smoking, drinking, partying, guests, pets and daily routines before they decide to live together.",
  },
  {
    question: "Can I check property compatibility?",
    answer:
      "Bunkie is planned to show person-to-property compatibility, giving seekers more context about how a property’s location, budget, amenities and rules may fit their needs.",
  },
  {
    question: "Can I post a roommate requirement?",
    answer:
      "That is a planned feature. A roommate requirement will be designed to help people compare their needs with potential flatmates and make a more mutual choice.",
  },
  {
    question: "Can property owners list properties?",
    answer:
      "Yes, Bunkie is being built for property providers too, with planned listing details for pricing, images, amenities and property rules.",
  },
  {
    question: "Which cities will Bunkie launch in?",
    answer:
      "We’re starting by building Bunkie’s initial community in Gurugram. Future city availability will be shared as plans are confirmed.",
  },
  {
    question: "When will Bunkie launch?",
    answer:
      "Bunkie is currently in development. Register for early access to join the initial community and hear updates as they are ready to share.",
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line py-24 sm:py-36">
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <SectionLabel index="08" className="text-muted-foreground md:sticky md:top-28">
            FAQ
          </SectionLabel>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 id="faq-title" className="display-lg">
              Questions, <span className="text-lime">answered.</span>
            </h2>
          </Reveal>
          <ol className="mt-12 border-t border-line sm:mt-16">
            {questions.map(({ question, answer }, index) => (
              <Reveal
                as="li"
                key={question}
                delay={index * 55}
                className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6 sm:py-8"
              >
                <span className="eyebrow text-lime sm:col-span-1">0{index + 1}</span>
                <div className="sm:col-span-11">
                  <h3 className="font-display text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">
                    {question}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

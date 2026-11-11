import { CONTACT_EMAIL, EXTERNAL, SOCIALS } from "@/lib/bunkie";
import { BunkieLogo } from "./BunkieLogo";

const explore = [
  { href: "#about", label: "About" },
  { href: "#vision", label: "Our Vision" },
  { href: "#research", label: "Research" },
];

const linkCls = "text-paper transition-colors hover:text-lime";

export function SiteFooter() {
  return (
    <footer className="border-t border-line pt-16 sm:pt-24">
      <div className="shell grid gap-12 pb-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <BunkieLogo className="text-4xl text-paper" />
          <p className="mt-5 text-lg text-ink-muted">Find your people. Find your place.</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
          <div>
            <h2 className="eyebrow mb-5 text-ink-muted">Explore</h2>
            <ul className="space-y-3 font-semibold">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkCls}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-5 text-ink-muted">Follow</h2>
            <ul className="space-y-3 font-semibold">
              {SOCIALS.map((s) => (
                <li key={s.key}>
                  <a href={s.href} {...EXTERNAL} className={linkCls}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="eyebrow mb-5 text-ink-muted">Contact</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className={`${linkCls} break-all font-semibold underline decoration-lime underline-offset-4`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-ink-muted">© 2026 Bunkie. All rights reserved.</p>
          <p className="eyebrow text-lime">Made for better shared living.</p>
        </div>
      </div>
    </footer>
  );
}

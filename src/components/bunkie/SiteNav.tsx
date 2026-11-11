import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/bunkie";
import { cn } from "@/lib/utils";
import { BunkieLogo } from "./BunkieLogo";
import { ComingSoonDot } from "./ComingSoonDot";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <a href="#top" className="text-paper" onClick={() => setOpen(false)}>
          <BunkieLogo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm font-semibold text-ink-muted transition-colors hover:text-paper"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="eyebrow flex items-center gap-2 border border-lime/40 px-3 py-1.5 text-lime">
            <ComingSoonDot />
            Coming soon
          </span>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <span className="eyebrow flex items-center gap-2 text-lime">
            <ComingSoonDot />
            <span className="hidden sm:inline">Coming soon</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 grid size-11 place-items-center text-paper"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink lg:hidden"
      >
        <ul className="shell flex flex-col py-6">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.id} className="border-b border-line">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 font-display text-3xl font-extrabold uppercase tracking-[-0.04em] text-paper transition-colors hover:text-lime"
              >
                <span className="eyebrow text-lime">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

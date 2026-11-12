import { cn } from "@/lib/utils";
import bunkieLogoDark from "@/assets/bunkie-logo-dark.webp";
import bunkieLogoLight from "@/assets/bunkie-logo-light.webp";

/**
 * Official Bunkie wordmarks supplied by the brand owner.
 * Never redraw or AI-generate this artwork — swap the asset files only.
 */
export function BunkieLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn("bunkie-logo relative block h-7 w-[5.75rem] sm:h-8 sm:w-[6.5rem]", className)}
      role="img"
      aria-label="Bunkie"
    >
      <img
        src={bunkieLogoLight}
        alt=""
        width={720}
        height={220}
        className="bunkie-logo__on-light absolute inset-0 size-full object-contain"
      />
      <img
        src={bunkieLogoDark}
        alt=""
        width={720}
        height={220}
        className="bunkie-logo__on-dark absolute inset-0 size-full object-contain"
      />
    </span>
  );
}

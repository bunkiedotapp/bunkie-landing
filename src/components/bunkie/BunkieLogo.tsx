import { cn } from "@/lib/utils";
import bunkieLogo from "@/assets/bunkie-logo.png.asset.json";

/**
 * Official Bunkie logo (white wordmark on transparent), supplied by the brand owner.
 * Never redraw or AI-generate this artwork — swap the asset file only.
 */
export function BunkieLogo({ className }: { className?: string }) {
  return (
    <img
      src={bunkieLogo.url}
      alt="Bunkie"
      width={776}
      height={297}
      className={cn("h-7 w-auto sm:h-8", className)}
    />
  );
}

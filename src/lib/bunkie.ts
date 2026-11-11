// Official Bunkie destinations. Change links here only — every section reads from this file.
export const SEEKER_SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfgnWEXhKfuGeuu_qHzIdzfGknnSJ8HvBajwLxVtzk9yZdC8A/viewform?usp=sharing&ouid=102302593370908455935";
export const PROVIDER_SURVEY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeuU2vFrsuvtFeKWWVGojKUf4nGJl5jo2oh6ikfzZGqk8DqNg/viewform?usp=sharing&ouid=102302593370908455935";

export const CONTACT_EMAIL = "joinbunkie@gmail.com";

export type SocialKey = "instagram" | "x" | "facebook" | "youtube";

export const SOCIALS: { key: SocialKey; label: string; handle: string; href: string }[] = [
  { key: "instagram", label: "Instagram", handle: "@bunkie.app", href: "https://www.instagram.com/bunkie.app" },
  { key: "x", label: "X", handle: "@bunkiedotapp", href: "https://x.com/bunkiedotapp" },
  { key: "facebook", label: "Facebook", handle: "Bunkie", href: "https://www.facebook.com/profile.php?id=61596411542689" },
  { key: "youtube", label: "YouTube", handle: "@bunkiedotapp", href: "https://www.youtube.com/@bunkiedotapp" },
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "vision", label: "Our Vision" },
  { id: "what-we-do", label: "What We Do" },
  { id: "research", label: "Research" },
  { id: "socials", label: "Socials" },
] as const;

export const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

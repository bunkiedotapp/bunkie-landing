import { describe, expect, it } from "vitest";
import { CONTACT_EMAIL, PROVIDER_SURVEY_URL, SEEKER_SURVEY_URL, SOCIALS } from "@/lib/bunkie";

describe("Bunkie official destinations", () => {
  it("seeker survey points to the accommodation-seeker Google Form", () => {
    expect(SEEKER_SURVEY_URL).toContain("1FAIpQLSfgnWEXhKfuGeuu_qHzIdzfGknnSJ8HvBajwLxVtzk9yZdC8A");
  });
  it("provider survey points to the property-provider Google Form", () => {
    expect(PROVIDER_SURVEY_URL).toContain("1FAIpQLSeuU2vFrsuvtFeKWWVGojKUf4nGJl5jo2oh6ikfzZGqk8DqNg");
  });
  it("lists exactly the four official social profiles", () => {
    expect(SOCIALS.map((s) => s.href)).toEqual([
      "https://www.instagram.com/bunkie.app",
      "https://x.com/bunkiedotapp",
      "https://www.facebook.com/profile.php?id=61596411542689",
      "https://www.youtube.com/@bunkiedotapp",
    ]);
  });
  it("uses the official contact email", () => {
    expect(CONTACT_EMAIL).toBe("joinbunkie@gmail.com");
  });
});

import { describe, expect, it } from "vitest";
import { TELEPHONE_URL, WHATSAPP } from "@/lib/contact";

describe("Verified Eletro Easy contact destinations", () => {
  it("uses the exact provided WhatsApp destination", () => {
    expect(WHATSAPP).toBe("https://contate.me/5521966372706");
  });
  it("does not offer voice calls before confirmation", () => {
    expect(TELEPHONE_URL).toBeUndefined();
  });
});
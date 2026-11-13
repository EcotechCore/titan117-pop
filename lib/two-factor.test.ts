import { describe, expect, it } from "vitest";

import { hasSecondFactor, secondFactorRequired } from "./two-factor";

describe("hasSecondFactor", () => {
  it.each([
    [null, false],
    [{}, false],
    [{ fva: [2, -1] }, false],
    [{ fva: "[2,2]" }, false],
    [{ fva: [2] }, false],
    [{ fva: [2, 0] }, true],
    [{ fva: [5, 3] }, true],
  ])("%j → %s", (claims, expected) => {
    expect(hasSecondFactor(claims as Record<string, unknown> | null)).toBe(expected);
  });
});

describe("secondFactorRequired", () => {
  it.each([
    [undefined, true],
    ["", true],
    ["off", true],
    ["false", true],
    ["OFF-UNTIL-CLERK-PRO", true],
    [" off-until-clerk-pro", true],
    ["off-until-clerk-pro", false],
  ])("%j → %s", (setting, expected) => {
    expect(secondFactorRequired(setting)).toBe(expected);
  });
});

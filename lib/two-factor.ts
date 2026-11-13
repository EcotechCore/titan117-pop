/**
 * Whether a Clerk session has passed a second factor. Clerk's `fva` claim is
 * [minutes since first factor, minutes since second factor], with -1 when
 * the second factor was never verified (clerk.com/docs, session tokens,
 * checked 9 Nov 2026). The same rule as hasSecondFactor in the backend's
 * convex/lib/functions.ts.
 */
export function hasSecondFactor(claims: Record<string, unknown> | null | undefined): boolean {
  const fva = claims?.fva;
  return Array.isArray(fva) && typeof fva[1] === "number" && fva[1] >= 0;
}

/**
 * Two-factor is required unless PORTAL_TWO_FACTOR is exactly
 * "off-until-clerk-pro". Clerk's free plan has no multi-factor at all, so
 * until Clerk Pro the portal opens with sign-in only (decisions §37). Any
 * other value, a typo or no value keeps it required. The switch and this
 * exception are removed before phase 5, when the portal first shows data.
 */
export const TWO_FACTOR_OFF = "off-until-clerk-pro";

export function secondFactorRequired(setting: string | undefined): boolean {
  return setting !== TWO_FACTOR_OFF;
}

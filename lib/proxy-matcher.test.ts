// The proxy (sign-in and two-factor) must run for every page. Its matcher
// skips only Next's internals and real static files; a lost backslash once
// made it skip any path ending in letters like "ico" or "js".
import { unstable_doesMiddlewareMatch } from "next/experimental/testing/server";
import { describe, expect, it } from "vitest";

import { config } from "../proxy";

const runs = (url: string) => unstable_doesMiddlewareMatch({ config, url });

describe("proxy matcher", () => {
  it.each(["/", "/pico", "/xjs", "/discuss", "/errors", "/two-factor", "/api/anything"])(
    "runs for %s",
    (path) => {
      expect(runs(path)).toBe(true);
    },
  );

  it.each(["/_next/static/chunk.js", "/favicon.ico", "/logo.svg", "/robots.txt"])(
    "skips the static file %s",
    (path) => {
      expect(runs(path)).toBe(false);
    },
  );
});

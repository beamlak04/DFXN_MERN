import assert from "node:assert/strict";
import test from "node:test";

import { createRateLimiter } from "../middleware/rateLimit.middleware.js";
import { redis } from "../lib/redis.js";

test("login account limiter is independent of client IP when keyByIp is false", async () => {
  redis.disconnect();

  const originalIncr = redis.incr;
  const originalExpire = redis.expire;
  const counts = new Map();

  redis.incr = async (key) => {
    const next = (counts.get(key) || 0) + 1;
    counts.set(key, next);
    return next;
  };
  redis.expire = async () => 1;

  try {
    const limiter = createRateLimiter({
      windowMs: 15 * 60 * 1000,
      maxRequests: 1,
      keyFn: (req) => `login:${String(req.body.email).toLowerCase()}`,
      keyByIp: false,
    });

    const makeReq = (ip) => ({
      ip,
      body: { email: "Admin@Example.com" },
      path: "/login",
    });

    let firstNextCalled = false;
    await limiter(makeReq("203.0.113.10"), {}, () => {
      firstNextCalled = true;
    });

    let statusCode = 0;
    let payload = null;
    await limiter(
      makeReq("198.51.100.20"),
      {
        status(code) {
          statusCode = code;
          return this;
        },
        json(body) {
          payload = body;
        },
      },
      () => assert.fail("second request should be rate limited")
    );

    assert.equal(firstNextCalled, true);
    assert.equal(statusCode, 429);
    assert.match(payload.message, /Too many requests/);
    assert.deepEqual([...counts.keys()], ["rate_limit:login:admin@example.com"]);
  } finally {
    redis.incr = originalIncr;
    redis.expire = originalExpire;
  }
});

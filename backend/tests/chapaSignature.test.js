import assert from "node:assert/strict";
import crypto from "node:crypto";
import test from "node:test";

import { validateChapaCallbackSignature } from "../lib/chapa.js";

test("valid Chapa webhook signatures are accepted", () => {
  process.env.CHAPA_WEBHOOK_SECRET = "test-webhook-secret";
  const rawBody = JSON.stringify({ tx_ref: "ORDER-1", status: "success" });
  const signature = crypto
    .createHmac("sha256", process.env.CHAPA_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  assert.equal(validateChapaCallbackSignature({ rawBody, signature }), true);
});

test("invalid or missing Chapa webhook signatures are rejected", () => {
  process.env.CHAPA_WEBHOOK_SECRET = "test-webhook-secret";
  assert.equal(
    validateChapaCallbackSignature({
      rawBody: JSON.stringify({ tx_ref: "ORDER-1" }),
      signature: "bad-signature",
    }),
    false
  );

  delete process.env.CHAPA_WEBHOOK_SECRET;
  assert.equal(
    validateChapaCallbackSignature({
      rawBody: JSON.stringify({ tx_ref: "ORDER-1" }),
      signature: "bad-signature",
    }),
    false
  );
});

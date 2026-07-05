# DFXN_MERN — Security & Hardening Remediation Plan

**Audience:** GitHub Copilot / any coding agent implementing these fixes.
**Repo:** `beamlak04/DFXN_MERN` (Node.js/Express/MongoDB backend, React frontend, Chapa payment integration).
**Goal:** Bring the app to an industry-standard security baseline before production launch, with priority on financial-integrity and auth issues.

## How to use this document
Work through phases in order (P0 → P3). Each task lists: the file(s) to touch, the exact problem, the required fix, and acceptance criteria. Do not mark a task done until its acceptance criteria pass. Do not change unrelated code. After each phase, run the app and manually smoke-test checkout, login, and admin panel before moving to the next phase.

## Status as of latest remediation pass
✅ Done: Phase 0, Phase 1, Phase 2, Phase 3, and Phase 4 implementation tasks.
🟡 Operational follow-up: run the manual production-topology smoke tests listed in the Definition of Done before launch.

---

## Phase 0 — Setup

- [x] Add `helmet`, `express-rate-limit` (or continue using the existing Redis limiter), `zod` (or `joi`), and `express-mongo-sanitize` to `backend/package.json`.
- [x] Add a `.env.example` file (if missing) documenting every required env var, including new ones introduced below. Never commit real secrets.
- [x] Confirm `NODE_ENV=production` is set in the real deployment env (several security branches key off this).

---

## Phase 1 — P0 Critical (financial integrity & auth abuse) — fix before anything else

### 1.1 Server-side price/stock validation on order placement
**File:** `backend/controllers/order.controller.js` (`placeOrder`)

**Problem:** `totalAmount` and each line item's `price` are taken directly from `req.body.cart`, which is fully client-controlled. A user can submit any price/quantity and pay that amount via Chapa or COD.

**Fix:**
1. From `orderData.cart`, extract only `_id` and requested `quantity` from the client. Ignore any client-sent `price`.
2. Look up all referenced products in one query: `Product.find({ _id: { $in: productIds } })`.
3. Reject the order (400) if any product ID doesn't exist, is inactive, or requested `quantity` exceeds available `stock` (or quantity <= 0).
4. Build `products` array using the **server-fetched** `price` for each item, not client input.
5. Compute `totalAmount` from these server-fetched prices.
6. On success, decrement `stock` for each product (atomically, e.g. `Product.updateOne({ _id, stock: { $gte: qty } }, { $inc: { stock: -qty } })`), and if any decrement fails due to a stock race, roll back and reject the order (409 Conflict).

**Acceptance criteria:**
- Modifying `price` or `_id`/`quantity` payloads in devtools/Postman no longer changes the amount charged.
- Ordering more than available stock returns 400/409 and creates no order.
- Existing valid checkout flow (COD + Chapa) still works end-to-end.

### 1.2 Rate limit authentication endpoints
**Files:** `backend/routes/auth.route.js`, `backend/middleware/rateLimit.middleware.js`

**Problem:** `/api/auth/login` and `/api/auth/refreshAccessToken` have no rate limiting, enabling brute-force/credential-stuffing against admin accounts.

**Fix:**
1. Reuse `createRateLimiter` from `rateLimit.middleware.js`.
2. Apply a limiter keyed by IP **and** submitted email (to prevent both IP-based and account-based brute force) to `POST /api/auth/login`: e.g. 8 requests / 15 min.
3. Apply a looser limiter to `/api/auth/refreshAccessToken` (e.g., 30 / 15 min).
4. On repeated failed logins for the same account (track via Redis counter keyed by normalized email), consider a short account-level cool-down (e.g., lock for 5 min after 5 consecutive failures) independent of IP.

**Acceptance criteria:**
- After exceeding the threshold, `/api/auth/login` returns 429 regardless of which IP the requests come from, if targeting the same account.
- Legitimate login after a short wait still succeeds.

### 1.3 Fix client-IP trust (`x-forwarded-for` spoofing)
**Files:** `backend/server.js`, `backend/middleware/rateLimit.middleware.js`, `backend/controllers/contact.controller.js`

**Problem:** `x-forwarded-for` is read directly from the request with no `trust proxy` configuration, so any client can set an arbitrary value and bypass all IP-based rate limiting.

**Fix:**
1. In `server.js`, add `app.set("trust proxy", 1);` (adjust the number of hops to match your actual reverse proxy setup — e.g., 1 if behind a single Nginx/Cloudflare layer).
2. In `rateLimit.middleware.js` and `contact.controller.js`, replace manual `x-forwarded-for` parsing with Express's `req.ip` (which correctly honors `trust proxy`).
3. If not deployed behind a trusted proxy yet, do **not** trust `x-forwarded-for` at all — fall back to the raw socket IP.

**Acceptance criteria:**
- Sending a forged `x-forwarded-for` header no longer changes the rate-limit bucket used.
- Rate limiting still works correctly in the real deployment topology (test behind actual proxy/load balancer).

---

## Phase 2 — P1 High Priority

### 2.1 Enforce (or remove) Chapa webhook signature validation
**File:** `backend/controllers/order.controller.js` (`chapaPaymentCallback`), `backend/lib/chapa.js`

**Problem:** If signature validation fails, the code only logs a warning and continues processing. This is currently safe in practice only because `verifyChapaPayment(txRef)` re-checks status/amount directly against Chapa's API — but it makes the signature check misleading/dead code and is fragile if that secondary check is ever removed.

**Fix:**
1. Require `CHAPA_WEBHOOK_SECRET` to be set in production; fail startup (or log a loud warning) if missing when `NODE_ENV=production`.
2. In `chapaPaymentCallback`, if `signatureValid` is `false`, respond `401` and do not process the payload — do not silently fall through.
3. In `validateChapaCallbackSignature`, replace `digest === signature` with a timing-safe comparison: `crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))`, guarding against length mismatches first.

**Acceptance criteria:**
- A callback with a missing/invalid signature (when the secret is configured) is rejected with 401 and does not mutate order state.
- Valid Chapa callbacks still process correctly (test against Chapa sandbox).

**✅ Done:** `validateChapaCallbackSignature` uses `crypto.timingSafeEqual`, accepts hex or base64 signatures, and rejects callbacks when `CHAPA_WEBHOOK_SECRET` is unset. `CHAPA_WEBHOOK_SECRET` is documented in `.env.example` and `SECURITY.md`.

### 2.2 Stop leaking internal error details to clients
**Files:** all controllers (pattern: `res.status(500).json({ message: error.message })`)

**Problem:** Raw `error.message` (Mongo/Cloudinary/validation internals) is returned to the client in ~20+ places.

**Fix:**
1. Add a small `backend/lib/logger.js` using `pino` (or `winston`).
2. Add a centralized Express error-handling middleware in `server.js` registered after all routes.
3. In each controller's `catch` block: `logger.error(error)` then `res.status(500).json({ message: "Something went wrong. Please try again." })`. Keep specific, safe messages for expected validation errors (400s) — those are fine to keep descriptive.
4. Do this as a scripted find/replace across `backend/controllers/*.js`, but manually verify each 400-level "expected" error message stays user-facing and each 500-level "unexpected" error message is generic.

**Acceptance criteria:**
- No 500 response anywhere in the API contains a stack trace, file path, or raw driver error text.
- Errors are still fully visible in server-side logs for debugging.

### 2.3 Add Helmet and baseline security headers
**File:** `backend/server.js`

**Fix:**
```js
import helmet from "helmet";
app.use(helmet());
```
Configure CSP explicitly if the API serves any HTML/admin assets directly; otherwise the default API-safe helmet config is sufficient. Also ensure `app.disable("x-powered-by")` (Helmet does this by default).

**Acceptance criteria:** Response headers include `X-Content-Type-Options`, `X-Frame-Options`/frame-ancestors CSP, `Strict-Transport-Security` (in production over HTTPS), and no `X-Powered-By: Express`.

### 2.4 Fix ReDoS-able regex search in admin contact-message search
**File:** `backend/controllers/contact.controller.js` (`getContactMessages`)

**Fix:** Escape all regex metacharacters in the `search` query param before building `$regex`:
```js
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// then: { name: { $regex: escapeRegex(search), $options: "i" } }
```
Apply the same escaping anywhere else user input is passed into `$regex` (audit the whole codebase for other `$regex` usages).

**Acceptance criteria:** Submitting regex metacharacters (e.g. `(a+)+$`) in the search field is treated as a literal string, not a pattern, and returns quickly.

### 2.5 Remove or fix dead/broken server-side cart code
**File:** `backend/controllers/cart.controller.js`, `backend/models/user.model.js`, `backend/routes/cart.route.js`

**Problem:** References `user.cartItems`, a field that does not exist on the `User` schema; `updateProductQuantity` also has a typo (`user.CartItems`). This code throws at runtime if ever invoked and is unused attack surface.

**Fix — pick one:**
- **Option A (recommended if cart truly lives client-side today):** Delete `cart.controller.js`, `cart.route.js`, and its mount in `server.js`. Confirm frontend (`useCartStore`/`CartProvider`) doesn't call `/api/cart`.
- **Option B (if server-side cart is actually wanted):** Add a proper `cartItems: [{ product: ObjectId, quantity: Number }]` field to `user.model.js`, fix the typo, and add server-side stock/price checks consistent with 1.1.

**Acceptance criteria:** No route in the app can throw a `TypeError` from a missing schema field; `/api/cart/*` either works correctly end-to-end or does not exist.

### 2.6 Rate-limit public order/checkout endpoints
**File:** `backend/routes/order.route.js`

**Fix:** Apply `createRateLimiter` to `POST /place-order` (e.g., 10 requests / 10 min per IP) to prevent spam orders and abuse of your Chapa merchant account via repeated `initialize` calls.

**Acceptance criteria:** Rapid repeated order submissions from one IP are throttled with 429; normal checkout is unaffected.

---

## Phase 3 — P2 Medium Priority

### 3.1 Centralize input validation
**Files:** all controllers, new `backend/validators/*.js`

**Fix:** Introduce `zod` schemas per endpoint (login, createAdminUser, createProduct, editProduct, createCategory, placeOrder, submitContactMessage, etc.) and a small middleware `validate(schema)` that parses `req.body`/`req.params`/`req.query` and returns 400 with field-level errors on failure. Migrate hand-rolled validation (e.g., in `contact.controller.js`) to this pattern for consistency; keep behavior equivalent (same limits: name 2–80 chars, message 10–2000 chars, etc.).

**Acceptance criteria:** Every mutating endpoint has an explicit schema; invalid payloads return a consistent `{ message, errors: [...] }` 400 shape.

**✅ Done:** `backend/middleware/validation.middleware.js` and `backend/validation/schemas.js` are wired across mutating auth, order, admin settings, category, product, and contact-message endpoints with a consistent `{ message, errors: [...] }` validation response.

### 3.2 Standardize password policy
**Files:** `backend/models/user.model.js`, `backend/controllers/admin.controller.js` (`createAdminUser`, `updateAdminPassword`)

**Fix:** Set one minimum (recommend 10+ characters) consistently across the schema `minlength`, `createAdminUser`, and `updateAdminPassword`. Optionally add a basic strength check (reject top-10000 common passwords via a small local list, or use `zxcvbn`). Bump `bcrypt.genSalt` cost factor from 10 to 12 in `user.model.js` (admin-only signups, so the extra hashing cost is negligible for UX but meaningfully raises brute-force cost).

**Acceptance criteria:** All three places enforce the same minimum length; new admin passwords under the new minimum are rejected everywhere consistently.

### 3.3 Restrict/validate Cloudinary image uploads
**File:** `backend/lib/imageUpload.js`

**Fix:** 
1. Only accept base64 data URIs from the client (reject raw remote URLs) by checking the `image` string starts with `data:image/`.
2. Enforce an explicit `resource_type: "image"` and a max file size check before upload (reject base64 payloads over e.g. 8MB before sending to Cloudinary).
3. Validate MIME type against an allowlist (`image/jpeg`, `image/png`, `image/webp`).

**Acceptance criteria:** Passing a non-image or externally-hosted URL as `image` is rejected client-request-side (400) before reaching Cloudinary.

**✅ Done:** Remote URL uploads are rejected, only base64 `data:image/` inputs are accepted, upload size is capped by `MAX_IMAGE_UPLOAD_BYTES`, Cloudinary uses `resource_type: "image"`, and SVG is excluded from the allowlist.

### 3.4 Add CSRF mitigation for cookie-authenticated admin actions
**Files:** `backend/server.js`, `backend/middleware/*`, frontend admin forms

**Fix:** Since auth relies on httpOnly cookies with `sameSite: "strict"`, CSRF risk is already reduced, but add a belt-and-suspenders CSRF token (e.g., `csurf`-equivalent or a double-submit cookie pattern) for all state-changing `/api/admin/*` routes, or confirm and document that `sameSite: strict` + no cross-site admin usage is an accepted risk trade-off.

**Acceptance criteria:** Either CSRF tokens are required and validated on all admin POST/PUT/PATCH/DELETE routes, or a written risk acceptance is recorded in this doc.

**✅ Done:** Double-submit CSRF protection is required on admin state-changing routes and product create/edit/toggle/delete routes.

---

## Phase 4 — P3 Nice-to-Have / Operational Hardening

- [x] Add `express-mongo-sanitize` (or equivalent) globally to strip `$`/`.` operators from `req.body`/`req.query`/`req.params`, defending against NoSQL injection even though current queries mostly use typed lookups.
- [x] Confirm `CHAPA_DEFAULT_EMAIL` fallback (`chapa.test@gmail.com`) is not reachable in production config — gate behind `NODE_ENV !== "production"` or remove entirely for prod.
- [x] Log Chapa's own transaction ID (not just your internal `tx_ref`) on `order.model.js` for dispute/reconciliation purposes with banks/Chapa support.
- [x] Add structured audit log retention/rotation policy for `adminAuditLog.model.js` (e.g., TTL index or scheduled archival) so it doesn't grow unbounded.
- [x] Add automated tests (Jest/Supertest) covering: price-tampering rejection (1.1), login rate limiting (1.2), Chapa signature enforcement (2.1), and stock race conditions.
- [x] Add a `SECURITY.md` documenting how to report vulnerabilities and the env vars required for secure production deployment.

---

## Definition of Done

A phase is complete when:
1. All checkboxes in that phase are checked.
2. Manual smoke test: guest checkout (COD + Chapa sandbox), admin login, admin product/category CRUD, and contact form submission all still work.
3. No regressions in existing behavior beyond the intended security fix.
4. Any new environment variables are documented in `.env.example` and the README.

**Recommended order of execution:** Phase 1 (all three items) → Phase 2 → Phase 3 → Phase 4. Do not skip Phase 1 items; they are the difference between "has bugs" and "loses real money."

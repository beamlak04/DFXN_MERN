# Security Policy

## Reporting a Vulnerability

Please report suspected vulnerabilities privately to the repository owner or maintainer. Include:

- Affected endpoint, page, or workflow.
- Steps to reproduce.
- Expected impact.
- Any logs, request samples, or screenshots that help confirm the issue.

Do not open public issues for active vulnerabilities until a fix is available.

## Production Security Checklist

Required environment variables:

- `NODE_ENV=production`
- `MONGO_URI`
- `UPSTASH_REDIS_URL`
- `ACCESS_TOKEN_SECRET`
- `REFRESH_TOKEN_SECRET`
- `CLIENT_URLS`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET_KEY`
- `CHAPA_SECRET_KEY`
- `CHAPA_WEBHOOK_SECRET`
- `CHAPA_SIGNATURE_HEADER`
- `CHAPA_CALLBACK_URL`
- `CHAPA_RETURN_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `CONTACT_NOTIFY_TO`
- `MASTER_EMAIL`
- `MASTER_PASSWORD`
- `MASTER_NAME`

Recommended operational settings:

- `MAX_IMAGE_UPLOAD_BYTES=8388608`
- `ADMIN_AUDIT_LOG_RETENTION_DAYS=365`
- Run behind exactly the trusted proxy hops configured by `app.set("trust proxy", 1)`.
- Keep `CHAPA_DEFAULT_EMAIL` out of production payment flow; production online payments require a valid customer email.
- Rotate JWT, Chapa, Cloudinary, Redis, SMTP, and MongoDB secrets after any suspected exposure.

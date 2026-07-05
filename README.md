# DFXN_MERN

DFXN_MERN is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project provides a full-stack framework for rapid development of modern web apps with seamless frontend-backend integration.

## Features

- **Modern Frontend**: Built with React.js for interactive and responsive user interfaces.
- **Robust Backend**: Powered by Node.js and Express.js to handle HTTP requests and API endpoints.
- **Database Integration**: Uses MongoDB for flexible and scalable data storage.
- **RESTful APIs**: Well-structured APIs for client-server communication.
- **Authentication & Authorization**: Secure user login and access control mechanisms.
- **Component-Based Architecture**: Modular and reusable code structure for maintainability.
- **Environment Configuration**: Uses environment variables for secure configuration.
- **Contact Workflow**: Public contact submission with admin review statuses (`new`, `reviewed`, `closed`).
- **Email Notifications**: SMTP-based notifications for new contact submissions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/beamlak04/DFXN_MERN.git
    cd DFXN_MERN
    ```

2. Install backend dependencies from the repo root:
    ```bash
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

### Configuration

- Copy `.env.example` to `.env` in the repo root and fill in real secrets.
- In production, set `NODE_ENV=production`, configure `CHAPA_WEBHOOK_SECRET`, and use a secret store instead of committing credentials.
- Online Chapa/Telebirr payments require a valid customer email in production. `CHAPA_DEFAULT_EMAIL` is only a local/sandbox fallback.
- Admin audit logs are retained by MongoDB TTL index for `ADMIN_AUDIT_LOG_RETENTION_DAYS` days.

Example contact-related variables:

```env
UPSTASH_REDIS_URL=redis://...

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=example-user
SMTP_PASS=example-pass
SMTP_FROM=alerts@yourdomain.com
CONTACT_NOTIFY_TO=support@yourdomain.com

# Chapa sandbox integration
CHAPA_SECRET_KEY=CHAPAK_TEST_xxxxxxxxxxxxxxxxxxxxx
CHAPA_WEBHOOK_SECRET=
CHAPA_SIGNATURE_HEADER=x-chapa-signature
CHAPA_WEBHOOK_FIRST=true
CHAPA_CALLBACK_URL=https://your-public-domain.com/api/orders/payment/callback
CHAPA_RETURN_URL=http://localhost:5173/payment-result
MAX_IMAGE_UPLOAD_BYTES=8388608
ADMIN_AUDIT_LOG_RETENTION_DAYS=365
```

### Chapa Sandbox Checkout Test

1. Update root `.env` and set your sandbox Chapa keys.
2. Start backend and frontend.
3. Go to checkout (`/place-order`) and choose `Chapa` or `Telebirr`.
4. Complete sandbox payment from Chapa hosted page.
5. You will return to `/payment-result` where status is shown.

Note:
- With `CHAPA_WEBHOOK_FIRST=true`, order payment is confirmed from callback/webhook first.
- Frontend return flow will show `pending` until callback updates the order.
- Optional frontend fallback verify can be enabled in `frontend/.env` with `VITE_CHAPA_VERIFY_ON_RETURN=true`.

### Running the Application

1. Start MongoDB (if running locally).
2. Run the server:
    ```bash
    npm start
    ```
3. Run the client (in another terminal):
    ```bash
    cd frontend
    npm run dev
    ```

### Tests

Run backend security unit tests from the repo root:

```bash
npm test
```

## Usage

- Access the frontend at [http://localhost:3000](http://localhost:3000)
- Backend APIs available at [http://localhost:5000/api](http://localhost:5000/api) (default)

## Folder Structure

```
DFXN_MERN/
  frontend/  # React frontend source code
  backend/   # Node.js/Express/MongoDB backend code
```

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues](https://github.com/beamlak04/DFXN_MERN/issues) or submit a pull request!


## Author

Made by [beamlak04](https://github.com/beamlak04).

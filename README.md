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

2. Install server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

### Configuration

- Create a `.env` file in the `server` directory with your MongoDB URI and other environment variables.

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
```

### Running the Application

1. Start MongoDB (if running locally).
2. Run the server:
    ```bash
    cd server
    npm start
    ```
3. Run the client (in another terminal):
    ```bash
    cd client
    npm start
    ```

## Usage

- Access the frontend at [http://localhost:3000](http://localhost:3000)
- Backend APIs available at [http://localhost:5000/api](http://localhost:5000/api) (default)

## Folder Structure

```
DFXN_MERN/
  client/    # React frontend source code
  server/    # Node.js/Express/MongoDB backend code
```

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues](https://github.com/beamlak04/DFXN_MERN/issues) or submit a pull request!


## Author

Made by [beamlak04](https://github.com/beamlak04).

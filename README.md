## 📖 README.md

# Admin Management System API

A robust, production-ready backend boilerplate for managing administrator accounts. This system handles registration, secure login, and automated email notifications using modern JavaScript practices.

## 🚀 Features

* **Modular Architecture**: Organized by feature (Admin module) with separate layers for routing, business logic (services), and data access (models).
* **Secure Authentication**: Password hashing using `bcryptjs` and session management via JSON Web Tokens (JWT).
* **Email Integration**: Automated "Welcome" emails sent via **Brevo (Sendinblue)** API upon successful registration.
* **Centralized Error Handling**: Custom `AppError` utility and middleware for consistent API error responses.
* **Database**: MongoDB integration using Mongoose with schema validation and automated timestamps.

---

## 🛠️ Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js
* **Database**: MongoDB
* **Mailing**: Brevo API
* **Security**: JWT, BcryptJS, CORS

---

## 📁 Project Structure

```text
├── config/
│   ├── db.js          # MongoDB connection logic
│   └── brevo.js       # Brevo Email API configuration
├── middleware/
│   ├── auth.middleware.js   # JWT verification
│   └── error.middleware.js  # Global error handling
├── modules/
│   └── admin/
│       ├── admin.controller.js # Request/Response handling
│       ├── admin.model.js      # Mongoose Schema
│       ├── admin.routes.js     # Admin endpoints
│       └── admin.service.js    # Business logic & DB queries
├── utils/
│   ├── AppError.js     # Custom error class
│   └── generateToken.js # JWT signing helper
├── app.js             # App configuration & middleware
└── server.js          # Server entry point

```

---

## ⚙️ Setup & Installation

### 1. Prerequisites

* Node.js (v14+)
* MongoDB Atlas account or local MongoDB instance
* Brevo API Key

### 2. Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
BREVO_API_KEY=your_brevo_api_key
EMAIL_FROM=admin@system.com

```

### 3. Install Dependencies

```bash
npm install

```

### 4. Run the Server

```bash
# Development mode
npm run dev

# Production mode
npm start

```

---

## 🛣️ API Endpoints

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| **POST** | `/api/admin/register` | Register a new admin & send welcome email | No |
| **POST** | `/api/admin/login` | Login and receive JWT | No |

---

## 🛡️ Security Features

* **Password Hashing**: Never stores plain-text passwords.
* **Protected Routes**: Use the `auth` middleware to secure sensitive endpoints.
* **CORS**: Enabled for cross-origin resource sharing.

---

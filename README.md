# POS Authentication Module

Authentication and authorization system for Point of Sale applications using JWT tokens.

## Features

- 🔐 User registration and login
- 🎫 JWT token authentication
- 🔒 Protected routes via middleware
- 🔑 Password hashing with bcrypt
- 👤 User roles (Admin, Cashier, Manager) — in progress
- 📝 CRUD operations with authorization — in progress

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MySQL (raw queries via mysql2)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt

## API Endpoints

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Log in and receive a JWT | No |
| GET | `/auth/me` | Get authenticated user data | Yes |

## Status

🚧 Work in progress — core authentication flow (register, login, JWT middleware) is implemented and tested. Role-based access control and integration with the POS system are still pending.

## Installation

```bash
# Clone repository
git clone https://github.com/Mateoquil/pos-auth-module.git
cd pos-auth-module

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials and JWT secret

# Create the users table in your MySQL database (see below)

# Run
npm run dev
```

### Database setup

```sql
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Future Improvements

- User roles (Admin, Cashier, Manager) with role-based route protection
- Refresh tokens
- Rate limiting
- Email verification
- API documentation with Swagger
- **Integrate with POS inventory system**
---

**Note:** This authentication module is designed to be integrated into a Point of Sale system. Developed as part of a backend development portfolio.

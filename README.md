# POS Authentication Module

Authentication and authorization system for Point of Sale applications using JWT tokens.
Integrated with [pos-inventory-system](https://github.com/Mateoquil/pos-inventory-system) to protect its API routes via a shared JWT secret.

## Features

- 🔐 User registration and login
- 🎫 JWT token authentication
- 🔒 Protected routes via middleware
- 🔑 Password hashing with bcryptjs
- 👤 User roles (Admin, Cashier, Manager) with role-based route protection
- ✅ Automated tests (Jest + Supertest)

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MySQL (raw queries via mysql2)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs
- **Testing:** Jest, Supertest

## API Endpoints

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Log in and receive a JWT | No |
| GET | `/auth/me` | Get authenticated user data | Yes |
| GET | `/auth/admin-only` | Example admin-only route | Yes (admin role) |

## Status

✅ Core authentication flow complete and tested: register, login, JWT middleware, and role-based access control (RBAC). Integrated with [pos-inventory-system](https://github.com/Mateoquil/pos-inventory-system), which uses the same JWT secret to verify tokens issued here.

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
# (use the same JWT_SECRET in pos-inventory-system to enable integration)

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
    role VARCHAR(20) NOT NULL DEFAULT 'cashier',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Running tests

```bash
npm test
```

## Future Improvements

- Refresh tokens
- Rate limiting
- Email verification
- API documentation with Swagger

---

**Note:** This authentication module is designed to be integrated into a Point of Sale system. Developed as part of a backend development portfolio.

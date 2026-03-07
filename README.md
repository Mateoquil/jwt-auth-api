# POS Authentication Module

Authentication and authorization system for Point of Sale applications using JWT tokens.

## Features (Planned)

- 🔐 User registration and login
- 🎫 JWT token authentication
- 👤 User roles (Admin, Cashier, Manager)
- 🔒 Protected routes
- 📝 CRUD operations with authorization
- 🔑 Password hashing with bcrypt

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MySQL
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt

## Status

🚧 Work in progress - Currently in initial development phase.

## Installation
```bash
# Clone repository
git clone https://github.com/Mateoquil/pos-auth-module.git
cd pos-auth-module

# Install dependencies
npm install

# Configure environment variables
# Create .env file with your database credentials

# Run
npm start
```

## Future Improvements

- Add refresh tokens
- Implement rate limiting
- Add email verification
- Create API documentation with Swagger
- **Integrate with POS inventory system**

---

**Note:** This authentication module is designed to be integrated into a Point of Sale system. Developed as part of a backend development portfolio.

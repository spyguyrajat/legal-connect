# LegalConnect

A full-stack legal services platform built with React and Node.js/Express.

## Project Structure

```
legalconnect/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── ...
│   └── public/           # Static files
└── server/               # Node.js/Express backend
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── models/      # Database models
    │   └── routes/      # API routes
    └── ...
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/legalconnect
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Features
- User authentication (register/login)
- Role-based access control
- Legal consultation booking
- Document review system
- Case management

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
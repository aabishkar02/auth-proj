# AuthAbhi - Modern Authentication System

A full-stack authentication system with a beautiful, modern UI and secure backend implementation.

## 🌟 Features

### Frontend
- Modern, responsive design with Tailwind CSS
- Beautiful animations and transitions
- Glassmorphism effects
- Form validation and error handling
- Protected routes
- User profile management
- Email verification system
- Password recovery functionality

### Backend
- Secure JWT-based authentication
- Email verification system
- Password hashing with bcrypt
- Rate limiting for security
- CORS configuration
- MongoDB database integration
- RESTful API endpoints

## 🚀 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- React Icons
- React Toastify
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- Nodemailer
- Bcrypt
- Express Rate Limit
- CORS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/aabishkar02/authabhi.git
cd authabhi
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

4. Start the development servers:
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm run dev
```

## 🔒 Environment Variables

### Backend (.env)
- `PORT`: Server port (default: 4000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `EMAIL_USER`: Email address for sending verification emails
- `EMAIL_PASS`: Email password or app-specific password

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-email` - Verify email address
- `POST /api/auth/resend-verification` - Resend verification email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### User
- `GET /api/user/data` - Get user data (protected)
- `PUT /api/user/update` - Update user profile (protected)

## 🎨 UI Components

### Pages
- Home
- Login
- Register
- Profile
- Forgot Password
- Reset Password

### Features
- Responsive design
- Loading states
- Error handling
- Form validation
- Toast notifications
- Protected routes
- Social authentication

## 🔐 Security Features

- JWT-based authentication
- Password hashing
- Email verification
- Rate limiting
- CORS protection
- Secure HTTP headers
- Input validation
- XSS protection

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## 🎯 Future Enhancements

- [ ] Add more social authentication providers
- [ ] Implement two-factor authentication
- [ ] Add user avatar upload
- [ ] Implement real-time notifications
- [ ] Add dark mode support
- [ ] Implement user roles and permissions
- [ ] Add API documentation
- [ ] Implement user activity tracking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React.js team
- Tailwind CSS team
- MongoDB team
- All contributors and users of this project 
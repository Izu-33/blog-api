# Blog API

This is a RESTful API built with Node.js, Express, and MongoDB for managing blog posts and user authentication.

## Features

- User authentication (signup & login)
- JWT-based authentication middleware
- CRUD operations for blog posts
- Redis caching for fetching blog posts
- MongoDB database integration with Mongoose
- Unit testing with Jest and Supertest

## Installation

1. Clone the repository:

```sh
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
```

2. Install dependencies:

```sh
npm install
```

3. Create a .env file in the root directory and add the following:

```sh
PORT=5000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
JWT_SECRET_KEY=your_jwt_secret
```

4. Start the development server:

```sh
npm start
```

## API Endpoints

#### User Routes

- POST `/api/v1/blog/users/signup` - Register a new user
- POST `/api/v1/blog/users/signin` - Authenticate and log in a user

#### Blog Routes
- GET `/api/v1/blog/blogs` - Get all blog posts
- POST `/api/v1/blog/blogs/add-blog` - Add a new blog post (requires authentication)

## Project Structure
```
📂 src
 ┣ 📂 config
 ┃ ┗ 📜 db.js                # MongoDB connection setup
 ┣ 📂 controllers
 ┃ ┣ 📜 blogController.js     # Blog controller logic
 ┃ ┗ 📜 userController.js     # User authentication logic
 ┣ 📂 middleware
 ┃ ┗ 📜 authMiddleware.js     # JWT authentication middleware
 ┣ 📂 models
 ┃ ┣ 📜 blog.js               # Blog model
 ┃ ┗ 📜 user.js               # User model
 ┣ 📂 routes
 ┃ ┣ 📜 blogRoute.js          # Blog routes
 ┃ ┗ 📜 userRoute.js          # User routes
 ┣ 📂 __test__
 ┃ ┣ 📜 blog.spec.js          # Blog API tests
 ┃ ┗ 📜 user.spec.js          # User authentication tests
 ┣ 📜 app.js                  # Main API router
 ┗ 📜 index.js                # Entry point of the application
```

## Running Tests

```sh
npm test
```

## Dependencies

- **Express** - Web framework for Node.js
- **Mongoose** - ODM for MongoDB
- **jsonwebtoken** - Token-based authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **nodemon** - Development tool for automatic restarts
- **Jest** & **Supertest** - Testing framework and HTTP assertions
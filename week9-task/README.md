# Week 9 – Node.js & Backend Development (REST API)

## 🧠 What I Learned

This week focused on backend development using **Node.js and Express.js**.  
I learned how servers work, how RESTful APIs are designed, how data flows between client and server, and how authentication and middleware are used in real-world backend applications.

I also understood how to structure a backend project professionally and test APIs using Postman.

- API testing screenshots are stored inside `week9-task/screenshots`.

---

## 🪄 Key Concepts

- Introduction to Node.js & server-side JavaScript  
- Event-driven architecture  
- Express.js framework fundamentals  
- RESTful API design  
- HTTP methods & status codes  
- Middleware concepts  
- JWT-based authentication  
- Environment variables & configuration  
- Error handling & debugging  
- API testing using Postman  

---

## 💻 What I Did

1. Installed and configured Node.js environment.
2. Set up an Express.js server from scratch.
3. Designed RESTful API routes.
4. Implemented CRUD operations for blog posts.
5. Added middleware for request parsing and authentication.
6. Implemented JWT-based authentication.
7. Handled API errors using centralized error middleware.
8. Used environment variables for configuration.
9. Tested all API endpoints using Postman.
10. Followed clean backend folder structure and code organization.

---

## ⚙️ Algorithms & Logic Used

- **Routing Logic:**  
  Used Express Router to separate API routes logically.

- **CRUD Operations:**  
  Implemented Create, Read, Update, and Delete operations for blog posts.

- **JWT Authentication:**  
  Generated and verified JSON Web Tokens to protect API routes.

- **Middleware Flow:**  
  Used middleware to validate requests, authenticate users, and handle errors.

- **Error Handling:**  
  Centralized error handler to return consistent error responses.

---

## ✔️ Testing Evidence

1. Health Check API Test  
   - Expected: Server responds with status OK  
   - Result: ✔️ Passed  

2. Create Post Test  
   - Expected: New blog post created  
   - Result: ✔️ Passed  

3. Get Posts Test  
   - Expected: List of posts returned  
   - Result: ✔️ Passed  

4. Invalid Token Test  
   - Expected: Unauthorized access blocked  
   - Result: ✔️ Passed  

5. Error Handling Test  
   - Expected: Proper error message returned  
   - Result: ✔️ Passed  

---

## 🎯 Project

**Goal:** Build a Blog REST API using Node.js and Express.

**Features Implemented:**

- RESTful API endpoints  
- Create, read, update, and delete blog posts  
- JWT-based authentication  
- Middleware-based architecture  
- Centralized error handling  
- Environment-based configuration  
- API testing using Postman  

---

## 🗂️ Folder Structure

```bash
repo/
 └─ week9-task/
     ├─ screenshots/
     ├─ src/
     │   ├─ controllers/
     │   │   └─ postController.js
     │   ├─ routes/
     │   │   └─ postRoutes.js
     │   ├─ middleware/
     │   │   ├─ auth.js
     │   │   └─ errorHandler.js
     ├─ server.js
     ├─ package.json
     ├─ .env.example
     ├─ postman-collection.json
     └─ README.md
```


## ⚙️ Step-by-Step Installation & Configuration Guide

1.  Clone this repository

```bash
git clone https://github.com/dineshkhichar569/the-developers-arena-webdev-Internship/tree/7cef15b8a2e7c7675be35e652b18f75ce944da8e/week8-task
```

2. Navigate to the project directory

3. Install dependencies `npm install`


4. Start the development server `npm run dev`

---


## 🗂️ Weekly Learning Breakdown

### Day 1 – Node.js Setup
- Installed Node.js and npm
- Understood server-side JavaScript

### Day 2 – Express Fundamentals
- Created Express server
- Learned routing and middleware

### Day 3 – CRUD Operations
- Implemented RESTful CRUD APIs

### Day 4 – Authentication
- Added JWT authentication
- Protected API routes

### Day 5 – Validation & Error Handling
- Implemented error handling middleware

### Day 6 – API Testing
- Handled edge cases
- Tested APIs using Postman

### Day 7 – Final Review
- Refactored code
- Verified API behavior

---

## 🧭 Resources Used

- Node.js Official Docs – https://nodejs.org/
- Express.js Docs – https://expressjs.com/
- JWT Docs – https://jwt.io/
- MDN JavaScript – https://developer.mozilla.org/
- Postman – https://www.postman.com/

---

## ✍️ Author

**Dinesh Khichar**  
B.Tech CSE | DIT University, Dehradun  
📧 dinesh.khichar.work@gmail.com  
💻 https://github.com/dineshkhichar569  
🌐 https://dineshportfolios.site

---

## 📜 License

This project is created for learning and practice purposes during my web development journey.

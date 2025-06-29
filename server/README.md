# 🖥️ NextBuy Server

This is the backend server for the **NextBuy** e-commerce application. Built with **Node.js**, **Express**, and **MongoDB**, it handles user authentication and data routing for the application.

---

## 🚀 Features

- User Signup & Login (with hashed passwords using `bcrypt`)
- JWT-based Authentication (optional for later enhancement)
- MongoDB integration using `mongoose`
- RESTful API routes under `/api/auth`

---

## 📦 Technologies Used

- **Node.js** – Runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL Database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable management
- **cors** – Cross-Origin Resource Sharing
- **nodemon** – Auto-restarts the server on file changes (in development)

---

## 📁 Folder Structure

```
server/
├── routes/
│   └── authRoutes.js
├── User/
│   └── User.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## 🛠️ Setup & Run

### 1. Install dependencies

```bash
cd server
npm install
```

### 2. Create a `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Make sure your MongoDB URI is from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and your current IP is whitelisted.

### 3. Run the server

```bash
# Start with nodemon (dev mode)
npm run dev

# OR start normally
npm start
```

Server will run on: `http://localhost:5000`

---

## 📬 API Endpoints

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | Login a user        |

---

## 🧪 Testing

You can test API routes using:

- **Postman**
- **Thunder Client (VSCode Extension)**
- **curl**

---

## 👨‍💻 Author

Shreekar Sharma

---

## 📄 License

This project is licensed under the **ISC License**.

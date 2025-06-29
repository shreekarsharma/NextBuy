# 🛒 NextBuy — MERN Stack E-Commerce Project

NextBuy is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to browse products, sign up/login, manage cart and wishlist, and place orders.

---

## 📁 Project Structure

```
nextbuy/
├── client/      # Frontend (React + Vite)
├── server/      # Backend (Node.js + Express)
├── .env         # Environment variables for server
├── package.json # Root workspace manager
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs `concurrently` in the root to run client and server together.

Then install inside both folders:

```bash
cd client && npm install
cd ../server && npm install
```

---

### 2. Create Environment Variables

#### Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Replace `your_mongodb_connection_string` with your actual MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

#### Client API URLs

Product data is fetched from FakeStoreAPI:

- https://fakestoreapi.com/products
- https://fakestoreapi.com/products/:id

Auth requests go to your local server:

```js
await axios.post("http://localhost:5000/api/auth/login", form);
await axios.post("http://localhost:5000/api/auth/signup", form);
```

Update the base URL to environment variable if deploying.

---

### 3. Start the Project

From root:

```bash
npm run dev
```

This will start both the client and server using `concurrently`.

---

## 🧪 Features

- 🔐 User Authentication (Login, Signup)
- 🛍️ Product Listing (from FakeStore API)
- 💖 Wishlist and Cart (with Redux Toolkit)
- 🔒 Protected Routes
- 📦 Checkout UI (static)
- 🎨 Tailwind CSS for styling
- ⚙️ RESTful API for Auth using MongoDB

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router DOM
- Redux Toolkit + Redux Persist
- Tailwind CSS
- Axios

### Backend

- Express.js
- MongoDB + Mongoose
- bcrypt (password hashing)
- dotenv, cors

---

## 📄 Scripts

From root:

- `npm run dev` — Starts client and server together

From client folder:

- `npm run dev` — Starts Vite server
- `npm run build` — Builds production-ready frontend

From server folder:

- `npm run dev` — Starts Express server with nodemon
- `npm start` — Starts Express with native node

---

## 🧑‍💻 Author

**Shreekar Sharma**

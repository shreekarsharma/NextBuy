# 🛍️ NextBuy Frontend

This is the frontend of the **NextBuy** e-commerce application, built using the **React** framework with **Vite**, **Redux**, and **Tailwind CSS**.

---

## ⚙️ Tech Stack

- **React 19** – UI library
- **Vite** – Frontend build tool
- **Tailwind CSS** – Utility-first CSS framework
- **React Router DOM** – Client-side routing
- **Redux Toolkit** – State management
- **Redux Persist** – State persistence
- **Axios** – API requests

---

## 📁 Project Structure

```
client/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hook/
│   ├── reducers/
│   ├── store/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧪 Features

- Responsive UI with reusable components
- Product listing and individual product pages
- Add to Cart, Wishlist, Checkout flow
- Login/Signup functionality
- Protected routes based on auth state
- API integration with [Fake Store API](https://fakestoreapi.com/) and backend

---

## 🔧 Setup Instructions

### 1. Install dependencies

```bash
cd client
npm install
```

### 2. Create a `.env` file

```
VITE_API_BASE_URL=http://localhost:5000/api
```

You can also optionally store:
```
VITE_FAKESTORE_URL=https://fakestoreapi.com/products
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---

## 🌐 External APIs

| API Name       | Used For        |
|----------------|-----------------|
| FakeStoreAPI   | Product listing |
| Backend API    | Auth + User data|

---

## 🧑‍💻 Author

Shreekar Sharma

---

## 📄 License

This project is licensed under the **ISC License**.

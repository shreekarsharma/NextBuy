import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UpdateProfile from "./components/UpdateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes>
              <Wishlist />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/profile/:username"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/user/id/:id"
          element={
            <ProtectedRoutes>
              <UpdateProfile />
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

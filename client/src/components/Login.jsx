import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";
const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({
    emailAddress: "",
    passWord: "",
    userName: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value.trimStart() }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (
        form.emailAddress === "" ||
        form.passWord === "" ||
        form.userName === ""
      ) {
        alert("Please fill the details");
        return;
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
          form
        );
        await login(form);
        alert("Login Successful");
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      alert("User not found. Please Register.");
      navigate("/signup");
      console.error(error);
    }
  };
  return (
    <form
      className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-sky-100 mt-10 mx-auto max-w-100"
      onSubmit={handleLogin}
    >
      <h1 className="text-xl font-semibold lg:text-2xl text-sky-950">Login</h1>
      <p className="text-sky-800">Sign in to access your account</p>
      <div className="">
        <label className="text-sky-950 font-medium"> Username </label>
        <input
          type="text"
          placeholder="username"
          name="userName"
          pattern="^[a-zA-Z0-9_]{4,}$"
          title="Username must be at least 4 characters, no spaces"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
          required
        />
      </div>
      <div className="">
        <label className="text-sky-950 font-medium"> Email Address </label>
        <input
          type="email"
          placeholder="username@example.com"
          name="emailAddress"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Password </label>
        <input
          type="password"
          placeholder="**********"
          name="passWord"
          pattern=".{6,}"
          title="Password must be at least 6 characters"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 w-full rounded-md bg-sky-600 p-2 text-center font-semibold text-white hover:bg-sky-700 cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

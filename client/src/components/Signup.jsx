import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    emailAddress: "",
    phoneNumber: "",
    passWord: "",
  });
  // Photo
  const [file, setFile] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (file) {
      formData.append("profilePhoto", file);
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Signup Successful, Now you can login");
      navigate("/login");
    } catch (error) {
      alert("User already exists. Please login.");
      navigate("/login");
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };
  return (
    <form
      className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-sky-100 my-10 mx-auto max-w-100"
      onSubmit={handleSignUp}
    >
      <h1 className="text-xl font-semibold lg:text-2xl text-sky-950">
        Sign up
      </h1>
      <p className="text-sky-800">Register to create your account</p>
      <div>
        <label className="text-sky-950 font-medium"> Full Name </label>
        <input
          type="text"
          name="fullName"
          placeholder="John Doe"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Username </label>
        <input
          type="text"
          name="userName"
          placeholder="johndoe"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Email Address </label>
        <input
          type="email"
          name="emailAddress"
          placeholder="username@example.com"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Phone Number </label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="1234567890"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Password </label>
        <input
          type="password"
          name="passWord"
          placeholder="**********"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="text-sky-950 font-medium"> Profile Photo </label>
        <input
          type="file"
          name="profilePhoto"
          accept="image/*"
          className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 focus:outline-sky-600"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          className="mt-5 w-full rounded-md bg-sky-600 p-2 text-center font-semibold text-white hover:bg-sky-700 cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;

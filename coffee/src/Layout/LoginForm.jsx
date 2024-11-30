  import {  signInWithEmailAndPassword } from 'firebase/auth';
  import React, { useState } from 'react';
  import { auth } from '../Firebase';
  // import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
  import { useNavigate } from 'react-router-dom';
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    // const auth = getAuth();


    const [error, setError] = useState('');

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Example validation
    //   if (!email || !password) {
    //     setError('Please fill in all fields.');
    //   } else {
    //     setError('');
    //     // Handle login logic here
    //     console.log('Logging in with:', email, password);
    //   }
    //   try {
    //     await signInWithEmailAndPassword(auth, email, password);
    //     alert("Login successful!");
    //     navigate("/home"); // Login ke baad Home page ya kisi aur page par le jayein
    //   } catch (err) {
    //     setError(err.message); // Error message show karne ke liye
    //   }
    // };
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields."); // Error toast
      return;
    }

    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!"); // Success toast
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message); // Error toast
    }
  };


    return (
      <div className="login-form-container bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6 text-backgroundColor">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="name"
            placeholder="Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-brightColor text-white py-2 rounded-lg mt-4 hover:bg-darkColor transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">Don't have an account? </span>
          <a href="/signup" className="text-brightColor hover:text-darkColor">Sign up</a>
        </div>
        <ToastContainer/>
      </div>
    );
  };

  export default LoginForm;

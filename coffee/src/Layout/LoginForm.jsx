import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Handle login logic here
      console.log('Logging in with:', email, password);
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
    </div>
  );
};

export default LoginForm;

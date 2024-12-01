// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from "../Firebase"; // Import Firebase auth
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase method for creating users
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const RegistrationForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(''); // Reset error message before each submit

//     // Validate form inputs
//     if (!name || !email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     // Register user with Firebase
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log('User registered:', user);  
//         toast.success('Registration successful!');
//         navigate('/'); // Redirect to Home page after registration
//       })
//       .catch((error) => {
//         setError(error.message);
//         toast.error(error.message); // Show error message as toast
//       });
//   };

//   return (
//     <div className="min-h-screen bg-backgroundColor flex items-center justify-center">

//     <div className="login-form-container bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-16">
//       <h2 className="text-2xl font-semibold text-center mb-6 text-backgroundColor">Sign Up</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Name"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-brightColor text-white py-2 rounded-lg mt-4 hover:bg-darkColor transition-colors"
//         >
//           Sign Up
//         </button>
//       </form>
//       <div className="text-center mt-4">
//         <span className="text-sm text-gray-500">Already have an account? </span>
//         <a href="/login" className="text-brightColor hover:text-darkColor">Login</a>
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} />
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;
// import { useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// const RegistrationForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate email and password
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       // Get Firebase Authentication instance
//       const auth = getAuth();

//       // Create new user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//       // After successful registration, navigate to the home page
//       navigate('/login');

//       console.log('User registered successfully:', userCredential.user);
//     } catch (err) {
//       // Handle errors, for example, if the email is already taken or password is weak
//       setError('Registration failed. Please check your inputs.');
//       console.error('Error during registration:', err.message);
//     }
//   };

//   return (
//         <div className="min-h-screen bg-backgroundColor flex items-center justify-center">

//     <div className="login-form-container bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-16">
//       <h2 className="text-2xl font-semibold text-center mb-6 text-backgroundColor">Register</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="Name"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brightColor"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-brightColor text-white py-2 rounded-lg mt-4 hover:bg-darkColor transition-colors"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default RegistrationForm;
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email, password, and name
    if (!email || !password || !name) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Get Firebase Authentication instance
      const auth = getAuth();

      // Create new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user's profile with their name
      await updateProfile(userCredential.user, {
        displayName: name
      });

      // After successful registration, navigate to the login page
      navigate('/login');

      console.log('User registered successfully:', userCredential.user);
    } catch (err) {
      // Handle errors, for example, if the email is already taken or password is weak
      setError('Registration failed. Please check your inputs.');
      console.error('Error during registration:', err.message);
    }
  };

  return (
    <div className="min-h-screen bg-backgroundColor flex items-center justify-center">
      <div className="login-form-container bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6 text-backgroundColor">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
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
            Register
          </button>
          <div className="text-center mt-4">
          <span className="text-sm text-gray-500">you  have an account? </span>
          <a href="/login" className="text-brightColor hover:text-darkColor">login up</a>
        </div>
        </form>
      </div>
      
    </div>
  );
};

export default RegistrationForm;

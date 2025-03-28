
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';  // Importing Link from react-router-dom
// import { SiCoffeescript } from 'react-icons/si';
// import Button from "../Layout/Button";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
// import { getAuth } from 'firebase/auth';

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   return (
//     <div className="fixed w-full z-10">
//       <div>
//         <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
//           <div className="flex flex-row items-center cursor-pointer gap-2">
//             <span>
//               <SiCoffeescript size={25} />
//             </span>
//             <h1 className="text-xl font-semibold">CafePulse</h1>
            
//           </div>

//           <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
//             {/* Existing Navbar Links */}
//             <Link
//               to="/"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="group relative inline-block cursor-pointer hover:text-brightColor"
//             >
//               Home
//               <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
//             </Link>
//             <Link
//               to="/menu"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="group relative inline-block cursor-pointer hover:text-brightColor"
//             >menu
//               <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
//             </Link>
            
//             {/* Add more navigation links as needed */}
//           </nav>
          
//           {/* Link to Login Page */}
//           <Link
//             to="/login"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Login" /> {/* Button inside Link */}
//           </Link>

//           {/* Mobile Menu */}
//           <div className="md:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={25} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenuUnfold size={25} onClick={handleChange} />
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Links */}
     
//         <div
//           className={`${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           {/* You can uncomment the mobile menu links if needed */}
//           <Link
//               to="/"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="group relative inline-block cursor-pointer hover:text-brightColor"
//             >
//               Home
//               <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
//             </Link>
//             <Link
//               to="/menu"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="group relative inline-block cursor-pointer hover:text-brightColor"
//             >menu
//               <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
//             </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiCoffeescript } from 'react-icons/si';
import Button from "../Layout/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, [auth]);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Set user state to null after logout
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className="text-xl font-semibold">CafePulse</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Menu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Conditional rendering for Login/Logout */}
          {user ? (
            <Button title="Logout" onClick={handleLogout} />
          ) : (
            <Link
              to="/login"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              <Button title="Login" />
            </Link>
          )}

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link
            to="/menu"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

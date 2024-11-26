// // // import React from 'react'
// // // import MenuCard from '../Layout/MenuCard'
// // // import img1 from "../assets/images-removebg-preview (3).png"
// // // import Producrcard from '../Layout/Producrcard'
// // // import img from '../assets/img.png'

// // // const Menu = () => {
// // //   return (
// // //     <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
// // //     <h1 className="  font-semibold text-center text-4xl lg:mt-35 mt-36 mb-8">
// // //       Our Products
// // //     </h1>
// // //     <h1 className="  font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2) text-white mb-8">
// // // COFFEE    </h1>

// // //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center">
// // //     <Producrcard img={img} title="Nespresso" />
// // //       <Producrcard img={img} title="Nespresso" />
// // //       <Producrcard img={img} title="Nespresso" />
// // //       <Producrcard img={img} title="Nespresso" />
// // //       <Producrcard img={img} title="Nespresso" />
// // //       {/* <Producrcard img={img2} title="AeroPress" />
// // //       <Producrcard img={img3} title="Chemex" /> */}
// // //     </div>
// // //     <h1 className=" mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2) text-white mb-8">
// // //     chai     </h1>
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center">
// // //     <Producrcard img={img} title="chai" />
// // //       <Producrcard img={img} title="chai" />
// // //       <Producrcard img={img} title="chai" />
// // //       <Producrcard img={img} title="chai" />
// // //       <Producrcard img={img} title="chai" />
// // //       {/* <Producrcard img={img2} title="AeroPress" />
// // //       <Producrcard img={img3} title="Chemex" /> */}
// // //     </div>
// // //   </div>
    
// // //   )
// // // }

// // // export default Menu
// // // import React from 'react';
// // // import { Link } from 'react-scroll'; // Import Link from react-scroll
// // // import Producrcard from '../Layout/Producrcard';
// // // import img from '../assets/img.png';
// // // import Button from '../Layout/Button';

// // // const Menu = () => {
// // //   return (
// // //     <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
// // //       {/* Categories - Links for smooth scrolling */}
// // //       <div className="text-center mb-10">
// // //         <h1 className="font-semibold text-4xl">Our Products</h1>
// // //         <div className="flex justify-center gap-8 mt-20">
// // //           {/* Links for categories */}
// // //           {/* <Link
// // //             to="coffee" // Targeting the 'coffee' section
// // //             smooth={true}
// // //             duration={500}
// // //             className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-backgroundColor to-brightColor text-white font-semibold transition-all duration-300 hover:bg-brightColor hover:text-black"
// // //           >
// // //             Coffee
// // //           </Link> */}
// // //           <Link
// // //             to="coffee"
// // //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// // //           >
// // //             <Button title="Coffee" /> {/* Button inside Link */}
// // //           </Link>
// // //           {/* <Link
// // //             to="chai" // Targeting the 'chai' section
// // //             smooth={true}
// // //             duration={500}
// // //             className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-backgroundColor to-brightColor text-white font-semibold transition-all duration-300 hover:bg-brightColor hover:text-black"
// // //           >
// // //             Chai
// // //           </Link> */}
// // //           <Link
// // //             to="chai"
// // //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// // //           >
// // //             <Button title="CHAI" /> {/* Button inside Link */}
// // //           </Link>
// // //           {/* <Link
// // //             to="cake" // Targeting the 'cake' section
// // //             smooth={true}
// // //             duration={500}
// // //             className="cursor-pointer px-6 py-3 rounded-full bg-gradient-to-r from-backgroundColor to-brightColor text-white font-semibold transition-all duration-300 hover:bg-brightColor hover:text-black"
// // //           >
// // //             Cake
// // //           </Link> */}<Link
// // //             to="cake"
// // //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// // //           >
// // //             <Button title="Cake" /> {/* Button inside Link */}
// // //           </Link>



// // //         </div>
// // //       </div>

// // //       {/* Coffee Section */}
// // //       <h1
// // //         id="coffee"
// // //         className="font-semibold text-center text-4xl border-black bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
// // //       >
// // //         Coffee
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// // //         <Producrcard img={img} title="Nespresso" />
// // //         <Producrcard img={img} title="Nespresso" />
// // //         <Producrcard img={img} title="Nespresso" />
// // //         <Producrcard img={img} title="Nespresso" />
// // //         <Producrcard img={img} title="Nespresso" />
// // //       </div>

// // //       {/* Chai Section */}
// // //       <h1
// // //         id="chai"
// // //         className="mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
// // //       >
// // //         Chai
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// // //         <Producrcard img={img} title="Chai" />
// // //         <Producrcard img={img} title="Chai" />
// // //         <Producrcard img={img} title="Chai" />
// // //         <Producrcard img={img} title="Chai" />
// // //         <Producrcard img={img} title="Chai" />
// // //       </div>

// // //       {/* Cake Section (Optional) */}
// // //       {/* <h1 id="cake" className="font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg">
// // //         Cake
// // //       </h1>
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// // //         <Producrcard img={img} title="Cake" />
// // //         <Producrcard img={img} title="Cake" />
// // //         <Producrcard img={img} title="Cake" />
// // //       </div> */}
// // //     </div>
// // //   );
// // // };

// // // export default Menu;
// // import React from 'react';
// // import { Link } from 'react-scroll'; // Import Link from react-scroll
// // import Producrcard from '../Layout/Producrcard';
// // import img from '../assets/img.png';
// // import Button from '../Layout/Button';

// // const Menu = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
// //       {/* Categories - Links for smooth scrolling */}
// //       <div className="text-center mb-10">
// //         <h1 className="font-semibold text-4xl">Our Products</h1>
// //         <div className="flex justify-center gap-8 mt-20">
// //           {/* Links for categories */}
// //           <Link
// //             to="coffee"
// //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// //           >
// //             <Button title="Coffee" /> {/* Button inside Link */}
// //           </Link>
// //           <Link
// //             to="chai"
// //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// //           >
// //             <Button title="Chai" /> {/* Button inside Link */}
// //           </Link>
// //           <Link
// //             to="cake"
// //             className="group relative inline-block cursor-pointer hover:text-brightColor"
// //           >
// //             <Button title="Cake" /> {/* Button inside Link */}
// //           </Link>
          
// //         </div>
// //       </div>

// //       {/* Coffee Section */}
// //       <div className="border-2 border-black p-4 rounded-lg">
// //         <h1
// //           id="coffee"
// //           className="font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
// //         >
// //           Coffee
// //         </h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// //           <Producrcard img={img} title="Nespresso" />
// //           <Producrcard img={img} title="Nespresso" />
// //           <Producrcard img={img} title="Nespresso" />
// //           <Producrcard img={img} title="Nespresso" />
// //           <Producrcard img={img} title="Nespresso" />
// //         </div>
// //       </div>

// //       {/* Chai Section */}
// //       <div className="border-2 border-black p-4 rounded-lg mt-10">
// //         <h1
// //           id="chai"
// //           className="font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
// //         >
// //           Chai
// //         </h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// //           <Producrcard img={img} title="Chai" />
// //           <Producrcard img={img} title="Chai" />
// //           <Producrcard img={img} title="Chai" />
// //           <Producrcard img={img} title="Chai" />
// //           <Producrcard img={img} title="Chai" />
// //         </div>
// //       </div>

// //       {/* Cake Section (Optional) */}
// //       {/* <div className="border-2 border-black p-4 rounded-lg mt-10">
// //         <h1 id="cake" className="font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg">
// //           Cake
// //         </h1>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
// //           <Producrcard img={img} title="Cake" />
// //           <Producrcard img={img} title="Cake" />
// //           <Producrcard img={img} title="Cake" />
// //         </div>
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default Menu;
// import React from 'react';
// import { Link } from 'react-scroll'; // Import Link from react-scroll
// import Producrcard from '../Layout/Producrcard';
// import img from '../assets/img.png';
// import Button from '../Layout/Button';

// const Menu = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
//       {/* Categories - Links for smooth scrolling */}
//       <div className="text-center mb-10">
//         <h1 className="font-semibold text-4xl">Our Products</h1>
//         <div className="flex flex-wrap justify-center gap-8 mt-20">
//           {/* Links for categories */}
//           <Link
//             to="coffee"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Coffee" /> {/* Button inside Link */}
//           </Link>
//           <Link
//             to="chai"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Chai" /> {/* Button inside Link */}
//           </Link>
//           <Link
//             to="cake"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Cake" /> {/* Button inside Link */}
//           </Link>
//           {/* You can add more links below */}
//           <Link
//             to="anotherCategory"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Another " /> {/* Button inside Link */}
//           </Link>
//           <Link
//             to="extraCategory"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Extra " /> {/* Button inside Link */}
//           </Link>
//           <Link
//             to="extraCategory"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Extra " /> {/* Button inside Link */}
//           </Link>
//           <Link
//             to="extraCategory"
//             className="group relative inline-block cursor-pointer hover:text-brightColor"
//           >
//             <Button title="Extra" /> {/* Button inside Link */}
//           </Link>
//         </div>
//       </div>

//       {/* Coffee Section */}
//       <h1
//         id="coffee"
//         className="font-semibold text-center text-4xl border-black bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
//       >
//         Coffee
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
//         <Producrcard img={img} title="Nespresso" />
//         <Producrcard img={img} title="Nespresso" />
//         <Producrcard img={img} title="Nespresso" />
//         <Producrcard img={img} title="Nespresso" />
//         <Producrcard img={img} title="Nespresso" />
//       </div>

//       {/* Chai Section */}
//       <h1
//         id="chai"
//         className="mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
//       >
//         Chai
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
//         <Producrcard img={img} title="Chai" />
//         <Producrcard img={img} title="Chai" />
//         <Producrcard img={img} title="Chai" />
//         <Producrcard img={img} title="Chai" />
//         <Producrcard img={img} title="Chai" />
//       </div>

//       {/* Cake Section (Optional) */}
//       <h1
//         id="cake"
//         className="mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
//       >
//         Cake
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
//         <Producrcard img={img} title="Cake" />
//         <Producrcard img={img} title="Cake" />
//         <Producrcard img={img} title="Cake" />
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Producrcard from '../Layout/Producrcard';
import img from '../assets/img.png';
import Button from '../Layout/Button';
import dounts1 from "../assets/DOUNTS (1).png"
import dounts2 from "../assets/DOUNTS (2).png"
import dounts3 from "../assets//DOUNTS (3).png"
import dounts4 from "../assets/DOUNTS (4).png"
import dounts5 from "../assets/DOUNTS (5).png"
import dounts from "../assets/dounts.png"
// Icons
import { FaCoffee } from 'react-icons/fa';
import { GiTeapot } from 'react-icons/gi'; // Corrected import for the teapot icon
import { FaBirthdayCake } from 'react-icons/fa';

const Menu = () => {
  // State for controlling dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      {/* Categories - Links for smooth scrolling */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl text-black">Our Products</h1>

        {/* Desktop View Buttons */}
        <div className="hidden lg:flex justify-center gap-8 mt-20">
          <Link
            to="coffee"
            className="group relative inline-block cursor-pointer text-black hover:text-white transition-all duration-300"
          >
            <Button title="Coffee" />
          </Link>
          <Link
            to="chai"
            className="group relative inline-block cursor-pointer text-black hover:text-white transition-all duration-300"
          >
            <Button title="Chai" />
          </Link>
          <Link
            to="cake"
            className="group relative inline-block cursor-pointer text-black hover:text-white transition-all duration-300"
          >
            <Button title="Cake" />
          </Link>
        </div>

        {/* Mobile View - Dropdown Button */}
        <div className="lg:hidden mt-10 flex justify-center border-black">
          <button
            onClick={toggleDropdown}
            className="border-black w-full md:w-auto px-6 py-3 bg-gradient-to-r from-backgroundColor to-brightColor text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none flex items-center justify-between"
          >
            <span className='border-black text-black font-bold'>Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-backgroundColor border-2 border-black rounded-lg shadow-lg w-56 mt-2 p-2 z-10">
              {/* Coffee Link with Icon */}
              <Link
                to="coffee"
                className="flex items-center py-2 px-4 text-black hover:bg-brightColor rounded-md"
                onClick={() => setIsOpen(false)} // Close dropdown after selection
              >
                <FaCoffee className="text-xl mr-3" />
                Coffee
              </Link>
              {/* Chai Link with Icon */}
              <Link
                to="chai"
                className="flex items-center py-2 px-4 text-black hover:bg-brightColor rounded-md"
                onClick={() => setIsOpen(false)} // Close dropdown after selection
              >
                <GiTeapot className="text-xl mr-3" />
                Chai
              </Link>
              {/* Cake Link with Icon */}
              <Link
                to="cake"
                className="flex items-center py-2 px-4 text-black hover:bg-brightColor rounded-md"
                onClick={() => setIsOpen(false)} // Close dropdown after selection
              >
                <FaBirthdayCake className="text-xl mr-3" />
                Cake
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Coffee Section */}
      {/* <h1
        id="coffee"
        className="font-semibold text-center text-4xl border-black bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
      >
        Coffee

      </h1> */}
      <h1
  id="coffee"
  className="mt-10  text-center text-6xl font-extrabold text-black bg-[#AB6B2E] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  mb-8 p-5 rounded-lg flex items-center justify-between"
>
  {/* Text on the left */}
  <span className="text-left">COFFEE</span>
  
  {/* Image on the right */}
  <img src={img} alt="Chai" className="w-36 h-18 object-cover rounded-full" />
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        <Producrcard img={img} title="Nespresso" />
        <Producrcard img={img} title="Nespresso" />
        <Producrcard img={img} title="Nespresso" />
        <Producrcard img={img} title="Nespresso" />
        <Producrcard img={img} title="Nespresso" />
      </div>

      {/* Chai Section */}
      {/* <h1
        id="chai"
        className="mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
      >
        Chai
      </h1> */}
      <h1
  id="chai"
  className="mt-10  text-center text-6xl font-extrabold text-black bg-[#AB6B2E] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  mb-8 p-5 rounded-lg flex items-center justify-between"
>
  {/* Text on the left */}
  <span className="text-left">Chai</span>
  
  {/* Image on the right */}
  <img src={img} alt="Chai" className="w-36 h-18 object-cover rounded-full" />
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        <Producrcard img={img} title="Chai" />
        <Producrcard img={img} title="Chai" />
        <Producrcard img={img} title="Chai" />
        <Producrcard img={img} title="Chai" />
        <Producrcard img={img} title="Chai" />
      </div>

      {/* Cake Section (Optional) */}
      <h1
        id="cake"
        className="mt-10 font-semibold text-center text-4xl bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white mb-8 p-4 rounded-lg"
      >
        Dounts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
        <Producrcard img={dounts1} title="Ferrero Rocher
" />
        <Producrcard img={dounts2} title="Strawberry Sprinkle" />
        <Producrcard img={dounts3} title="Cookies and cream" />
        <Producrcard img={dounts4} title="Peanut Caramel
" />
        <Producrcard img={dounts5} title="Plain Glaze
" />
        <Producrcard img={dounts} title="Oreo Chocolate
" />

      </div>
    </div>
  );
};

export default Menu;

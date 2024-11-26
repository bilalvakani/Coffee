    
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

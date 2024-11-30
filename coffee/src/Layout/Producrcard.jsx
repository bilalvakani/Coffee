
import React, { useState, useEffect } from "react";
import Button from "../Layout/Button";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import CartModal from "../Components/CartModel";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify styles

const ProductCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || "Guest");
      } else {
        setIsLoggedIn(false);
        setUserName(""); // Clear the user's name when logged out
      }
    });

    return () => unsubscribe();
  }, []);

  // Open modal handler
  const handleAddToCart = () => {
    if (isLoggedIn) {
      setIsModalOpen(true); // Open modal if logged in
      toast.success("Item added to cart!");
    } else {
      toast.error("Please log in to add items to your cart.");
      navigate('/login'); // Navigate to login page if not logged in
    }
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col items-center p-4">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={props.img}
        alt={props.title}
      />
      <div className="flex flex-col items-center mt-5 gap-3 w-full">
        {/* Title */}
        <h2 className="font-semibold text-xl text-center">{props.title}</h2>

        {/* Rating */}
        <div className="flex">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>

        {/* Price */}
        <h3 className="font-semibold text-lg">{props.price}</h3>

        {/* Add to Cart Button */}
        <Button title="Add To Cart" onClick={handleAddToCart}  />
      </div>

      {/* Render CartModal if it's open */}
      <CartModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        product={{ img: props.img, title: props.title, price: props.price }}
      />

      {/* Toast Container for the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductCard;

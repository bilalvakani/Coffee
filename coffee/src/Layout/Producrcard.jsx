// // // import React from "react";
// // // import Button from "../Layout/Button";
// // // import { BsStarHalf } from "react-icons/bs";
// // // import { BsStarFill } from "react-icons/bs";

// // // const Producrcard = (props) => {
// // //   return (
// // //     <div className=" w-full lg:w-1/4 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
// // //       <img className=" rounded-lg" src={props.img} alt="img" />
// // //       <div className=" flex flex-col items-center mt-5 gap-3">
// // //         <h2 className=" font-semibold text-xl">{props.title}</h2>
// // //         <div className=" flex">
// // //           <BsStarFill className=" text-brightColor" />
// // //           <BsStarFill className=" text-brightColor" />
// // //           <BsStarFill className=" text-brightColor" />
// // //           <BsStarFill className=" text-brightColor" />
// // //           <BsStarHalf className=" text-brightColor" />
// // //         </div>
// // //         <h3 className=" font-semibold text-lg">$15.99</h3>
// // //         <Button title="Add To Card" />
// // //       </div>
// // //     </div>  
// // //     )
// // // }

// // // export default Producrcard
// // import React from "react";
// // import Button from "../Layout/Button";
// // import { BsStarHalf, BsStarFill } from "react-icons/bs";

// // const ProductCard = (props) => {
// //   return (
// //     <div className="w-full bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col items-center p-4">
// //       {/* Image Section */}
// //       <img
// //         className="w-full h-48 object-cover rounded-lg"
// //         src={props.img}
// //         alt={props.title}
// //       />
// //       <div className="flex flex-col items-center mt-5 gap-3 w-full">
// //         {/* Title */}
// //         <h2 className="font-semibold text-xl text-center">{props.title}</h2>

// //         {/* Rating */}
// //         <div className="flex">
// //           <BsStarFill className="text-brightColor" />
// //           <BsStarFill className="text-brightColor" />
// //           <BsStarFill className="text-brightColor" />
// //           <BsStarFill className="text-brightColor" />
// //           <BsStarHalf className="text-brightColor" />
// //         </div>

// //         {/* Price */}
// //         <h3 className="font-semibold text-lg">{props.price}</h3>

// //         {/* Button */}
// //         <Button title="Add To Cart" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;
// import React, { useState } from "react";
// import Button from "../Layout/Button";
// import { BsStarHalf, BsStarFill } from "react-icons/bs";
// import CartModal from "../Components/CartModel"; // Correct import name

// const ProductCard = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col items-center p-4">
//       {/* Image Section */}
//       <img
//         className="w-full h-48 object-cover rounded-lg"
//         src={props.img}
//         alt={props.title}
//       />
//       <div className="flex flex-col items-center mt-5 gap-3 w-full">
//         {/* Title */}
//         <h2 className="font-semibold text-xl text-center">{props.title}</h2>

//         {/* Rating */}
//         <div className="flex">
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarHalf className="text-brightColor" />
//         </div>

//         {/* Price */}
//         <h3 className="font-semibold text-lg">{props.price}</h3>

//         {/* Add to Cart Button */}
//         <Button title="Add To Cart" onClick={openModal} />
//       </div>

//       {/* Render CartModal if it's open */}
//       <CartModal
//         isOpen={isModalOpen}
//         closeModal={closeModal}
//         product={{ img: props.img, title: props.title, price: props.price }}
//       />
//     </div>
//   );
// };

// export default ProductCard;
import React, { useState } from "react";
import Button from "../Layout/Button";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import CartModal from "../Components/CartModel";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importing toastify styles

const ProductCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Make sure this is correctly toggled
  const navigate = useNavigate();

  // Open modal handler
  const openModal = () => {
    if (isLoggedIn) {
      setIsModalOpen(true); // Open modal if logged in
    } else {
      toast.error("You need to log in to add items to the cart!", {
         // Toast theme can be 'light', 'dark', or 'colored'
      });
        toast.error("You need to log in to add items to the cart!")
      
      navigate("/login"); // Navigate to login page if not logged in
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
        <Button title="Add To Cart" onClick={openModal} />
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

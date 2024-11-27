import React, { useState } from "react";
import Button from "../Layout/Button";  // Assuming you already have a Button component
import { FaTimes } from "react-icons/fa"; // Close Icon

const CartModal = ({ isOpen, closeModal, product }) => {
  const [quantity, setQuantity] = useState(1);

  // Safely calculate total price
  const totalPrice = (() => {
    if (product && product.price) {
      const cleanedPrice = product.price.replace('PKR', '').trim();
      const numericPrice = parseInt(cleanedPrice, 10);
      if (isNaN(numericPrice)) {
        return "Invalid price"; // Return a default error message if the price is not a valid number
      }
      return (numericPrice * quantity) + " PKR";
    }
    return "Price not available"; // Return a fallback message if product or price is not available
  })();

  // Handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!isOpen) return null; // Don't render modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-96 space-y-5">
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <FaTimes className="text-2xl text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img src={product.img} alt={product.title} className="w-24 h-24 object-cover rounded-lg" />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">{product.price}</p>
          
          {/* Special Instructions */}
          <textarea
            placeholder="Special instructions (Optional)"
            className="w-full p-2 border rounded-lg"
          ></textarea>

          <div className="flex gap-5 items-center">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="mt-3">
            <p className="text-xl font-semibold">Total Price: {totalPrice}</p>
          </div>

          {/* Add to Cart Button */}
          <Button title="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default CartModal;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "./CartContext"; // Import Cart Context
// import { FaTimes } from "react-icons/fa";

// const CartModal = ({ isOpen, closeModal, product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useCart(); // Access addToCart function
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     addToCart(product, quantity); // Add item to the cart
//     navigate("/cart-summary");
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//       <div className="bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-96 space-y-5">
//         <div className="flex justify-end">
//           <button onClick={closeModal}>
//             <FaTimes className="text-2xl text-gray-700 hover:text-red-500 transition" />
//           </button>
//         </div>
//         <div className="flex flex-col items-center space-y-4">
//           <img
//             src={product.img}
//             alt={product.title}
//             className="w-24 h-24 sm:w-16 sm:h-16 object-cover rounded-lg"
//           />
//           <h2 className="text-xl font-semibold text-center">{product.title}</h2>
//           <p className="text-gray-600">{product.price}</p>
//           <div className="flex gap-5 items-center">
//             <button
//               onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
//               className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400 sm:p-1 sm:text-sm"
//             >
//               -
//             </button>
//             <span className="font-semibold text-lg sm:text-base">{quantity}</span>
//             <button
//               onClick={() => setQuantity((q) => q + 1)}
//               className="bg-gray-300 p-2 rounded-lg hover:bg-gray-400 sm:p-1 sm:text-sm"
//             >
//               +
//             </button>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For navigation and accessing passed state

const CartSummary = () => {
  const { state } = useLocation(); // Access state passed from CartModal
  const { product, quantity, totalPrice } = state || {};
  const navigate = useNavigate();

  if (!product) {
    return <p className="text-center mt-10">No items in cart!</p>;
  }

  return (
    <div className="p-6 space-y-5">
      <h1 className="text-2xl font-bold text-center">Order Summary</h1>
      <div className="flex flex-col items-center space-y-3">
        <img
          src={product.img}
          alt={product.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <h2 className="text-xl">{product.title}</h2>
        <p>Price: {product.price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: {totalPrice}</p>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={() => navigate("/menu")}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Add More Items
        </button>
      </div>
    </div>
  );
};

export default CartSummary;

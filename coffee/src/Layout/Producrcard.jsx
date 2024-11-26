// import React from "react";
// import Button from "../Layout/Button";
// import { BsStarHalf } from "react-icons/bs";
// import { BsStarFill } from "react-icons/bs";

// const Producrcard = (props) => {
//   return (
//     <div className=" w-full lg:w-1/4 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
//       <img className=" rounded-lg" src={props.img} alt="img" />
//       <div className=" flex flex-col items-center mt-5 gap-3">
//         <h2 className=" font-semibold text-xl">{props.title}</h2>
//         <div className=" flex">
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarHalf className=" text-brightColor" />
//         </div>
//         <h3 className=" font-semibold text-lg">$15.99</h3>
//         <Button title="Add To Card" />
//       </div>
//     </div>  
//     )
// }

// export default Producrcard
import React from "react";
import Button from "../Layout/Button";
import { BsStarHalf, BsStarFill } from "react-icons/bs";

const ProductCard = (props) => {
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

        {/* Button */}
        <Button title="Add To Cart" />
      </div>
    </div>
  );
};

export default ProductCard;

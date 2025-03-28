// import React, { useEffect, useState } from 'react'
// import Button from '../Layout/Button'
// import img from '../assets/img.png'
// import Producrcard from '../Layout/Producrcard'
// import img1 from "../assets/images-removebg-preview (3).png"
// import img2 from "../assets/1684232133-Iced_Mocha-removebg-preview-removebg-preview.png"
// import hot from '../assets/Hot-Chocolate-Get-Inspired-Everyday-8-removebg-preview.png'
// import ch from '../assets/IMG_3201-salted-caramel-brownies-removebg-preview.png'
// import plain from '../assets/Plain-Croissant-1-removebg-preview.png'
// import club from "../assets/club.png"
// import chai from "../assets/chai.png"
// import dounts from "../assets/dounts.png"
// import gl from "../assets/gl-removebg-preview.png"
// import machine from "../assets/machine.jpg"
// import ReviewCard from '../Layout/ReviewCard'
// import man1 from "../assets/man1 (1).png"
// import man2 from "../assets/man1 (2).png"
// import women from "../assets/man1 (3).png"
// import SpeechTest from './SpeechTest '
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getAuth, onAuthStateChanged } from 'firebase/auth'

// const Home = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login status
//   const navigate = useNavigate(); // Hook for redirection
//   const [userName, setUserName] = useState("");
//   // useEffect(() => {
//   //   const auth = getAuth();

//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       setIsLoggedIn(true); // User is logged in
//   //       setUserName(user.displayName || "Guest"); // Set the user's name
//   //     } else {
//   //       setIsLoggedIn(false); // User is logged out
//   //       setUserName(""); // Clear the user's name
//   //     }
//   //   });

//   //   return () => unsubscribe(); // Cleanup the listener
//   // }, []);
//   useEffect(() => {
//     const auth = getAuth();
  
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true); 
//         setUserName(user.displayName || "Guest"); // Fallback to "Guest"
//       } else {
//         setIsLoggedIn(false); 
//         setUserName(""); 
//       }
//     });
  
//     return () => unsubscribe(); 
//   }, []);

//   // Handle Add to Cart button click
//   const handleAddToCart = () => {
//     if (isLoggedIn) {
//       alert("Item added to cart!");
//       toast.success("Item added to cart!");  // You can replace this with actual cart logic

//     } else {
//       // Redirect to login page if not logged in
//       // alert("Please log in to add items to your cart.");
//       toast.error("Please log in to add items to your cart.");

//       navigate('/login');


//     }
//   }
//   return (
//     <div>
//     <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] ">
//     <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
//     <SpeechTest/>
//       <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight mt-5">
//         Start your day with a steaming cup of coffee
//         {userName ? <p>Hello, {userName}!</p> : <p>Welcome, Guest!</p>}

//       </h1>
      
//       <p>
//         Boost your productivity and build your mood with a glass of coffee in
//         the morning
//       </p>
//       <h1>Welcome to the Home Page</h1>
//             {userName ? <p>Hello, {userName}!</p> : <p>Please log in to see your name.</p>}
          

//       <div className=" flex flex-row gap-6">
//         <Button onClick={handleAddToCart} title="ADD TO CART" />
//         <Button title="MORE MENU" />
//       </div>
//     </div>

//     <div className="relative">
//       <img src={img} alt="img" />
//     {/* 
//         <div className=" absolute bg-white px-8 py-4 mt-16 top-2 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
//             <h2 className=" font-semibold">14K</h2>
//         </div>

//         <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
//             <h2 className=" font-semibold">Cappuccino</h2>
//         </div> */}
//     </div>
//   </div>
//   {/* <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
//       <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
//         Our Products
//       </h1>

//       <div className=" flex flex-col lg:flex-row gap-12 justify-center">
//         <Producrcard img={img} title="Nespresso" />
//         <Producrcard img={img2} title="AeroPress" />
//         <Producrcard img={ch} title="Chemex" />
//         <Producrcard img={hot} title="Chemex" />
//         <Producrcard img={hot} title="Chemex" />



//       </div>
//     </div> */}
// <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
//   <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
//     Our Specialitiy 
//   </h1>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center">
//     <Producrcard price="600PKR"  img={img} title="Nespresso"  />
//     <Producrcard price="500PKR"  img={img2} title="AeroPress" />
//     <Producrcard price="600PKR"  img={ch} title="Chemex" />
//     <Producrcard price="900PKR"  img={hot} title="Chemex" />
//     <Producrcard price="300PKR"  img={hot} title="Chemex" />
//     <Producrcard price="400PKR"  img={plain} title="Plain Croissant" />
//     <Producrcard price="500PKR"  img={chai} title="Chai" />
//     <Producrcard price="650PKR"  img={club} title="Club sandwish" />
//     <Producrcard price="330PKR"  img={dounts} title="Dounts" />

    



//   </div>
// </div>
// {/* NEW WORK */}  <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
//       <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

// <div className=" flex flex-col lg:flex-row items-center gap-5">
//   <div className=" w-full lg:w-2/4">
//     <img className=" rounded-lg" src={machine} alt="img" />
//   </div>
//   <div className=" w-full lg:w-2/4 p-4 space-y-3">
//     <h2 className=" font-semibold text-3xl">
//       What Makes Our Coffee Special?
//     </h2>
//     <p>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
//       quaerat quia quasi beatae et iste, tempora voluptatum corporis sit
//       pariatur eaque exercitationem, doloribus eum optio nobis cum?
//       Quidem, dolor atque.
//     </p>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut
//       minima perspiciatis doloribus quod repellendus molestiae rerum!
//       Enim, vero natus.
//     </p>

//     <Button title="Learn More" />
//   </div>
// </div>
// </div>


// <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor ">
//       <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
//         Customer's Reviews
//       </h1>

//       <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
//         <ReviewCard img={man1} title="Olivia Ava" />
//         <ReviewCard img={women} title="John Deo" />
//         <ReviewCard img={man2} title="Sofia Zoe" />
//       </div>
//     </div>

//     <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop={true}
//         closeButton={true}
//       />




//   </div>
//   )
// }

// export default Home
import React, { useEffect, useState } from 'react';
import Button from '../Layout/Button';
import img from '../assets/img.png';
import Producrcard from '../Layout/Producrcard';
import img1 from "../assets/images-removebg-preview (3).png";
import img2 from "../assets/1684232133-Iced_Mocha-removebg-preview-removebg-preview.png";
import hot from '../assets/Hot-Chocolate-Get-Inspired-Everyday-8-removebg-preview.png';
import ch from '../assets/IMG_3201-salted-caramel-brownies-removebg-preview.png';
import plain from '../assets/Plain-Croissant-1-removebg-preview.png';
import club from "../assets/club.png";
import chai from "../assets/chai.png";
import dounts from "../assets/dounts.png";
import gl from "../assets/gl-removebg-preview.png";
import machine from "../assets/machine.jpg";
import ReviewCard from '../Layout/ReviewCard';
import man1 from "../assets/man1 (1).png";
import man2 from "../assets/man1 (2).png";
import women from "../assets/man1 (3).png";
import SpeechTest from './SpeechTest ';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        // Check if displayName exists; fallback to "Guest"
        setUserName(user.displayName || "Guest");
      } else {
        setIsLoggedIn(false);
        setUserName(""); // Clear the user's name when logged out
      }
    });

    return () => unsubscribe();
  }, []);

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    if (isLoggedIn) {
      alert("Item added to cart!");
      toast.success("Item added to cart!");  // You can replace this with actual cart logic
    } else {
      toast.error("Please log in to add items to your cart.");
      navigate('/login');
    }
  };

  // Example for updating user profile during signup
  const handleSignup = async (email, password) => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set display name if not set during signup
      if (!user.displayName) {
        await updateProfile(user, {
          displayName: "John Doe"  // Set the user's name here
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]">
        <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
          <SpeechTest />
          <h1 className="font-semibold text-4xl text-center lg:text-start leading-tight mt-5">
          {userName ? <p>Hello, {userName}!</p> : <p>Welcome, Guest!</p>}

            Start your day with a steaming cup of coffee
          </h1>
          <p>
            Boost your productivity and build your mood with a glass of coffee in the morning
          </p>
          
          <div className="flex flex-row gap-6">
            <Button onClick={handleAddToCart} title="ADD TO CART" />
            <Button title="MORE MENU" />
          </div>
        </div>

        <div className="relative">
          <img src={img} alt="img" />
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
          Our Specialty
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-center">
          <Producrcard price="600PKR" img={img} title="Nespresso" />
          <Producrcard price="500PKR" img={img2} title="AeroPress" />
          <Producrcard price="600PKR" img={ch} title="Chemex" />
          <Producrcard price="900PKR" img={hot} title="Hot Chocolate" />
          <Producrcard price="300PKR" img={plain} title="Plain Croissant" />
          <Producrcard price="500PKR" img={chai} title="Chai" />
          <Producrcard price="650PKR" img={club} title="Club Sandwich" />
          <Producrcard price="330PKR" img={dounts} title="Dounts" />
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-2/4">
            <img className="rounded-lg" src={machine} alt="img" />
          </div>
          <div className="w-full lg:w-2/4 p-4 space-y-3">
            <h2 className="font-semibold text-3xl">
              What Makes Our Coffee Special?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quaerat quia quasi beatae et iste, tempora voluptatum corporis sit pariatur eaque exercitationem, doloribus eum optio nobis cum? Quidem, dolor atque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut minima perspiciatis doloribus quod repellendus molestiae rerum! Enim, vero natus.
            </p>
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24">
          Customer's Reviews
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
          <ReviewCard img={man1} title="Olivia Ava" />
          <ReviewCard img={women} title="John Deo" />
          <ReviewCard img={man2} title="Sofia Zoe" />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={true}
      />
    </div>
  );
};

export default Home;

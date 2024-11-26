// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import Menu from './Components/Menu'
// import LoginForm from './Components/LoginForm'

// function App() {

//   return (
//     <div>
//     <Navbar />

//     <main>
//       <div id="home">
//         <Home />
//       </div>
//       <div id="menu">
//         <Menu />
//       </div>
//       <div id="login">
//           <LoginForm />
//         </div>
//       </main>
//       </div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import LoginPage from './Components/LoginPage';  // LoginPage ko import kar rahe hain
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          
          {/* Menu page */}
          <Route path="/menu" element={<Menu />} />

          {/* Login page */}
          <Route path="/login" element={<LoginPage />} />  {/* Login page route */}

        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;

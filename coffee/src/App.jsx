 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import LoginPage from './Components/LoginPage';
import Footer from './Components/Footer';
import CartSummary from './Components/CartSummary';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart-summary" element={<CartSummary />} />
          <Route path='/signup' element={<RegistrationForm/>}/>
        </Routes>
      </main>
      <Footer />
      {/* Toast container placed globally */}
      <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={true}
      />
    </Router>
  );
}

export default App;

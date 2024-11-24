import React from 'react';
import LoginForm from '../Layout/LoginForm';  // LoginForm component ko import kar rahe hain

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-backgroundColor flex items-center justify-center">
      <LoginForm />  {/* Login form ko yahaan render kar rahe hain */}
    </div>
  );
};

export default LoginPage;

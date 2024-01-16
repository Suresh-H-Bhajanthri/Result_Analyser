// HomeComponent.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import { useState } from 'react';
import ResetPasswordComponent from './ResetPasswordComponent';
import "../Styles/login.css"

const HomeComponent = () => {

    const [showResetPassword, setShowResetPassword] = useState(false);


  return (
    <div className="main-body">
      <div className="head">
        <h1>WELCOME TO KLE TECHNOLOGICAL UNIVERSITY</h1>
      </div>
      <div className="body-1">
        <div className="side-b">
            {showResetPassword ? (
            <ResetPasswordComponent onCancel={() => setShowResetPassword(false)} />
          ) : (
            <Login onResetPassword={() => setShowResetPassword(true)} />
          )}

           <Routes>
            <Route path="/login" element={<Login onResetPassword={() => setShowResetPassword(true)} />} />
            <Route path="/reset-password" element={<ResetPasswordComponent onCancel={() => setShowResetPassword(false)} />} />
          </Routes>

        </div>
      </div>
      <div className="bottom">
        <p>Terms Of Service | Privacy Policy</p>
      </div>
    </div>
  );
};

export default HomeComponent;

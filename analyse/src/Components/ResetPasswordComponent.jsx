// ResetPasswordComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/login.css"


const ResetPasswordComponent = ({ onCancel }) => {
  const [email, setEmail] = useState('');

  const resetPassword1 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/resetpassword', {
        email: email,
      });

      if (response.data.success) {
        alert('Password reset email sent successfully! Check your email for further instructions.');
      } else {
        alert('Failed to send password reset email. Please try again.');
      }

      window.location.reload();
    } catch (error) {
      console.error('Error resetting password:', error.message);
      window.location.reload();
    }
  };

  return (
    <div className="reset-password-form">
      <h2>Reset Password</h2>
      <form className="form" action='' onSubmit={(e) => resetPassword1(e)}>
                 <label htmlFor="reset-email"> Enter mail : </label>
                 <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                 <p onClick={onCancel}>Remember Password</p>
                 {/* <p onClick={rememberPassword}>RememberPassword</p> */}
                 {/* <button type="button" onClick={resetPassword1}>
                   Reset Password
                 </button> */}
                 <button type="submit">
                   Reset Password
                 </button>
               
      </form>
    </div>
  );
};

export default ResetPasswordComponent;

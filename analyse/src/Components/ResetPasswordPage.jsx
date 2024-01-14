import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

 const ResetPasswordPage = () => {

    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const resetPassword2 = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/reset/${token}`, {
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        });
        console.log(response.data);
       
      } catch (error) {
        console.error('Error resetting password:', error.message);
      }
    };

    return (
        <div>
          {/* Your JSX for the password reset page */}
          <form>
            <label htmlFor="new-password">New Password: </label>
            <input type="password" id="new-password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input type="password" id="confirm-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="button" onClick={resetPassword2}>
              Reset Password
            </button>
          </form>
          {/* ... (other elements on the password reset page) */}
        </div>
      );
    };
 
 export default ResetPasswordPage
  
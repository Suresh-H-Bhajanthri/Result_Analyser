// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "../Styles/Login.css"

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [resetPasswordMode, setResetPasswordMode] = useState(false);

//   const validateLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response =await axios.post('http://localhost:3000/login', {
//         email : email,
//         password : password,
//       });
//       const token = response.data.token;
//       console.log('Token:',token);
//       console.warn("login sucessfull")
//        navigate('/page2');
//     }
//     catch (error) {
//       console.error('Login failed:',error.message);
//       alert('Login failed : (Invalid email or password)');
//       window.location.reload();
//     }
//   }


//   const resetPassword = async () => {
//     setResetPasswordMode(true);
//   };

//   const rememberPassword = () => {
//     setResetPasswordMode(false);
//   };

//   const resetPassword1 = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/resetpassword', {
//         email: email,
//       });
//       console.log(response.data);


//       if (response.data.success) {
//         alert('Password reset email sent successfully! Check your email for further instructions.');
//       } else {
//         alert('Failed to send password reset email. Please try again.');
//       }


//       window.location.reload();
//     } catch (error) {
//       console.error('Error resetting password:', error.message);
//       window.location.reload();
//     }
//   };

//   return (
//     <div className='main-body'>
//       <div className="head">
//         <h1>WELCOME TO KLE TECHNOLOGICAL UNIVERSITY</h1>
//       </div>
//       <div className="body-1">
//         <div className="side-b">
//           <h2>{resetPasswordMode ? 'RESET PASSWORD' : 'ADMINS ONLY'}</h2>
//           <br />
//           <div className="f-type">
//             {resetPasswordMode ? (
//               // reset password form
//               <form className="form">
//                 <label htmlFor="reset-email"> Enter mail : </label>
//                 <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <p onClick={rememberPassword}>RememberPassword</p>
//                 <button type="button" onClick={resetPassword1}>
//                   Reset Password
//                 </button>
//               </form>
//             ) : (
//               // login form
//               <form action="" id="signupform" className="form" onSubmit={(e) => validateLogin(e)}>
//                 <label htmlFor="email">Enter mail : </label>
//                 <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <label htmlFor="password">Enter password : </label>
//                 <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button type="submit">Login</button>
//                 <p onClick={resetPassword}>Forget Password?</p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="bottom">
//         <p> Terms Of Service | Privacy Policy </p>
//       </div>
//     </div>
//   );
// };
// export default Login;


// LoginComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/login.css"


const Login = ({ onResetPassword }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      console.log('Token:', token);
      console.warn('Login successful');
      // navigate('/page2');
      navigate('/semester');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed: (Invalid email or password)');
      window.location.reload();
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      
      <form action="" id="signupform" className="form" onSubmit={(e) => validateLogin(e)}>
                 <label htmlFor="email">Enter mail : </label>
                 <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                 <label htmlFor="password">Enter password : </label>
                 <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                 <button type="submit">Login</button>
                 {/* <p>Forget Password?</p> */}
                 <p onClick={onResetPassword}>Forget Password?</p>
               </form>
    </div>
  );
};

export default Login;

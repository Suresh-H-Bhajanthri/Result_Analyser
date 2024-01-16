import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../Styles/Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [resetPasswordMode, setResetPasswordMode] = useState(false);
  const [newAdminMode, setNewAdminMode] = useState(false);

  const validateLogin = async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post('http://localhost:3000/login', {
        email : email,
        password : password,
      });
      const token = response.data.token;
      console.log('Token:',token);
      console.warn("login sucessfull")
       navigate('/page2');
    }
    catch (error) {
      console.error('Login failed:',error.message);
      alert('Login failed : (Invalid email or password)');
      window.location.reload();
    }
  }


  const resetPassword = async () => {
    setResetPasswordMode(true);
    setNewAdminMode(false);
  };

  const rememberPassword = () => {
    setResetPasswordMode(false);
    setNewAdminMode(false);
  };

  const handleNewAdmin = () => {
    setNewAdminMode(true);
    setResetPasswordMode(false);
  };

  const alreadyExists = () => {
    setNewAdminMode(false);
    setResetPasswordMode(false);
  };


  const resetPassword1 = async () => {
    try {
      const response = await axios.post('http://localhost:3000/resetpassword', {
        email: email,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error resetting password:', error.message);
      window.location.reload();
    }
  };

  const createNewAdmin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create/admin', {
        name: username,
        email: email,
        password: password,
      });
  
      console.log(response.data);
      window.location.reload();

    } catch (error) {
      console.error('Error creating admin:', error.message);
      window.location.reload();
    }
  };

  return (
    <div>
        <div className="head">
           <h1>WELCOME TO KLE TECHNOLOGICAL UNIVERSITY</h1>
        </div>
        <div className="body-1">
            <div className="side-a">
                <img src="https://img.freepik.com/free-photo/data-management-perfomance-graph-concept_53876-167113.jpg?size=626&ext=jpg&ga=GA1.1.1671615639.1699209373&semt=sph" alt="xyz" className="animated-image" />
                <img src="https://img.freepik.com/free-photo/documents-paperwork-business-strategy-concept_53876-125434.jpg?size=626&ext=jpg&ga=GA1.1.1671615639.1699209373&semt=sph" alt="xyz" className="animated-image" />
            </div>
            <div className="side-b">
            {newAdminMode ? (
              <>
              <h2> Register admin</h2>
              {/* register */}
            <form className="form">
            <label htmlFor="username"> Enter name : </label>
                <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="register-email"> Enter mail : </label>
                <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password"> Enter password : </label>
                <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='p1-tag' onClick={alreadyExists}> Already exists? Login here </p>
                <button type="button" onClick={createNewAdmin}>
                  Register
                </button>
            </form>
              </>
          ) : (
            <>
              <h2>{resetPasswordMode ? 'RESET PASSWORD' : 'ADMINS ONLY'}</h2>
              <br />
              <div className="f-type">
                {resetPasswordMode ? (
                  // reset password form
                  <form className="form">
                     <label htmlFor="reset-email"> Enter mail : </label>
                    <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p onClick={rememberPassword}>RememberPassword</p>
                    <button type="button" onClick={resetPassword1}>
                      Reset Password
                    </button>
                  </form>
                ) : (
                  // login form
                  <form action="" id="signupform" className="form" onSubmit={(e) => validateLogin(e)}>
                    <label htmlFor="email">Enter mail : </label>
                    <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Enter password : </label>
                    <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                    <p onClick={resetPassword}>Forget Password?</p>
                    <p onClick={handleNewAdmin}>First time? Register here</p>
                  </form>
                )}
              </div>
            </>
          )}        
            </div>
        </div>
        <div className="bottom">
            <p> Terms Of Service | Privacy Policy </p>
        </div>
    </div>
  )
}
export default Login;

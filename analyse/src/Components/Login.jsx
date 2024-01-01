import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = (e) => {
    e.preventDefault();

    const validEmail = 'admin@example.com';
    const validPassword = 'admin123';

    if (email === validEmail && password === validPassword) {
     console.warn("login sucessfull")
      navigate('/page2');
    } else {
      alert('Invalid email or password. Please try again.');
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
                <h2> ADMINS ONLY</h2>
                <br />
                <div className="f-type">
                <form action="" id="signupform" className="form" onSubmit={(e) => validateLogin(e)}>
                <label htmlFor="email">Enter mail : </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Enter password : </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                    <button type="submit" >Login</button>
                    <p>forget password?</p>
                </form>
                </div>        
            </div>
        </div>
        <div className="bottom">
            <p> Terms Of Service | Privacy Policy </p>
        </div>
    </div>
  )
}
export default Login;
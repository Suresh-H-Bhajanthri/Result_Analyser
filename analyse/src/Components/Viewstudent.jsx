import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import BarChart from "./BarChart.jsx";

import { isAuthenticated } from '../context/auth.js';
import { removeAuthToken } from '../context/auth.js';

const Viewstudent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { students, courseid} = state || {};
  console.log(students);
  console.log(courseid);
  const [marks, setMarks] = useState();

  

  useEffect(()=>{
    if (!isAuthenticated()) {
      navigate('/');
    }
    const fetchMarks = async()=>{
      console.log(courseid, "inside fetch");
      const response = await axios.post('http://localhost:3000/getsinglemarks', {usn:students.usn, courseid});
      console.log(response.data, "response view student");
      setMarks(response.data);
    }
    fetchMarks();
  },[navigate])

  const handleLogoutClick = () => {
    // Assuming removeAuthToken and navigate are defined in your auth.js file
    removeAuthToken();
    navigate('/');
  };

  return (
    <>
    <h3>View Student</h3>
    <h2>{students?.usn}</h2>
    <p onClick={handleLogoutClick}>Logout</p>
    <BarChart marks={marks}/>
    </>
  )
}

export default Viewstudent
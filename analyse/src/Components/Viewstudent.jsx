import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { Bar } from 'react-chartjs-2';
import BarChart from "./BarChart.jsx";
import "../Styles/Viewstudent.css";

const Viewstudent = () => {
  const { state } = useLocation();
  const { students, courseid} = state || {};
  console.log(students);
  console.log(courseid);
  const [marks, setMarks] = useState();

  

  useEffect(()=>{

    const fetchMarks = async()=>{
      console.log(courseid, "inside fetch");
      const response = await axios.post('http://localhost:3000/getsinglemarks', {usn:students.usn, courseid});
      console.log(response.data, "response view student");
      setMarks(response.data);
    }
    fetchMarks();
  },[])

  return (
    <>
    <div className="s-header">
       <img src="public/images/l-logo.png" alt="xyz" style={{width: '280px', height: '75px', marginLeft: '20px'}} />
       <div className="tag-container">
          <p>Logout</p>
          <img src="public/images/logout1.png" alt="xyz" style={{ width: '60px', height: '60px',marginTop: '' }} />
        </div>
    </div>
    <div className="h2style">
    <h2>View student performance</h2>
    </div>
    <div className="main-s-mid">
    <div className="s-mid">
    <img src="public/images/profile.png" alt="xyz" style={{width: '200px', height: '200px', marginRight: ''}} />
    <div className="s-details">
      <h3>Name :{students?.name}</h3>
      <h3>USN :{students?.usn}</h3>
      <h3>E-mail :{students?.email}</h3>
      <h3>Course-id :{courseid}</h3>
    </div>
    </div>
    <BarChart marks={marks}/>
    </div>
    
    </>
  )
}

export default Viewstudent
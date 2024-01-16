import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import LineChart from './LineChart.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { isAuthenticated } from '../context/auth.js';
import { removeAuthToken } from '../context/auth.js';

const Viewchart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { studentDetails, ...courseData} = state || {}; 
  console.log(studentDetails);
  console.log(courseData);
  const {courseId, division, selectedSemester} = courseData;
  const [student, setStudent] = useState();

  useEffect(()=>{

    if (!isAuthenticated()) {
      navigate('/');
    }
    const getMarks = async () => {
      const response = await axios.post('http://localhost:3000/markschart', {
        division,
        semester: selectedSemester[0],
        courseId,
      });
      console.log(response.data, 'response');
      setStudent(response.data);
      console.log(student, 'student');
      };
      getMarks();
    }, [navigate])

    const handleLogoutClick = () => {
      removeAuthToken();
      navigate('/');
    };

  return (
    <div>
      <h2>graph of students for {courseData.courseName}</h2>
      <p onClick={handleLogoutClick}>Logout</p>
      {student && <LineChart data={student} />}
    </div>
  )
}

export default Viewchart
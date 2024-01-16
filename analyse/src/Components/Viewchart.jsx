import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import LineChart from './LineChart.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../Styles/Viewchart.css"

const Viewchart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { studentDetails, ...courseData} = state || {}; 
  console.log(studentDetails);
  console.log(courseData);
  const {courseId, division, selectedSemester} = courseData;
  const [student, setStudent] = useState();

  useEffect(()=>{

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


  return (
    <div>
      <div className="chart-header">
      <img src="public/images/l-logo.png" alt="xyz" style={{width: '280px', height: '75px', marginLeft: '20px'}} />
      <div className="tag-container">
          <p>Logout</p>
          <img src="public/images/logout1.png" alt="xyz" style={{ width: '60px', height: '60px',marginTop: '' }} />
        </div>
      </div>
      <div className="h2style">
      <h2>Graph of students for {courseData.courseName}</h2>
      </div>
      
      <div className="stu-charts">
      {student && <LineChart data={student} />}
      </div>
      
    </div>
  )
}

export default Viewchart
import { useLocation } from 'react-router-dom'; 
import LineChart from './LineChart.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Viewchart = () => {
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
    }, [])

  return (
    <div>
      <h2>graph of students for {courseData.courseName}</h2>
      {student && <LineChart data={student} />}
    </div>
  )
}

export default Viewchart
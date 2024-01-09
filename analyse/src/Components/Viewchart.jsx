import { useLocation } from 'react-router-dom'; 
import LineChart from './LineChart.jsx';
// import PropTypes from "prop-types";


const Viewchart = () => {
  const { state } = useLocation();

  const { studentDetails, ...courseData} = state || {}; 
  console.log(studentDetails);
  console.log(courseData);


  return (
    <div>
      <h2>graph of students for {courseData.courseName}</h2>
      <LineChart studentDetails={studentDetails}/>
    </div>
  )
}

export default Viewchart
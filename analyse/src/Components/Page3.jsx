import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';  
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'; 
import "../Styles/Page3.css";
import Singlecourse from './Singlecourse';

import { isAuthenticated } from '../context/auth.js';
import { removeAuthToken } from '../context/auth.js';

const Page3 = () => {
  const navigate = useNavigate();
    const { state } = useLocation();  
    const { selectedSemester, data } = state || {};
    const [courseDetails, setCourseDetails] = useState([]);

    useEffect ( () =>{
      if (!isAuthenticated()) {
        navigate('/');
      }

      const fetchCourseDetails = async () => {
        const response = await axios.post('http://localhost:3000/get/courses', {semester:selectedSemester[0]});
        console.log(selectedSemester, data.division);
        console.log(response.data.courses);
        setCourseDetails(response.data.courses);
        
      }
      fetchCourseDetails();
    },[navigate] )

    const handleLogoutClick = () => {
      // Assuming removeAuthToken and navigate are defined in your auth.js file
      removeAuthToken();
      navigate('/');
    };

  return (
    <div className="body">
        <div className='class-details'>
          <span>Semester: {selectedSemester}</span>
          <span>Mentor: {data.mentor ?? 'N/A'}</span>
          <span>CR: {data.cr ?? 'N/A'}</span>
          <span>Division: {data.division ?? 'N/A'}</span>
          <p onClick={handleLogoutClick}>Logout</p>
        </div>
        <div className="sub-mid">
            <div className="sub-topsite">
            {console.log(selectedSemester)}
                <span>{selectedSemester}</span>
            </div>
            <div className="subject-container">
                {courseDetails?.map((course, index) => {
                  return <Singlecourse key={course._id} course={course} selectedSemester={selectedSemester} division={data.division} index={index}/>;
                })}
            </div>        
        </div>
    </div>
  );
}

Page3.propTypes = {
  selectedSemester: PropTypes.string,
  strength: PropTypes.number,
  topper: PropTypes.string,
  average: PropTypes.number,
};

export default Page3;



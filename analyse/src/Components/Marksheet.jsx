import { useLocation, useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import "../Styles/Marksheet.css"
import Singlestudent from './singlestudent';


const Marksheet = () => {

    const { state } = useLocation();
  const navigate = useNavigate();

    const { selectedCourse, ...courseData} = state || {}; 
    const { selectedSemester,division } = state || {};

    const [studentDetails, setStudentDetails] = useState([]);

    useEffect ( () => {

        const fetchStudentDeatail = async () => {
            console.log(state);
            const response = await axios.post('http://localhost:3000/get',{semester:selectedSemester[0],division:division});
            console.log(selectedSemester, division);
            console.log(response.data.students);


                console.log(courseData);
                console.log(selectedCourse);
            const studentsWithCorrectMarks = response.data.students.map(student => ({
                ...student,
                // marks: {
                //     isa1: student.marks.isa1 || 0,
                //     isa2: student.marks.isa2 || 0,
                //     esa: student.marks.esa || 0,
                // },
            }));

            setStudentDetails(studentsWithCorrectMarks);

            // setStudentDetails(response.data.students);
        }
        fetchStudentDeatail();
    },[]);

    const handleViewChartClick = () => {
        navigate('/result-analysis', {
            state: {
                 ...courseData,
                 
                studentDetails
            },
            
        });
    };
    


  return (
    <>
    <div className="m-header">
        <img src="public/images/l-logo.png" alt="xyz" style={{width: '280px', height: '75px', marginLeft: '-35px'}} />
        <span>Course-Name :{courseData.courseName}</span>
        <span>Course-ID :{courseData.courseId}</span>
        <span>Credits :{courseData.credits}</span>
        <span>Division :{courseData.division}</span>
        <div className="tag-container">
          <p>Logout</p>
          <img src="public/images/logout1.png" alt="xyz" style={{ width: '60px', height: '60px' }} />
          </div>
    </div>
    <div className="exam-type">
        <span>Student-Details</span>        
        <span>ISA1</span>        
        <span>ISA2</span>        
        <span>ESA</span>        
    </div>
    <div className="stu-container">
    {studentDetails?.map((students) => {
        return <Singlestudent key={students._id} students={students} courseid={courseData.courseId} semester={selectedSemester[0]}/>
    })}
    </div>
    <div className="btn">
        <p onClick={() => handleViewChartClick()}>View chart</p>
       {/* <button onClick={() => handleViewChartClick()}>View Chart</button> */}
    </div>

    </>
  )
}

export default Marksheet
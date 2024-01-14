import { useState,useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "../Styles/Marksheet.css";
import { useNavigate } from "react-router-dom";

const Singlestudent = ({ students, courseid, semester }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState({
    isa1: students.marks.isa1,
    isa2: students.marks.isa2,
    esa: students.marks.esa,
  });

  const updateMarksOnServer = async (exam, marksValue) => {
    console.log('update called......................');

    setLoading(true);
    try {
  
      await axios.post("http://localhost:3000/marks", {
        usn: students.usn,
        exam: exam,
        courseid: courseid,
        marks: marksValue,
      });
  
      const response = await axios.post("http://localhost:3000/get", {
        semester: semester,
        division: students.division,
      });
  
      const updatedStudent = response.data.students.find(
        (s) => s.usn === students.usn
      );
  
      setMarks({
        ...marks,
        isa1: updatedStudent.marks.isa1 || 0,
        isa2: updatedStudent.marks.isa2 || 0,
        esa: updatedStudent.marks.esa || 0,
      });
    } catch (error) {
      console.error("Error updating marks:", error);
      // Handle error state here
    }
    finally {
      setLoading(false);
    }

    console.log(loading);
  };

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/get", {
          semester: semester,
          division: students.division,
        });

        const updatedStudent = response.data.students.find((s) => s.usn === students.usn);

        setMarks({
          isa1: updatedStudent.marks.isa1 || 0,
          isa2: updatedStudent.marks.isa2 || 0,
          esa: updatedStudent.marks.esa || 0,
        });
      } catch (error) {
        console.error("Error fetching student data:", error);
        // Handle error state here
      }
    };

    fetchStudentData();
  }, [semester, students.division, students.usn]);

  const handleEnterPress = (event, exam) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      updateMarksOnServer(exam, value);
    }
  };

  const handleStudentDetailsClick = () => {
    // Navigate to another page with student details as props
    navigate('/student-details', { 
      state: { 
        students: students, 
      },
    });
  };


  return (
    <div className="m-body">
      <div className="stu-details" onClick={handleStudentDetailsClick}>
        <span>{students.name}</span>
        <span>{students.usn}</span>
        <span>{students.email}</span>
      </div>
      <label htmlFor="isa1">
        <input
          type="number"
          defaultValue={students.marks.isa1}
          disabled={loading}
          onKeyDown={(e) => handleEnterPress(e, "isa1")}
        />
      </label>
      <label htmlFor="isa2">
        <input
          type="number"
          defaultValue={students.marks.isa2}
          disabled={loading}
          onKeyDown={(e) => handleEnterPress(e, "isa2")}
        />
      </label>
      <label htmlFor="esa">
        <input
          type="number"
          defaultValue={students.marks.esa}
          disabled={loading}
          onKeyDown={(e) => handleEnterPress(e, "esa")}
        />
      </label>
      <label htmlFor="grade">
        <input type="number" />
      </label>
    </div>
  );
};

Singlestudent.propTypes = {
  students: PropTypes.shape({
    name: PropTypes.string.isRequired,
    usn: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
    marks: PropTypes.shape({
      isa1: PropTypes.number.isRequired,
      isa2: PropTypes.number.isRequired,
      esa: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  courseid: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
};

export default Singlestudent;

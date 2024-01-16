import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../Styles/Page3.css";
import { useState } from "react";


const Singlecourse = ({course, selectedSemester, division, index}) => {

  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("select");
  const [courseData, setCourseData] = useState({
    courseName: course.courseName,
    courseId: course.courseId,
    credits: course.credits
  });


  const determineImageSource = (semester, index) => {
    const folderName = semester === "3rd sem" ? "3rd-semimages" : "5th-semimages";
    const imageCount = semester === "3rd sem" ? 4 : 6;

    // Calculate the image index based on the total number of images
    const imageIndex = index % imageCount + 1;

    // Use the appropriate image source based on the selected semester and index
    return `/public/${folderName}/img${imageIndex}.png`;
  };


  const handleClick = () => {
    console.log(division);
    setSelectedCourse(course.courseId);
    setCourseData({
      courseName: course.courseName,
      courseId: course.courseId,
      credits: course.credits,
    });

    console.log("Navigating to markssheet with ;",{
      selectedCourse,
      ...courseData,
    });
    navigate('/marksheet',{
      state: {
        selectedCourse,
        ...courseData,
        selectedSemester,
        division,
      },
    });
  };

  const imageSource = determineImageSource(selectedSemester, index);

  return (
    <div  className="subject-1" onClick={handleClick}>
                   <div className="alpha-img">
                       <img src={imageSource} alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>course-name :{course.courseName} </span>
                   <span>course-code : {course.courseId}</span>
                   <span>credits :{course.credits}</span>
                   </div>     
    </div>
  )
}


Singlecourse.propTypes = {
  course: PropTypes.shape({
    courseName: PropTypes.string.isRequired,
    courseId: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
  }).isRequired,
  selectedSemester: PropTypes.string,
  division: PropTypes.string,
  index: PropTypes.number.isRequired
};

export default Singlecourse
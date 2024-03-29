import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Page2.css";
// import { IoCiOutline } from 'react-icons/io5';

const Page2 = () => {

  const navigate = useNavigate();
  const [selectedSemester, setSelectedSemester] = useState("select");

    const handleSemesterChange = (e) => {
      setSelectedSemester(e.target.value);
    };

    const handleCardClick = (updatedData) => {
      console.log("Navigating to Page3 with:", {
        selectedSemester,
        ...updatedData
      });
       
      // navigate('/page3', {
      //   state: {
      //     selectedSemester,
      //     data: updatedData,
      //   },
      // });
      navigate('/courses', {
        state: {
          selectedSemester,
          data: updatedData,
        },
      });
    };

  const renderCards = () => {
    let cardStyle = {};
    if (selectedSemester === "3rd sem") {
      cardStyle = { backgroundColor: '#FFD700' }; 
    } else if (selectedSemester === "5th sem") {
      // cardStyle = { backgroundColor: '#00FA9A' };
      cardStyle = { backgroundColor: '#dee2ff' }; 
    }

    if (selectedSemester === "3rd sem") {
      return (
        <>
          <div className="card-1" style={cardStyle} onClick={() => handleCardClick({ strength: 30, mentor: 'Prof. manjula', cr: 'Darshan', division: 'A' })}>
                   <div className="alpha-img">
                       <img src="https://4.bp.blogspot.com/-sL27hk1Aq30/VxsWEnra7PI/AAAAAAAAE_s/Bp0iEq8srb4m8xQpgbYH1Zh_ylfIicBfACLcB/s1600/3dAletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :30 </span>
                   <span>Mentor : Prof. manjula</span>
                   <span>CR :Darshan</span>
                   <span>Division :A</span>
                   </div>     
                </div>
                <div className="card-2" style={cardStyle} onClick={() => handleCardClick({ strength: 20, mentor: 'Prof. sushil', cr: 'rohit', division: 'B' })}>
                   <div className="alpha-img">
                       <img src="https://3.bp.blogspot.com/--qjkLEY-CLo/VxsWIsHb2BI/AAAAAAAAE_w/86yz5MkdSQkUk_pTxDryFwQ3GGrKfAHzwCLcB/s1600/3dBletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :20 </span>
                   <span>Mentor :sushil</span>
                   <span>CR :rohit</span>
                   <span>Division :B</span>
                   </div>      
                </div>
                <div className="card-3" style={cardStyle} onClick={() => handleCardClick({ strength: 20, mentor: 'Prof. sagar', cr: 'sagar', division: 'C' })}>
                   <div className="alpha-img">
                       <img src="https://4.bp.blogspot.com/-elNbDyMXaRc/VxsWEYpS4uI/AAAAAAAAE_o/mNtCp07G-voaDBSyR5wkdf5hNoXtGwq8wCLcB/s1600/3dCletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :20 </span>
                   <span>Mentor : sagar</span>
                   <span>CR :sagar</span>
                   <span>Division :C</span>
                   </div>     
                </div>
        </>
      );
    } else if (selectedSemester === "5th sem") {
      return (
        <>
          <div className="card-1" style={cardStyle} onClick={() => handleCardClick({ strength: 30, mentor: 'Prof. manjula', cr: 'Darshan', division: 'A' })}>
                   <div className="alpha-img">
                       <img src="https://4.bp.blogspot.com/-sL27hk1Aq30/VxsWEnra7PI/AAAAAAAAE_s/Bp0iEq8srb4m8xQpgbYH1Zh_ylfIicBfACLcB/s1600/3dAletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :30 </span>
                   <span>Mentor : Prof. manjula</span>
                   <span>CR :Darshan</span>
                   <span>Division :A</span>
                   </div>     
                </div>
                <div className="card-2" style={cardStyle} onClick={() => handleCardClick({ strength: 30, mentor:'Prof. sushil', cr: 'rohit', division: 'B' })}>
                   <div className="alpha-img">
                       <img src="https://3.bp.blogspot.com/--qjkLEY-CLo/VxsWIsHb2BI/AAAAAAAAE_w/86yz5MkdSQkUk_pTxDryFwQ3GGrKfAHzwCLcB/s1600/3dBletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :20 </span>
                   <span>Mentor :sushil</span>
                   <span>CR :rohit</span>
                   <span>Division :B</span>
                   </div>      
                </div>
                <div className="card-3" style={cardStyle} onClick={() => handleCardClick({ strength: 20, mentor: 'Prof. sagar', cr: 'sagar', division: 'C' })}>
                   <div className="alpha-img">
                       <img src="https://4.bp.blogspot.com/-elNbDyMXaRc/VxsWEYpS4uI/AAAAAAAAE_o/mNtCp07G-voaDBSyR5wkdf5hNoXtGwq8wCLcB/s1600/3dCletter.png" alt="xyz"  className="a-alpha"/>
                   </div>
                   <div className="card-text">
                   <span>Strength :20 </span>
                   <span>Mentor : sagar</span>
                   <span>CR :sagar</span>
                   <span>Division :C</span>
                   </div>     
                </div>
        </>
      );
    } else {
      return <p></p>;
      // return <p>Select a semester to see the divisions.</p>;
    }
  };



  return (
    <div className="body">
        <div className="top-section">
          {/* <img src="public/images/logo.png" alt="xyz"/> */}
          <img src="public/images/l-logo.png" alt="xyz"/>
          <div className="tag-container">
          <p>Logout</p>
          <img src="public/images/logout1.png" alt="xyz" style={{ width: '60px', height: '60px',marginTop: '' }} />
          </div>
        </div>
        <div className="mid-section">
        <div className="video-container">
              <video autoPlay muted loop>
                  <source src="public/videos/background-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            <div className="topsite">
                <p>SEMESTER</p>
                <select name="semester" id="semester" onChange = {(e) => handleSemesterChange(e)} value={selectedSemester}>
                  <option value="select">Select Semester</option>
                  <option value="3rd sem">3rd Semester</option>
                  <option value="5th sem">5th Semester</option>
                </select>  
            </div>
            <div className="card-container">
                {renderCards()}
            </div>  
        </div>
        </div>
    </div>
  )
}

export default Page2;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Marksheet from "./Components/Marksheet";
import Viewchart from "./Components/Viewchart";
import Viewstudent from "./Components/Viewstudent.jsx";
import ResetPasswordPage from "./Components/ResetPasswordPage.jsx";
import Home from "./Components/Home.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/semester" element={<Page2 />} />
      <Route path="/courses" element={<Page3 />} />
      <Route path="/marksheet" element={<Marksheet />} />
      <Route path="/result-analysis" element={<Viewchart />} />
      <Route path="/student-details" element={<Viewstudent />} />
      <Route path="/reset/:token" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

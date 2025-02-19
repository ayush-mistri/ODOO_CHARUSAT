import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/LandingPage/Home"
import Services from "./components/Services";
// import ThreeJSBackground from "./components/LandingPage/ThreeJSBackground";
import VideoCall from "./components/VideoCall";
import { Navbar } from "./components/LandingPage/Navbar";
import AuthPage from "./components/LandingPage/AuthPage"; 
import DoctorDashboard from "./components/Docter/Dashboard";
import PatientDashboard from "./components/Patient/Dashboard";
import Appointments from "./components/Patient/Appointments";
import About from "./components/LandingPage/About";
import Contact from "./components/LandingPage/Contact";
import Profile from "./components/Profile";

function App() {
  return (
      <Router>   
        <div className="">
          {/* <ThreeJSBackground/> */}
          <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient-dashboard" element={<PatientDashboard/>} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            
          </Routes>
          
          {/* <VideoCall /> */}
        </div>
      </Router>
  );
}

export default App;

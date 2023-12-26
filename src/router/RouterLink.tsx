import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Layout from "../screens/dashboard/Layout";
import PersonalData from "../screens/dashboard/PersonalData";
import Experience from "../screens/dashboard/Experience";
import TechnicalSkills from "../screens/dashboard/TechnicalSkills";
import Education from "../screens/dashboard/Education";
import ContactInfo from "../screens/dashboard/ContactInfo";
import Certification from "../screens/dashboard/Certification";
import Completed from "../screens/dashboard/Completed";

const RouterLink = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<PersonalData />} />
          <Route path="/dashboard/experience" element={<Experience />} />
          <Route
            path="/dashboard/technicalSkills"
            element={<TechnicalSkills />}
          />
          <Route path="/dashboard/education" element={<Education />} />
          <Route path="/dashboard/contactInfo" element={<ContactInfo />} />
          <Route path="/dashboard/certification" element={<Certification />} />
        </Route>
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Router>
  );
};

export default RouterLink;

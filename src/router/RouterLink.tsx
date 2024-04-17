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

import AuthLayout from "../screens/auth/AuthLayout";
import Register from "../screens/auth/Register";
import ForgotPassword from "../screens/auth/ForgotPassword";
import CreatePassword from "../screens/auth/CreatePassword";
import OtpConfirmation from "../screens/auth/OtpConfirmation";
import ResetSuccess from "../screens/auth/ResetSuccess";
import CreationSuccess from "../screens/auth/CreationSuccess";

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

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Register />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route path="/auth/createpassword" element={<CreatePassword />} />
          <Route path="/auth/otpConfirmation" element={<OtpConfirmation />} />
          <Route path="/auth/resetsuccess" element={<ResetSuccess />} />
        </Route>
        <Route path="/creationsuccess" element={<CreationSuccess />} />
      </Routes>
    </Router>
  );
};

export default RouterLink;

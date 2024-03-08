import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ThemeSwitcher from "./components/Themes/ThemeSwitcher";
import { CssBaseline } from "@mui/material";
import NavBar from "./routes/Navigation/navigation";
import HomePage from "./routes/Homepage/homepage";
import AboutPage from "./components/About/About";
import ResumePage from "./components/Resume/Resume";
import PortfolioPage from "./components/Portfolio/Portfolio";
import BlogPage from "./components/Blog/Blog";
import FooterComponent from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import SignUpForm from "./components/SigninAndSignup/SignUp/SignUpFrom";

const App = () => {
  return (
    <ThemeSwitcher>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavBar />
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="resume" element={<ResumePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<SignUpForm />} />
          </Routes>
        </Box>
        <Socials />
        <FooterComponent />
      </Box>
    </ThemeSwitcher>
  );
};

export default App;

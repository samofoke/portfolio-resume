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
import SignUpSignIn from "./pages/SignupAndSigninFrom/SignUpSignin";
import { UserProvider } from "./UserContext/UserContext";
import useAnalytics from "./components/hooks/googleAnalytics/google-analytics/google-analytics";
import usePageTracking from "./components/hooks/user-page-tracker/userTracker";
import UserProfile from "./components/UserProfile/UserHomeProfile/UserProfile";

const App = () => {

  // Initialize analytics
  useAnalytics();

  // Track page views
  usePageTracking();

  
  return (
    <UserProvider>
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
              <Route path="signup" element={<SignUpSignIn />} />
              <Route path="userprofile" element={<UserProfile />} />
            </Routes>
          </Box>
          <Socials />
          <FooterComponent />
        </Box>
      </ThemeSwitcher>
    </UserProvider>
  );
};

export default App;

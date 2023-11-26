import { Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./components/Themes/ThemeSwitcher";
import NavBar from "./routes/Navigation/navigation";
import HomePage from "./routes/Homepage/homepage";
import AboutPage from "./components/About/About";
import ResumePage from "./components/Resume/Resume";
import PortfolioPage from "./components/Portfolio/Portfolio";
import BlogPage from "./components/Blog/Blog";
import { ContactPage } from "@mui/icons-material";

const App = () => {
  return (
    <ThemeSwitcher>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </ThemeSwitcher>
  );
};

export default App;

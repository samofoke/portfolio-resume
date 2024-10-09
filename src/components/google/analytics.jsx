import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalyticsTracker = () => {
  const location = useLocation();
  const gToken = process.env.REACT_APP_GOOGLE_ANALYTICS;

  useEffect(() => {
    const { pathname } = location;

    const routeTitles = {
      "/": "Home Page",
      "/about": "About Page",
      "/resume": "Resume Page",
      "/portfolio": "Portfolio Page",
      "/blog": "Blog Page",
      "/contact": "Contact Page",
      "/signup": "Sign Up / Sign In",
      "/userprofile": "User Profile",
    };

    const pageTitle = routeTitles[pathname] || "Sabata Mofokeng";

    document.title = pageTitle;

    if (typeof window.gtag === "function" && gToken) {
      window.gtag("config", gToken, {
        page_path: location.pathname + location.search,
        page_title: pageTitle,
      });
    }
  }, [location, gToken]);

  return null;
};

export default GoogleAnalyticsTracker;

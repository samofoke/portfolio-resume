import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleAnalyticsTracker = () => {
  const location = useLocation();
  const gTocken = process.env.REACT_APP_GOOGLE_ANALYTICS;

  console.log("location: ", location);

  useEffect(() => {
    if (window.gtag === "function" && gTocken) {
      window.gtag("config", gTocken, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location, gTocken]);

  return null;
};

export default GoogleAnalyticsTracker;

import {useEffect} from "react";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";

const useAnalytics = () => {
    useEffect(() => {
        // Initialize the Google Analytics 4
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)

        // Initial Google Tag Manager
        const TagManagerArgs = {
            gtmId: process.env.REACT_APP_GOOGLE_TAG_MANAGER
        }
        TagManager.initialize(TagManagerArgs)
    }, [])
}

export default useAnalytics;

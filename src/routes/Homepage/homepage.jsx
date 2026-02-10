import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import GenAI from "../../images/hacker.png";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AboutSection from "../../components/Sections/AboutSection";
import DialogComponent from "../../components/Dialog/DialogComponent";
import ResumeSection from "../../components/Sections/ResumeSection";
import Contact from "../../components/Contact/Contact";
import { HomePageInfo } from "../../assets/bioInfo";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "HomePage",
    });
  }, []);

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  useEffect(() => {
    const professionText = HomePageInfo.myProfession.trim();
    let currentIndex = 0;
    let typingIntervalId;
    let pauseTimeoutId;

    const typeWriter = () => {
      typingIntervalId = setInterval(() => {
        const currentText = professionText.slice(0, currentIndex + 1);
        setDisplayText(currentText);
        currentIndex++;

        if (currentIndex >= professionText.length) {
          clearInterval(typingIntervalId);
          pauseTimeoutId = setTimeout(() => {
            currentIndex = 0;
            setDisplayText("");
            typeWriter();
          }, 2000);
        }
      }, 100);
    };

    typeWriter();

    return () => {
      clearInterval(typingIntervalId);
      clearTimeout(pauseTimeoutId);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const image = new Image();
    const timeoutId = setTimeout(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    }, 1500);

    image.src = GenAI;
    image.onload = () => {
      if (isMounted) {
        setIsLoading(false);
      }
    };
    image.onerror = () => {
      if (isMounted) {
        setIsLoading(false);
      }
    };

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#E8751A" }} />
        </Box>
      ) : (
        <>
          <section id="home" style={{ padding: "3rem 0" }}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 8, width: "100%", overflow: "hidden" }}
              >
                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={4}
                  sm={8}
                  sx={{ textAlign: "center" }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4">{HomePageInfo.myTitle}</Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "clamp(0.85rem, 4.3vw, 1.5rem)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "clip",
                        minHeight: { xs: "1.6rem", sm: "2rem" },
                        px: 1,
                      }}
                    >
                      {displayText}
                      <span style={{ opacity: 0.5 }}>|</span>
                    </Typography>
                    <Box
                      sx={{
                        maxWidth: 600,
                        mx: "auto",
                        textAlign: { xs: "left", sm: "justify" },
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: { xs: "left", md: "left" },
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          hyphens: "auto",
                          padding: { xs: "0 1rem", md: "0" },
                        }}
                      >
                        {HomePageInfo.myWorkJourney}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: 5,
                      }}
                    >
                      <DialogComponent buttonText="Download CV" />
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/contact"
                      >
                        Contact
                      </Button>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={5}
                  lg={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      width: { xs: 240, sm: 280, md: 320 },
                      aspectRatio: "1 / 1",
                      borderRadius: "50%",
                      padding: "0.75rem",
                      marginBottom: { xs: "1rem", sm: 0 },
                      marginRight: { xs: 0, md: "2rem" },
                      boxShadow: 3,
                      backgroundColor: "background.paper",
                    }}
                  >
                    <Box
                      component="img"
                      src={GenAI}
                      alt="Image of developer"
                      loading="eager"
                      fetchPriority="high"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </section>

          <section id="about" style={{ padding: "2rem 0" }}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
            >
              <AboutSection />
            </motion.div>
          </section>

          <section id="resume" style={{ padding: "2rem 0" }}>
            <ResumeSection />
          </section>

          <section id="contact" style={{ padding: "2rem 0" }}>
            <Contact />
          </section>

          {showButton && (
            <IconButton
              sx={{
                position: "fixed",
                right: 20,
                bottom: 20,
                zIndex: 1000,
              }}
              onClick={scrollButton}
              color="secondary"
            >
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import { Grid, Button, Box, Typography, IconButton } from "@mui/material";
import GenAI from "../../images/genAI2.svg";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AboutSection from "../../components/Sections/AboutSection";
import DialogComponent from "../../components/Dialog/DialogComponent";
import ResumeSection from "../../components/Sections/ResumeSection";
import Contact from "../../components/Contact/Contact";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="home" style={{ padding: "3rem 0" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 8, width: "100%", overflow: "hidden" }}
        >
          <Grid item xs={12} md={5} lg={4} sm={8} sx={{ textAlign: "center" }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h4">I’m Sabata</Typography>
              <Typography variant="h5">
                Software Engineer | Full Stack Engineer
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
                  I am a Software Engineer with 4 years of coding experience,
                  including 3 years of professional experience in Full Stack
                  development, and exposure to AWS DevOps tools.
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
                width: { xs: "32vh", md: "38vh" },
                height: { xs: "32vh", md: "38vh" },
                borderRadius: "50%",
                padding: "0.75rem",
                marginBottom: { xs: "1rem", sm: 0 },
                marginRight: { xs: 0, md: "2rem" },
                boxShadow: 3,
              }}
              component="img"
              src={GenAI}
              alt="Image of developer"
            />
          </Grid>
        </Grid>
      </section>

      <section id="about" style={{ padding: "2rem 0" }}>
        <AboutSection />
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
  );
};

export default HomePage;

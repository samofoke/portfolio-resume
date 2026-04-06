import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  CircularProgress,
  Stack,
  Chip,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import GenAI from "../../images/hacker.png";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AboutSection from "../../components/Sections/AboutSection";
import DialogComponent from "../../components/Dialog/DialogComponent";
import ResumeSection from "../../components/Sections/ResumeSection";
import Contact from "../../components/Contact/Contact";
import NeuralBackground from "../../components/Backgrounds/NeuralBackground";
import { HomePageInfo } from "../../assets/bioInfo";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionTypography = motion(Typography);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const sectionInView = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TypeScript",
  "GraphQL",
  "Docker",
  "Kubernetes",
];

const HomePage = () => {
  const theme = useTheme();
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

  const isDark = theme.palette.mode === "dark";

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
            bgcolor: "background.default",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          <Box
            component="section"
            id="home"
            sx={{
              position: "relative",
              overflow: "hidden",
              minHeight: { md: "calc(100vh - 64px)" },
              display: "flex",
              alignItems: "center",
              pt: { xs: 8, md: 6 },
              pb: { xs: 8, md: 6 },
            }}
          >
            {/* Neural network underlay */}
            <NeuralBackground />

            {/* Animated floating gradient blobs */}
            <MotionBox
              aria-hidden
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                top: "10%",
                right: "5%",
                width: { xs: 280, md: 440 },
                height: { xs: 280, md: 440 },
                borderRadius: "50%",
                background: `radial-gradient(circle, ${alpha(
                  theme.palette.primary.main,
                  0.25
                )} 0%, transparent 70%)`,
                filter: "blur(60px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />
            <MotionBox
              aria-hidden
              animate={{
                x: [0, -25, 15, 0],
                y: [0, 20, -15, 0],
                scale: [1, 0.9, 1.05, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "8%",
                width: { xs: 260, md: 380 },
                height: { xs: 260, md: 380 },
                borderRadius: "50%",
                background: `radial-gradient(circle, ${alpha(
                  theme.palette.secondary.main,
                  0.18
                )} 0%, transparent 70%)`,
                filter: "blur(60px)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 1200,
                mx: "auto",
                px: { xs: 2, md: 4 },
              }}
            >
              <Grid
                container
                spacing={{ xs: 5, md: 6 }}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={7} lg={7}>
                  <MotionStack
                    spacing={3}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                  >
                    <motion.div variants={itemVariants}>
                      <Chip
                        label="● Available for opportunities"
                        size="small"
                        sx={{
                          bgcolor: alpha(theme.palette.primary.main, 0.12),
                          color: "primary.main",
                          fontWeight: 600,
                          border: `1px solid ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                          "& .MuiChip-label": { px: 1.5 },
                        }}
                      />
                    </motion.div>

                    <MotionTypography
                      variants={itemVariants}
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "2.5rem",
                          sm: "3.25rem",
                          md: "4rem",
                          lg: "4.75rem",
                        },
                        fontWeight: 700,
                        lineHeight: 1.05,
                      }}
                    >
                      {HomePageInfo.myTitle}
                      <Box
                        component="span"
                        sx={{
                          display: "block",
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        Mofokeng.
                      </Box>
                    </MotionTypography>

                    <motion.div variants={itemVariants}>
                      <Typography
                        component="div"
                        sx={{
                          fontFamily:
                            "'Space Grotesk', -apple-system, sans-serif",
                          fontSize: {
                            xs: "1.15rem",
                            sm: "1.4rem",
                            md: "1.55rem",
                          },
                          fontWeight: 500,
                          color: "text.primary",
                          minHeight: { xs: "2rem", sm: "2.4rem" },
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {displayText}
                        <Box
                          component="span"
                          sx={{
                            display: "inline-block",
                            ml: 0.25,
                            color: "primary.main",
                            animation: "blink 1s steps(2) infinite",
                            "@keyframes blink": {
                              "0%, 100%": { opacity: 1 },
                              "50%": { opacity: 0 },
                            },
                          }}
                        >
                          |
                        </Box>
                      </Typography>
                    </motion.div>

                    <MotionTypography
                      variants={itemVariants}
                      variant="body1"
                      sx={{
                        maxWidth: 580,
                        mx: { xs: "auto", md: 0 },
                        color: "text.secondary",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.7,
                      }}
                    >
                      {HomePageInfo.myWorkJourney}
                    </MotionTypography>

                    {/* Tech chips */}
                    <motion.div variants={itemVariants}>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{
                          justifyContent: { xs: "center", md: "flex-start" },
                          rowGap: 1,
                        }}
                      >
                        {techStack.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: alpha(
                                theme.palette.text.primary,
                                isDark ? 0.06 : 0.05
                              ),
                              color: "text.secondary",
                              border: `1px solid ${theme.palette.divider}`,
                              fontWeight: 500,
                              transition: "all 200ms ease",
                              "&:hover": {
                                borderColor: alpha(
                                  theme.palette.primary.main,
                                  0.5
                                ),
                                color: "primary.main",
                                bgcolor: alpha(
                                  theme.palette.primary.main,
                                  0.08
                                ),
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        sx={{
                          pt: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                          alignItems: "center",
                        }}
                      >
                        <DialogComponent buttonText="Download CV" />
                        <Button
                          variant="outlined"
                          color="primary"
                          component={Link}
                          to="/contact"
                          endIcon={<ArrowForwardIcon />}
                        >
                          Get in touch
                        </Button>
                      </Stack>
                    </motion.div>
                  </MotionStack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={5}
                  lg={5}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.02 }}
                    sx={{
                      position: "relative",
                      width: { xs: 260, sm: 320, md: 360, lg: 400 },
                      aspectRatio: "1 / 1",
                    }}
                  >
                    {/* Rotating conic gradient ring */}
                    <MotionBox
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: `conic-gradient(from 0deg, ${theme.palette.primary.main}, ${alpha(
                          theme.palette.primary.main,
                          0
                        )}, ${theme.palette.secondary.main}, ${alpha(
                          theme.palette.secondary.main,
                          0
                        )}, ${theme.palette.primary.main})`,
                        filter: "blur(2px)",
                      }}
                    />
                    {/* Pulsing glow */}
                    <MotionBox
                      animate={{
                        boxShadow: [
                          `0 0 40px ${alpha(theme.palette.primary.main, 0.3)}`,
                          `0 0 80px ${alpha(theme.palette.primary.main, 0.5)}`,
                          `0 0 40px ${alpha(theme.palette.primary.main, 0.3)}`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      sx={{
                        position: "absolute",
                        inset: "6px",
                        borderRadius: "50%",
                        backgroundColor: "background.default",
                        padding: "12px",
                      }}
                    >
                      <Box
                        component="img"
                        src={GenAI}
                        alt="Portrait of Sabata Mofokeng, Software Engineer"
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
                    </MotionBox>
                  </MotionBox>
                </Grid>
              </Grid>

              {/* Scroll indicator */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                sx={{
                  position: "absolute",
                  bottom: { xs: 16, md: 24 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: "0.7rem",
                  }}
                >
                  Scroll
                </Typography>
                <MotionBox
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  sx={{ color: "primary.main", display: "flex" }}
                >
                  <KeyboardArrowDownIcon />
                </MotionBox>
              </MotionBox>
            </Box>
          </Box>

          <Box component="section" id="about" sx={{ py: { xs: 4, md: 8 } }}>
            <motion.div
              variants={sectionInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <AboutSection />
            </motion.div>
          </Box>

          <Box component="section" id="resume" sx={{ py: { xs: 4, md: 8 } }}>
            <motion.div
              variants={sectionInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <ResumeSection />
            </motion.div>
          </Box>

          <Box component="section" id="contact" sx={{ py: { xs: 4, md: 8 } }}>
            <motion.div
              variants={sectionInView}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Contact />
            </motion.div>
          </Box>

          {showButton && (
            <MotionBox
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                position: "fixed",
                right: 24,
                bottom: 24,
                zIndex: 1000,
              }}
            >
              <IconButton
                aria-label="Scroll to top"
                onClick={scrollButton}
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: "primary.main",
                  color: isDark ? "#09090C" : "#FFFFFF",
                  boxShadow: `0 10px 30px -10px ${alpha(
                    theme.palette.primary.main,
                    0.7
                  )}`,
                  "&:hover": {
                    backgroundColor: "primary.light",
                    transform: "translateY(-2px)",
                  },
                  transition: "transform 200ms ease, background-color 200ms ease",
                }}
              >
                <ArrowUpwardIcon />
              </IconButton>
            </MotionBox>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;

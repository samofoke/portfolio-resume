import React from "react";
import { Box, Typography, Paper, Grid, Button, Stack } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MotionPaper = motion(Paper);

const cardContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tileStyle = {
    p: { xs: 3, md: 4 },
    height: "100%",
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: "background.paper",
    transition: "border-color 250ms ease, box-shadow 250ms ease",
    willChange: "transform",
    "&:hover": {
      borderColor: alpha(theme.palette.primary.main, 0.5),
      boxShadow: `0 20px 50px -25px ${alpha(theme.palette.primary.main, 0.4)}`,
    },
  };

  const eyebrowStyle = {
    display: "inline-block",
    color: "primary.main",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    mb: 1,
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, maxWidth: 1100, mx: "auto" }}>
      <Stack spacing={1.5} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography variant="overline" sx={eyebrowStyle}>
          About
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
          }}
        >
          A bit about me
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 640, mx: "auto" }}
        >
          Engineer focused on shipping resilient full-stack systems — from UI
          polish to infrastructure.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={isMobile ? 3 : 4}
        component={motion.div}
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Grid item xs={12} sm={6}>
          <MotionPaper
            variants={cardItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            elevation={0}
            sx={tileStyle}
          >
            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
              My Background
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Full-stack engineer with 6+ years building end-to-end web
              solutions. Deeply involved in front-end and back-end development
              across React, Next.js and Angular, paired with Node.js,
              Express.js, Flask and FastAPI on the back end.
            </Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <MotionPaper
            variants={cardItem}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            elevation={0}
            sx={tileStyle}
          >
            <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600 }}>
              My Interest
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              My interest in computations is deeply rooted in the intricate
              world of data structures and algorithms. To me, the elegance and
              complexity of computations lie in how data is structured,
              accessed, and manipulated to solve problems efficiently. My
              fascination extends to exploring various algorithmic designs,
              understanding their nuances, and appreciating their potential to
              transform raw data into meaningful insights.
            </Typography>
          </MotionPaper>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: { xs: 4, md: 5 } }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
          endIcon={<ArrowForwardIcon />}
        >
          More About Me
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;

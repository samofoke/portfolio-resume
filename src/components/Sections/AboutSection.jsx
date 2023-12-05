import React from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tileStyle = {
    padding: theme.spacing(3),
    height: "100%",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: 1,
      boxShadow: theme.shadows[10],
    },
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        About Me
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={tileStyle}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              My Background
            </Typography>
            <Typography variant="body1">
              As a Software Engineer with a rich background in developing robust
              end-to-end web solutions. My technical journey spans over 3 years,
              deeply involved in front-end and back-end development across
              diverse frameworks like React, Angular, and Next.js, coupled with
              Node.js and Express.js expertise.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={tileStyle}>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              My Interest
            </Typography>
            <Typography variant="body1">
              My interest in computations is deeply rooted in the intricate
              world of data structures and algorithms. To me, the elegance and
              complexity of computations lie in how data is structured,
              accessed, and manipulated to solve problems efficiently. My
              fascination extends to exploring various algorithmic designs,
              understanding their nuances, and appreciating their potential to
              transform raw data into meaningful insights.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
        >
          More About Me
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;

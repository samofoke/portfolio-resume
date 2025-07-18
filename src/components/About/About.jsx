import React, { useEffect } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        p: 2,
        maxWidth: "100%",
        mx: "auto",
        my: 2,
        "@media print": {
          boxShadow: "none",
          maxWidth: "100%",
          p: 1,
        },
        "@media (min-width: 600px)": {
          p: 4,
          my: 4,
          maxWidth: 900,
        },
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          textAlign: { xs: "left", md: "left" },
          fontSize: { xs: "0.9rem", sm: "1rem" },
          hyphens: "auto",
          padding: { xs: "0 1rem", md: "0" },
        }}
      >
        As a Software Engineer, I have been responsible for designing and
        implementing end-to-end web solutions, working with both front-end and
        back-end technologies. I have extensive experience with React and
        Angular for the Front-End, Node.js, and Express.js for the Back-End. I
        have also worked with a range of databases, including Oracle database,
        MongoDB, and PostgreSQL, and have experience with cloud platforms such
        as AWS. I am also familiar with DevOps practices, such as continuous
        integration and delivery, and have experience with tools such as Docker
        and Kubernetes.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{
          textAlign: { xs: "left", md: "left" },
          fontSize: { xs: "0.9rem", sm: "1rem" },
          hyphens: "auto",
          padding: { xs: "0 1rem", md: "0" },
        }}
      >
        One of my most significant accomplishments was the Migration of the QA
        platform, which is used by thousands of users. In this project, I worked
        on the entire stack, from the front-end user interface to the back-end
        servers, and database, ensuring that the application was scalable and
        performant. I am passionate about technology and enjoy solving complex
        problems. I am also a strong communicator and team player, always
        looking for ways to improve processes and workflows.
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={3}>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <ComputerIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Front-End Development
            </Typography>
            <Typography>React, Angular</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <StorageIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Back-End Development
            </Typography>
            <Typography>Node.js, Express.js, Flask</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <CloudIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Cloud & Databases
            </Typography>
            <Typography>Oracle, MongoDB, PostgreSQL, AWS</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Paper
            sx={{
              padding: 3,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <BuildIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              DevOps
            </Typography>
            <Typography>Docker, Kubernetes</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;

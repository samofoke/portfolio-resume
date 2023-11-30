import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import GenAI from "../../images/genAI.svg";

const HomePage = () => {
  return (
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
          <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "justify", mt: 2 }}>
            <Typography variant="body1">
              I am a Software Engineer with 4 years of coding experience,
              including 3 years of professional experience in Full Stack
              development, supplemented by exposure to AWS DevOps tools.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Button variant="contained" color="primary">
              Download CV
            </Button>
            <Button variant="contained" color="primary">
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
  );
};

export default HomePage;

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const FooterComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Sabata Mofokeng
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterComponent;

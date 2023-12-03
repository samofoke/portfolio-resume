import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Link } from "@mui/material";
import { lightTheme } from "../Themes/MainThemes";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailto = `mailto:sabataernestmofokeng@gmail.com?subject=Contact from ${name}&body=${message}\n\nFrom: ${name}, Email: ${email}`;
    window.location.href = mailto;
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 3, justifyContent: "center" }}>
            Reach Out
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email:{" "}
            <Link
              href="mailto:sabataernestmofokeng@gmail.com"
              style={{ color: lightTheme.palette.link.main }}
            >
              sabataernestmofokeng@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: +27764084540
          </Typography>
          <Typography variant="body1" gutterBottom>
            GitHub:{" "}
            <Link
              href="https://github.com/samofoke"
              target="_blank"
              style={{ color: lightTheme.palette.link.main }}
            >
              samofoke
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/sabata-mofokeng-b6a267193/"
              target="_blank"
              style={{ color: lightTheme.palette.link.main }}
            >
              sabata-mofokeng
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

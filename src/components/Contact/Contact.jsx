import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Contact = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailto = `mailto:sabataernestmofokeng@gmail.com?subject=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(
      name
    )}, Email: ${encodeURIComponent(email)}`;
    window.location.href = mailto;
  };

  const infoCards = [
    {
      icon: EmailIcon,
      label: "Email",
      value: "sabataernestmofokeng@gmail.com",
      href: "mailto:sabataernestmofokeng@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+27 76 408 4540",
      href: "tel:+27764084540",
    },
  ];

  const socials = [
    {
      icon: GitHubIcon,
      label: "GitHub",
      href: "https://github.com/samofoke",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sabata-mofokeng-b6a267193/",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
      }}
    >
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            Contact
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              mt: 1,
              mb: 2,
            }}
          >
            Let's build something.
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Have a project in mind, a role you'd like to discuss, or just want
            to say hello? Drop a message — I reply to every one.
          </Typography>
        </motion.div>
      </MotionBox>

      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        component={motion.div}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Form */}
        <Grid item xs={12} md={7}>
          <MotionPaper
            elevation={0}
            variants={fadeUp}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: "background.paper",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Send a message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  multiline
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ px: 4 }}
                  >
                    Send message
                  </Button>
                </Box>
              </Stack>
            </Box>
          </MotionPaper>
        </Grid>

        {/* Info sidebar */}
        <Grid item xs={12} md={5}>
          <Stack spacing={2.5}>
            {infoCards.map((info) => {
              const Icon = info.icon;
              return (
                <MotionPaper
                  key={info.label}
                  elevation={0}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  component="a"
                  href={info.href}
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    p: 2.5,
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: "background.paper",
                    transition: "border-color 250ms ease",
                    "&:hover": {
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: "primary.main",
                        flexShrink: 0,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box sx={{ minWidth: 0, flex: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.secondary",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontSize: "0.7rem",
                        }}
                      >
                        {info.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontWeight: 500,
                          wordBreak: "break-word",
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Stack>
                </MotionPaper>
              );
            })}

            {/* Socials */}
            <MotionPaper
              elevation={0}
              variants={fadeUp}
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: "background.paper",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "0.7rem",
                  display: "block",
                  mb: 1.5,
                }}
              >
                Find me on
              </Typography>
              <Stack direction="row" spacing={1}>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.label}
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      sx={{
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 2,
                        color: "text.primary",
                        "&:hover": {
                          borderColor: "primary.main",
                          color: "primary.main",
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.08
                          ),
                        },
                      }}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  );
                })}
              </Stack>
            </MotionPaper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Chip,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const timelineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const timelineItemVariant = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const workHistory = [
  {
    role: "Software Engineer (Full-Stack)",
    company: "Servisor — South Africa",
    period: "May 2024 – Present",
    points: [
      "Delivery across the Servisor platform: React/TypeScript front-ends and Python/TypeScript microservices, with CI/CD GitHub Actions pipelines connecting to ECR.",
      "API development with RESTful and GraphQL endpoints for VIN decoding and EMS integration.",
      "Collaborate with QA on test cases and defects; track and evaluate technical debt alongside feature work.",
    ],
  },
  {
    role: "Software Engineer (Full-Stack)",
    company: "CDA Solutions SA — South Africa",
    period: "May 2023 – Dec 2023",
    points: [
      "Led on-boarding-broker functionality for a Next.js platform, integrating Node.js APIs with PostgreSQL and external services.",
      "Authored ERDs, documented build/release flows, and tracked scope and risks in Jira.",
      "Automated internal operations using Python scripts with SMTP to eliminate manual email workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Vodacom — South Africa",
    period: "Mar 2021 – Feb 2023",
    points: [
      "Migrated a QA platform from Angular to React while preserving business logic and tests.",
      "Contributed to back-end services (Node.js/Express) and containerized workloads with Docker/Kubernetes.",
    ],
  },
];

const education = [
  {
    school: "University of South Africa (UNISA)",
    detail: "BSc Computing (in progress)",
    period: "2019 – 2025",
  },
  {
    school: "WeThinkCode_",
    detail: "Computer Software Engineering — National Certificate",
    period: "2019 – 2021",
  },
];

const ResumeSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const eyebrowStyle = {
    display: "inline-block",
    color: "primary.main",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "0.8rem",
    mb: 1,
  };

  const timelineItem = {
    position: "relative",
    pl: { xs: 3, sm: 4 },
    pb: 3,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 7,
      top: 10,
      bottom: -4,
      width: "2px",
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    "&:last-of-type::before": { display: "none" },
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 6,
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: `3px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.background.default,
    },
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, maxWidth: 900, mx: "auto" }}>
      <Stack spacing={1.5} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography variant="overline" sx={eyebrowStyle}>
          Resume
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
          }}
        >
          Experience & Education
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 620, mx: "auto" }}
        >
          Full-stack engineer with 6+ years building end-to-end web solutions
          across React/Next.js and Node.js/Python back ends.
        </Typography>
      </Stack>

      {/* Work Experience */}
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
          <WorkOutlineIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Work Experience
          </Typography>
        </Stack>

        <Box
          component={motion.div}
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {workHistory.map((job) => (
            <Box
              component={motion.div}
              variants={timelineItemVariant}
              key={job.company + job.period}
              sx={timelineItem}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={1}
                sx={{ mb: 1 }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {job.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    {job.company}
                  </Typography>
                </Box>
                <Chip
                  label={job.period}
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    fontWeight: 500,
                    height: 24,
                  }}
                />
              </Stack>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
                {job.points.map((point, idx) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={idx}
                    sx={{ mb: 0.5 }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
          <SchoolIcon sx={{ color: "primary.main" }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Education
          </Typography>
        </Stack>

        <Stack
          spacing={2}
          component={motion.div}
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((ed) => (
            <Paper
              component={motion.div}
              variants={timelineItemVariant}
              whileHover={{ x: 4 }}
              key={ed.school}
              elevation={0}
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                transition: "border-color 200ms ease",
                "&:hover": {
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                },
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={1}
              >
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {ed.school}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {ed.detail}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {ed.period}
                </Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/resume")}
          endIcon={<ArrowForwardIcon />}
        >
          Full Resume
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeSection;

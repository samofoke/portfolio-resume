import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  Stack,
  Chip,
  Paper,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Go", "Rust", "C/C++"],
  },
  {
    label: "Front-End",
    items: ["React", "Next.js", "Angular", "MUI", "Tailwind CSS", "CSS3", "HTML5"],
  },
  {
    label: "Back-End",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "GitHub Actions",
      "ECR",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "ClickHouse",
      "Oracle",
      "Firebase",
    ],
  },
  {
    label: "Tools",
    items: [
      "Jira",
      "ERD Modeling",
      "Payment Integrations",
      "SMTP Integrations",
      "Linux",
      "VPS / VMs",
    ],
  },
];

const workHistory = [
  {
    role: "Software Engineer (Full-Stack)",
    company: "Servisor — South Africa",
    period: "May 2024 – Present",
    points: [
      "Delivery across the Servisor platform: React/TypeScript front-ends and Python/TypeScript microservices, with CI/CD GitHub Actions pipelines connecting to ECR.",
      "API development with RESTful and GraphQL endpoints for VIN decoding and EMS integration.",
      "Create and track branches named after Jira tickets, commit and open PRs into the development branch for review, following the SDLC cycle.",
      "Collaborate with QA on test cases and defects; track and evaluate technical debt alongside feature work.",
      "Tooling: GitHub, Postman, Docker, VS Code, MongoDB, PostgreSQL, K9s/Lens, Confluence, Loom, Toggl for time tracking.",
    ],
  },
  {
    role: "Software Engineer (Full-Stack)",
    company: "CDA Solutions SA — South Africa",
    period: "May 2023 – Dec 2023",
    points: [
      "Responsible for on-boarding-broker functionality for a Next.js platform, integrating Node.js APIs with PostgreSQL and external services.",
      "API development with RESTful APIs and a client build using GraphQL.",
      "Authored ERDs and documented build/release flows; tracked scope and risks in Jira.",
      "Automated internal operations using Python scripts with SMTP to eliminate manual email workflows.",
      "Built reusable React + Material UI components to streamline new features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Vodacom — South Africa",
    period: "Mar 2021 – Feb 2023",
    points: [
      "Migrated a QA platform from Angular to React, reducing maintenance overhead while preserving business logic and tests.",
      "Maintained production Angular code and resolved high-priority defects within a microservices environment.",
      "Contributed to back-end services (Node.js/Express) and containerized workloads with Docker/Kubernetes.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Vodacom — South Africa",
    period: "Feb 2020 – Jun 2020",
    points: [
      "Built a full-stack internal tool: React.js UI with a Node.js/Express.js/MongoDB service, integrated alongside existing Angular components.",
    ],
  },
];

const leadership = [
  {
    role: "Technical Mentor",
    org: "WeThinkCode_",
    period: "Aug 2020 – Feb 2021",
    desc: "Guided students via HackerRank practice, code reviews, and study strategies.",
  },
  {
    role: "Sourcing Strategy & Operations",
    org: "WeThinkCode_",
    period: "Dec 2019 – Feb 2020",
    desc: "Helped design and implement candidate-sourcing strategy.",
  },
  {
    role: "Volunteer",
    org: "WeThinkCode_",
    period: "Oct 2019 – Feb 2020",
    desc: "Test setup and technical invigilation during selection bootcamps.",
  },
  {
    role: "Economics/Accounting Tutor & Co-founder",
    org: "Helping Hands Venture (NPO)",
    period: "Mar 2013 – Mar 2017",
    desc: "Co-founded a non-profit offering tutoring in economics and accounting.",
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
    detail:
      "Computer Software Engineering — National Certificate: Systems Development",
    period: "2019 – 2021",
  },
  {
    school: "ATTI Advanced Technology Training Institute",
    detail:
      "Systems Administrator Certificate (PC Technician, Network Technician, Windows Server 2016)",
    period: "2017 – 2018",
  },
  {
    school: "Lenyora La Thuto Secondary",
    detail: "Matric",
    period: "2007 – 2010",
  },
];

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

const ResumePage = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    p: { xs: 2.5, md: 3 },
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: "background.paper",
    transition: "border-color 250ms ease, box-shadow 250ms ease",
    "&:hover": {
      borderColor: alpha(theme.palette.primary.main, 0.4),
    },
  };

  const timelineItem = {
    position: "relative",
    pl: { xs: 3, sm: 4 },
    pb: 4,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 7,
      top: 12,
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
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Hero */}
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={stagger}
        sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}
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
            Resume
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              fontWeight: 700,
              mt: 1,
              mb: 1.5,
            }}
          >
            Sabata Mofokeng
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h5"
            sx={{
              color: "primary.main",
              fontWeight: 500,
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              mb: 1,
            }}
          >
            Software Engineer · Full-Stack &amp; DevOps
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Stack
            direction="row"
            spacing={0.75}
            alignItems="center"
            justifyContent="center"
            sx={{ mb: 2.5, color: "text.secondary" }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography variant="body2">
              Johannesburg, South Africa
            </Typography>
          </Stack>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 720,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.75,
            }}
          >
            Full-stack engineer with 6+ years building end-to-end web solutions
            across React/Next.js and Node.js/Python back ends. Comfortable
            owning microservices, REST APIs, and CI/CD on AWS with
            Docker/Kubernetes. A blend of front-end product delivery and
            back-end architecture (ERDs, build flows), with hands-on mentorship
            and volunteer experience.
          </Typography>
        </motion.div>
      </MotionBox>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Stack
            spacing={3}
            component={motion.div}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Contact card */}
            <MotionPaper elevation={0} variants={fadeUp} sx={cardStyle}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Contact
              </Typography>
              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon fontSize="small" sx={{ color: "primary.main" }} />
                  <Typography variant="body2">+27 76 408 4540</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon fontSize="small" sx={{ color: "primary.main" }} />
                  <Link
                    href="mailto:sabataernestmofokeng@gmail.com"
                    underline="hover"
                    sx={{
                      color: "text.primary",
                      fontSize: "0.875rem",
                      wordBreak: "break-word",
                    }}
                  >
                    sabataernestmofokeng@gmail.com
                  </Link>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LinkedInIcon
                    fontSize="small"
                    sx={{ color: "primary.main" }}
                  />
                  <Link
                    href="https://www.linkedin.com/in/sabata-mofokeng-b6a267193/"
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={{ color: "text.primary", fontSize: "0.875rem" }}
                  >
                    LinkedIn
                  </Link>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <GitHubIcon fontSize="small" sx={{ color: "primary.main" }} />
                  <Link
                    href="https://github.com/samofoke"
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    sx={{ color: "text.primary", fontSize: "0.875rem" }}
                  >
                    github.com/samofoke
                  </Link>
                </Stack>
              </Stack>
            </MotionPaper>

            {/* Core skills — grouped */}
            <MotionPaper elevation={0} variants={fadeUp} sx={cardStyle}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Core Skills
              </Typography>
              <Stack spacing={2.5}>
                {skillGroups.map((group) => (
                  <Box key={group.label}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontSize: "0.7rem",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      {group.label}
                    </Typography>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      useFlexGap
                      spacing={0.75}
                    >
                      {group.items.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          sx={{
                            height: 24,
                            fontSize: "0.72rem",
                            bgcolor: alpha(theme.palette.primary.main, 0.08),
                            color: "text.primary",
                            border: `1px solid ${alpha(
                              theme.palette.primary.main,
                              0.2
                            )}`,
                            fontWeight: 500,
                            transition: "all 200ms ease",
                            "&:hover": {
                              bgcolor: alpha(
                                theme.palette.primary.main,
                                0.15
                              ),
                              borderColor: theme.palette.primary.main,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </MotionPaper>
          </Stack>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={8}>
          <Stack
            spacing={5}
            component={motion.div}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* Professional summary */}
            <MotionBox variants={fadeUp}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                Professional Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.75 }}
              >
                Full-stack engineer with 6+ years building end-to-end web
                solutions across React/Next.js and Node.js/Python back ends.
                Comfortable owning microservices, REST APIs, and CI/CD on AWS
                with Docker and Kubernetes. I bring a blend of front-end
                product delivery and back-end architecture (ERDs, build flows),
                alongside hands-on mentorship and volunteer experience.
              </Typography>
            </MotionBox>

            {/* Work experience timeline */}
            <MotionBox variants={fadeUp}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 3 }}
              >
                <WorkOutlineIcon sx={{ color: "primary.main" }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Experience
                </Typography>
              </Stack>
              <Box>
                {workHistory.map((job) => (
                  <Box
                    key={job.company + job.period}
                    component={motion.div}
                    variants={fadeUp}
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
                    <Box
                      component="ul"
                      sx={{ m: 0, pl: 2.5, color: "text.secondary" }}
                    >
                      {job.points.map((point, idx) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={idx}
                          sx={{ mb: 0.5, lineHeight: 1.6 }}
                        >
                          {point}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </MotionBox>

            {/* Leadership & Volunteer */}
            <MotionBox variants={fadeUp}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 3 }}
              >
                <VolunteerActivismIcon sx={{ color: "primary.main" }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Leadership &amp; Volunteer
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {leadership.map((item) => (
                  <MotionPaper
                    key={item.role + item.period}
                    elevation={0}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    sx={{ ...cardStyle, p: 2.5 }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      spacing={1}
                      sx={{ mb: 0.75 }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600, lineHeight: 1.3 }}
                        >
                          {item.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {item.org}
                        </Typography>
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
                      >
                        {item.period}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </Typography>
                  </MotionPaper>
                ))}
              </Stack>
            </MotionBox>

            {/* Education */}
            <MotionBox variants={fadeUp}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1.5}
                sx={{ mb: 3 }}
              >
                <SchoolIcon sx={{ color: "primary.main" }} />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Education
                </Typography>
              </Stack>
              <Stack spacing={2}>
                {education.map((ed) => (
                  <MotionPaper
                    key={ed.school}
                    elevation={0}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    sx={{ ...cardStyle, p: 2.5 }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      spacing={1}
                    >
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 600 }}
                        >
                          {ed.school}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {ed.detail}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", whiteSpace: "nowrap" }}
                      >
                        {ed.period}
                      </Typography>
                    </Stack>
                  </MotionPaper>
                ))}
              </Stack>
            </MotionBox>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumePage;

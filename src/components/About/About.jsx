import React, { useEffect } from "react";
import { Box, Typography, Grid, Paper, Stack, Chip } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import BuildIcon from "@mui/icons-material/Build";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LockIcon from "@mui/icons-material/Lock";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import InsightsIcon from "@mui/icons-material/Insights";

const skillAreas = [
  {
    icon: ComputerIcon,
    title: "Front-End Development",
    desc: "Building accessible, performant interfaces.",
    stack: ["React", "Next.js", "Angular", "TypeScript", "Material UI", "Tailwind CSS"],
  },
  {
    icon: StorageIcon,
    title: "Back-End Development",
    desc: "Designing resilient APIs and microservices.",
    stack: ["Node.js", "Express.js", "Flask", "FastAPI", "Python", "REST"],
  },
  {
    icon: CloudIcon,
    title: "Databases",
    desc: "Data modeling across relational, document & graph.",
    stack: ["PostgreSQL", "MongoDB", "Neo4j", "ClickHouse", "Oracle", "Firebase"],
  },
  {
    icon: BuildIcon,
    title: "Cloud & DevOps",
    desc: "Containerized workloads and CI/CD on AWS.",
    stack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "ECR", "Git"],
  },
];

const values = [
  {
    icon: RocketLaunchIcon,
    title: "Ship with intent",
    desc: "Every line of code should move the product forward. I favor shipping small, reversible changes over grand rewrites.",
  },
  {
    icon: LockIcon,
    title: "Security-first",
    desc: "Threat model early. OWASP Top 10, STRIDE, policy-as-code and secrets management baked into the workflow.",
  },
  {
    icon: AccessibilityNewIcon,
    title: "Accessibility matters",
    desc: "WCAG compliance isn't a bolt-on. Keyboard, contrast, and semantics are table stakes, not wishlist items.",
  },
  {
    icon: InsightsIcon,
    title: "Measure, then optimize",
    desc: "Data structures and algorithms meet production metrics. Profile before you refactor, observe after you ship.",
  },
];

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
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

const AboutPage = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = {
    p: { xs: 3, md: 4 },
    height: "100%",
    borderRadius: 3,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: "background.paper",
    transition: "border-color 250ms ease, box-shadow 250ms ease",
    "&:hover": {
      borderColor: alpha(theme.palette.primary.main, 0.5),
      boxShadow: `0 20px 50px -25px ${alpha(theme.palette.primary.main, 0.4)}`,
    },
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
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
        sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}
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
            About
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              fontWeight: 700,
              mt: 1,
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Engineering{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              end-to-end
            </Box>{" "}
            web solutions.
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 720,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.75,
            }}
          >
            Full-stack engineer with 6+ years building resilient end-to-end
            systems — from React/Next.js front-ends to Python &amp; Node.js
            microservices running on AWS with Docker and Kubernetes. I enjoy
            the parts of the craft other people avoid: API design, ERD
            modeling, CI/CD pipelines, and the occasional 3am production
            migration.
          </Typography>
        </motion.div>
      </MotionBox>

      {/* Story section */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        sx={{ mb: { xs: 6, md: 10 } }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            A bit of story.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                I design and implement end-to-end web solutions across the
                stack. Deep experience with React, Next.js and Angular on the
                front-end, and Node.js, Express.js, Flask and FastAPI on the
                back end. Day-to-day I work across PostgreSQL, MongoDB, Neo4j
                and ClickHouse, and I'm comfortable in AWS environments with
                Docker, Kubernetes and GitHub Actions shipping to ECR.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div variants={fadeUp}>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                One of my proudest accomplishments was migrating a QA platform
                from Angular to React while preserving business logic and
                tests — reducing maintenance overhead without disrupting the
                thousands of users depending on it. Alongside production work
                I've mentored students at WeThinkCode_ and co-founded a
                non-profit offering tutoring in economics and accounting.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </MotionBox>

      {/* Skills grid */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        sx={{ mb: { xs: 6, md: 10 } }}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            What I do
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              mt: 1,
              mb: 4,
            }}
          >
            Areas of expertise.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {skillAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Grid item xs={12} sm={6} key={area.title}>
                <MotionPaper
                  elevation={0}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  sx={cardStyle}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      color: "primary.main",
                      mb: 2,
                    }}
                  >
                    <Icon fontSize="medium" />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    {area.desc}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={0.75}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {area.stack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: "0.72rem",
                          bgcolor: alpha(
                            theme.palette.text.primary,
                            0.06
                          ),
                          color: "text.secondary",
                          border: `1px solid ${theme.palette.divider}`,
                        }}
                      />
                    ))}
                  </Stack>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </MotionBox>

      {/* Values */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            How I work
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              mt: 1,
              mb: 4,
            }}
          >
            Principles I hold.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Grid item xs={12} sm={6} key={value.title}>
                <MotionPaper
                  elevation={0}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  sx={cardStyle}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        color: "primary.main",
                        mt: 0.5,
                        flexShrink: 0,
                      }}
                    >
                      <Icon fontSize="medium" />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 0.5 }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", lineHeight: 1.65 }}
                      >
                        {value.desc}
                      </Typography>
                    </Box>
                  </Stack>
                </MotionPaper>
              </Grid>
            );
          })}
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default AboutPage;

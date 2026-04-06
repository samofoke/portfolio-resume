import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from "@mui/icons-material/Construction";

// Placeholder project scaffolding — swap in real project data when ready.
const projects = [
  {
    title: "Portfolio Resume",
    description:
      "This very site — a React + Material UI portfolio with framer-motion animations, dark-first theming, and an SVG neural-network background.",
    stack: ["React", "Material UI", "framer-motion"],
    link: "https://github.com/samofoke",
    status: "Live",
  },
  {
    title: "More projects coming soon",
    description:
      "I'm curating a set of case studies from recent full-stack, DevOps and platform work. Check back — or reach out if you'd like to see something in particular.",
    stack: ["Next.js", "Node.js", "Kubernetes"],
    link: null,
    status: "In progress",
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
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const PortfolioPage = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Portfolio
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              fontWeight: 700,
              mt: 1,
              mb: 2,
              lineHeight: 1.1,
            }}
          >
            Things I've{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built.
            </Box>
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 640,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            A growing collection of projects spanning full-stack web apps,
            microservices, and developer tooling. Most production work lives
            behind NDAs — what's below is what I can share.
          </Typography>
        </motion.div>
      </MotionBox>

      {/* Projects grid */}
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        component={motion.div}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <MotionPaper
              elevation={0}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              sx={{
                p: { xs: 3, md: 4 },
                height: "100%",
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 250ms ease, box-shadow 250ms ease",
                "&:hover": {
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                  boxShadow: `0 20px 50px -25px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ mb: 2 }}
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
                  }}
                >
                  <CodeIcon />
                </Box>
                <Chip
                  label={project.status}
                  size="small"
                  sx={{
                    bgcolor:
                      project.status === "Live"
                        ? alpha(theme.palette.secondary.main, 0.15)
                        : alpha(theme.palette.primary.main, 0.12),
                    color:
                      project.status === "Live"
                        ? "secondary.main"
                        : "primary.main",
                    border: `1px solid ${
                      project.status === "Live"
                        ? alpha(theme.palette.secondary.main, 0.3)
                        : alpha(theme.palette.primary.main, 0.3)
                    }`,
                    fontWeight: 600,
                    height: 24,
                  }}
                />
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  mb: 3,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </Typography>

              <Stack
                direction="row"
                spacing={0.75}
                flexWrap="wrap"
                useFlexGap
                sx={{ mb: 2 }}
              >
                {project.stack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      height: 22,
                      fontSize: "0.72rem",
                      bgcolor: alpha(theme.palette.text.primary, 0.06),
                      color: "text.secondary",
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  />
                ))}
              </Stack>

              {project.link && (
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon />}
                  >
                    View on GitHub
                  </Button>
                </Box>
              )}
            </MotionPaper>
          </Grid>
        ))}
      </Grid>

      {/* Coming soon banner */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        sx={{
          mt: { xs: 6, md: 8 },
          textAlign: "center",
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          border: `1px dashed ${alpha(theme.palette.primary.main, 0.4)}`,
          background: `radial-gradient(circle at 50% 0%, ${alpha(
            theme.palette.primary.main,
            0.08
          )} 0%, transparent 70%)`,
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "50%",
            bgcolor: alpha(theme.palette.primary.main, 0.12),
            color: "primary.main",
            mb: 2,
          }}
        >
          <ConstructionIcon />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          More case studies in progress
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", maxWidth: 520, mx: "auto" }}
        >
          I'm documenting recent work with write-ups, architecture diagrams
          and metrics. Follow along on GitHub or get in touch to request
          specifics.
        </Typography>
      </MotionBox>
    </Box>
  );
};

export default PortfolioPage;

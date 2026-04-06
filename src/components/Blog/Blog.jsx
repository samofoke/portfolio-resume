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
import { Link as RouterLink } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Planned topics — swap with real posts when published.
const plannedTopics = [
  {
    category: "DevOps",
    title: "Blue/green rollouts on Kubernetes without the pain",
    excerpt:
      "A practical walkthrough of canary and blue/green deployments with Helm, rollback strategies, and the metrics that actually matter.",
    readTime: "8 min read",
  },
  {
    category: "Security",
    title: "Threat modeling with STRIDE for small teams",
    excerpt:
      "How to run a lightweight STRIDE session that ships security improvements instead of filling a wiki page no one reads.",
    readTime: "6 min read",
  },
  {
    category: "Frontend",
    title: "Accessibility is not a checklist",
    excerpt:
      "Why WCAG-compliant doesn't mean accessible, and how to build an empathy-first review process for your UI changes.",
    readTime: "5 min read",
  },
  {
    category: "Architecture",
    title: "Microservices regret and how to avoid it",
    excerpt:
      "Lessons from migrating monoliths and the uncomfortable question: do you actually need this service boundary?",
    readTime: "10 min read",
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

const BlogPage = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            Blog
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
            Notes from the{" "}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              terminal.
            </Box>
          </Typography>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 620,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            Short-form writing on the engineering work I do day-to-day —
            DevOps, security, frontend craft, and the messy bits nobody
            tweets about. Posts are on the way.
          </Typography>
        </motion.div>
      </MotionBox>

      {/* Planned topics grid */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        sx={{ mb: { xs: 6, md: 8 } }}
      >
        <motion.div variants={fadeUp}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ mb: 3 }}
          >
            <ScheduleIcon sx={{ color: "primary.main" }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Coming soon
            </Typography>
          </Stack>
        </motion.div>

        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {plannedTopics.map((topic) => (
            <Grid item xs={12} sm={6} key={topic.title}>
              <MotionPaper
                elevation={0}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: "100%",
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  backgroundColor: "background.paper",
                  opacity: 0.92,
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
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Chip
                    label={topic.category}
                    size="small"
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: "primary.main",
                      fontWeight: 600,
                      height: 22,
                      fontSize: "0.7rem",
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {topic.readTime}
                  </Typography>
                </Stack>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1.5, lineHeight: 1.3 }}
                >
                  {topic.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", lineHeight: 1.7 }}
                >
                  {topic.excerpt}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </MotionBox>

      {/* CTA banner */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        sx={{
          textAlign: "center",
          p: { xs: 4, md: 6 },
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          background: `radial-gradient(circle at 50% 0%, ${alpha(
            theme.palette.primary.main,
            0.1
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
          <ArticleIcon />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          Want a heads-up when the first post ships?
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            maxWidth: 520,
            mx: "auto",
            mb: 3,
          }}
        >
          Drop me a line and I'll ping you directly — no list, no newsletter
          platform, just a short email from me.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/contact"
          endIcon={<ArrowForwardIcon />}
        >
          Get in touch
        </Button>
      </MotionBox>
    </Box>
  );
};

export default BlogPage;

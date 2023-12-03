import React from "react";
import {
  Box,
  Typography,
  List,
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";

const ResumeSection = () => {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        Resume
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Professional Summary
        </Typography>
        <Typography variant="body1">
          A Software Engineer with a proven track record in developing scalable
          web applications and working with cross-functional teams to deliver
          projects on time. Skilled in various programming languages and
          frameworks, adept at modern DevOps practices, and committed to
          crafting efficient and maintainable code.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Work Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Full Stack Developer, CDA Solutions SA"
              secondary="May 2023 - Present: Leading development of onboarding broker functionality for a Next.js project, creating automation scripts with Python, and streamlining tasks with SMTP servers."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Software Engineer, Vodacom"
              secondary="March 2021 - Feb 2023: Migrated Angular application to React, maintained production code, worked on backend microservices, and used Docker and Kubernetes for deployment."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Technical Mentor, WeThinkCode_"
              secondary="August 2020 - February 2021: Assisted students with understanding material through practical exercises and shared development experience."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Software Engineer Intern, Vodacom"
              secondary="February 2020 - June 2020: Worked on a team building a tool from UI frontend in React.js to microservice backend integrated with Angular.js."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary="WeThinkCode_"
              secondary="Computer Software Engineering · (2019 - 2021)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary="University of South Africa"
              secondary="Bachelor's degree, Computing · (2019 - 2025, in progress)"
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/resume"
        >
          More Info
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeSection;

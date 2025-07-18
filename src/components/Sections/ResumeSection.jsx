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
import { useNavigate } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";

const ResumeSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/resume");
  };

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
              primary="Software Engineer (Full Stack), Servisor – South Africa"
              secondary={
                <>
                  May 2024 – Present
                  <br />
                  • Collaborate with Product and UX to refine project briefs in
                  JIRA—capturing objectives, scope current & future, user
                  stories, wireframes, release plans and analytics.
                  <br />
                  • Define clear acceptance criteria and test cases; lead
                  three-week sprint planning, backlog grooming, stand-ups,
                  reviews and retrospectives.
                  <br />
                  • Architect and implement Python & Node.js microservices REST
                  & GraphQL, React frontends with WCAG-compliant accessibility
                  and SSR/ISR.
                  <br />
                  • Establish CI/CD pipelines GitHub Actions, Jenkins, Docker
                  BuildKit, Kubernetes Helm, Operators, blue/green & canary
                  rollouts with rollback strategies.
                  <br />• Lead threat modeling (STRIDE), secure code reviews
                  (OWASP Top 10), policy-as-code maintenance, scans, Vault
                  secrets management.
                </>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <WorkOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Software Engineer (Full Stack), CDA Solutions - South Africa"
              secondary="May 2023 - Dec 2023: I have experience using Python to create automation scripts that interface with SMTP servers to streamline tasks that once required manual attention. Additionally, I have contributed to two distinct projects, utilizing the strengths of Node.js, React, Material UI, and PostgreSQL. I have played a key role in architecting build process flows and constructing ERDs while meticulously tracking progress through Jira. Currently, I am leading the development of an onboarding broker functionality for a Next.js project."
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
        <Button variant="contained" color="primary" onClick={handleNavigate}>
          More Info
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeSection;

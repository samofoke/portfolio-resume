import React, { useEffect } from "react";
import {
  Box,
  Typography,
  List,
  Link,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from "@mui/material";
import { lightTheme } from "../Themes/MainThemes";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: "100%",
        mx: "auto",
        my: 2,
        "@media print": {
          boxShadow: "none",
          maxWidth: "100%",
          p: 1,
        },
        "@media (min-width: 600px)": {
          p: 4,
          my: 4,
          maxWidth: 900,
        },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          "@media (min-width: 600px)": {
            spacing: 4,
          },
        }}
      >
        <Grid item xs={12}>
          <Box sx={{ mb: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Typography variant="h6">Professional Summary</Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "left", md: "left" },
                fontSize: { xs: "0.9rem", sm: "1rem" },
                hyphens: "auto",
                padding: { xs: "0 1rem", md: "0" },
              }}
            >
              I am a Software Engineer with 3 years of experience in designing
              and implementing end-to-end web solutions. I have worked with a
              variety of front-end and back-end technologies, including React,
              Angular, Next.js, Node.js, and Express.js. Additionally, I have
              experience with several databases, such as Oracle, MongoDB, and
              PostgreSQL. I have hands-on experience with DevOps practices such
              as continuous integration and delivery and have worked with tools
              like Docker and Kubernetes to streamline deployment processes.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Contact Me At</Typography>
            <Typography variant="body1">+27764084540</Typography>
            <Typography variant="body1">
              sabataernestmofokeng@gmail.com
            </Typography>
            <Typography variant="body1">
              <Link
                href="https://www.linkedin.com/in/sabata-mofokeng-b6a267193/"
                underline="hover"
                target="_blank"
                rel="noopener"
                style={{ color: lightTheme.palette.link.main }}
              >
                LinkedIn
              </Link>{" "}
              |{" "}
              <Link
                href="https://github.com/samofoke"
                underline="hover"
                target="_blank"
                rel="noopener"
                style={{ color: lightTheme.palette.link.main }}
              >
                GitHub
              </Link>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Skills Summary</Typography>
            <List>
              <ListItem>
                <ListItemText secondary="C/C++" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="JavaScript" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Typescript" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Node.js" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="PostgreSQL/MongoDB/FireBase" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Docker" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="Kubernetes" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="SourceTree/Git" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="AWS" />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">References</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Pontsho Mogwere"
                  secondary="Software Engineer | Vodacom | pontshomogwere@gmail.com"
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Zandile Langa"
                  secondary="Software Architecture DGT | Vodacom | zandile.langa@vodacom.co.za"
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Given Makhobela"
                  secondary="Quality Assurance Engineer | Vodacom | givenm@bbd.co.za"
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Morapedi Obakeng Masima"
                  secondary="Junior Mobile App Dev | Momentum | morapedimasima@gmail.com"
                />
              </ListItem>
            </List>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Work Experience</Typography>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Full Stack Developer, CDA Solutions SA"
                  secondary="May 2023 - Present: I have experience using Python to create automation scripts that interface with SMTP servers to streamline tasks that once required manual attention. Additionally, I have contributed to two distinct projects, utilizing the strengths of Node.js, React, Material UI, and PostgreSQL. I have played a key role in architecting build process flows and constructing ERDs while meticulously tracking progress through Jira. Currently, I am leading the development of an onboarding broker functionality for a Next.js project."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Software Engineer, Vodacom"
                  secondary="March 2021 - Feb 2023: I contributed to migrating the Angular application source code to React in JavaScript. This involved leveraging my skills to ensure a smooth transition between the two frameworks. I also maintained the production code for the Angular front-end application, utilizing material UI/styled-components to create user-friendly interfaces. Additionally, I worked on the Back-end in a microservice architecture, where I resolved bugs, updated outdated business logic, and versioned Node. I took ownership of updating DockerFiles and managing the Kubernetes cluster on AWS, including restarting and starting pods. I collaborated closely with my team members to deliver high-quality work."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Technical Mentor, WeThinkCode_"
                  secondary="August 2020 - February 2021: I was assisting the students in understanding the material by going through hackerrank questions, doing some sample code concepts, and also sharing my experience of my Dev journey and how I survived the program."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Software Engineer Intern, Vodacom"
                  secondary="February 2020 - June 2020: I worked in an amazing team, building a tool using React.js, Express.js, MongoDB, and Node.js from the UI frontend to the microservice backend integrated alongside Angular.js."
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Volunteer, WeThinkCode_"
                  secondary="October 2019 - February 2020: Assisted with setting up computers for candidates, invigilating, and helping with technical issues."
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Education</Typography>
            <List>
              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary="WeThinkCode_"
                  secondary="Computer Software Engineering · (2019 - 2021)"
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary="University of South Africa/Universiteit van Suid-Afrika"
                  secondary="Bachelor's degree, Computing · (2019 - 2025, in progress)"
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary="ATTI Advanced Technology Training Institute"
                  secondary="Certificate, System Administrator · (2017 - 2018)"
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemIcon sx={{ marginTop: "8px" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Lenyora La Thuto Secondary High School"
                  secondary="Matric · (2007 - 2010)"
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumePage;

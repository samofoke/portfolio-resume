import React from "react";
import { Stack, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Socials = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        position: "fixed",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <Tooltip title="LinkedIn" arrow>
        <IconButton
          color="secondary"
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/in/sabata-mofokeng-b6a267193/"
          target="_blank"
          sx={{ "&:hover": { transform: "scale(1.2)" } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub" arrow>
        <IconButton
          color="secondary"
          aria-label="GitHub"
          component="a"
          href="https://github.com/samofoke"
          target="_blank"
          sx={{ "&:hover": { transform: "scale(1.2)" } }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter" arrow>
        <IconButton
          color="secondary"
          aria-label="Twitter"
          component="a"
          href="https://twitter.com/SE_mofokeng"
          target="_blank"
          sx={{ "&:hover": { transform: "scale(1.2)" } }}
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default Socials;

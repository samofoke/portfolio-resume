import React from "react";
import { Stack, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Socials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      direction={isMobile ? "row" : "column"}
      spacing={2}
      sx={{
        position: isMobile ? "static" : "fixed",
        left: isMobile ? "auto" : 16,
        bottom: isMobile ? "auto" : "50%",
        transform: isMobile ? "none" : "translateY(-50%)",
        justifyContent: isMobile ? "center" : "flex-start",
        width: isMobile ? "100%" : "auto",
        mt: isMobile ? 3 : 0,
        mb: isMobile ? 2 : 0,
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

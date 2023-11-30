import React, { Fragment, useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useThemeSwitcher } from "../../components/Themes/ThemeSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { darkMode, toogleTheme } = useThemeSwitcher();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItem = [
    { label: "About Me", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToogle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToogle} sx={{ textAlign: "center" }}>
      <List>
        {menuItem.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", position: "relative" }}
          >
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToogle}
                sx={{ position: "absolute", left: 0 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Sabata Mofokeng
              </Typography>
              {!isMobile &&
                menuItem.map((item) => (
                  <Button
                    key={item.label}
                    sx={{ color: "white", ml: 2 }}
                    component={Link}
                    to={item.path}
                  >
                    {item.label}
                  </Button>
                ))}
            </Box>

            <IconButton
              onClick={toogleTheme}
              color="inherit"
              sx={{ position: "absolute", right: 0 }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToogle}>
        {drawer}
      </Drawer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;

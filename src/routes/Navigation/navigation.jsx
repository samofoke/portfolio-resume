import React, { Fragment, useState } from "react";
import {
  Box,
  AppBar,
  Typography,
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
import { Link, Outlet, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "../../components/button/HoverButton";
import { useThemeSwitcher } from "../../components/Themes/ThemeSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { darkMode, toggleTheme } = useThemeSwitcher();
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItem = [
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToogle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderLinks = (item) => {
    if (location.pathname === "/") {
      return (
        <ScrollLink
          key={item.label}
          activeClass="active"
          to={item.label.toLowerCase()}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <CustomButton sx={{ color: theme.palette.text.primary, ml: 2 }}>
            {item.label}
          </CustomButton>
        </ScrollLink>
      );
    } else {
      return (
        <Link to={item.path} key={item.label}>
          <CustomButton sx={{ color: theme.palette.text.primary, ml: 2 }}>
            {item.label}
          </CustomButton>
        </Link>
      );
    }
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
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
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
              {!isMobile && menuItem.map((item, index) => renderLinks(item))}
            </Box>

            <IconButton
              onClick={toggleTheme}
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

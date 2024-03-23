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
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import CustomButton from "../../components/button/HoverButton";
import { useThemeSwitcher } from "../../components/Themes/ThemeSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import { useUserContext } from "../../UserContext/UserContext";
import UserIcon from "../../components/UserProfile/UserIcon/UserIconProfile";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { darkMode, toggleTheme } = useThemeSwitcher();
  const location = useLocation();
  const navigate = useNavigate();

  const { currentUser, logoutUser } = useUserContext();

  console.log("user Info: ", currentUser);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuItem = [
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const handleDrawerToogle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log("Error login out: ", error);
    }
  };

  const handleProfile = () => {
    navigate("/userprofile");
    handleDrawerToogle();
  };

  const navbarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const renderLinks = (item, index) => {
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
        <Link to={item.path} key={item.path}>
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
        {currentUser ? (
          <ListItem button onClick={handleProfile}>
            <ListItemText primary="Profile" />
          </ListItem>
        ) : (
          <ListItem button component={Link} to="/signup">
            <ListItemText primary="Login" />
          </ListItem>
        )}

        {currentUser && (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <motion.div variants={navbarVariants} initial="hidden" animate="visible">
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
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    Sabata Mofokeng
                  </Typography>
                </motion.div>
                {!isMobile && menuItem.map((item, index) => renderLinks(item))}
              </Box>

              {isMobile === false ? (
                <Box sx={{ display: "flex", alignItems: "center", mr: "60px" }}>
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                  >
                    <UserIcon />
                  </motion.div>
                </Box>
              ) : null}

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
      </motion.div>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToogle}>
        {drawer}
      </Drawer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;

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
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useThemeSwitcher } from "../../components/Themes/ThemeSwitcher";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { toogleTheme } = useThemeSwitcher();

  const theme = useTheme();
  const isMMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ mb: 4 }}>
          <Toolbar>
            {isMMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDrawerToogle}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
              component={Link}
              to="/"
            >
              Sabata Mofokeng
            </Typography>
            {!isMMobile &&
              menuItem.map((item) => (
                <Button
                  key={item.label}
                  sx={{ color: "white", display: "block", ml: 2 }}
                  component={Link}
                  to={item.path}
                >
                  {item.label}
                </Button>
              ))}
            <Switch onChange={toogleTheme} />
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToogle}>
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;

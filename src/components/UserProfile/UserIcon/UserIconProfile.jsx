import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../UserContext/UserContext";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, MenuItem, Menu, IconButton } from "@mui/material";

const UserIcon = () => {
  const { currentUser, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log("user info: ", currentUser);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    navigate("/signup");
    handleCloseMenu();
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
      setAnchorEl(null);
    } catch (error) {
      console.log("Error login out: ", error);
    }
  };

  return (
    <>
      <Tooltip title={currentUser ? "Profile" : "Login"}>
        <IconButton onClick={handleMenuOpen}>
          <Avatar sx={{ width: 35, height: 35 }} />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {currentUser ? (
          <div>
            <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </div>
        ) : (
          <MenuItem onClick={handleLoginClick}>Login</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default UserIcon;

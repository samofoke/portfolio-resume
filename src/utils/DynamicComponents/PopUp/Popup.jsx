import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const PopUp = ({ open, title, content, onClose, actions }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{content}</DialogContent>
      {actions && (
        <DialogActions>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color={action.color}>
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PopUp;

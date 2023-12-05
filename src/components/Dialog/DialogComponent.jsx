import React, { Fragment, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const DialogComponent = ({ buttonText }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {buttonText}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CV and Documents Availability</DialogTitle>
        <DialogContent>
          <DialogContentText>
            My CV and additional documents are available upon request. Please
            contact me for more information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default DialogComponent;

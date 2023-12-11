import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  // Regular button styles
  color: theme.palette.text.primary,
  borderColor: theme.palette.primary.main,

  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#DED0B6" : "#4e362c",
  },
}));

export default CustomButton;

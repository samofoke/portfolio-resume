import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Container,
  CircularProgress,
} from "@mui/material";
import MyDefault from "../../../images/default.png";
import { useUserContext } from "../../../UserContext/UserContext";
import { getImagesFromUrl } from "../../../utils/FirebaseConfigFile/firbebaseConfig";

const UserProfile = () => {
  const { currentUser } = useUserContext();
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);

  console.log("user information: ", currentUser);
  console.log("user name: ", currentUser?.displayName);

  useEffect(() => {
    const fetthUmage = async () => {
      const imagePath =
        "gs://sly-blog-post.appspot.com/sabata_db/1676617015971.jpg";
      try {
        const downloadUrl = await getImagesFromUrl(imagePath);
        setImageUrl(downloadUrl);
        setLoading(false);
      } catch (error) {
        console.log("Error gettig the image url: ", error);
      }
    };
    fetthUmage();
  }, []);

  return (
    <Container maxWidth="md" sx={{ margin: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        User Profile
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#E8751A" }} />
        </Box>
      ) : (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src={imageUrl || MyDefault}
                alt="user avator"
                sx={{ width: 100, height: 100, marginRight: 4 }}
              />
              <Typography variant="h6" ml={1}>
                {currentUser?.displayName}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default UserProfile;

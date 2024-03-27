import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Container,
  Stack,
  TextField,
  CircularProgress,
} from "@mui/material";
import MyDefault from "../../../images/default.png";
import SaveIcon from "@mui/icons-material/Save";
import PublishIcon from "@mui/icons-material/Publish";
import EditIcon from "@mui/icons-material/Edit";
import { useUserContext } from "../../../UserContext/UserContext";
import { getImagesFromUrl } from "../../../utils/FirebaseConfigFile/firbebaseConfig";

const UserProfile = () => {
  const { currentUser } = useUserContext();
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [draft, setDraft] = useState("");

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

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 2, md: 12 }}
            sx={{ width: "100%", marginTop: "60px", justifyContent: "center" }}
          >
            <Stack direction="column" spacing={2} alignItems="center">
              <Typography>Saved Drafts</Typography>
              <Box textAlign="center">
                <Typography variant="body1">test data </Typography>
                <Button>
                  <EditIcon />
                </Button>
              </Box>
            </Stack>

            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{
                maxWidth: { xs: "100%", md: "800px" },
                flexGrow: 1,
              }}
            >
              <TextField
                fullWidth
                multiline
                rows={10}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="write your blog..."
                variant="outlined"
                sx={{
                  textAlign: "center",
                  maxWidth: { xs: "90%", md: "800px" },
                }}
              />
              <Stack direction="row" spacing={{ xs: 2, sm: 4, md: 20 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                >
                  Save Draft
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PublishIcon />}
                  sx={{ marginLeft: { xs: 0, sm: "10px" } }}
                >
                  Save Draft
                </Button>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={2} alignItems="center">
              <Typography>Published Blogs</Typography>
              <Box marginBottom={1}>
                <Typography variant="body1">Test test me</Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      )}
    </Container>
  );
};

export default UserProfile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  Stack,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import PopUp from "../../../utils/DynamicComponents/PopUp/Popup";
import { signInUser } from "../../../utils/FirebaseConfigFile/firbebaseConfig";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popContent, setPopupContent] = useState({ title: "", message: "" });

  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    setLoading(true);

    try {
      const response = await signInUser(email, password);
      setPopupContent({
        title: "Sign in Successful.",
        message: "User signed in Successfully.",
      });
      setOpenPopup(true);
      console.log("user: ", response);
      navigate("/");
    } catch (error) {
      let errorMessage = "Invalid Login Cedentails";
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid Login Cedentails.";
      }
      setPopupContent({
        title: "Error",
        message: errorMessage,
      });
      setOpenPopup(true);
    } finally {
      setLoading(false);
      resetForm();
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format.")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  return (
    <Container>
      <PopUp
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        title={popContent.title}
        content={<Typography>{popContent.message}</Typography>}
        actions={[
          {
            label: "OK",
            onClick: () => setOpenPopup(false),
            color: "primary",
          },
        ]}
      />
      <Typography variant="h4">Sign In</Typography>
      <Formik
        initialValues={defaultFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack direction="column" spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      id="sigin-email"
                      label="Email"
                      variant="outlined"
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(field.touched && field.error)}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      id="sigin-password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      helperText={<ErrorMessage name="password" />}
                      error={Boolean(field.touched && field.error)}
                    />
                  )}
                </Field>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignIn;

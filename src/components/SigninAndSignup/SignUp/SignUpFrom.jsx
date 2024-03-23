import React, { useState } from "react";
import {
  createUser,
  createUserAuthDocument,
} from "../../../utils/FirebaseConfigFile/firbebaseConfig";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Stack,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PopUp from "../../../utils/DynamicComponents/PopUp/Popup";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popContent, setPopupContent] = useState({ title: "", message: "" });

  const handleSubmit = async (values, { resetForm }) => {
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      setPopupContent({
        title: "Error",
        message: "Passwords do not match.",
      });
      setOpenPopup(true);
      return;
    }

    setLoading(true);

    try {
      const { user } = await createUser(email, password);
      await createUserAuthDocument(user, { displayName });
      setPopupContent({
        title: "Sign up Successful.",
        message: "Your Account has been Successfully created.",
      });
      setOpenPopup(true);
      console.log("user: ", user);
    } catch (error) {
      let errorMessage = "The Email already in use.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "The Email already in use.";
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
    displayName: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid email format.")
      .required("email required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Passwod must be at least 8 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required.")
      .oneOf([Yup.ref("password"), null], "Password must much."),
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

      <Typography variant="h4">Sign Up</Typography>
      <Formik
        initialValues={defaultFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack direction="column" spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field name="displayName">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      id="displayName"
                      label="Name"
                      variant="outlined"
                      helperText={<ErrorMessage name="displayName" />}
                      error={Boolean(field.touched && field.error)}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      id="signup-email"
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
                      id="signup-password"
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
                <Field name="confirmPassword">
                  {({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="normal"
                      id="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      helperText={<ErrorMessage name="confirmPassword" />}
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
                    "Sign Up"
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

export default SignUpForm;

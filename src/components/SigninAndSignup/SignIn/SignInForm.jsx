import React from "react";
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
} from "@mui/material";
import { signInUser } from "../../../utils/FirebaseConfigFile/firbebaseConfig";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const response = await signInUser(email, password);
      console.log("user: ", response);
      navigate("/");
    } catch (error) {
      console.log("Error Submitting user details: ", error);
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
                >
                  Sign in
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

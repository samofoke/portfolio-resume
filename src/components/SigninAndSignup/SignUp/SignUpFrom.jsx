import React from "react";
import {
  createUser,
  createUserAuthDocument,
} from "../../../utils/FirebaseConfigFile/firbebaseConfig";
import * as Yup from "yup";
import { TextField, Button, Stack } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const handleSubmit = async (values) => {
    const { displayName, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert("password doesn't match...");
      return;
    }
    try {
      const { user } = await createUser(email, password);
      await createUserAuthDocument(user, { displayName });
      console.log("user: ", user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("The Email already in use.");
      }
      console.log("Error during sign up: ", error);
    }
  };

  const validationSchema = Yup.object({
    displayName: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid email format.")
      .required("email required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Passwod must be at least 8 characters."),
    confirmPassword: Yup.string()
      .required("Confirm password is required.")
      .oneOf([Yup.ref("password"), null], "Password must much."),
  });

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={defaultFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack direction="column" spacing={2}>
            <Field name="displayName">
              {({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  id="displayName"
                  label="Name"
                  variant="outlined"
                  helperText={<ErrorMessage name="displayName" />}
                  error={Boolean(field.touched && field.error)}
                />
              )}
            </Field>

            <Field name="email">
              {({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  id="signup-email"
                  label="Email"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" />}
                  error={Boolean(field.touched && field.error)}
                />
              )}
            </Field>

            <Field name="password">
              {({ field }) => (
                <TextField
                  {...field}
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

            <Field name="confirmPassword">
              {({ field }) => (
                <TextField
                  {...field}
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
          </Stack>

          <Button variant="contained" type="submit" color="primary">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;

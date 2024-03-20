import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Stack } from "@mui/material";
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
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={defaultFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Stack direction="column" spacing={2}>
            <Field name="email">
              {({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  id="sigin-email"
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
                  id="sigin-password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  helperText={<ErrorMessage name="password" />}
                  error={Boolean(field.touched && field.error)}
                />
              )}
            </Field>
          </Stack>

          <Button variant="contained" type="submit" color="primary">
            Sign in
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;

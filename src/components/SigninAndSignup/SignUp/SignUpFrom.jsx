import React, { useState } from "react";
import {
  createUser,
  createUserAuthDocument,
} from "../../../utils/FirebaseConfigFile/firbebaseConfig";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password doesn't match...");
      return;
    }
    try {
      const { user } = await createUser(email, password);
      await createUserAuthDocument(user, { displayName });
      console.log("user: ", user);
      resetFormFields();
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

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={defaultFormFields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextField  />
        </Form>
      </Formik>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

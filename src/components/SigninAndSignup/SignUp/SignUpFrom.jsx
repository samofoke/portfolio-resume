import React, { useState } from "react";
import {
  createUser,
  createUserAuthDocument,
} from "../../../utils/FirebaseConfigFile/firbebaseConfig";

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
    } catch (error) {
      console.log("Error during sign up: ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  console.log(formFields);

  return (
    <div>
      <h1>Sign up</h1>
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

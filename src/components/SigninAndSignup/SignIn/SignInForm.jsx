import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../../utils/FirebaseConfigFile/firbebaseConfig";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInUser(email, password);
      console.log("user: ", response);
      resetFormFields();
      navigate("/");
    } catch (error) {
      console.log("Error Submitting user details: ", error);
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

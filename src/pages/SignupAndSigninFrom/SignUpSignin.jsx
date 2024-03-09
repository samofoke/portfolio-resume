import React, { Fragment } from "react";
import SignUpForm from "../../components/SigninAndSignup/SignUp/SignUpFrom";
import SignIn from "../../components/SigninAndSignup/SignIn/SignInForm";

const SignUpSignIn = () => {
  return (
    <Fragment>
      <SignIn />
      <SignUpForm />
    </Fragment>
  );
};

export default SignUpSignIn;

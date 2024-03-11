import React, { Fragment, useEffect } from "react";
import SignUpForm from "../../components/SigninAndSignup/SignUp/SignUpFrom";
import SignIn from "../../components/SigninAndSignup/SignIn/SignInForm";
import { useUserContext } from "../../UserContext/UserContext";

const SignUpSignIn = () => {
  const { currentUser, permissions } = useUserContext();

  console.log("currentUser: ", currentUser);

  useEffect(() => {
    // console.log("user: ", currentUser?.displayName);
    // console.log("uid: ", currentUser?.uid);
    // console.log("email: ", currentUser?.email);
    // console.log("role: ", currentUser?.role);
    // console.log("user permissions: ", permissions);
  }, [currentUser, permissions]);

  return (
    <Fragment>
      <SignIn />
      <SignUpForm />
    </Fragment>
  );
};

export default SignUpSignIn;

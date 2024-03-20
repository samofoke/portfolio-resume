import React, { Fragment, useEffect } from "react";
import SignUpForm from "../../components/SigninAndSignup/SignUp/SignUpFrom";
import SignIn from "../../components/SigninAndSignup/SignIn/SignInForm";
import { Grid } from "@mui/material";
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
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <SignIn />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SignUpForm />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignUpSignIn;

import React, { Fragment, useEffect } from "react";
import SignUpForm from "../../components/SigninAndSignup/SignUp/SignUpFrom";
import SignIn from "../../components/SigninAndSignup/SignIn/SignInForm";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
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
      <Grid
        container
        justifyContent="center"
        spacing={6}
        sx={{ marginTop: "10px" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SignIn />
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SignUpForm />
          </motion.div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SignUpSignIn;

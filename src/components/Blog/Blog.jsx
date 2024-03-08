import React from "react";
import { signInWithGooglePopup } from "../../utils/FirebaseConfigFile/firbebaseConfig";

const BlogPage = () => {
  const handleClickSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log("my res: ", response);
  };
  return (
    <div>
      <h1>The Blog page</h1>
      <button onClick={handleClickSignIn}>sign in with google</button>
    </div>
  );
};

export default BlogPage;

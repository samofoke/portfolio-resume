import React from "react";
import { useUserContext } from "../../../UserContext/UserContext";

const UserProfile = () => {
  const { currentUser } = useUserContext();

  console.log("user information: ", currentUser);

  return (
    <div>
      <h2>User profile</h2>
    </div>
  );
};

export default UserProfile;

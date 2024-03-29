import React, { createContext, useState, useEffect, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FirebaseConfigFile/firbebaseConfig";
import { getDoc, doc, getFirestore } from "firebase/firestore";

export const UserContext = createContext({
  currentUser: null,
  userToken: null,
  permissions: [],
  loading: true,
  logout: () => {},
});

export const db = getFirestore();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setUserToken(null);
      setPermissions([]);
    } catch (error) {
      console.log("Logout Error: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userId = userAuth.uid;
        const userDocumentRef = doc(db, "users", userId);
        const userSnapShot = await getDoc(userDocumentRef, {
          uid: userId,
        });

        if (userSnapShot.exists()) {
          const userData = userSnapShot.data();
          setCurrentUser({
            uid: userSnapShot.id,
            ...userData,
          });
          setPermissions(userData.permissions || []);
          setUserToken(await userAuth.getIdToken());
        }
      } else {
        setCurrentUser(null);
        setUserToken(null);
        setPermissions([]);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ currentUser, userToken, permissions, loading, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

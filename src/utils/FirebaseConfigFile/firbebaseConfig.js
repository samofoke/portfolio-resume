import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const fireBaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

const DEBUG = false; // Set to false in production

function customLogger(message, data) {
  if (DEBUG) {
    console.log(message, data);
  }
}

customLogger("initialize: ", fireBaseApp);

export const createUser = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserAuthDocument = async (
  userAuth,
  moreUserInformation = {}
) => {
  if (!userAuth) return;

  const userDocumentRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocumentRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createdAt,
        ...moreUserInformation,
      });
    } catch (error) {
      console.log("Error creating the User: ", error.message);
    }
  }
};

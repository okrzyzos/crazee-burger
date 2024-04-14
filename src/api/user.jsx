import { getDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import Cookies from "js-cookie";

const SESSION_COOKIE_NAME = "userId";

export const setSessionCookie = (userId) => {
  const expirationTime = 15 * 60 * 1000; // 3 minutes
  Cookies.set(SESSION_COOKIE_NAME, userId, {
    expires: new Date(Date.now() + expirationTime),
  });
};

export const getUserFromCookie = () => {
  const userId = Cookies.get(SESSION_COOKIE_NAME);
  return userId ? getUser(userId) : null;
};

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const resultat = await getDoc(docRef);
  console.log("resultat", resultat);
  if (resultat.exists()) {
    const userData = resultat.data();
    return userData;
  }
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newUser = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  await setDoc(docRef, newUser);
  setSessionCookie(userId);

  return newUser;
};

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId);
  if (!existingUser) {
    return await createUser(userId);

  }
  return existingUser;
};

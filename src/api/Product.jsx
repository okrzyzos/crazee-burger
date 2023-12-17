import { doc, setDoc,getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothmenu = (userId, menuUpdated) => {
  const cachette = doc(db, "users", userId);

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(cachette, nourriture);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const resultat = await getDoc(docRef);
  console.log("resultat", resultat);
  if (resultat.exists()) {
    const {menu} = resultat.data();
    return menu;
  }
};

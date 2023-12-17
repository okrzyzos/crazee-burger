
import { getDoc,doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from '../fakeData/FakeMenu';
export const getUser = async (idUser) => {

    const docRef = doc(db, "users",idUser)

    const resultat = await getDoc(docRef)
    console.log("resultat",resultat)
    if(resultat.exists()) {
const userData  = resultat.data()
return userData
}
}

export const createUser = (userId) => { 
    const docRef = doc(db, "users",userId)

    const nouriture = {
        username: userId,
        menu: fakeMenu.SMALL

    }
    setDoc(docRef, nouriture,)

 
 }

 export  const authenticateUser = async (userId) => { 
    const existingUser = await getUser(userId);
    if(!existingUser) {
      createUser(userId)

    }
 }
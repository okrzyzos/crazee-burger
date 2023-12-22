
import { getDoc,doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from '../fakeData/fakeMenu';
export const getUser = async (idUser) => {

    const docRef = doc(db, "users",idUser)

    const resultat = await getDoc(docRef)
    console.log("resultat",resultat)
    if(resultat.exists()) {
const userData  = resultat.data()
return userData
}
}

export const createUser = async (userId) => { 
    const docRef = doc(db, "users",userId)

    const newUser = {
        username: userId,
        menu: fakeMenu.SMALL

    }
    await setDoc(docRef, newUser,)

 return newUser;
 }

 export  const authenticateUser = async (userId) => { 
    const existingUser = await getUser(userId);
    if(!existingUser) {
     return await createUser(userId)

    }
    return existingUser
 }
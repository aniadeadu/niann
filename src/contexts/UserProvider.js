import { createContext, useEffect, useState } from "react";
import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   onAuthStateChanged,
 } from "firebase/auth";
 import "../config/firebase.js";
const UserContext = createContext();
export const UserProvider = ({children}) => {

   const [user, setUser ] = useState(null);

   
   const signInWithGoogle = async () => {
      try {
         const provider = new GoogleAuthProvider();
         const auth = getAuth();

         
         return await signInWithPopup(auth, provider)
           .then(async (result) => {
            localStorage.setItem('userInfo', auth.currentUser)
alert("User is signed In")
setUser(auth.currentUser);


           })}
           catch(err){
console.log(err)
           }
    };

   //  useEffect(() => {
   //    localStorage.getItem('userInfo')
   // }, [data])

   return (
      <UserContext.Provider
         value={{user, setUser, signInWithGoogle}}
      >
         {children}
      </UserContext.Provider>
   )
}
export {UserContext}
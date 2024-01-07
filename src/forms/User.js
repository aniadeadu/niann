import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export const User = () => {
   const { user, setUser} = useContext(UserContext);

   
   return (
      user == null ?
      <div className="flex lg:flex-row flex-col space-y-12 lg:space-y-0 lg:space-x-40 w-full mt-28 lg:mt-36 px-10 sm:px-28 lg:pl-20 lg:pr-32">
         <SignIn/>
         <SignUp/>
      </div> : "Hey you are logged "
   
   )
}
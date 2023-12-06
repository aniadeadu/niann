import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export const User = () => {
   return (
      <div className="flex lg:flex-row flex-col space-y-12 lg:space-y-0 lg:space-x-40 w-full mt-28 lg:mt-36 px-8 lg:pl-20 lg:pr-32">
         <SignIn/>
         <SignUp/>
      </div>
   )
}
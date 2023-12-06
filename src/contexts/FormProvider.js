import { createContext, useState } from "react"

const FormContext = createContext()

export const FormProvider = ({children}) => {

   const [SignUp, setSignUp] = useState(false);
   const [Register, setRegister] = useState(true);

   return (
      <FormContext.Provider
         value={{
            SignUp,
            setSignUp,
            Register,
            setRegister

         }}
      >
         {children}
      </FormContext.Provider>
   )
}
export {FormContext}
import { createContext, useState } from "react";


const SizeContext = createContext({});

export default function SizeProvider({ children }) {

   const [size, setSize] = useState(0);

   return (
      <SizeContext.Provider 
         value={{size, setSize }}
      >
         { children }
      </SizeContext.Provider>
   )
}
export { SizeContext}
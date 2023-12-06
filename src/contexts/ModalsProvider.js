import { createContext, useEffect, useState } from "react";
import { W_menu } from "../components/menu/W_menu";
import { Start_menu } from "../components/menu/Start_menu";
import { M_menu } from "../components/menu/M_menu";

const ModalContext = createContext();


export const ModalsProvider = ({ children }) => {

   const [navbar_menu, setNavBar_menu] = useState(false);
   const [navbar_search, setNavBar_search] = useState(false);
   const [navbar_contact, setNavBar_contact] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(0);
  

   const sub_menu = [
      <Start_menu/>,
      <W_menu/>,
      <M_menu/>
   ]
   
   const w_menu = () => {
      setCurrentIndex(
         currentIndex + 1
      )
   };
   const m_menu = () => {
      setCurrentIndex(
         currentIndex + 2
      )
   } 
   const W_Back = () => {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex)   
   } 
   const M_Back = () => {
      const newIndex = currentIndex - 2;
      setCurrentIndex(newIndex)   
   } 
   



   return (
      <ModalContext.Provider
         value={{ 
            navbar_menu, 
            setNavBar_menu, 
            navbar_contact, 
            setNavBar_contact, 
            navbar_search, 
            setNavBar_search,
            w_menu, 
            m_menu,
            sub_menu,
            currentIndex,
            W_Back,
            M_Back
         }}
      >
         { children }
      </ModalContext.Provider>
   )
}

export { ModalContext }
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalsProvider";
import { MenuUI } from "../modals/MenuUI"
import { MenuListWrappper } from "../ui/Menu";
import { W_menu } from "./W_menu";
import { ModalUI } from "../ui/Modal";

export const Start_menu =() => {
   const { w_menu } = useContext(ModalContext);
   const { m_menu } = useContext(ModalContext);
   const { navbar_menu, setNavBar_menu } = useContext(ModalContext);
   const [s , setS] = useState()

  
   const lists = [
      {
         name: 'new in',
      },
      {
         name: 'women'
      },
      {
         name: 'men'
      }
   ];

   const contacts = [
      'contact us',
      '+234-903-828-2743',
   ]

   const style = () => ({
      fontVariant: 'small-caps'
   })
   
   return (
      <div className="space-y-10 " >
         <div className="space-y-5 ">
            {
               lists.map((list) => {
                  return  (
                     <MenuListWrappper 
                        key={list.name} 
                      
                        captalize={'text-[1.2rem]'}
                        onClick={() => {
                           if (list.name == "women") {
                              w_menu();
                           } else {
                              m_menu();
                           }   
                        }}>
                        {list.name}
                     </MenuListWrappper>
                  )
               })
            }
         </div>
         <div className="space-y-3">
            {
               contacts.map((contact) => {
                  return (
                     <div
                       
                        className="font-medium underline text-black capitalize  text-[1.08rem]"
                     >
                        {contact}
                     </div>
                  )
               })
            }
         </div>
      </div>
   )
}
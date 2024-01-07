import { useContext, useState } from "react";
import { MenuListWrappper } from "../ui/Menu";
import { ModalContext } from "../../contexts/ModalsProvider";
import arrowback from "../../assets/svgs/arrowback.svg";
import { useNavigate } from "react-router-dom";

export const W_menu = () => {
   const navigate = useNavigate()
   const { W_Back} = useContext(ModalContext);
   const { setNavBar_menu} = useContext(ModalContext);


   const lists = [
      {
         name:"clothings",
         link: "/wears"
      },
      {
         name:"shoes",
         link: "/shoes"
      },
      {
         name:"bags",
         link: "/bags"
      },
   ]

   return (
      <div className="space-y-5">
         <button 
            onClick={() => {W_Back()}} 
            className="flex items-center gap-[0.18rem]" 
         >
            <div>
               <img src={arrowback} alt="back arrow" className="w-[0.6rem] mt-1"/>
            </div>
            <div
               className="text-black capitalize underline"
            >
               back
            </div>
         </button>
         <div className="space-y-10 " >
            <div className="space-y-3 ">
               <div className="text-[1.4rem] text-black mb-6" style={{fontVariant: 'small-caps'}}>
                  Women
               </div>
               {
                  lists.map((list) => {
                     return (
                        <MenuListWrappper 
                           key={list.name}
                           captalize={'capitalize text-[1.15rem]'}
                           onClick={() => {navigate('/shopping/women' + list.link); setNavBar_menu(false)}}
                        >
                           {list.name}
                        </MenuListWrappper>
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}
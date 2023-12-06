import { useContext } from "react";
import { MenuListWrappper } from "../ui/MenuListsStyle"
import { ModalContext } from "../../contexts/ModalsProvider";
import arrowback from "../../assets/svgs/arrowbackw.svg";
import { useNavigate } from "react-router-dom";


export const M_menu = () => {
   const navigate = useNavigate();
   const { M_Back} = useContext(ModalContext);
   const { setNavBar_menu} = useContext(ModalContext);
   

   const lists = [
      {
         name:  "clothings",
         link: "/wears"
      },
      {
         name:  "bags",
         link: "/bags"
      },
      {
         name:  "shoes",
         link: "/shoes"
      },
   ]

   return (
      <div className="space-y-5">
         <button onClick={() => {M_Back()}} className="flex items-center gap-[0.18rem]" >
            <div>
               <img src={arrowback} alt="back arrow" className="w-[0.6rem] mt-1"/>
            </div>
            <div
               className="text-white capitalize underline"
            >
               back
            </div>
         </button>
         <div className="space-y-10 " >
            <div className="space-y-3 ">
            <div className="text-[1.4rem]  capitalize mb-6" style={{fontVariant: 'small-caps'}}>
                  men
               </div>
               {
                  lists.map((list) => {
                     return (
                        <MenuListWrappper 
                           key={list.name}
                           captalize={'capitalize text-[1.15rem]'}
                           onClick={() => {navigate('/shopping/men' + list.link); setNavBar_menu(false)}}
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

import { w_wears } from "../../../data/Products/women/w_wears";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { Footer } from "../../../layouts/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const W_wearsUI = () => {

   const navigate = useNavigate();

   useEffect(() => {
      console.log(window.scrollY)
   }, [window])
  
   
   return (
      <main className="w-full h-auto">
         <ProductsGalleryWrapper>
            {
               w_wears.map((w_wear) => {
                  return (
                     <div
                        className=" basis-[50%] md:basis-[33.333%] border-r border-b cursor-pointer border-[rgba(20,20,20,.35)] lg:basis-[20%]  flex flex-col "
                        onClick={() => {
                           navigate(
                              (w_wear.id <= 31215003) ?
                                 `/shopping/women/wears/dresses/${w_wear.id}`:
                              (w_wear.id === 31215004) ?
                                 `/shopping/women/wears/skirts/${w_wear.id}` :
                              (w_wear.id >= 31215005 && !(w_wear.id > 31215009)) ?
                                 `/shopping/women/wears/coats/${w_wear.id}` :
                              (w_wear.id >= 31215010 && !(w_wear.id > 31215012)) ?
                                 `/shopping/women/wears/tops/${w_wear.id}` :
                              (w_wear.id >= 31215013 && !(w_wear.id > 31215019)) ?
                                 `/shopping/women/wears/jackets/${w_wear.id}` :
                              (w_wear.id >= 31215020 && !(w_wear.id === 31215024)) ?
                                 `/shopping/women/wears/trousers/${w_wear.id}` : ""
                           )
                        }}    
                      
                        key={w_wear}
                     >
                        {w_wear.ProductsGallery}
                     </div>
                  )
               })
            }
         </ProductsGalleryWrapper>
         
      
      </main>
   )
}

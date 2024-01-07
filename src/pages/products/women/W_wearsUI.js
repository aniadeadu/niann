import { w_wears } from "../../../data/Products/women/w_wears";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { Footer } from "../../../layouts/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const W_wearsUI = () => {

   const navigate = useNavigate();

   useEffect(() => {
      console.log(window.scrollY)
   }, [window])
  
   
   return (
      <main className="w-full h-auto">
         <ProductsGallery>
            {
               w_wears.map((w_wear) => {
                  return (
                     <PropsContainer
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
                        {w_wear.ProductsProps}
                     </PropsContainer>
                  )
               })
            }
         </ProductsGallery>
      </main>
   )
}

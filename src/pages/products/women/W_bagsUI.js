import { w_bags } from "../../../data/Products/women/w_bags";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { useNavigate } from "react-router-dom";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const W_bagsUI = () => {
   
   const navigate = useNavigate();

   return (
      <main className="w-full h-auto">
         <ProductsGallery>
            {
               w_bags.map((w_bag) => {
                  return (
                     <PropsContainer
                        onClick={() => 
                           navigate(`/shopping/women/bags/${w_bag.alt}/${w_bag.id}`)
                        }
                        key={w_bag}
                     >
                        {w_bag.ProductsProps}
                     </PropsContainer>
                  )
               })
            }
         </ProductsGallery>
      </main>
   )
}
// p = w_bag.alt.split("_");
// p[3]p[4]
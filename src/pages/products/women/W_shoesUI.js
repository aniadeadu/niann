import { w_shoes } from "../../../data/Products/women/w_shoes";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { useNavigate } from "react-router-dom";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const W_shoesUI = () => {

   const navigate = useNavigate();

   return (
      <main className="w-full  mb-12">
         <ProductsGallery>
            {
               w_shoes.map((w_shoe) => {
                  return (
                     <PropsContainer
                        onClick={() => navigate(`/shopping/women/shoes/${w_shoe.alt}/${w_shoe.id}`)}
                        key={w_shoe}
                     >
                        {w_shoe.ProductsProps}
                     </PropsContainer>
                  )
               })
            }
         </ProductsGallery>
      </main>
   )
}
import { m_shoes } from "../../../data/Products/men/m_shoes";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { useNavigate } from "react-router-dom";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const M_shoesUI = () => {

   const navigate = useNavigate();

   return (
      <ProductsGallery>
         {
            m_shoes.map((m_shoe) => {
               return (
                  <PropsContainer
                     onClick={() => navigate(`/shopping/men/shoes/${m_shoe.alt}/${m_shoe.id}`)}
                     key={m_shoe}
                  >
                     {m_shoe.ProductsProps}
                  </PropsContainer>
               )
            })
         }
      </ProductsGallery>
   )
}
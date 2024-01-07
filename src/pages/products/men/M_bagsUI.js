import { m_bags } from "../../../data/Products/men/m_bags";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { useNavigate } from "react-router-dom";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const M_bagsUI = () => {
   const navigate = useNavigate();

   return (
      <ProductsGallery>
         {
            m_bags.map((m_bag) => {
               return (
                  <PropsContainer
                     onClick={() => navigate(`/shopping/men/bags/backpacks/${m_bag.alt}/${m_bag.id}`)}
                     key={m_bag}
                  >
                     {m_bag.ProductsProps}
                  </PropsContainer>
               )
            })
         }
      </ProductsGallery>
   )
}
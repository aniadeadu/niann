
import { m_wears } from "../../../data/Products/men/m_wears";
import { ProductsGallery } from "../../../components/ui/ProductsGallery";
import { useNavigate } from "react-router-dom";
import { PropsContainer } from "../../../components/ui/PropsContainer";

export const M_wearsUI = () => {
   const navigate = useNavigate();

   return (
      <ProductsGallery>
         {
            m_wears.map((m_wear) => {
               return (
                  <PropsContainer
                     onClick={() => {
                        navigate(
                           (m_wear.id <= 31215105 ) ?
                           `/shopping/men/wears/jackets/${m_wear.id}` :
                           (m_wear.id >= 31215107 && !(m_wear.id > 31215117 )) ?
                           `/shopping/men/wears/blousons/${m_wear.id}` :
                           (m_wear.id >= 31215119) ?
                           `/shopping/men/wears/trousers/${m_wear.id}` : ""
                        )
                     }}
                     key={m_wear.id}
                  >
                     {m_wear.ProductsProps}
                  </PropsContainer>
               )
            })
         }
      </ProductsGallery>
   )
}
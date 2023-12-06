
import { m_wears } from "../../../data/Products/men/m_wears";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { useNavigate } from "react-router-dom";

export const M_wearsUI = () => {
   const navigate = useNavigate();

   return (
      <ProductsGalleryWrapper>
         {
            m_wears.map((m_wear) => {
               return (
                  <div
                     className=" basis-[44%] md:basis-[30%] lg:basis-[20%] flex flex-col mb-5"
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
                     {m_wear.ProductsGallery}
                  </div>
               )
            })
         }
      </ProductsGalleryWrapper>
   )
}
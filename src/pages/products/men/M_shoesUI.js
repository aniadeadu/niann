import { m_shoes } from "../../../data/Products/men/m_shoes";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { useNavigate } from "react-router-dom";

export const M_shoesUI = () => {

   const navigate = useNavigate();

   return (
      <ProductsGalleryWrapper>
         {
            m_shoes.map((m_shoe) => {
               return (
                  <div
                     className=" basis-[44%] md:basis-[30%] lg:basis-[20%] flex flex-col mb-5"
                     onClick={() => navigate(`/shopping/men/shoes/${m_shoe.alt}/${m_shoe.id}`)}
                     key={m_shoe}
                  >
                     {m_shoe.ProductsGallery}
                  </div>
               )
            })
         }
      </ProductsGalleryWrapper>
   )
}
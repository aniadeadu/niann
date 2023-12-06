import { m_bags } from "../../../data/Products/men/m_bags";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { useNavigate } from "react-router-dom";

export const M_bagsUI = () => {
   const navigate = useNavigate();

   return (
      <ProductsGalleryWrapper>
         {
            m_bags.map((m_bag) => {
               return (
                  <div
                     className=" basis-[44%] md:basis-[30%] lg:basis-[20%] flex flex-col mb-5"
                     onClick={() => navigate(`/shopping/men/bags/backpacks/${m_bag.alt}/${m_bag.id}`)}
                     key={m_bag}
                  >
                     {m_bag.ProductsGallery}
                  </div>
               )
            })
         }
      </ProductsGalleryWrapper>
   )
}
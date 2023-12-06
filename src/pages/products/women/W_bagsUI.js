import { w_bags } from "../../../data/Products/women/w_bags";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { useNavigate } from "react-router-dom";

export const W_bagsUI = () => {
   
   const navigate = useNavigate();

   return (
      <main className="w-full h-auto">
      <ProductsGalleryWrapper>
         {
            w_bags.map((w_bag) => {
               return (
                  <div
                     className=" basis-[44%] md:basis-[30%] border-r border-b cursor-pointer border-[rgba(20,20,20,.35)] lg:basis-[20%]  flex flex-col "
                     onClick={() => 
                        navigate(`/shopping/women/bags/${w_bag.alt}/${w_bag.id}`)
                     }
                     key={w_bag}
                  >
                     {w_bag.ProductsGallery}
                  </div>
               )
            })
         }
      </ProductsGalleryWrapper>
      </main>
   )
}
// p = w_bag.alt.split("_");
// p[3]p[4]
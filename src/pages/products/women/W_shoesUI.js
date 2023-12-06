import { w_shoes } from "../../../data/Products/women/w_shoes";
import { ProductsGalleryWrapper } from "../../../components/ui/ProdsGalleryWrapper";
import { useNavigate } from "react-router-dom";

export const W_shoesUI = () => {

   const navigate = useNavigate();

   return (
      <main className="w-full  mb-12">
         <ProductsGalleryWrapper>
            {
               w_shoes.map((w_shoe) => {
                  return (
                     <div
                        className=" basis-[44%] md:basis-[30%] border-r border-b cursor-pointer border-[rgba(20,20,20,.35)] lg:basis-[20%]  flex flex-col "
                        onClick={() => navigate(`/shopping/women/shoes/${w_shoe.alt}/${w_shoe.id}`)}
                        key={w_shoe}
                     >
                        {w_shoe.ProductsGallery}
                     </div>
                  )
               })
            }
         </ProductsGalleryWrapper>
      </main>
   )
}
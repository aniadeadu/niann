export const ProductsGallery = ({ children }) => {
   return (
      <div className=" flex justify-center ">
         <div 
            className="flex  flex-wrap border-t border-l border-[rgba(164,164,164,0.35)]  w-full   my-40  "
         >
            { children }
         </div>
      </div>
   )
}
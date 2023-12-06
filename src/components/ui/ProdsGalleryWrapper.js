export const ProductsGalleryWrapper = ({ children }) => {
   return (
      <div className="px-8 flex justify-center ">
      <div 
         className="flex  flex-wrap border-t border-l border-[rgba(0,0,0,.65)]  w-full   my-40  "
      >
         { children }
      </div>
      </div>
   )
}
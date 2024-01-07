export const productproperties = (id, image, alt, name, price, color, size) => {
   return {
      id: id,
      image: image,
      alt: alt,
      name: name,
      price: price,
      color: color,
      size: size,
      
    
      get ProductsProps() {
         return (
            <div className="w-full">
               <div className="w-full border-b border-[rgba(150,150,150,.3)] bg-[rgba(230,230,230,.17)] flex justify-center pt-3">
                  <img 
                     src={image}
                     alt={alt}
                     className="w-64 h-auto rounded-xl scale-95"
                  />
               </div>
               <div className="px-4 py-[0.2rem]">
                  <div
                     className=""
                  >
                     <p 
                        className=" font-semibold text-[1.11rem] text-[rgba(0,0,0,.75)]"
                        style={{fontVariant: 'small-caps'}}
                     >
                        {name.replace(/_/g, " ")}
                     </p>
                  </div>
                  <div>
                     <p 
                        className="font-medium text-[0.95rem] text-[rgba(0,0,0,.55)]"
                     >
                        {price}.99 <span className="text-[0.8rem]">EUR</span>
                     </p>
                  </div>
               </div>
            </div>
         )
      }
   }
}
export const productproperties = (id, image, alt, name, price, color, idd) => {
   return {
      id: id,
      image: image,
      alt: alt,
      name: name,
      price, price,
      color: color,
    
      get ProductsGallery() {
         return (
            <div className="">
               <div className="w-full border-b border-[rgba(150,150,150,.3)] bg-[rgba(230,230,230,.15)] flex justify-center pt-3">
                  <img 
                     src={image}
                     alt={alt}
                     className="w-64 h-auto rounded-xl scale-95"
                  />
               </div>
               <div className="px-4 py-[0.7rem]">
                  <div
                     className=""
                  >
                     <p 
                        className="capitalize font-medium text-lg text-[rgba(0,0,0,.75)]"
                     >
                        {name.replace(/_/g, " ")}
                     </p>
                  </div>
                  <div>
                     <p 
                        className="font-medium text-[1.1rem] text-[rgba(0,0,0,.55)]"
                     >
                        {price}
                     </p>
                  </div>
               </div>
            </div>
         )
      }
   }
}
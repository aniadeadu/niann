import {Link} from 'react-router-dom';
export const HeroUI = ({currentIndex}) => {
   
   return (
      <>
       {currentIndex === 0  ?
         <div className="w-full h-screen overflow-x-hidden flex justify-center items-center z-20 ">
           
               <div className="w-full flex flex-col justify-center items-center ">
                  <p className="font-semibold text-white text-xl uppercase">
                        women
                  </p>
                  
                     <Link 
                        to="/shopping/women/wears"  
                        className=" text-white uppercase border-b border-b-white"
                     >
                        shop now
                     </Link>
                 
               </div>
                     
            
         </div>
         :
         <div className="w-full h-screen overflow-x-hidden flex justify-center items-center z-20 ">
           
               <div className="w-full flex flex-col justify-center items-center ">
                  <p className="font-semibold text-white text-xl uppercase">
                        men
                  </p>
                 
                     <Link 
                        to="/shopping/men/wears"  
                        className=" text-white uppercase border-b border-b-white"
                     >
                        shop now
                     </Link>
                 
            </div>
            
         </div>
}
      </>
   )
}
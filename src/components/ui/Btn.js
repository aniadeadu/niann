export const BtnUI = ({type, icon, title, onClick, style, isLoader, isLoading}) => {

   const btnstyle =  type == "primary" ? 
                        "px-4 bg-black w-full py-2  text-white hover:bg-transparent hover:text-black border border-black":
                        " px-4 border border-black flex-1  hover:scale-110 py-2 ";
   const titlestyle =  type == "primary" ? "font-Kumbh font-medium text-lg md:text-xl  ":"font-Kumbh font-medium text-[rgba(0,0,0.85)]  text-lg md:text-xl";

   return (
      <button onClick={onClick} className={btnstyle}>
         <div className="flex items-center gap-3 justify-center">
            {
               icon ? <div className='w-6 h-auto'>
                        {icon}
                     </div> 
                     : 
                     null
            }
            <div className={titlestyle}
            style={{ fontVariant: "small-caps"}}>
               {title}
            </div>
         </div>
      </button>
   )
}


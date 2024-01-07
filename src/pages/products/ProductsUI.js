import { useLocation, useNavigate, useParams } from "react-router-dom"
import { all_products } from "../../data/Products/all_products";
import { useContext, useEffect, useState } from "react";
import { BtnUI } from "../../components/ui/Btn";
import { w_bags } from "../../data/Products/women/w_bags";
import { Dot } from "react-bootstrap-icons";
import { CartContext } from "../../contexts/CartProvider";
import { SizeContext } from "../../contexts/SizeProvider";
import { Cart } from "../Cart";




export const ProductsUI = () => {

   const {ProductId} = useParams();
   const [sizes, setSize] = useState(0);

   const location = useLocation();
   const {handleCart, warning} = useContext(CartContext);
   const navigate = useNavigate();

   // const [content, setContent] = useState();
 

   // const all = all_products.find((product) => product.id == parseInt(ProductId)) ;
   const [all, setAll] = useState(all_products.find((product) => product.id == parseInt(ProductId)))
   // const {image, name, price, size} = all
   
   useEffect(() => {
      let tempAll = {...all}
      tempAll.size = sizes;
      setAll(tempAll)
   }, [sizes])

 
   
// console.log(location.search.includes(" "))

   // const contents = () =>{
   //    setContent(
   //      <div className="w-[28rem] py-8 flex justify-around px-6 bg-white rounded-lg">
   //          <button onClick={() => navigate(-1)} className="rounded-[2.5rem] border px-4 py-1 items-center gap-2 flex border-[#dbab6b]">
   //          <div className="  text-[#dbab6b] font-Kumbh text-base font-medium">
   //                <ArrowLeft/>
   //             </div>
   //             <div className=" text-[#dbab6b] font-Kumbh text-base font-medium">
   //                Continue Shopping
   //             </div>
   //          </button>
   //          <button onClick={() => navigate("/cart")}className="rounded-[2.5rem] px-2 py-1 bg-[#dbab6b] text-[rgb(255,255,255)] font-Kumbh text-base font-medium">
   //             <div className="">
   //                Proceed to checkout
   //             </div>
   //          </button>
   //       </div>
   //    )
   //  }
const Size = (start, stop, step, ) => {
  return  Array.from({length: (stop - start) / step + 1}, (_, i) => { 
  return (
  <button className="border  px-5 py-5 text-center" onClick={() => setSize(i)}>{(start + i * step)}</button>
  )})
}

const color = (color, onClick) => {
   return (<div className={'text-xl ' + color}></div>)
}


const colors = [
   {
    
      color: 'text-black scale-125',
      
      link: ''
   },
   {
    
      color: 'text-[#310101]',
    link: '/shopping/women/bags/crossbag_darkwine_large/217006',
      title: 'Dark Wine'
   },
   {
      color: 'text-[#E5AA70]',
      link: '/shopping/women/bags/crossbag_brown_large/217005',
      title: 'Fawn'
   },
]


   return  (
      
      <div className="w-full my-36  px-5 sm:px-10 md:px-24 lg:px-36 gap-8 flex justify-end">
         <div className="w-[25rem] ">
            <img src={all.image} className=""/>
         </div>
         <div className="border overflow-x-hidden px-5 space-y-10 py-10 w-[40%] border-black">
            <div className="space-y-2">
            <p className="text-[1.85rem] pr-7 leading-none font-medium text-[rgba(0,0,0,.9)] " style={{fontVariant: "small-caps"}}>
               {all.name.replace(/_/g, " ")}
            </p>
            <p className="text-xl text-[rgba(0,0,0,.66)]" >
               {all.price}.99 <span className="text-[0.95rem]">EUR</span>
            </p>
            </div>
            {
               (location.pathname.includes("/wears")) ?
               <div>
               
                  <h3 className="font-semibold text-[1.2rem] " style={{fontVariant: "small-caps"}}>
                     select :
                  </h3>
               
               <div className=" flex gap-3 flex-wrap" >
                  {
                     Size(36, 56, 2, )
                  }
               </div>
              
               
               </div> : ""
            }
             {
                  location.pathname.includes("/shoes") ?
                  <div className="space-y-2">
               
                  <h3 className="font-semibold  text-[1.42rem]" style={{fontVariant: "small-caps"}}>
                     select :
                  </h3>
               
               <div className=" flex gap-3 flex-wrap">
                  {
                     Size(36, 44, 2)
                  }
               </div>
              
               
               </div> : ""}
  
            {
                 (location.pathname.includes("/bag")) ? 
                 <div className="flex flex-col gap-5 w-full">
               
                { (location.pathname.split("/").pop() === '217004') ?
                <div>
                   <p className="uppercase text-xl font-semibold">colors:</p>
                   <div className="flex items-center justify-start -ml-6 h-4 w-12">
                  {
                     colors.map((color) => (
                        <button className={'text-[4rem] -mr-6 ' + color.color} title={color.title} onClick={() => navigate(color.link)}><Dot/></button>
                     ))
                  } 
                  </div>
                  </div> : ""
                  }   
            </div>
                 :  ""
               

            }
           
            <div>
               <BtnUI
                  title={'cart'}
                  type={'primary'}
                  onClick={() => {handleCart(all)}}
                  style={{fontVariant: "small-caps"}}
               />
            </div>
            
         </div>
         {/* <Cart setSize={setSize} /> */}
      </div>
   )
}

import { useContext, useEffect, useState } from "react"
import { X } from "react-bootstrap-icons";
import { CartContext } from "../contexts/CartProvider";
import { SizeContext } from "../contexts/SizeProvider";
import { BtnUI } from "../components/ui/Btn";
import visa from '../assets/svgs/visa.svg'
import verve from '../assets/svgs/verve.svg'
import masterCard from '../assets/svgs/masterCard.svg'
import { PaystackButton } from "react-paystack";

export const Cart = ({size, setSize}) => {

   const {cart, setCart} = useContext(CartContext);
   const [totalPrice, setTotalPrice] = useState(0);

   const paymentSvgs = [
      {
         image: visa,
         alt: 'visa card'
      },
      {
         image: masterCard,
         alt: 'master card'
      },
      {
         image: verve,
         alt: 'verve card'
      }
   ]

   const handleRemove = (id) => {
      const arr = cart.filter((product) => product.id !== id)
      setCart(arr);
      handleTotalPrice();
   }
   const handleTotalPrice = () => {
      let price = 0.99;
      cart.map((product) => {
         price += product.price
      })
      setTotalPrice(price)
   }
   
   useEffect(() => {
      handleTotalPrice()
   }, [totalPrice]);

   const config = {
      reference: (new Date()).getTime().toString(),
      email: "user@example.com",
      amount: {totalPrice}, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
   };

   
      const handlePaystackSuccessAction = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        alert(reference);
      };
  
      // you can call this function anything
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert('closed')
      }
   
   const componentProps = {
         ...config,
         text: 'Check out',
         onSuccess: (reference) => handlePaystackSuccessAction(reference),
         onClose: handlePaystackCloseAction,
   };

  
   return (
      <div className="flex-col flex md:flex-row gap-2 w-full">
      <div 
         className=" w-full md:w-[55%] h-full px-8 mt-28"
      >
         <div className="-space-y-1">
         <div 
            className="md:text-2xl text-xl uppercase font-semibold"
         >
            shopping bag
         </div>
         <div className="font-medium text-[0.95rem] md:text-[1.05rem] text-[rgba(0,0,0,.76)]">
            Subtotal: <span className="text-[1.02rem] text-[rgba(0,0,0,.66)]  font-semibold">&#8364; {totalPrice}</span>
         </div>
         </div>
         <div 
            className=" rounded-2xl w-full py-3"
         >
            <hr></hr>
            
            {
               cart.map((product) => {
                  return (
                     <div className="w-full">
                        <div 
                           className="flex items-center py-7 pr-4 w-full justify-between my-4"
                        >
                           <div className="flex items-center  w-full  space-x-5 ">
                           <div className=" bg-[rgba(230,230,230,.4)] px-4">
                              <img src={product.image } alt={product.alt }  className="w-28"/>
                           </div>
                           <div className="">
                           <div >
                              <div className="lowercase text-[1.3rem] w-full font-semibold text-[rgba(0,0,0,1)]" style={{fontVariant: "small-caps"}}>
                                 {product.name.replace(/_/g, " ")}
                              </div>
                             
                           </div>
                           <div  className=" text-[1rem] text-[rgba(0,0,0,.86)]  font-semibold">
                              Color: <span className="font-medium text-[rgba(0,0,0,.9)]">{product.color}</span>
                           </div>
                           <div  className=" text-[1rem] text-[rgba(0,0,0,.86)]  font-semibold">
                              Size: <span className="font-medium text-[rgba(0,0,0,.9)]">{product.size}</span>
                           </div>
                           <div 
                              className=" text-[1.05rem] text-[rgba(0,0,0,.66)]  font-semibold"
                           >
                            &#8364;{product.price + ".99"} 
                           </div>
                           </div>
                           </div>
                           
                           <div className="text-3xl flex justify-end cursor-pointer" onClick={() => {handleRemove(product.id)}}>
                              <X/>
                           </div>
                        </div>
                     </div>
                  )
               })  
            }
         </div>
      </div>
      <div className="bg-[rgba(230,230,230,.4)] space-y-5 w-[100%] md:w-[45%] mt-28 py-4 px-8">
         <div className="text-center font-semibold md:text-base text-[0.9rem]"> ORDER SUMMARY</div>
         <div className="flex justify-between">
            <div className="font-medium">Order Total:</div>
            <div className="text-[1.02rem] text-[rgba(0,0,0,.66)]  font-semibold">&#8364; {Math.ceil(totalPrice)}</div>
         </div>
      
        <PaystackButton 
            className="px-4 bg-black w-full py-2  text-white hover:bg-transparent hover:text-black border border-black font-Kumbh font-medium text-lg md:text-xl " 
            style={{fontVariant: "small-caps"}} {...componentProps}/>

    
      <hr></hr>
      <div className="text-center font-semibold md:text-base text-[0.9rem]"> ACCEPTED PAYMENTS METHODS</div>
      <div className="flex justify-center space-x-6 ">
         {
            paymentSvgs.map((payment) => (
               <img src={payment.image} alt={payment.alt} className="w-10"/>
            ))
         }
      </div>
      </div>
      </div>
    
   )
}
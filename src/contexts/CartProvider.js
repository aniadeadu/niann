import { createContext, useState } from "react";


const CartContext = createContext({});

export default function CartProvider({ children }) {

   const [cart, setCart] = useState([]);
   const [warning, setWarning] = useState(false);

   const handleCart = (all_products) => {
      let isPresent = false;
      cart.map((product) => {
         if (all_products.id === product.id)
         isPresent = true
      })
      if (isPresent) {
         setWarning(true);
         setTimeout(() => {
            setWarning(false)
         }, 3000);
         isPresent = false;
         return;
      }
      setCart([...cart, all_products])
   }

   return (
      <CartContext.Provider 
         value={{
            cart, 
            setCart, 
            handleCart }}
      >
         { children }
      </CartContext.Provider>
   )
}
export { CartContext}
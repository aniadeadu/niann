import { Routes, Route } from "react-router-dom"
import { User } from "./forms/User"
import { NavBar } from "./layouts/NavBar"
import { Footer } from "./layouts/Footer"
import { W_wearsUI } from "./pages/products/women/W_wearsUI"
import { W_bagsUI } from "./pages/products/women/W_bagsUI"
import { W_shoesUI } from "./pages/products/women/W_shoesUI"
import { M_wearsUI } from "./pages/products/men/M_wearsUI"
import { M_bagsUI } from "./pages/products/men/M_bagsUI"
import { M_shoesUI } from "./pages/products/men/M_shoesUI"
import { ProductsUI } from "./pages/products/ProductsUI"

export const Routers = () => {
   return (
      <div 
         className=" "
      >
         <header>
            <NavBar/>
         </header>
         <>
         <Routes className="h-screen w-full">
            <Route path='/user' Component={User} />
            <Route path='/shopping/women/wears' Component={W_wearsUI}/>
            <Route path='/shopping/women/wears#wjackets' Component={W_wearsUI}/>
            <Route path='/shopping/women/bags' Component={W_bagsUI}/>
            <Route path='/shopping/women/shoes' Component={W_shoesUI}/>
            <Route path='/shopping/men/wears' Component={M_wearsUI}/>
            <Route path='/shopping/men/bags' Component={M_bagsUI}/>
            <Route path='/shopping/men/shoes' Component={M_shoesUI}/>
            <Route path='/shopping/women/wears/dresses/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/wears/skirts/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/wears/coats/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/wears/tops/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/wears/jackets/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/wears/trousers/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/men/wears/trousers/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/men/wears/blousons/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/men/wears/jackets/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/bags/:WBagName/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/women/shoes/:WShoeName/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/men/shoes/:MShoeName/:ProductId' Component={ProductsUI}/>
            <Route path='/shopping/men/bags/bagpacks/:MBagName/:ProductId' Component={ProductsUI}/>
          </Routes>
         </>
      </div>
   )
}
import { Routes, Route } from 'react-router-dom'
import { M_bagsUI } from './pages/products/men/M_bagsUI.js';
import { M_wearsUI } from './pages/products/men/M_wearsUI.js';
import { M_shoesUI } from './pages/products/men/M_shoesUI';
import { W_bagsUI } from './pages/products/women/W_bagsUI';
import { W_wearsUI } from './pages/products/women/W_wearsUI.js';
import { W_shoesUI } from './pages/products/women/W_shoesUI';
import { Footer } from './layouts/Footer.js';
import { NavBar } from './layouts/NavBar';
import { Home } from './pages/Home';
import { Start_menu } from './components/menu/Start_menu.js';
import { SignUp } from './forms/SignUp.js';
import { SignIn } from './forms/SignIn.js';
import { User } from './forms/User.js';
import { Routers } from './Routers.js';

function App() {
  return (
    <div 
      className="App"
    >
      
     <Routes>
        <Route path='/' Component={Home}/>
        <Route path='*' Component={Routers}/>
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;

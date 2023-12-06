import { useState, useEffect, useContext } from 'react';
import shopping_bag from '../assets/svgs/shopping_bag.svg';
import person_user from '../assets/svgs/person_user.svg';
import search from '../assets/svgs/search.svg';
import menu from '../assets/svgs/menu.svg';
import NIANN_black_bold from '../assets/logos/NIANN_black_bold.png'
import { ModalContext } from '../contexts/ModalsProvider';
import { MenuUI } from '../components/modals/MenuUI';
import { SearchUI } from '../components/modals/SearchUI';
import { Link } from 'react-router-dom';

export const NavBar = () => {
   const { setNavBar_menu } = useContext(ModalContext);
   const { setNavBar_search} = useContext(ModalContext)
   const [contact, setContact] = useState('');

   const links = [
      {
         id: 0,
         name: shopping_bag
      },
      {
         id: 1,
         name: person_user
      },
      {
         id: 2,
         name: search,
         type: "search"
      },
      {
         id: 3,
         name: menu,
         type: "menu"
      }
   ];

   useEffect(() => {
      if (window.innerWidth >= 700) {
         setContact(
            
            <ul className='w-full'>
               <li
                  className='text-black font-medium'
               >
                     Contact us</li>
            </ul>
         );
      }
   }, []);


   return (

      <div
         className='w-full scroll-smooth z-30 py-5 px-3 sm:px-5 md:10 lg:px-20 2xl:px-36 fixed top-0 bg-[rgba(255,255,255,.8)] '
      >
         <nav className='h-6 flex w-full items-center justify-between'>
            {
               contact
            }

            <div 
               className='md:w-80 mt-3 mx-auto w-[11.5rem] -ml-6 lg:-ml-0' 
            >
               <Link to="/">
                  <img 
                     src={NIANN_black_bold} 
                     alt="NIANN logo"
                     className=' mx-auto scale-75 md:scale-95 lg:scale-110'
                  >
                  </img>
               </Link>
            </div>
            <ul 
               className=" flex gap-2 md:gap-5 w-full justify-end"
            >
               {
                  links.map((link) => {
                     return (
                        <li
                           className='cursor-pointer'
                           key={link.id}
                           onClick={() => 
                              {
                                 if (link.type === "menu") {
                                    setNavBar_menu(true);
                                    setNavBar_search(false);
                                    return;
                                 }
                                 if (link.type === "search") {
                                    setNavBar_search(true);
                                    setNavBar_menu(false);
                                    return;
                                 }
                              }
                           }
                        >
                           <img 
                              key={link.id} 
                              src={link.name}  
                              className="w-5 md:w-auto"
                           ></img>
                        </li>
                     )
                  })
               }
            </ul>
         </nav>
         <MenuUI setNavBar_menu={setNavBar_menu}/>
         <SearchUI setNavBar_search={setNavBar_search}/>
      </div>
   )
}
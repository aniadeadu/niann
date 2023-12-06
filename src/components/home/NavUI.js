import { useState, useEffect, useContext } from 'react';
import shopping_bag from '../../assets/svgs/shopping_bag.svg';
import person_user from '../../assets/svgs/person_user.svg';
import search from '../../assets/svgs/search.svg';
import menu from '../../assets/svgs/menu.svg';
import shopping_bagwhite from '../../assets/svgs/shopping_bagwhite.svg';
import person_userwhite from '../../assets/svgs/person_userwhite.svg';
import searchwhite from '../../assets/svgs/searchwhite.svg';
import menuwhite from '../../assets/svgs/menuwhite.svg';
import NIANN_white_bold from '../../assets/logos/NIANN_white_bold.png'
import NIANN_black_bold from '../../assets/logos/NIANN_black_bold.png'
import { ModalContext } from '../../contexts/ModalsProvider';
import { MenuUI } from '../modals/MenuUI';
import { Start_menu } from '../menu/Start_menu';
import { W_menu } from '../menu/W_menu';
import { Link, useNavigate } from 'react-router-dom';
import { SearchUI } from '../modals/SearchUI';
import { ModalUI } from '../ui/ModalUI';
export const NavUI  = () => {
   const navigate = useNavigate()
   const { setNavBar_menu } = useContext(ModalContext);
   const { setNavBar_search } = useContext(ModalContext);
   const { w_menu, setW_menu } = useContext(ModalContext);
   const [color, setColor] = useState('');
   const [logo, setLogo] = useState('');
   const [logoColor, setLogoColor] = useState(NIANN_white_bold);
   const [contact, setContact] = useState('');
   const [contactText, setContactText] = useState('text-white');
   const blackIcons = [
      {
         id: 0,
         name: shopping_bag
      },
      {
         id: 1,
         name: person_user,
         link: '/user'
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
   const whiteIcons = [
      {
         id: 0,
         name: shopping_bagwhite
      },
      {
         id: 1,
         name: person_userwhite,
         link: '/user'
      },
      {
         id: 2,
         name: searchwhite,
         type: "search"
      },
      {
         id: 3,
         name: menuwhite,
         type: "menu"
      }
   ];
   const [iconsblack, setIconsblack] = useState(blackIcons);
   const [iconswhite, setIconswhite] = useState(whiteIcons);

   const handleScroll = () => {
      if (window.scrollY >= 10) {
         if (window.scrollY >= 10) {
            if (window.scrollY >= 10) {
               if (window.scrollY >= 10) {
                  if (window.scrollY >= 10) {
                     setContactText('text-black')
                  }
                  setIconswhite(blackIcons)
               }
               setLogoColor(
                  NIANN_black_bold
               )
            }
            setLogo(
               'md:w-56 w-36 -ml-6 md:mx-auto -translate-y-[24px] md:-translate-y-[40px] transition-all duration-200 ease-linear '
            );
         }
         setColor(
            'bg-[rgba(255,255,255,.7)] backdrop-blur-md  h-16 opacity-100 transition-all'
         );
      } else if (window.scrollY < 10) {
         if (window.scrollY < 10) {
            if (window.scrollY < 10){
               if (window.scrollY < 10) {
                  if (window.scrollY < 10) {
                     setContactText('text-white')
                  }
                  setIconswhite(whiteIcons)
               }
               setLogoColor(NIANN_white_bold);
            }
            setLogo(
               'w-full md:mx-auto  duration-200 ease-linear transition-all'
            );
         }
         setColor('bg-transparent');
      }
   }
 
   window.addEventListener('scroll', handleScroll)

   return (
      <div
         className={'w-full scroll-smooth  z-30 py-5 px-3 sm:px-5 md:10 lg:px-20 2xl:px-36 fixed top-0  ' + color}
      >
         <nav 
            className='h-6 flex w-full justify-between'
         >
            {window.innerWidth >= 700 &&
               <div
                  className={"font-medium text-[0.95rem] w-full cursor-pointer  " + contactText}
                  onClick={() =>  { return  (
                     <ModalUI>
                        <div>Email us</div>
                        <div>aniadeadu@gmail.com</div>
                     </ModalUI>
                  )}}
               >
                  Contact us
               </div>
            }
            <ul 
               className=" flex gap-3 md:gap-5 w-full justify-end"
            >
               {iconswhite.map((link) => {
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
                                 navigate(link.link)
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
         
         <div 
            className={'w-full mx-auto ' + logo}
         >
            <Link to="/">
               <img 
                  src={logoColor} 
                  alt="NIANN logo"
                  className=' mx-auto scale-75 md:scale-[.8] lg:scale-1'
               >
               </img>
            </Link>
         </div>
         <MenuUI setNavbar_menu={setNavBar_menu}/>
         <SearchUI setNavBar_search={setNavBar_search}/>
         
         {/* <Start_menu setNavBar_menu={setNavBar_menu}/> */}
         {/* <W_menu  setW_menu={setW_menu}/> */}
      </div>
   )
} 
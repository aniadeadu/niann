import arrow_forward from '../assets/svgs/arrow_forward.svg';

export const Footer = () => {

   const supports = [
      {
         id: 0,
         name: 'client services'
      },
      {
         id: 1,
         name: 'faqs'
      },
   ]

   const companies = [
      {
         id: 0,
         name: 'about niann'
      },
      {
         id: 1,
         name: 'code of ethics'
      },
      {
         id: 2,
         name: 'carreers'
      },
      {
         id: 3,
         name: 'legal'
      },
      {
         id: 4,
         name: 'privacy and cookies'
      }
   ]

   const socials = [
      {
         id: 0,
         name: 'facebook',
         url: 'facebook.com'
      },
      {
         id: 1,
         name: 'twitter',
         url: 'twitter.com'
      },
      {
         id: 2,
         name: 'instagram',
         url: 'instagram.com'
      },
      {
         id: 3,
         name: 'tiktok',
         url: 'tiktok.com'
      },
   ]

   return (
      <div
         className="w-full relative bottom-0 mt-20 px-3 sm:px-5 md:10 lg:px-20 2xl:px-36 border-t py-6"
      >
         <div
            className="flex-col md:flex-row flex w-full space-y-12 md:space-y-0 md:justify-around"
         >
            <div 
               className=""
            >
            {
               supports.map((support) => {
                  return (
                     <div 
                        style={{fontVariant: 'small-caps'}}
                        className="text-sm font-bold hover:underline cursor-pointer"
                        key={support.id}
                     >
                        {support.name}
                     </div>
                    
                  )
               })
            }
            </div>

            <div 
               className=""
            >
            {
               companies.map((company) => {
                  return (
                     <div 
                        style={{fontVariant: 'small-caps'}}
                        className="text-sm font-bold hover:underline cursor-pointer"
                        key={company.id}
                     >
                        {company.name}
                        
                     </div>
                    
                  )
               })
            }
            </div>
            <div 
               className=""
            >
            {
               socials.map((social) => {
                  return (
                     <a href={"https://www." + social.url} target='_blank' noreferrer>
                     <div 
                        style={{fontVariant: 'small-caps'}}
                        className="text-sm font-bold hover:underline cursor-pointer"
                        key={social.id}
                     >
                        {social.name}
                     </div>
                    </a>
                  )
               })
            }
            </div>
            <div
               className="gap-3 flex items-center h-5"
            >
               <div
                  style={{fontVariant: 'small-caps'}}
                  className="text-sm font-bold hover:underline cursor-pointer"
               >
                  subscribe to your newsletter
               </div>
               <div
                  className='w-[0.65rem] h-auto mt-1'
               >
                  <img 
                     src={arrow_forward} 
                     className='w-[0.65rem] h-auto bg-black'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
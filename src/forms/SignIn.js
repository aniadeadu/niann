import { useContext, useState } from 'react';
import applelogo from '../assets/icons/apple-logo.png';
import googlelogo from '../assets/icons/google-logo.png';
import { BtnUI } from '../components/ui/Btn.js'
import { InputUI } from '../components/ui/Input';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import "../config/firebase.js";
import { UserContext } from '../contexts/UserProvider.js';

export const SignIn = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { user, setUser, signInWithGoogle} = useContext(UserContext);

   return (
      <div 
         className=" flex md:justify-center font-Josefin gap-4 w-[100%] md:w-[80%]  lg:w-[28%]"
      >
         <div className='  space-y-6 w-full'>
            <h3 className='font-medium uppercase texl-xl lg:text-3xl tracking-wide text-center'>
               my niann account
            </h3>
         <div className='space-y-5 w-full'>
            <div className='flex-1 flex ' >
               <BtnUI
                  title = { "sign in with apple" }
                  onClick={
                     ()=>{}
                  }
                  type={ "secondary" }
                  icon = { <img src={applelogo} /> }
               />
            </div>
         
            <div className='flex-1 flex '>
               <BtnUI
                  title={ "sign in with google" }
                  onClick={
                     ()=>{
                        signInWithGoogle()
                     }
                  }
                  type={ "secondary" }
                  icon={ <img src={googlelogo}/> }
               />
            </div>
         </div>
         <div className='flex items-center flex-col space-y-2'>
            <span className='uppercase '>
               <b className='inline'>or</b>
            </span>
            <p 
               className='lg:text-2xl text-lg  uppercase' 
               // style={{fontVariant: 'small-caps'}}
            >
               continue with your email
            </p>
         </div>

<div className='w-full mx-auto '>
         <InputUI
            type={'email'}
            value={email}
            onChange={(e) => {
               setEmail(e.target.value)
            }}
            placeholder={'email'}
         
            primary
         />
         <InputUI
            type={'password'}
            value={password}
            onChange={(e) => {
               setPassword(e.target.value)
            }}
            placeholder={'password'}
            primary
         />
         </div>
         <div className='flex-1 flex '>
               <BtnUI
                  title={ "sign in"}
                  onClick={
                     ()=>{}
                  }
                  type={ "primary" }
                 
               />
            </div>
         </div>
       
      </div>
   )
}
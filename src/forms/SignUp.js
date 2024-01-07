import { useContext, useEffect, useRef, useState } from "react"
import { InputUI } from "../components/ui/Input";
import { BtnUI } from "../components/ui/Btn";
import { FormContext } from "../contexts/FormProvider";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import { ExclamationOctagon } from "react-bootstrap-icons";
import { UserContext } from "../contexts/UserProvider";
const SIGNUP_URL = "https://sassapistest.jekinraa.com/api/register";
export const SignUp = () => {

   const {SignUp, setSignUp} = useContext(FormContext);
   const {Register, setRegister} = useContext(FormContext);
   const { setAuth } = useContext(AuthContext);
   const { user, setUser} = useContext(UserContext);
   const userRef = useRef();
   const [errMsg, setErrMsg] = useState("");
   const [success, setSuccess] = useState(false)
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirm_password, setConfirm_Password] = useState('');
   const [passwordValid, setPasswordValid] =useState(true);
   const [data, setData] = useState([]);
   const validatePassword=(text)=>{
      setConfirm_Password(text)
      if (password == text ){
         setPasswordValid(true)
      }
      else {
         setPasswordValid(false)
      }
   }
   
   const inputs = [
      {
         type: 'text',
         placeholder: 'First name',
         value: firstName,
         onChange: setFirstName,
         ref: userRef
      },
      {
         type: 'text',
         placeholder: 'Last name',
         value: lastName,
         onChange: setLastName
      },
      {
         type: 'email',
         placeholder: 'email',
         value: email,
         onChange: setEmail
      },
      {
         type: 'password',
         placeholder: 'password',
         value: password,
         onChange: setPassword
      },
      {
         type: 'password',
         placeholder: 'confirm password',
         value: confirm_password,
         onChange: validatePassword
      }
   ];
   // useEffect(() => {
   //    userRef.current.focus();
   // }, []);

   useEffect(() => {
      setErrMsg(" ");
   }, [firstName, lastName, email, password]);

 

   const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
         const res = await axios.post(
            SIGNUP_URL,
            {
               name :firstName.concat(lastName) , 
               phone: "08166786433",
               email:email, 
               password:password, 
               password_confirmation: confirm_password,
               type: 1,
               city: "Abeokuta",
               state: "Ogun",
               country: "Nigeria",
               address:  "10, Road 5, Agbabiaka",
               business_name: "Jekinraa", 
               category_ids: "2", 
               logo: "https://jekinraa/vendor/logo.png", 
               background_image: "https://jekinraa/vendor/logo.png",
               description: "Jekinraa is a food business",
               device_type:1,
               device_token:"vhbjeuygbne.ytceuhfefvbvygbb"
            },
           
         );
         setData(res.data.data)
        
         // const accessToken = res?.data?.accessToken;
         // setAuth({ firstName, lastName, email, password, accessToken})
      } 
     
      catch (err) {
         console.log(err)
         (err?.res) ?
            console.log(setErrMsg('No Server Response'))
         : 
         (err?.res?.status === 400) ?
            console.log(setErrMsg('Missing Username or Password'))
         :  
         (err?.res?.status === 401) ?
            console.log(setErrMsg('Unauthorized'))
         :
            console.log(setErrMsg('Sign up failed'))   
      }
   };
   
   
   useEffect(() => {
      localStorage.setItem('userInfo', JSON.stringify(data))
   }, [data])

   return (
    <>
      {
         Register &&
            <div className=' font-Josefin space-y-3 lg:space-y-6  w-[100%] lg:w-[28%]'>
               <div>
                  <p 
                     className='lg:text-xl text-lg  uppercase' 
                     // style={{fontVariant: 'small-caps'}}
                  >
                     need an account?
                  </p>
               </div>
               <div className='w-full '>
                  <BtnUI
                     title={ "register"}
                     onClick={
                        ()=>{setSignUp(true); setRegister(false);}
                     }
                     type={ "primary" }
                     className="py-2"
                  
                  />
               </div>
            </div>
      }
      {
         SignUp &&
            <div className='space-y-6 font-Josefin w-[100%] lg:w-[28%]'>
               <header>
                  <h5 className="font-medium text-[1.3rem]">
                     Register
                  </h5>
                  <p className="text-[0.75rem] text-[rgba(0,0,0,.75)] leading-tight font-semibold" >
                     Create your account to save preferences and save to cart.
                     <br/><br/>
                  <b className="text-black ">*</b>Required Field</p>
               </header>
               <main>
                  <form onSubmit={(e) => handleSubmit(e)}>
                     <section>
                        {
                           inputs.map((input) => (
                              <InputUI
                                 // className={'border outline-none border-black px-3 py-2 mb-5 capitalize w-full'}
                                 type={input.type}
                                 placeholder={input.placeholder}
                                 value={input.value}
                                 onChange={(e) => {input.onChange(e.target.value)}}
                                 required
                                 ref={input?.ref}
                                 primary
                              />
                           ))

                        }
                        {
                           passwordValid ? "": <div className="flex gap-1 items-center">
                           <div className="text-sm text-red-700">
                              <ExclamationOctagon/>
                           </div>
                           <div className="text-sm text-red-700 font-Kumbh">
                              Password does not match.
                           </div>
                        </div>
                        }
                     </section>
                     <section>
                        <BtnUI
                           title={ "register"}
                           onClick={
                              ()=>{}
                           }
                           type={ "primary" }
                           className="py-2"
                        />
                     </section>
                  </form>
               </main>
            </div>
           
      }
   </>
   )
}
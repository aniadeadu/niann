export const InputUI = ({type, placeholder, ref, required, name, primary, value,className, onChange, ...props}) => {
   const inputStyle = primary ?   'border outline-none w-full mx-auto font-medium py-3 px-3  border-[rgba(0,0,0,1)] mb-4 ' : className
   return (
      <div >
         
         <input 
            type={type} 
            placeholder={placeholder} 
            required={required}
            value={value}
            name={name}
            ref={ref}
            onChange={onChange}
            className={inputStyle}
            primary
            {...props}
         />
      </div>
   )
}


export const MenuListWrappper = ({children, style, captalize, onClick}) => {
   return (
      <div
         style={style}
         className={"underline  text-black font-medium  capitalize cursor-pointer " + captalize}
         onClick={onClick}
      >
         {children}
      </div>
   )
}
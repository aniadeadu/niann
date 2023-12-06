export const MenuListWrappper = ({children, style, captalize, onClick}) => {
   return (
      <div
         style={style}
         className={"font-medium underline  text-white  cursor-pointer " + captalize}
         onClick={onClick}
      >
         {children}
      </div>
   )
}
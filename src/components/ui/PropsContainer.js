export const PropsContainer = ({onClick, children}) => {
   return (
      <div
         className=" basis-[50%] md:basis-[33.333%] border-r border-b cursor-pointer border-[rgba(164,164,164,0.35)] flex flex-col "
         onClick={onClick}
      >
         {children}
      </div>
   )
}
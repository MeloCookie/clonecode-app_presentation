import {DetailedHTMLProps, FC, HTMLAttributes} from "react";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement> & {}

export type ContainerProps = ReactDivProps & {}

export const Container: FC<ContainerProps> = (({children, className,...props}) => {
  return(
    <div
      className={`
      flex text-black p-16 h-5/6 justify-center items-center
      ${className} 
    `}>
      {children}
    </div>
  )
})
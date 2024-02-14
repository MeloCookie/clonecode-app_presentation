import React, {FC} from 'react'
import {HeaderProps} from "@/app/layouts/header/header";
const Block: FC<HeaderProps> = ({isChange}) => {

  return (
    <div className={`
          h-8 w-20 text-xs font-base
          rounded-lg flex justify-center items-center
          ${isChange ? "bg-black text-white" : "bg-white text-black"}
        `}>
      BLOCKS
    </div>
  )
}
export default Block
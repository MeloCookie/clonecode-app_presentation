import React, {FC} from 'react'
import {ChangeProps} from "@/app/layouts/header/header";

//component for snslink.tsx
const Block: FC<ChangeProps> = ({isChange}) => {
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
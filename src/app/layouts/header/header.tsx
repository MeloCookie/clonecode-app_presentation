"use client"
import React, {useEffect, useState} from "react";
import {FC} from "react"
import Logo from "@/app/layouts/header/logo";
import Menu from "@/app/layouts/header/menu"
import SNSLink from "@/app/layouts/header/snslink";
import Block from '@/app/layouts/header/block'
import MenuButton from "@/app/layouts/header/menubutton";
import {useMediaQuery} from "react-responsive";
import useOnMount from "@mui/utils/useOnMount";
export type ChangeProps = {
  isChange?: boolean
  isMd?: boolean
}

//960 , 720 필요

const Header: FC<ChangeProps> = ({isChange, }) => {
  const md = useMediaQuery(
    {query: '(max-width: 959px)'}
  )

  const [menu, setMenu] = useState<null | JSX.Element>(null);
  useEffect(() => {
    if(md){
      setMenu(
        <MenuButton/>
      )
    } else {
      setMenu(
        <>
          <Menu/>
          <SNSLink>
            <Block isChange={isChange}/>
          </SNSLink>
        </>
      )
    }
  }, [isChange, md]);

  return (
    <div id="Header" className={`
      px-8 w-full text-sm h-16  pt-1 pb-1
      ${!isChange ? "bg-[#212121] text-white" : " " }
    `}>
      <div
        className="mx-14 flex h-full
        justify-between items-center"
      >
        <Logo />
        {menu}
      </div>
    </div>
  )
}
export default Header
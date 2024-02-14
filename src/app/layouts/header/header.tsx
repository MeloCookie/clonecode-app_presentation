'use client'
import React from "react";
import {FC, useState} from "react"
import Logo from "@/app/layouts/header/logo";
import Menu from "@/app/layouts/header/menu"
import SNSLink from "@/app/layouts/header/snslink";
import Block from '@/app/layouts/header/block'
export type HeaderProps = {
  isChange?: boolean
}


const Header: FC<HeaderProps> = ({isChange}) => {
  return (
    <div id="Header" className={`
      px-8 w-full text-sm h-16  pt-1 pb-1
      ${!isChange ? "bg-[#212121] text-white" : " " }
    `}>
      <div className="mx-14 flex h-full
      justify-between items-center">
        <Logo />
        <Menu />
        <SNSLink>
          <Block isChange={isChange}/>
        </SNSLink>
      </div>
    </div>
  )
}
export default Header
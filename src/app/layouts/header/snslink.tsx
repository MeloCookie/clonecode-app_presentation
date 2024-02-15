'use client'
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import React, {PropsWithChildren} from "react";
import Link from "next/link";
import {FC} from 'react'

export const SNSList = [
  {name: 'Twitter', href: 'https://twitter.com',
    target: '_blank', icon: <TwitterIcon fontSize="small"/>, },
  {name: 'Facebook', href: 'https://facebook.com',
    target: '_blank', icon: <FacebookRoundedIcon fontSize="small"/>},
  {name: 'Instagram', href: 'https://instagram.com',
    target: '_blank', icon: <InstagramIcon fontSize="small"/>},
]

const  SNSLink: FC<PropsWithChildren> = ({children}) => {
  return (
    <ul className="flex justify-around items-center h-full w-52">
      {SNSList.map((link) => {
        return (
          <Link
            href={link.href} target={link.target}
            key={link.name} className=""
          >
            {link.icon}
          </Link>
        )})
      }
      {children}
    </ul>
  )
}
export default SNSLink
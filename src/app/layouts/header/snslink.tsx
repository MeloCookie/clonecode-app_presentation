import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import Link from "next/link";
import {FC} from 'react'
import {HeaderProps} from "@/app/layouts/header/header";

const SNSList = [
  {name: 'Twitter', href: 'https://twitter.com',
    target: '_blank', icon: <TwitterIcon fontSize="small"/>, },
  {name: 'Facebook', href: 'https://facebook.com',
    target: '_blank', icon: <FacebookRoundedIcon fontSize="small"/>},
  {name: 'Instagram', href: 'https://instagram.com',
    target: '_blank', icon: <InstagramIcon fontSize="small"/>},
]

const  SNSLink: FC<HeaderProps> = ({isChange}) => {
  return (
    <div>
      <ul className="
            flex justify-around items-center h-full w-52
          ">
        {
          SNSList.map((link) => {
            return (
              <Link
                href={link.href} target={link.target}
                key={link.name} className=""
              >
                {link.icon}
              </Link>
            )
          })
        }
        <span className={`font-semibold
          h-8 w-20 text-xs bg-white text-black
          rounded-lg flex justify-center items-center
          ${isChange ? "bg-black text-white" : ""}
        `}>
          BLOCKS
        </span>
      </ul>
    </div>
  )
}
export default SNSLink
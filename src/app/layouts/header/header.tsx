'use client'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link, {LinkProps} from "next/link";
import React, {FC} from 'react'
import {ReactNode, useState, useEffect} from "react";

type linkListProps = {
  name?: string
  href: string | URL
  icon?: string | ReactNode
}

const HeaderLink : linkListProps[] = [
  {name: 'Home', href: '/'},
  {name: 'About Us', href: '/about_us'},
  {name: 'Contact Us', href: '/contact_us'},
  {name: 'Docs', href: '/docs'},
]

const SNSLink: linkListProps[] = [
  {icon: <TwitterIcon fontSize="small" />, href: 'https://twitter.com'},
  {icon: <FacebookRoundedIcon fontSize="small" />, href: 'https://facebook.com'},
  {icon: <InstagramIcon fontSize="small" />, href: 'https://instagram.com'}
]

function LinkItem({linkList}: {linkList:linkListProps[]}) {
  return (
    linkList.map((link:linkListProps) => {
      return(
        <li key={link.name} className="mx-3 mt-1">
          {link.icon}
          <Link href={link.href}>
              {link.name}
          </Link>
        </li>
      )
    })
  )
}

export default function Header(){
  // const [isScroll, setIsScroll] = useState(false)


  return (
    <div className="
      flex justify-between items-center bg-[#212121]
      w-screen h-16 text-gray-200"
    >
      <div className="ml-8">
        <Link href="https://www.material-tailwind.com/" className="text-sm pl-8">Material Tailwind</Link>
      </div>
      <div className="flex w-1/3 h-full justify-center items-center">
        <ul className="flex justify-around items-center text-xs ml-5 pl-4">
          <LinkItem linkList={HeaderLink} />
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <div className="mr-8 pr-8 flex list-none">
          <LinkItem linkList={SNSLink} />
          <div className="rounded-lg bg-white text-black">
            <Link href="https://www.material-tailwind.com/blocks">
              BLOCKS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
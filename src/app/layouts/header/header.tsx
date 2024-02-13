'use client'
import Logo from "@/app/shared/logo";
import Link from "next/link";
import {ReactNode, useState, useEffect} from "react";

type NavLinkProps = {
  name: string
  href: string
  icon?: ReactNode | string
}

const NavLink: NavLinkProps[] = [
  {name: 'Home', href: '/'},
  {name: 'About Us', href: '/about_us'},
  {name: 'Contact Us', href: '/contact_us'},
  {name: 'Docs', href: '/docs'},
]

function NavItem({NavLink}: {NavLink:NavLinkProps[]}) {
  return (
    NavLink.map((link:NavLinkProps) => {
      return(
        <li key={link.name} className="mx-2">
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
  const [test, setTest] = useState(window.scrollY)


  return (
    <div className="
      flex justify-between items-center bg-[#212121]
      w-screen h-16 text-gray-200"
      onClick={() => test}
    >
      <div className="ml-7">
        <Link href="/public" className="text-sm pl-8">Material Tailwind</Link>
      </div>
      <div className="flex w-1/3 h-full justify-center items-center">
        <ul className="flex justify-around items-center text-xs">
          <NavItem NavLink={NavLink}/>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <div className="mx-4 text-sm">
          Menu
        </div>
        <Logo />
      </div>
    </div>
  )
}
'use client'
import Logo from "@/app/shared/logo";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ArticleIcon from '@mui/icons-material/Article';
import ScienceIcon from '@mui/icons-material/Science';
import {ReactNode, useState, useEffect} from "react";


type NavLinkProps = {
  name: string
  href: string
  icon?: ReactNode
}

const NavLink: NavLinkProps[] = [
  {name: 'Home', href: '/', icon: <HomeIcon />},
  {name: 'About Us', href: '/about_us', icon: <AccountBoxIcon />},
  {name: 'Contact Us', href: '/contact_us', icon: <PermContactCalendarIcon/> },
  {name: 'Docs', href: '/docs', icon: <ArticleIcon />},
  {name: 'Test', href: '/test', icon: <ScienceIcon />}
]

function NavItem({NavLink}: {NavLink:NavLinkProps[]}) {
  return (
    NavLink.map((link:NavLinkProps) => {
      return(
        <>
          <li key={link.name} className="mx-2">
            {link.icon}
            <Link href={link.href}>
                {link.name}
            </Link>
          </li>
        </>
      )
    })
  )
}
function scroll(){
  const [isScroll, setScorll] = useState(false)

}
export default function Header(){

  return (
    <div className="flex justify-around items-center bg-gray-600 w-screen h-16 text-gray-200">
      <div className="pl-8 text-3xl">
        <Link href="/"> LOGO!</Link>
      </div>
      <div className="flex w-1/3 h-full justify-center items-center">
        <ul className="flex justify-around items-center">
          <NavItem NavLink={NavLink}/>
        </ul>
      </div>
      <div className="flex justify-end items-center">
        <div className="mx-4">
          Logout
        </div>
        <Logo />
      </div>
    </div>
  )
}
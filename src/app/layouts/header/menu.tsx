import Link from "next/link";
import React, {useEffect} from "react";

export const MenuList = [
  {name: 'Home', href: '/', target: '_blank'},
  {name: 'About Us', href: '/aboutus', target: '_blank'},
  {name: 'Contact Us', href: '/contactus', target: '_blank'},
  {name: 'Docs', href: 'https://www.material-tailwind.com/docs/react/installation', target: '_blank'}
]

export default function Menu(){
  return (
    <ul className={`
      flex justify-between min-w-64
      w-80 ml-32 mr-4 py-4 px-2
    `}>
      {MenuList.map((link) => {
        return (
          <Link
            key={link.name} href={link.href}
            className="flex-grow p-2 min-w-8"
            target={link.target}
          >
            <p>{link.name}</p>
          </Link>
        )
      })}
    </ul>
  )
}
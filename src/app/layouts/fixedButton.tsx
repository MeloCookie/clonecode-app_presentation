import Link from 'next/link'
import Image from "next/image";
import icon from '@/asset/logo.png'

export default function FixedButton(){
  return (
    <div className=" antialiased bg-white fixed
    bottom-0 right-0 text-xs m-4
    rounded-lg w-60 h-9 justify-end items-center
    border border-[#eceff1] shadow-xl
    ">
      <Link
        href="https://www.material-tailwind.com/"
        className="flex justify-around items-center h-full z-50"
        target="_blank"
      >
        <Image
          src={icon} alt="icon"
          width="25" height="25"
          className="mx-1"
        />
        <p className="grow">MADE WITH MATERIAL TAILWIND</p>
      </Link>
    </div>
  )
}
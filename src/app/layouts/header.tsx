'use client'
import {useState} from "react";


export default function Header(){
  const [isScrolled, setScrolled] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <div id="Header" className={`p-5 w-full 
      ${isScrolled ? "bg-white text-black" 
      : "bg-[#212121] text-white"}
    `}>
      <div className="mx-16 flex justify-between items-center">
        <div>
          Material Tailwind
        </div>
        <div>
          Menu
        </div>
        <div>
          SNS
        </div>
      </div>
    </div>
  )
}
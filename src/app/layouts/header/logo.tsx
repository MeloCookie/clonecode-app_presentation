import Link from "next/link";
import React from "react";

export default function Logo(){
  return (
    <Link
      href="https://www.material-tailwind.com/"
      target="_blank"
      className="p-2 min-w-32"
    >
      Material Tailwind
    </Link>
  )
}
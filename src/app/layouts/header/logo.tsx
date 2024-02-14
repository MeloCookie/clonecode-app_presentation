import Link from "next/link";
import React from "react";

export default function Logo(){
  return (
    <Link
      href="https://www.material-tailwind.com/"
      target="_blank"
      className="p-2"
    >
      Material Tailwind
    </Link>
  )
}